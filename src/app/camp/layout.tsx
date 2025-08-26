import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Camp - Join Our Experience | Koenig Childhood Cancer Foundation",
  description: "Join our unforgettable camp experience designed for children with cancer and their families. Register as a camper or apply to be a counselor.",
  keywords: ["camp", "summer camp", "children with cancer", "camp counselor", "camper registration", "cancer support", "family camp", "therapeutic camp"],
  openGraph: {
    title: "Camp - Join Our Experience | Koenig Childhood Cancer Foundation",
    description: "Join our unforgettable camp experience designed for children with cancer and their families. Register as a camper or apply to be a counselor.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/camp` : "https://thekccf.org/camp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
