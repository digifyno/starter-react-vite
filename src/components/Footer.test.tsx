import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer />);
    expect(screen.getByText('Built with React, Vite, TypeScript, and Tailwind CSS.')).toBeInTheDocument();
  });

  it('uses <footer> landmark role', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
