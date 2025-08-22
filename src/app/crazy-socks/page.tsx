import type { Metadata } from 'next';
import CrazySocksContent from './CrazySocksContent';

export const metadata: Metadata = {
  title: "Crazy Socks Day - Koenig Childhood Cancer Foundation",
  description: "Join Crazy Socks Day, our signature fundraising event where schools and organizations wear crazy socks to raise awareness and funds for childhood cancer families.",
  keywords: ["crazy socks day", "fundraising", "childhood cancer", "awareness", "schools", "organizations", "KCCF"],
  openGraph: {
    title: "Crazy Socks Day - Koenig Childhood Cancer Foundation",
    description: "Join Crazy Socks Day, our signature fundraising event where schools and organizations wear crazy socks to raise awareness and funds for childhood cancer families.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/crazy-socks` : "https://thekccf.org/crazy-socks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CrazySocks() {
  return <CrazySocksContent />;
}
