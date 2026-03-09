interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export function Header({ darkMode, onToggleDark }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="text-lg font-bold tracking-tight">React Starter</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="#docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Docs
          </a>
        </nav>

        <button
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
          className="rounded-lg border border-gray-200 p-2 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
        >
          {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
        </button>
      </div>
    </header>
  );
}
