import React, { useState } from 'react';

import Image from 'next/image';

import { preventDragHandler, formatBRL } from '../../functions/index';

import { Body, Overlay } from './styles';

import { BannerProps } from './interfaces';

const Banner: React.FC<BannerProps> = props => {
  let { onMouseDown, onMouseUp, item, first } = props;
  let { src, base64 } = item;
  let { marca, nome, modelo, preco } = item.item;

  const [isLoaded, setIsLoaded] = useState(false);

  const SEO = marca + ' ' + nome + ' ' + modelo;
  return (
    // @ts-ignore
    <Body
      onDragStart={preventDragHandler}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Image
        src={src}
        alt={'Foto do ' + SEO}
        title={'Foto do ' + SEO}
        layout="fill"
        objectFit="cover"
        className="border-radius-8px"
        onLoad={() => {
          setTimeout(() => {
            setIsLoaded(true);
          }, 1000);
        }}
        placeholder={first && !isLoaded ? 'blur' : 'empty'}
        blurDataURL={first && !isLoaded ? base64 : ''}
      />

      <Overlay />

      <div className="body">
        <h2>
          {marca} {nome}
        </h2>
        <h3>
          <b>{modelo}</b> por apenas <b>{formatBRL(preco)}</b>!
        </h3>
      </div>
    </Body>
  );
};

export default Banner;
