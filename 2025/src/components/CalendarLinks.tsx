import { CalendarSession, IcalButton } from "./IcalButton";
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "./og/Dropdown";

export type Props = {
  session: CalendarSession;
};

export function CalendarLinks({ session }: Props) {
  return (
    <Dropdown>
      <DropdownButton className="bg-slate-900">{"🗓️"}</DropdownButton>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>
            <IcalButton session={session} calendarType={"Google"}></IcalButton>
          </DropdownItem>
          <DropdownItem>
            <IcalButton session={session} calendarType={"Outlook"}></IcalButton>
          </DropdownItem>
          <DropdownItem>
            <IcalButton session={session} calendarType={"ICS"}></IcalButton>
          </DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  );
}
