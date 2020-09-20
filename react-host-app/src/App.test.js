import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const mfDiv = getByTestId('App').children;
  console.log('mfDiv ', mfDiv);
  const parntDiv = getByTestId('parentdiv')
});
