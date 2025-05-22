import type { Metadata } from "next";
import { ConfigProvider, App as AntApp } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLangCookie } from "@/utils/cookiesServer";
import { Footer } from "antd/es/layout/layout";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Next Blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLangCookie();

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.variable} ${inter.className}`}>
        <NextIntlClientProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                cssVar: false,
                hashed: false,
                token: {
                  fontFamily: "Inter",
                  colorPrimary: "#ee5123",
                  colorInfo: "#ee5123",
                  colorLink: "inset",
                  colorLinkHover: "inset",
                  colorLinkActive: "inset",
                },
                components: {
                  Button: {
                    borderRadius: 8,
                    borderRadiusLG: 29,
                    borderRadiusSM: 20,

                    controlHeight: 40,
                    controlHeightLG: 50,
                    controlHeightSM: 36,

                    fontSize: 16,
                  },
                  Tabs: {
                    itemHoverColor: "#141414",
                    itemColor: "#141414",
                    itemSelectedColor: "#ee5123",
                  },
                },
              }}
            >
              <AntApp>
                <main>
                  {/* <Header /> */}
                  <Header />
                  {children}
                  <Footer>
                    <div className="text-center">
                      <p
                        className="text-sm"
                      >
                        © 2025 Next Blog. All rights reserved.
                      </p>
                    </div>
                  </Footer>
                </main>
              </AntApp>
            </ConfigProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
