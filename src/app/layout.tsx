import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lotus Digital — Web Design for Service Businesses",
  description:
    "Lotus Digital is a founder-led digital studio that helps restaurants, gyms, real estate professionals, and service businesses get more inquiries through clear, modern, conversion-focused websites.",
  keywords: [
    "web design for service businesses",
    "restaurant website design",
    "gym website design",
    "real estate website design",
    "conversion-focused web design",
    "landing page design",
    "small business web design",
    "founder-led design studio",
  ],
  openGraph: {
    title: "Lotus Digital — Web Design for Service Businesses",
    description:
      "We help restaurants, gyms, real estate brands, and service businesses get more inquiries with clear, modern, conversion-focused websites.",
    type: "website",
    siteName: "Lotus Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Digital — Web Design for Service Businesses",
    description:
      "We help restaurants, gyms, real estate brands, and service businesses get more inquiries with clear, modern, conversion-focused websites.",
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
