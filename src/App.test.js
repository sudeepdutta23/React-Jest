import { render, screen, waitFor } from '@testing-library/react';
import user from  "@testing-library/react"
import App from './App';

test('shows 6 products by default',async()=>{
  render(<App />);
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(6)
});

test('cliking on the button loads 6 more products',async()=>{

})