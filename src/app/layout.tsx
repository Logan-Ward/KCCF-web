import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DonationModalProvider } from "@/contexts/DonationModalContext";
import DonationModal from "@/components/DonationModal";
import { SlideshowProvider } from "@/contexts/SlideshowContext";
import LoadingSpinner from "@/components/LoadingSpinner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} antialiased text-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <DonationModalProvider>
            <SlideshowProvider>
              <LoadingSpinner />
              <Navigation />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <DonationModal />
            </SlideshowProvider>
          </DonationModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
