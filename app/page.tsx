"use client";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const context = useContext(AuthContext);
  const router = useRouter();

  // const user = context?.user;

  useEffect(() => {
    if (!context?.user) {
      router.push("/login");
    }
  }, [context?.user, router]);

  return (
    <div>
    </div>
  );
}
