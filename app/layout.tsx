import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanmckenzie.com"),
  title: {
    default: "Ryan McKenzie",
    template: "%s | Ryan McKenzie",
  },
  description: "Learn, Build, and Grow with Ryan McKenzie",
  openGraph: {
    siteName: "Ryan McKenzie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ryemckenzie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/RyeMcKenzie81/ryanmckenzie-site/main/hero-backup.jpg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6D9HYQTPPQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6D9HYQTPPQ');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}