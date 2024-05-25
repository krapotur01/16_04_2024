import type { Metadata } from "next";
import {
  Header,
  Footer,
  Logo_section,
  MenuSection,
} from "./layout/index";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEBEL",
  description: "Качественная мебель на любой вкус",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Header />
        <Logo_section />
        <MenuSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}