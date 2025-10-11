interface CalendarEvent {
  title: string;
  description?: string;
  location?: string;
  startTime: Date;
  endTime: Date;
}

export class CalendarGenerator {

  /**
   * @description Formats a date to the format required by calendar urls (YYYYMMDDTHHmmssZ)
   */
  private static formatDate(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }

  /**
   * @description Generates a Google Calendar link
   * @param event calendar event data. 
   */
  static google(event: CalendarEvent): string {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${this.formatDate(event.startTime)}/${this.formatDate(event.endTime)}`,
      details: event.description || '',
      location: event.location || '',
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  /**
   * Generates an Outlook Web link
   */
  static outlook(event: CalendarEvent): string {
    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: event.title,
      startdt: event.startTime.toISOString(),
      enddt: event.endTime.toISOString(),
      body: event.description || '',
      location: event.location || '',
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  }

  /**
   * Generates an ICS file content (for Apple Calendar, Outlook desktop, etc.)
   */
  static ics(event: CalendarEvent): string {
    const icsDate = (date: Date) => this.formatDate(date);
    
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${icsDate(event.startTime)}`,
      `DTEND:${icsDate(event.endTime)}`,
      `SUMMARY:${event.title}`,
      event.description ? `DESCRIPTION:${event.description}` : '',
      event.location ? `LOCATION:${event.location}` : '',
      'END:VEVENT',
      'END:VCALENDAR',
    ].filter(Boolean).join('\r\n');
  }

  /**
   * Creates a downloadable ICS file blob
   */
  static icsBlob(event: CalendarEvent): Blob {
    return new Blob([this.ics(event)], { type: 'text/calendar;charset=utf-8' });
  }

  /**
   * Generates all calendar links at once
   */
  static all(event: CalendarEvent) {
    return {
      google: this.google(event),
      outlook: this.outlook(event),
      ics: this.ics(event),
      icsBlob: this.icsBlob(event),
    };
  }
}
