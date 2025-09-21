import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TrialBagProvider } from "../providers/trial-bag";
import FloatingWhatsApp from "../components/floating-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saree Store — Aesthetic • Traditional • Modern",
  description:
    "Try Sarees at Home, Shop with Confidence. Explore wedding, handloom, designer and casual sarees with a premium phygital experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TrialBagProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsApp />
        </TrialBagProvider>
      </body>
    </html>
  );
}
