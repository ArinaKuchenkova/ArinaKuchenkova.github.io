import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local'
import clsx from "clsx";

// Font files can be colocated inside of `pages`
const makFont = localFont({
  src: [
    {
      path: '../fonts/Mak-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mak-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mak',
})

const evolventaFont = localFont({
  src: [
    {
      path: '../fonts/Evolventa-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Evolventa-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-evolventa',
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Кученкова Арина",
  description: "UI/UX Дизайнер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(makFont.variable, evolventaFont.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
