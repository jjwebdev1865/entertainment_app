import React from 'react';

type CheckboxProps = {
  labelText: string;
  isChecked: boolean;
  changeHandler: () => void;
};

export const Checkbox = ({labelText, isChecked, changeHandler }: CheckboxProps): JSX.Element => (
  <div>
    <label>
      <input type="checkbox" checked={isChecked} onChange={changeHandler} />
      <span>{labelText}</span>
    </label>
  </div>
);
