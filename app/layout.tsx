import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";
import Header from "./(frontend)/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estro",
  description: "The Best Store Ever & Best Deals & Free Ships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background `}>
        <Header />
        <div className="bg-background container">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {" "}
            <ModeToggle />
            <div>{children}</div>
          </ThemeProvider>{" "}
        </div>
      </body>
    </html>
  );
}
