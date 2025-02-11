"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../app/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const context = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Wait for the authentication state to be determined
      await new Promise(resolve => setTimeout(resolve, 1000)); // Add a small delay to ensure context is updated

      if (context?.user === null && pathname !== "/login") {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [context?.user, router, pathname]);

  if (isLoading) {
    return <div className="text-center m-5 text-3xl">Loading...</div>;
  }

  return <>{children}</>;
}