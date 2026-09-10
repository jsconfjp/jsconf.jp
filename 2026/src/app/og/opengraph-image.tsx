import { setRequestLocale } from "next-intl/server";
import { General } from "@/components/og/General";
import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { TalkSlug } from "@/constants/talks";
import { LOCALES } from "@/i18n/constants";
import { ensureLocale } from "@/i18n/ensureLocale";
import { findTalkSession } from "@/lib/findTalkSession";
import { getTalkSessions } from "@/lib/getTalkSessions";
import { generateImage } from "@/lib/og/image";
import {
  GENERAL_OG_IMAGE_ID,
  getTalkOgImageId,
} from "@/lib/og/url";

export const dynamic = "force-static";

export const contentType = "image/png";

const size = { width: 1200, height: 630 };

export function generateImageMetadata() {
  const imageMetadata = { contentType, size };
  const talkSessions = getTalkSessions();

  return [
    { id: GENERAL_OG_IMAGE_ID, ...imageMetadata },
    ...LOCALES.flatMap((locale) =>
      talkSessions.map((session) => ({
        id: getTalkOgImageId(locale, session.talk.slug),
        ...imageMetadata,
      })),
    ),
  ];
}

type Props = {
  id: Promise<string>;
};

export default async function Image({ id }: Props) {
  const imageId = await id;

  if (imageId === GENERAL_OG_IMAGE_ID) {
    return generateImage(<General />);
  }

  const match = imageId.match(/^talk-(ja|en)-(.+)\.png$/);
  if (!match) {
    throw new Error(`Unknown Open Graph image ID: ${imageId}`);
  }

  const [, rawLocale, rawSlug] = match;
  const locale = ensureLocale(rawLocale);
  setRequestLocale(locale);

  const session = findTalkSession(rawSlug as TalkSlug);
  return generateImage(<TalkThumbnail session={session} />);
}
