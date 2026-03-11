import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import App from './App';

afterEach(() => {
  document.documentElement.classList.remove('dark');
  localStorage.clear();
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

  it('initializes dark mode from localStorage when set to true', () => {
    localStorage.setItem('darkMode', 'true');
    render(<App />);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('initializes light mode from localStorage when set to false', () => {
    localStorage.setItem('darkMode', 'false');
    render(<App />);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('persists dark mode preference to localStorage on toggle', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    render(<App />);
    fireEvent.click(screen.getAllByLabelText('Toggle dark mode')[0]!);
    expect(setItemSpy).toHaveBeenCalledWith('darkMode', 'true');
    setItemSpy.mockRestore();
  });
});
