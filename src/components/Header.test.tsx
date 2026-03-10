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
