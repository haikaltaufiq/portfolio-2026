// src/app/layout.tsx
import type { Metadata } from "next";
import {
  Poppins,
  League_Spartan,
  Redacted_Script as RedactedFont,
} from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import PageWrapper from "../components/layouts/PageWrapper";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const redactedScript = RedactedFont({
  variable: "--font-redacted",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${leagueSpartan.variable} 
          ${poppins.variable} 
          ${poppins.className} 
          ${redactedScript.variable}
          antialiased
        `}
      >
        <Providers>
          <PageWrapper>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
