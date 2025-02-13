'use client';
import { signInWithGoogle } from '../../firebase';
import { AuthContext } from '../AuthContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const landingDescription = (
  <p className="m-1">
    Welcome to Battlegrounds – the ultimate tournament management platform
    designed for champions.
    <br />
    Whether you're organizing epic showdowns or competing for glory, we’ve got
    you covered.
    <br />
    Create, manage, and track tournaments effortlessly—all in one place.
    <br />
    From brackets to leaderboards, we bring the competition to life.
    <br />
    Ready to take your tournaments to the next level?
  </p>
);

const points = [
  'Host & Manage Tournaments Like a Pro',
  'Seamless Brackets, Scores & Standings',
  'Compete. Conquer. Celebrate!',
];

function getPoints() {
  return points.map((point, index) => (
    <div key={index} className="my-2 text-center">
      <span className="text-xl font-bold">
        <Image
          src="/bullet-point.svg"
          alt="Bullet Point"
          width={20}
          height={20}
          className="inline"
        />
      </span>{' '}
      {point}
    </div>
  ));
}

export default function Login() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  useEffect(() => {
    if (context?.user) {
      console.log('User:', context.user);
      router.push('/');
    }
  }, [context?.user, router]);

  if (context?.user) {
    return <div className="text-center m-5 text-3xl">Please wait...</div>; // Or any loading indicator
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="landing m-6 text-center">
        <h1 className="text-4xl font-bold">
          Gear Up. Game On. <span className="text-red-600">Glory Awaits!!</span>
        </h1>
        <div className="font-inter">
          {landingDescription}
          <br />
          {getPoints()}
        </div>
      </div>
      <div className="welcome-message text-center flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Let's get Started</h1>
      </div>
      <div className="login-button m-3">
        <Button
          onClick={handleSignIn}
          className="p-6 text-2xl text-white hover:bg-gray-800"
        >
          <Image
            src="/google-logo.svg"
            alt="Google Logo"
            width={30}
            height={30}
          />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
