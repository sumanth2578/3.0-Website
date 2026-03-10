import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3.0 Labs | Engineering Intelligent Products",
  description: "Engineering Ideas Into Intelligent Products. We build AI-powered products, web apps, and custom solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mesh-bg"></div>
        <div className="wavy-glow"></div>
        {children}
      </body>
    </html>
  );
}
