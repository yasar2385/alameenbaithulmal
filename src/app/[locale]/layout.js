import clsx from 'clsx';

import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";

import "../globals.css";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default async function RootLayout({ children}) { 
  
  // Providing all messages to the client
  const messages = await getMessages();
  const locale = await getLocale();

  console.log(locale);
  console.log(messages);
  return (
    <html lang={locale}>
      <body className={clsx('flex min-h-[100vh] flex-col bg-slate-100', `${geistSans.variable} ${geistMono.variable} antialiased`)}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
