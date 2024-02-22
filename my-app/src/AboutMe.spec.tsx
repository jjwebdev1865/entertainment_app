import { render } from '@testing-library/react';
import AboutMe from './AboutMe'
import React from 'react';

describe('AboutMe', () => {
  it('AboutMe component should render', () => {
    const { getByTestId } = render(<AboutMe />);
    expect(getByTestId('about-me-header')).toBeTruthy();
  })
})