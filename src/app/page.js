'use client';
import "./globals.css";
import dynamic from 'next/dynamic';

const Body = dynamic(() => import("@/components/Body"), {
  loading: () => <p>This is loading</p>
});

export default function Home() {
  return (
    <main
      className="bg-gradient-to-bl from-rose-400 via-fuchsia-500 
    to-indigo-500 min-h-screen text-white "
    >
        <Body />
    </main>
  );
}
