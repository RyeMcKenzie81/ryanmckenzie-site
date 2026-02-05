import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Media Buying Services",
  description: "Professional Meta (Facebook & Instagram) media buying services for CPG and supplement brands spending $100K+ per month. Let Ryan McKenzie's team run your ads.",
  openGraph: {
    title: "Meta Media Buying Services",
    description: "Professional Meta media buying for CPG and supplement brands spending $100K+ per month.",
    url: "https://ryanmckenzie.com/media-buying",
    siteName: "Ryan McKenzie",
    images: [
      {
        url: "https://ryanmckenzie.com/hero-backup.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan McKenzie - Meta Media Buying Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Media Buying Services",
    description: "Professional Meta media buying for CPG and supplement brands spending $100K+ per month.",
    images: ["https://ryanmckenzie.com/hero-backup.jpg"],
    creator: "@ryemckenzie",
  },
  alternates: {
    canonical: "https://ryanmckenzie.com/media-buying",
  },
};

export default function MediaBuyingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
