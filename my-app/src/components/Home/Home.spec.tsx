import { render } from '@testing-library/react';
import Home from './Home'
import React from 'react';

describe('Home', () => {

  it('Home component should render', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-header')).toBeTruthy();
  })
})