import { Metadata } from "next";
import { CodeOfConduct } from "@/components/CodeOfConduct";

export const metadata: Metadata = {
  title: "Code of Conduct",
};

export default async function Page() {
  return <CodeOfConduct />;
}
