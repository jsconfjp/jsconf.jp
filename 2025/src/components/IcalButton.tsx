"use client";
import ical, { ICalCalendarMethod } from "ical-generator";
import {
  eventDate,
  ScheduledSession,
  EventUTCOffset,
  TalkSession,
  StreamingSession,
} from "@/constants/schedule";
import { vendored } from "next/dist/server/route-modules/app-page/module";
import { venueAddress } from "@/constants/venue";
import { Talk } from "@/constants/talks";
import { usePathname } from "@/i18n/navigation";

export type CalendarType = "Google" | "Outlook" | "ICS";
export type CalendarSession = TalkSession | StreamingSession;

type Props = {
  sessions: CalendarSession[];
  calendarType: CalendarType;
  text?: string;
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

const generateIcalData = (
  session: CalendarSession,
  pageUrl: string,
): string => {
  const calendarName = "JSConf 2025";
  const calendar = ical({
    name: calendarName,
  });

  // required because Outlook is weird
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
  )!;

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

  const baseUrl = new URL(
    "https://outlook.live.com/calendar/0/action/compose",
  )!;

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

const CALENDAR_HANDLERS = {
  Google: makeGoogleCalendarLink,
  Outlook: makeOutlookCalendarLink,
  ICS: downloadIcsFile,
} as const;

export function IcalButton({ sessions, calendarType, text }: Props) {
  const path = usePathname();

  const handleClick = () => {
    if (sessions.length === 1) {
      const pageUrl = new URL(path, window.location.origin).href;
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
      className="flex items-center w-full text-left py-2 px-3"
    >
      <span>{text ?? `${calendarType}`}</span>
    </button>
  );
}
