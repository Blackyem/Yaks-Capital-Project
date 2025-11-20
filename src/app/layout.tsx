import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "./../components/footer/Footer";
import { ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Yak's Portfolio",
  description: "Professional Next.js Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
<html lang="en" style={{ overflowY: "scroll" }}>
    
     <head>
        {/* RENTECH FONT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body>
        <ThemeRegistry>
          
          <Navbar />
          <main style={{ marginTop: "80px", minHeight: "70vh" }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
