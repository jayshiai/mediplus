import Navbar from "@/components/Navbar";
import "./globals.css";
import Image from "next/image";
export const metadata = {
  title: "Paras Pathology",
  description: "Pathology and Diagnostics Center in Lucknow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sm:px-5 bg-[#caf0f8] xl:px-20 overflow-x-hidden">
        <Navbar />
        {children}
        <div className="h-screen w-screen fixed top-0 left-0 -z-50">
          <Image
            fill={true}
            src="/navy_bg.jpg"
            className="object-cover object-[25%]"
          />
        </div>
      </body>
    </html>
  );
}
