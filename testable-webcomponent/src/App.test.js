import React from 'react';
import { waitForElement, render, screen } from '@testing-library/react';
import App from './App';
import ApiService from './utils/api-service';
import TestRenderer from 'react-test-renderer';

jest.mock('./utils/api-service');

describe('Testing App component - Using testing-library', () => {
  
  beforeEach(() => {
    const data = {defaultColor: 'green'};
    const resp = {data: data};
    ApiService.get.mockResolvedValue(resp);
  });

  it('Should render App component as expected', () => {
    render(<App />);
    waitForElement(() => {
      const divNode = screen.getByTestId('parentdiv');
      expect(divNode).toHaveStyle('backgroundColor: green');
    })
  });

  it('App Instance', () => {
    const testRenderer = TestRenderer.create(<App />);
    waitForElement(() => {
      const testInstance = testRenderer.root;
    })
    
  });
  
});