import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SP Cakes search bar and header', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search cakes/i);
  expect(searchInput).toBeInTheDocument();
  const brandElements = screen.getAllByText(/SP Cakes & Delight/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
