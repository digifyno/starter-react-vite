import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    expect(screen.getByText('React Starter')).toBeInTheDocument();
  });

  it('calls onToggleDark when button is clicked', () => {
    const handler = vi.fn();
    render(<Header darkMode={false} onToggleDark={handler} />);
    fireEvent.click(screen.getByLabelText('Toggle dark mode'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('renders nav links', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument();
  });

  it('desktop nav has accessible label', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
  });

  it('mobile nav has accessible label when open', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    fireEvent.click(screen.getByLabelText('Open menu'));
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
  });

  it('Docs link points to GitHub, not a dead anchor', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    const docsLink = screen.getByRole('link', { name: 'Docs' });
    expect(docsLink).toHaveAttribute('href', 'https://github.com/digifyno/starter-react-vite');
  });

  it('opens mobile menu when hamburger is clicked', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('closes mobile menu on Escape key', () => {
    render(<Header darkMode={false} onToggleDark={vi.fn()} />);
    fireEvent.click(screen.getByLabelText('Open menu'));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
