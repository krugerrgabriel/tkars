import React from 'react';

import Image from 'next/image';

import { preventDragHandler } from '../../functions/index';

import { Body, LogoWrapper } from './styles';

const Marca: React.FC<{ name: string }> = props => {
  let { name } = props;
  let nameLower = name.toLowerCase();
  return (
    <Body onDragStart={preventDragHandler}>
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

export default Marca;
