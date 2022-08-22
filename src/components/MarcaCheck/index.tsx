import React, { useState } from 'react';

import Image from 'next/image';

import { Body, LogoWrapper } from './styles';

import { MarcaCheckProps } from './interfaces';

const MarcaCheck: React.FC<MarcaCheckProps> = props => {
  let { name, changeStatus, active } = props;
  let nameLower = name.toLowerCase();

  return (
    <Body active={active} onClick={() => changeStatus(name)}>
      <div className="wrapper">
        <LogoWrapper className={nameLower}>
          <Image
            src={`/marcas/${nameLower}.${name == 'Chevrolet' ? 'png' : 'svg'}`}
            alt={`Logo da ${name}`}
            layout="fill"
            objectFit="contain"
          />
        </LogoWrapper>
      </div>
      <h4> {name} </h4>
    </Body>
  );
};

export default MarcaCheck;
