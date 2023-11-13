import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Paras Pathology",
  description: "Pathology and Diagnostics Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sm:px-5 bg-[#caf0f8] xl:px-20 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
