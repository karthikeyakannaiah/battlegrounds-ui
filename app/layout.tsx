import './globals.css';
import { AuthProvider } from './AuthContext';
import NavBarComponent from '@/components/NavBarComponent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
