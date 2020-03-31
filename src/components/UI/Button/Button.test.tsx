import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

describe('ButtonComponent', () => {
  // it('renders the button', () => {
  //   const { getByText } = render(<Button>Reset</Button>);

  //   expect(getByText('Reset')).toBeInTheDocument();
  // });

  it('registers Button click', () => {
    const myOnClick = jest.fn()

    const { getByText } = render(<Button>Reset</Button>);

    const btn = getByText('Reset');

    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(myOnClick).toHaveBeenCalledTimes(3);
  });
});
