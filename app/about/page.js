import Link from 'next/link';

export default function About() {
  return (
    <>
      <header className="bg-amber-500">
        <div className="container mx-auto px-4 py-4">
          <h1>About</h1>
          <p>This is the about page.</p>
          <Link href="/" className="inline-block mt-2">Home</Link>
          <Link href="/faq" className="inline-block mt-2 ml-4">FAQ</Link>
        </div>
      </header>
    </>
  );
}
