import React from 'react';

import { Body } from './styles';

import { SelectButtonProps } from './interfaces';

const SelectButton: React.FC<SelectButtonProps> = ({
  active,
  value,
  changeValue,
  changeStatus
}) => {
  let options = [
    {
      name: 'MAIS BARATOS (R$)',
      value: 'mais-baratos'
    },
    {
      name: 'MAIS CAROS (R$)',
      value: 'mais-caros'
    },
    {
      name: 'MENOS RODADOS (km)',
      value: 'menos-rodados'
    },
    {
      name: 'MAIS RODADOS (km)',
      value: 'mais-rodados'
    },
    {
      name: 'POR MARCA',
      value: 'por-marca'
    }
  ];

  let orderBy = '';
  if (value != '') {
    let activeValue = options.filter(item => item.value == value);
    orderBy = ': ' + activeValue[0].name;
  }

  return (
    <Body active={active} onClick={() => changeStatus()}>
      <div className="box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.2"
          height="14"
          viewBox="0 0 11.2 14"
        >
          <path
            id="bx-sort"
            d="M6.8,11.8H4L8.2,16V2H6.8ZM11,4.1V16h1.4V6.2h2.8L11,2Z"
            transform="translate(-4 -2)"
          />
        </svg>
        <p>
          ORDERNAR POR<i>{orderBy}</i>
        </p>
      </div>

      <div className="reveal">
        <p onClick={() => changeValue('')}> NENHUM </p>
        {options.map((item, index) => {
          return (
            <p key={index} onClick={() => changeValue(item.value)}>
              {item.name}
            </p>
          );
        })}
      </div>
    </Body>
  );
};

export default SelectButton;
