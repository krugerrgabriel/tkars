import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { preventDragHandler } from '../../functions/index';

import { Body, Overlay } from './styles';

import { BannerProps } from './interfaces';

const Banner: React.FC<BannerProps> = props => {
  let { id, nome, description } = props.item;
  return (
    <Body onDragStart={preventDragHandler}>
      <Link href={`/carro/${id}`}>
        <a>
          <Image
            src={`/misc/${id}_principal.jpg`}
            alt="Logo da TKARS"
            layout="fill"
            objectFit="contain"
            className="border-radius-8px"
          />

          <Overlay />

          <div className="body">
            <h2> {nome} </h2>
            <h3>{description}</h3>
          </div>
        </a>
      </Link>
    </Body>
  );
};

export default Banner;
