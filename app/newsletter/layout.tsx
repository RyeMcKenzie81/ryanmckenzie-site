import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Listicle Landing Page Blueprint",
  description: "Download the complete mindmap workflow for building high-converting listicle landing pages. Includes swipe file and video training series.",
  openGraph: {
    title: "Ecommerce Listicle Landing Page Blueprint",
    description: "Download the complete mindmap workflow for building high-converting listicle landing pages.",
    url: "https://ryanmckenzie.com/newsletter",
    siteName: "Ryan McKenzie",
    images: [
      {
        url: "https://ryanmckenzie.com/leadmagnetimage.png",
        width: 1200,
        height: 630,
        alt: "Ecommerce Listicle Landing Page Blueprint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Listicle Landing Page Blueprint",
    description: "Download the complete mindmap workflow for building high-converting listicle landing pages.",
    images: ["https://ryanmckenzie.com/leadmagnetimage.png"],
    creator: "@ryemckenzie",
  },
  alternates: {
    canonical: "https://ryanmckenzie.com/newsletter",
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
