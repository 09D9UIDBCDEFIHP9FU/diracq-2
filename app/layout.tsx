import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DiracQ",
  description: "AI Analytics Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen bg-[#0A0F1E] text-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}