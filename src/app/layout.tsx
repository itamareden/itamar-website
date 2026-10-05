import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Itamar Eden",
  description: "Meditation, breath, movement and embodiment with Itamar Eden.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
