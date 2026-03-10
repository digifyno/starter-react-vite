import React from 'react';

const features: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: 'React 19',
    description:
      'Latest React with concurrent features, server components support, and improved performance.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: 'Vite',
    description:
      'Lightning-fast HMR, optimized builds, and native ESM for instant dev server startup.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'TypeScript',
    description:
      'Full type safety with strict mode enabled. Catch errors before they reach production.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tailwind CSS',
    description:
      'Utility-first CSS with automatic purging. Build any design without leaving your markup.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M12 2a5 5 0 0 1 5 5c0 5.25-5 10-5 10S7 12.25 7 7a5 5 0 0 1 5-5z" />
        <path d="M12 7v5" />
        <path d="M9.5 9.5 12 12l2.5-2.5" />
        <path d="M20 17c0 2.21-3.582 4-8 4S4 19.21 4 17" />
      </svg>
    ),
  },
  {
    title: 'ESLint + Prettier',
    description: 'Consistent code style enforced automatically. Focus on building, not formatting.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69h6.05l-4.9 3.56a1 1 0 0 0-.36 1.12L17.5 20l-4.9-3.56a1 1 0 0 0-1.18 0L6.5 20l1.88-5.87a1 1 0 0 0-.36-1.12L3.12 9.45h6.05a1 1 0 0 0 .95-.69L12 3z" />
      </svg>
    ),
  },
  {
    title: 'Vitest',
    description: 'Fast unit testing powered by Vite. Compatible with Jest API for easy migration.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0-2 2m2-2 2 2m-2-2v5m0 0H5a2 2 0 0 1-2-2v-4m16 6h-4m4 0v-5m0 5v.5a1.5 1.5 0 0 1-3 0V19m3-5h-3" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Everything you need
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
        A carefully curated stack so you can focus on building your product.
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:hover:border-blue-700 transition-all"
          >
            <div className="h-10 w-10 text-blue-600 dark:text-blue-400" aria-hidden="true">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
