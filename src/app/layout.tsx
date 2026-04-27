import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lotus Digital — Conversion-Focused Web Design Agency",
  description:
    "Lotus Digital designs digital experiences that turn visitors into paying customers. Strategy, clarity, and conversion-focused design for service businesses.",
  keywords: [
    "web design agency",
    "conversion optimization",
    "landing page design",
    "digital agency",
    "CRO",
    "service business websites",
  ],
  openGraph: {
    title: "Lotus Digital — Conversion-Focused Web Design Agency",
    description:
      "We design digital experiences that turn visitors into paying customers.",
    type: "website",
    siteName: "Lotus Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Digital — Conversion-Focused Web Design Agency",
    description:
      "We design digital experiences that turn visitors into paying customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
