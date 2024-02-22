import { render } from '@testing-library/react';
import AboutMe from './index'
import React from 'react';

describe('AboutMe', () => {
  // TODO: Fix unit tests
  it('AboutMe component should render', () => {
    const { getByTestId } = render(<AboutMe />);
    expect(getByTestId('about-me-header')).toBeTruthy();
  })
})