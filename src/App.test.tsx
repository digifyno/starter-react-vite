import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />);
    expect(screen.getAllByText(/Build fast with/).length).toBeGreaterThan(0);
  });

  it('renders the features section', () => {
    render(<App />);
    expect(screen.getAllByText('Everything you need').length).toBeGreaterThan(0);
  });

  it('toggles dark mode on button click', () => {
    render(<App />);
    const toggles = screen.getAllByLabelText('Toggle dark mode');
    fireEvent.click(toggles[0]!);
    // After click, the html element should have 'dark' class
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
