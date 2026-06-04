import { General } from "@/components/og/General";
import { generateImage } from "@/lib/og/image";

export const dynamic = "force-static";

export const contentType = "image/png";

export default async function Image() {
  return generateImage(<General />);
}
