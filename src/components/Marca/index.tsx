import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { preventDragHandler } from '../../functions/index';

import { Body, LogoWrapper } from './styles';

const Marca: React.FC<{ name: string }> = props => {
  let { name } = props;
  let nameLower = name.toLowerCase();
  return (
    <Body onDragStart={preventDragHandler}>
      <Link href={{ pathname: '/carros', query: { searchParams: nameLower } }}>
        <a>
          <div className="wrapper">
            <LogoWrapper className={nameLower}>
              <Image
                src={`/marcas/${nameLower}.${
                  name == 'Chevrolet' ? 'png' : 'svg'
                }`}
                alt={`Logo da marca ${name}`}
                title={`Logo da marca ${name}`}
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </div>
          <h4> {name} </h4>
        </a>
      </Link>
    </Body>
  );
};

export default Marca;
