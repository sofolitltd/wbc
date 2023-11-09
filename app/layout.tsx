import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Wellbeing Clinic",
  description: "Wellbeing Clinic is a mental health service provider offering a comprehensive range of services for optimal mental health. We provide personalized, compassionate care that addresses your unique needs and goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
