import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Features } from './Features';

describe('Features', () => {
  it('renders "Everything you need" heading', () => {
    render(<Features />);
    expect(screen.getByRole('heading', { name: 'Everything you need' })).toBeInTheDocument();
  });

  it('renders all 6 feature card titles', () => {
    render(<Features />);
    const titles = [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'ESLint + Prettier',
      'Vitest',
    ];
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    }
  });
});
