import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';
import ErrorComponent from './components/ErrorComponent';

describe('Form page', () => {

  it('should render input text label', () => {
    act(() => {
      render(<App />);
    });
    const linkElement = screen.getByText(/password/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders input', () => {
    act(() => {
      render(<App />);
    });

    const input = screen.getByTestId('input-password');
    expect(input).toBeInTheDocument();
  });


  it('renders learn react link', () => {

    act(() => {
      render(<App />);
      render(<ErrorComponent item={{ text: 'string' }} />);
    });

    const input = screen.getByTestId('input-password');

    fireEvent.change(input, { target: { value: '$123' } });

    const linkElement = screen.getByText('special character');
    expect(linkElement).toBeInTheDocument();
  });

})

