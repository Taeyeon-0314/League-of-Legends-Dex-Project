import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import ClientHeader from "@/components/ClientHeader";

export const metadata: Metadata = {
  title: "LOL DEX",
  description: "League of Legends champion index",
  icons: {
    icon: "/images/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="pt-[64px] pb-[64px]">
        <ClientHeader />
        <main className="container mx-auto px-4 flex-grow pt-[64px]">{children}</main>
        <footer className="bg-teal-800 text-white p-4 fixed bottom-0 w-full">
          <div className="container mx-auto text-center text-white text-sm">© 2024 LOL DEX</div>
        </footer>
      </body>
    </html>
  );
}
