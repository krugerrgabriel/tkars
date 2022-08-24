import React from 'react';

import { Body } from './styles';

import { CheckBoxProps } from './interfaces';

const CheckBox: React.FC<CheckBoxProps> = props => {
  let { label, active, checkChange, id } = props;
  return (
    <Body>
      <input
        type="checkbox"
        defaultChecked={active}
        onChange={() => checkChange(label)}
      />
      <p>{label}</p>
    </Body>
  );
};

export default CheckBox;
