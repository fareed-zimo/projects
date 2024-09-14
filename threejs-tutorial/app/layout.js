import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scrolling ANimation",
  description: "Three js tut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen bg-[#d9afd9] bg-[linear-gradient(0deg,#d9afd9_0%,#97d9e1_100%)]`}
      >
        {children}
      </body>
    </html>
  );
}
