import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/app.js';

describe('With React Testing Library', () => {
  it('App shows "Hello Github && CI/CD"', () => {
    render(<App />);
    expect(screen.getByText('Hello Github && CI/CD')).toBeInTheDocument();
  });
});
