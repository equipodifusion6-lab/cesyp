import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";

const serif = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CESyP Jujuy | Plataforma editorial institucional",
  description:
    "Centro de Estudios Sociales y Politicos de Jujuy. Plataforma editorial para investigacion, observatorio territorial, agenda institucional y archivo publico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
