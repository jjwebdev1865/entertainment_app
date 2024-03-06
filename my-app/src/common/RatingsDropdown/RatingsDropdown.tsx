import React from 'react';

export const RatingsDropdown = (): JSX.Element => {
  return (
    <div data-testid="ratings-dropdown-section">
      <label id="ratings-dropdown">Rating:</label>
      <select name="ratings-dropdown" data-testid="ratings-dropdown">
        <option data-testid="ratings-dropdown-default" value="">
          Select Rating
        </option>
        <option data-testid="ratings-dropdown-one" value="1">
          One
        </option>
        <option data-testid="ratings-dropdown-two" value="2">
          Two
        </option>
        <option data-testid="ratings-dropdown-three" value="3">
          Three
        </option>
        <option data-testid="ratings-dropdown-four" value="4">
          Four
        </option>
        <option data-testid="ratings-dropdown-five" value="5">
          Five
        </option>
        <option data-testid="ratings-dropdown-six" value="6">
          Six
        </option>
        <option data-testid="ratings-dropdown-seven" value="7">
          Seven
        </option>
        <option data-testid="ratings-dropdown-eight" value="8">
          Eight
        </option>
        <option data-testid="ratings-dropdown-nine" value="9">
          Nine
        </option>
        <option data-testid="ratings-dropdown-ten" value="10">
          Ten
        </option>
      </select>
    </div>
  );
};
