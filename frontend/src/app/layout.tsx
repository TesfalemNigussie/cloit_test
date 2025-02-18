import '@/src/styles/global.css'
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import Sidebar from '../components/sidebar';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'CLOIT TEST',
  description: 'Menu Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <div className="flex h-screen bg-white px-6 py-4 lg:p-6 ">
          <Sidebar />
          <div className="flex-1 overflow-auto px-0  md:px-12 lg:px-12 xl:px-12 no-scrollbar">
            {children}
          </div>
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
