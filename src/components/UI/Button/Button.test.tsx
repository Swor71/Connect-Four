import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(() => cleanup());

describe('ButtonComponent', () => {
  it('renders the button', () => {
    const { getByText } = render(<Button>Test</Button>);

    expect(getByText('Test')).toBeInTheDocument();
  });
});
