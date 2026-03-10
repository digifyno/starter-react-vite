import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import App from './App';

afterEach(() => {
  document.documentElement.classList.remove('dark');
});

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Build fast with');
  });

  it('renders the features section heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Everything you need' })).toBeInTheDocument();
  });

  it('renders skip-to-content link with correct href', () => {
    render(<App />);
    const skip = screen.getByRole('link', { name: 'Skip to main content' });
    expect(skip).toHaveAttribute('href', '#main-content');
  });

  it('toggles dark mode on button click', () => {
    render(<App />);
    const toggle = screen.getAllByLabelText('Toggle dark mode')[0]!;
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
