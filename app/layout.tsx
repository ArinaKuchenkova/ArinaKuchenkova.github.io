import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local'
import clsx from "clsx";
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!), 
  title: "Кученкова Арина",
  description: "UX/UI Дизайнер",
  keywords: [
    "UX/UI дизайнер",
    "UX designer",
    "UI designer",
    "product design",
    "web design",
    "portfolio"
  ],
  authors: [{ name: "Кученкова Арина" }],
  creator: "Кученкова Арина",
  openGraph: {
    type: "website",
    title: 'Кученкова Арина',
    description: "UX/UI Дизайнер",
    url: "https://arina.pw",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={clsx(makFont.variable, evolventaFont.variable)}>
          <PostHogPageView />
          <Header />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
