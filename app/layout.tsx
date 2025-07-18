import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "./components/utils/hooks/useTheme";

// Load Geist Sans font with latin subset and assign CSS variable
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load Geist Mono font with latin subset and assign CSS variable
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for this app (used for SEO and document head)
export const metadata: Metadata = {
  title: "Weddly",
  description: "Weddly connects you with expert wedding coordinators for a smooth, stress-free wedding planning experience", 
};

// RootLayout component wrapping the entire app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Html tag tells the browser the primary language of the app is English. */
    <html lang='en'>
      {/* Body includes font CSS variables and antialiasing for smooth text */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ThemeProvider supplies theme context to all child components */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
