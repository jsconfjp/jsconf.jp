"use client";
import ical, { ICalCalendarMethod } from "ical-generator";
import {
  eventDate,
  ScheduledSession,
  EventUTCOffset,
  TalkSession,
  StreamingSession,
} from "@/constants/schedule";
import { venueAddress } from "@/constants/venue";
import { usePathname } from "@/i18n/navigation";
import { twMerge } from "tailwind-merge";

export type CalendarType = "Google" | "Outlook" | "ICS";
export type CalendarSession = TalkSession | StreamingSession;

type Props = {
  sessions: CalendarSession[];
  calendarType: CalendarType;
  text?: string;
  className?: string;
};

const timezone = "Asia/Tokyo";

const getSessionDates = (
  session: ScheduledSession,
): { start: Date; end: Date } => {
  const eventDateString = eventDate.toISOString().split("T")[0];
  return {
    start: new Date(
      `${eventDateString}T${session.startTime}:00+${EventUTCOffset}`,
    ),
    end: new Date(`${eventDateString}T${session.endTime}:00+${EventUTCOffset}`),
  };
};

const getEventDetails = (session: CalendarSession, eventUrl: string) => {
  const { talk } = session;
  return {
    title: talk.title,
    description: `${talk.description}\n\n: ${eventUrl}`,
    location: session.track || venueAddress,
  };
};

const generateMultiIcalData = (
  sessions: CalendarSession[],
  pageUrl: string,
  trackName: string,
): string => {
  const calendarName = `JSConf 2025 - ${trackName}`;
  const calendar = ical({
    name: calendarName,
  });

  calendar.method(ICalCalendarMethod.REQUEST);

  sessions.forEach((session) => {
    const { start, end } = getSessionDates(session);
    const { title, description, location } = getEventDetails(session, pageUrl);

    calendar.createEvent({
      start,
      end,
      summary: title,
      description,
      location,
      timezone,
    });
  });

  return calendar.toString();
};

const generateIcalData = (
  session: CalendarSession,
  pageUrl: string,
): string => {
  const calendarName = "JSConf 2025";
  const calendar = ical({
    name: calendarName,
  });

  calendar.method(ICalCalendarMethod.REQUEST);

  const { start, end } = getSessionDates(session);
  const { title, description, location } = getEventDetails(session, pageUrl);

  calendar.createEvent({
    start,
    end,
    summary: title,
    description,
    location,
    timezone,
  });

  return calendar.toString();
};

const formatDateString = (date: Date): string => {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
};

const makeGoogleCalendarLink = (
  session: CalendarSession,
  pageUrl: string,
): string => {
  const { start, end } = getSessionDates(session);
  const { title, description, location } = getEventDetails(session, pageUrl);

  const datesParam = `${formatDateString(start)}/${formatDateString(end)}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: datesParam,
    details: description,
    location: location,
  });

  const googleCalendarBaseUrl = new URL(
    "https://calendar.google.com/calendar/render",
  );

  return `${googleCalendarBaseUrl.toString()}?${params.toString()}`;
};

const makeOutlookCalendarLink = (
  session: CalendarSession,
  pageUrl: string,
): string => {
  const { start, end } = getSessionDates(session);
  const { title, description, location } = getEventDetails(session, pageUrl);

  const startDate = start.toISOString().replace(/[-:]/g, "").split(".")[0];
  const endDate = end.toISOString().replace(/[-:]/g, "").split(".")[0];

  const baseUrl = new URL("https://outlook.live.com/calendar/0/action/compose");

  const params = new URLSearchParams({
    allday: "false",
    body: description,
    enddt: endDate,
    startdt: startDate,
    location: location,
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
  });

  return `${baseUrl}?${params.toString()}`;
};

const downloadIcsFile = (session: CalendarSession, pageUrl: string) => {
  const icalData = generateIcalData(session, pageUrl);
  const blob = new Blob([icalData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  const filename = `jsconf-2025-${session.talk.slug}.ics`;

  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};

const downloadMultiIcsFile = (
  sessions: CalendarSession[],
  pageUrl: string,
  trackName: string,
) => {
  const icalData = generateMultiIcalData(sessions, pageUrl, trackName);
  const blob = new Blob([icalData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  const filename = `jsconf-2025-track-${trackName.toLowerCase()}.ics`;

  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};

const CALENDAR_HANDLERS = {
  Google: makeGoogleCalendarLink,
  Outlook: makeOutlookCalendarLink,
  ICS: downloadIcsFile,
} as const;

export function IcalButton({ sessions, calendarType, text, className }: Props) {
  const path = usePathname();

  const multiCalendar = sessions.length > 1;

  const handleClick = () => {
    const pageUrl = new URL(path, window.location.origin).href;

    if (multiCalendar) {
      // Multi-calendar: only ICS is supported
      if (calendarType === "ICS") {
        const trackName = sessions[0].track || "all";
        downloadMultiIcsFile(sessions, pageUrl, trackName);
      }
    } else {
      // Single session: all calendar types supported
      const handler = CALENDAR_HANDLERS[calendarType];
      if (calendarType === "ICS") {
        handler(sessions[0], pageUrl);
      } else {
        const url = handler(sessions[0], pageUrl) as string;
        window.open(url, "_blank");
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge("flex justify-center w-full text-center", className)}
    >
      <span>{text ?? `${calendarType}`}</span>
    </button>
  );
}
