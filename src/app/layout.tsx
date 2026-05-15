import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spylt",
  description: "Proteína + Cafeína - Increíblemente Delicioso",
  icons: {
    icon: "/images/kdl.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
