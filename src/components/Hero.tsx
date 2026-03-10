import { REPO_URL } from '../config';

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Build fast with{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          React + Vite
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        A production-ready starter with React 19, Vite, TypeScript, and Tailwind CSS.
        Start building your next project in seconds.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#features"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          Get started
        </a>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
