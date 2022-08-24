import React, { useEffect, useState } from 'react';

import { Body } from './styles';

import { InputFieldProps } from './interfaces';

const InputField: React.FC<InputFieldProps> = props => {
  let { type, placeholder, icon, changeValue } = props;

  const [valueInput, setValueInput] = useState('');

  const changeInput = event => {
    let { value } = event.target;
    setValueInput(value);
    changeValue({
      type: value.length > 0 ? 'add' : 'remove',
      id: props.id,
      value
    });
  };
  return (
    <Body>
      <div className="svg" dangerouslySetInnerHTML={{ __html: icon }} />

      <input
        type={type}
        placeholder={placeholder}
        value={valueInput}
        onChange={changeInput}
      />
    </Body>
  );
};

export default InputField;
