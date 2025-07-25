import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/GameDin L3/i)).toBeInTheDocument();
  });

  it('renders connect wallet button', () => {
    render(<App />);
    const connectButton = screen.getByRole('button', { name: /connect wallet/i });
    expect(connectButton).toBeInTheDocument();
  });
});
