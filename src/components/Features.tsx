const features = [
  {
    title: 'React 19',
    description: 'Latest React with concurrent features, server components support, and improved performance.',
    icon: '\u269B\uFE0F',
  },
  {
    title: 'Vite',
    description: 'Lightning-fast HMR, optimized builds, and native ESM for instant dev server startup.',
    icon: '\u26A1',
  },
  {
    title: 'TypeScript',
    description: 'Full type safety with strict mode enabled. Catch errors before they reach production.',
    icon: '\uD83D\uDEE1\uFE0F',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS with automatic purging. Build any design without leaving your markup.',
    icon: '\uD83C\uDFA8',
  },
  {
    title: 'ESLint + Prettier',
    description: 'Consistent code style enforced automatically. Focus on building, not formatting.',
    icon: '\u2728',
  },
  {
    title: 'Vitest',
    description: 'Fast unit testing powered by Vite. Compatible with Jest API for easy migration.',
    icon: '\uD83E\uDDEA',
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
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
