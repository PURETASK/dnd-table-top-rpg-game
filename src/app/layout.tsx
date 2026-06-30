import type { ReactNode } from "react";

export const metadata = {
  title: "Realm of Nexus — VERDAX",
  description: "The Sap Beneath the Ash — a VERDAX AI Dungeon Master vertical slice.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
