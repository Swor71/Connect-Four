import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Button } from './Button';
import { store } from '../../../store/store';

afterEach(cleanup);

describe('ButtonComponent', () => {
  it('renders the button', () => {
    const { getByText } = render(<Button>Reset</Button>);

    expect(getByText('Reset')).toBeInTheDocument();
  });

  it('registers Button click', () => {
    const myOnClick = jest.spyOn(store, 'resetGame')

    const { getByText } = render(<Button>Reset</Button>);

    const button = getByText('Reset');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(myOnClick).toHaveBeenCalledTimes(3);
  });
});
