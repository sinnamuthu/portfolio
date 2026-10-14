import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinna Muthu — Full-Stack Developer",
  description:
    "Sinna Muthu is a full-stack developer in Chennai, India, building web products from the frontend and APIs to databases and AWS infrastructure.",
  openGraph: {
    title: "Sinna Muthu — Full-Stack Developer",
    description:
      "From the first screen to the server it runs on. Explore my work, including ERP4Dentist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinna Muthu — Full-Stack Developer",
    description:
      "From the first screen to the server it runs on. Explore my work, including ERP4Dentist.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f9fd",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
