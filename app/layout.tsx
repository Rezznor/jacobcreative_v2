import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jacob Creative | Web Design and Development Studio",
  description: "Welcome to Jacob Creative! Web Design and Development Studio",
  keywords: "web development, web design, studio, creative, website, SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

				<SiteHeader />

				{children}

				<SiteFooter />

			</body>
		</html>
	);
}
