import React, { Dispatch, SetStateAction } from 'react';

type RatingsDropdownProps = {
  currentRating: number;
  setRating: Dispatch<SetStateAction<number>>
}

export const RatingsDropdown = (props: RatingsDropdownProps): JSX.Element => {
  const { currentRating, setRating } = props;
  const ratingsList = [
    {number: 0, message: 'unknown'},
    {number: 1, message: 'One'},
    {number: 2, message: 'Two'},
    {number: 3, message: 'Three'}, 
    {number: 4, message: 'Four'}, 
    {number: 5, message: 'Five'}, 
    {number: 6, message: 'Six'}, 
    {number: 7, message: 'Seven'}, 
    {number: 8, message: 'Eight'}, 
    {number: 9, message: 'Nine'},
    {number: 10, message: 'Ten'}
  ];
  
  const getMessage = (number: number, originalMessage: string) => {
    let message = originalMessage;
    if (number === 0) {
      message = 'Select Rating';
    }
    return message;
  };

  return (
    <div data-testid="ratings-dropdown-section">
      <label id="ratings-dropdown">Rating:</label>
      
      <select id='ratings-dropdown' defaultValue={currentRating} onChange={(e) =>setRating(Number(e.target.value))}>
        {ratingsList.map(rating => {
          const message = getMessage(rating.number, rating.message);
          return (
            <option 
              key={`ratings-dropdown-${rating.message}`} 
              data-testid={`rating-${rating.message}`} 
              value={rating.number} 
            >
              {message}
            </option>
          );
        })}
      </select>
    </div>
  );
};
