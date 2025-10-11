"use client";
import ical, { ICalCalendarMethod } from 'ical-generator';
import { eventDate, ScheduledSession, EventUTCOffset } from "@/constants/schedule";
import { venueAddress } from '@/constants/venue';
export type CalendarType = "Google" | "Outlook" | "ICS" ;

type Props = {
    session: ScheduledSession;
    calendarType: CalendarType;
    text?: string;
}

const timezone = "Asia/Tokyo"

const isMobileDevice = (): boolean => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const getSessionDates = (session: ScheduledSession): { start: Date, end: Date } => {
    const eventDateString = eventDate.toISOString().split('T')[0];
    return {
        start: new Date(`${eventDateString}T${session.startTime}:00+${EventUTCOffset}`),
        end: new Date(`${eventDateString}T${session.endTime}:00+${EventUTCOffset}`),
    }
}

const generateIcalData = (session: ScheduledSession, pageUrl: string): string => {
    const calendar = ical({ name: "JSConf 2025", description: "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the sixth time event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers." })
    calendar.method(ICalCalendarMethod.REQUEST);

    const { start, end } = getSessionDates(session);

    switch (session.kind) {
        case "streaming":
        case "talk": {
            const { talk } = session;
            const description = `${talk.description}\n\nEvent details: ${pageUrl}`;
            calendar.createEvent({
                start: start,
                end: end,
                summary: talk.title,
                description: description,
                location: session.track,
                timezone: timezone,
            })
            break;
        }
        
        case "opening":
        case "closing":
        case "networking":
        case "reception": {
            const description = `JSConf 2025 - ${session.kind}\n\nEvent details: ${pageUrl}`;
            calendar.createEvent({
                start: start,
                end: end,
                summary: `JSConf 2025 - ${session.kind}`,
                description: description,
                location: venueAddress,
                timezone: timezone,
            })
            break;
        }
    }
        return calendar.toString(); 
}


const formatDateString = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

const makeGoogleCalendarLink = (session: ScheduledSession, pageUrl: string): string => {

    const { start, end } = getSessionDates(session);
    const datesParam = `${formatDateString(start)}/${formatDateString(end)}`;

    switch (session.kind) {
        case "streaming":
        case "talk": {
            const { talk } = session;
            const description = `${talk.description}\n\nEvent details: ${pageUrl}`;

            const params = new URLSearchParams({
                action: 'TEMPLATE',
                text: talk.title,
                dates: datesParam,
                details: description,
                location: session.track,
            });
            return `https://calendar.google.com/calendar/render?${params.toString()}`;
        }
        case "opening":
        case "break":
        case "closing":
        case "networking":
        case "closed":
        case "reception": {
            const description = `JSConf 2025 - ${session.kind}\n\nEvent details: ${pageUrl}`;
            const params = new URLSearchParams({
                actions: 'TEMPLATE',
                text: `JSConf 2025 - ${session.kind}`,
                dates: datesParam,
                details: description,
                location: session.track,
            })
            return `https://calendar.google.com/calendar/render?${params.toString()}`;
        }

        }

}

const makeOutlookCalendarLink = (session: ScheduledSession, pageUrl: string): string => {
    const { start, end } = getSessionDates(session);
    
    // Format dates for Outlook (ISO format)
    const startdt = start.toISOString().replace(/[-:]/g, '').split('.')[0];
    const enddt = end.toISOString().replace(/[-:]/g, '').split('.')[0];

    const baseUrl = isMobileDevice() 
        ? 'https://outlook.live.com/calendar/0/action/compose'
        : 'https://outlook.live.com/calendar/0/action/compose';

    switch (session.kind) {
        case "streaming":
        case "talk": {
            const { talk } = session;
            
            const description = `${talk.description}\n\nEvent details: ${pageUrl}`;
            
            const params = new URLSearchParams({
                allday: 'false',
                body: description,
                enddt: enddt,
                location: session.track || venueAddress,
                path: '/calendar/action/compose',
                rru: 'addevent',
                startdt: startdt,
                subject: talk.title,
            });
            
            return `${baseUrl}?${params.toString()}`;
        }
        case "opening":
        case "break":
        case "closing":
        case "networking":
        case "closed":
        case "reception": {
            const description = `JSConf 2025 - ${session.kind}\n\nEvent details: ${pageUrl}`;
            
            const params = new URLSearchParams({
                allday: 'false',
                body: description,
                enddt: enddt,
                location: venueAddress,
                path: '/calendar/action/compose',
                rru: 'addevent',
                startdt: startdt,
                subject: `JSConf 2025 - ${session.kind}`,
            });
            
            return `${baseUrl}?${params.toString()}`;
        }
        default:
            return '';
    }
}

const downloadIcsFile = (session: ScheduledSession, pageUrl: string): void => {
    const icalData = generateIcalData(session, pageUrl);
    const blob = new Blob([icalData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    const filename = session.kind === 'talk' || session.kind === 'streaming' 
        ? `jsconf-2025-${session.talk.slug}.ics`
        : `jsconf-2025-${session.kind}.ics`;
    
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
}

export function IcalButton({ session, calendarType, text }: Props) {
    const getPageUrl = (): string => {
        if (typeof window !== 'undefined') {
            return window.location.href;
        }
        return '';
    }

    const handleClick = () => {
        const pageUrl = getPageUrl();
        
        switch (calendarType) {
            case 'Google': {
                const googleUrl = makeGoogleCalendarLink(session, pageUrl);
                window.open(googleUrl, '_blank');
                break;
            }
            case 'Outlook': {
                const outlookUrl = makeOutlookCalendarLink(session, pageUrl);
                window.open(outlookUrl, '_blank');
                break;
            }
            case 'ICS': {
                downloadIcsFile(session, pageUrl);
                break;
            }
        }
    }

    const renderIcon = () => {
        switch (calendarType) {
            case 'Google':
                return (
                    <div className="w-4 h-4 mr-2">
                        {"TODO: google calendar SVG"}
                        📅
                    </div>
                );
            case 'Outlook':
                return (
                    <div className="w-4 h-4 mr-2">
                        {/* TODO: Outlook svg */}
                        📧
                    </div>
                );
            case 'ICS':
                return (
                    <div className="w-4 h-4 mr-2">
                        💾
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <button 
            onClick={handleClick}
            className="flex items-center w-full text-left py-2 px-3 hover:bg-gray-50 rounded"
        >
            {renderIcon()}
            <span>{text ?? `Add to ${calendarType}`}</span>
        </button>
    )

}