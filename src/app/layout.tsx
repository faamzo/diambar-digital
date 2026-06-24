import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif, Montserrat, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diamabar Digital | Agence Web & Solutions Digitales",
  description:
    "Agence digitale premium spécialisée en développement web, applications mobiles et solutions digitales sur mesure.",
  keywords: [
    "agence web",
    "développement web",
    "applications mobiles",
    "UI/UX",
    "Diamabar Digital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
