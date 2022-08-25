import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { preventDragHandler } from '../../functions/index';

import { Loader } from '../../styles/global';
import { Body, Overlay } from './styles';

import { ProductProps } from '../Product/interfaces';

const Banner: React.FC<ProductProps> = props => {
  let { id, slug, marca, nome, modelo, quilometragem } = props.item;

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Body onDragStart={preventDragHandler}>
      <Link href={`/carro/${id}/${slug}`}>
        <a>
          {!isLoaded && <Loader />}
          <Image
            src={`https://transdesk.com.br/souunus/assets/img/veiculos/${id}_og.jpg`}
            alt="Logo da TKARS"
            layout="fill"
            objectFit="cover"
            className="border-radius-8px"
            onLoad={() => setIsLoaded(true)}
          />

          <Overlay />

          <div className="body">
            <h2>
              {marca} {nome}
            </h2>
            <h3>
              <b>{modelo}</b> com apenas <b>{quilometragem}km</b> rodados!!
            </h3>
          </div>
        </a>
      </Link>
    </Body>
  );
};

export default Banner;
