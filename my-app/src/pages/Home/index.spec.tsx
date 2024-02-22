import { render } from '@testing-library/react';
import Home from './index'
import React from 'react';

describe('Home', () => {

  // TODO: Fix unit tests
  it('Home component should render', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-header')).toBeTruthy();
  })
})