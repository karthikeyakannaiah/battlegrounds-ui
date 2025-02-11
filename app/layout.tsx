// import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./AuthContext";
import NavBarComponent from "@/components/NavBarComponent";
// import AuthWrapper from '@/components/AuthWrapper';


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
            {/* <AuthWrapper> */}
              {children}
            {/* </AuthWrapper> */}
          </AuthProvider>
      </body>
    </html>
  );
}
