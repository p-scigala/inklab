import type { Metadata } from "next";
import '@/app/ui/globals.css';
import Header from "./ui/molecules/header";
import Footer from "./ui/molecules/footer";

export const metadata: Metadata = {
  title: "InkLab",
  description: "Inklab description",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
