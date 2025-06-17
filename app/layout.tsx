import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can adjust weights as needed
});

export const metadata: Metadata = {
  title: 'Ogochukwu Odom',
  description: 'Ogochukwu Odom: Your Frontend Developer',
  icons: {
    icon: '/ogo-prof.ico', // or .png/.svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased`}>{children}</body>
      <ToastContainer theme="dark" />
    </html>
  );
}
