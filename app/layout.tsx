// import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./AuthContext";
import NavBarComponent from "@/components/NavBarComponent";
// import Bebas_Neue from "next/font/google";

// // Load Bebas Neue font
// const bebasNeue = Bebas_Neue({
//   subsets: ["latin"], // Choose the subset you need
//   weight: ["400"], // Bebas Neue only supports 400
//   variable: "--font-bebas-neue", // Define a CSS variable
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 font-bebas">
          <AuthProvider>
            <NavBarComponent />
            {children}
          </AuthProvider>
      </body>
    </html>
  );
}
