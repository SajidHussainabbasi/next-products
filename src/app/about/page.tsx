import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto bg-purple-700 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>Welcome to the about page of this Next-Products app!</p>
      <p>
        Here is some information about{' '}
        <a
          href="https://github.com/SajidHussainabbasi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Sajid Hussain
        </a>
      </p>

      <Link
        href="/"
        className="inline-block mt-6 text-blue-300 underline hover:text-blue-500"
      >
        ← Back to My Store
      </Link>
    </main>
  );
}