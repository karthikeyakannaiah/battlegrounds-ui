import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className="flex items-center justify-center text-red-600">
      <div className="text-center">
        <p className="font-light text-3xl">Page not found</p>
        <Link href="/">
          <p className="font-bold text-2xl text-black">Go Back Home</p>
        </Link>
      </div>
    </div>
  );
}
