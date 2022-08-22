import React from 'react';

import { Body } from './styles';

import { InputFieldProps } from './interfaces';

const InputField: React.FC<InputFieldProps> = props => {
  let { type, placeholder, icon } = props;

  return (
    <Body>
      <div className="svg" dangerouslySetInnerHTML={{ __html: icon }} />

      <input type={type} placeholder={placeholder} />
    </Body>
  );
};

export default InputField;
