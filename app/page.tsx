'use client';
import { AuthContext } from './AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (context?.user === null) {
      // User is definitely not authenticated
      router.push('/login');
    } else if (context?.user) {
      // User is authenticated
      setIsLoading(false);
    }
    // If context.user is undefined, we're still waiting for the auth state
  }, [context?.user, router]);

  if (isLoading) {
    return <div className="text-center m-5 text-3xl">Loading...</div>; // Or any loading indicator
  }

  return <div></div>;
}
