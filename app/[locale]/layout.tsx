import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from "../StoreProvider";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Land",
  description: "A simple news app",
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<Props>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StoreProvider>
          <AntdRegistry>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
