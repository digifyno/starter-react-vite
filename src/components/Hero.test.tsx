import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders heading with "Build fast with"', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Build fast with');
  });

  it('renders "Get started" CTA link', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: 'Get started' })).toBeInTheDocument();
  });

  it('GitHub link has target="_blank" and rel="noopener noreferrer"', () => {
    render(<Hero />);
    const githubLink = screen.getByRole('link', { name: 'View on GitHub' });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
