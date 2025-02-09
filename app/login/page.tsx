"use client";
import { signInWithGoogle } from "../../firebase";
import { AuthContext } from "../AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  useEffect(() => {
    if (context?.user) {
      console.log("User:", context.user);
      router.push("/");
    }
  }, [context?.user]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Login with Google</button>
    </div>
  );
}
