import Link from "next/link";
import { LanguageToggle } from "../src/components/LanguageToggle";
import Image from "next/image";
import logoUrl from "../src/assets/logo.svg";

export function GlobalNavigation() {
  return (
    <header className="shadow-sm">
      <div className="flex items-center justify-between py-5 max-w-screen-lg mx-auto">
        <div className="flex">
          <Image
            src={logoUrl}
            alt="JSConf JP"
            width={46}
            height={46}
            className="mr-4"
          />
          <LanguageToggle />
        </div>
        <nav className="flex-1 flex items-center gap-4">
          <Link href="/speakers" className="flex-1 text-center">
            Speakers
          </Link>
          <Link href="/venue" className="flex-1 text-center">
            Venue
          </Link>
          <Link href="/schedule" className="flex-1 text-center">
            Schedule
          </Link>
          <Link href="/sponsors" className="flex-1 text-center">
            Sponsors
          </Link>
          <Link href="/sponsors" className="flex-1 text-center">
            Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
}
