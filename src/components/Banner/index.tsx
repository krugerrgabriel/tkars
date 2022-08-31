import React, { useState } from 'react';

import Image from 'next/image';

import { preventDragHandler } from '../../functions/index';

import { Body, Overlay } from './styles';

import { BannerProps } from './interfaces';

const Banner: React.FC<BannerProps> = props => {
  let { onMouseDown, onMouseUp, item, first } = props;
  let { src, base64 } = item;
  let { marca, nome, modelo, quilometragem } = item.item;
  return (
    // @ts-ignore
    <Body
      onDragStart={preventDragHandler}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Image
        src={src}
        alt="Logo da TKARS"
        layout="fill"
        objectFit="cover"
        className="border-radius-8px"
        placeholder={first ? 'blur' : 'empty'}
        blurDataURL={first ? base64 : ''}
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
    </Body>
  );
};

export default Banner;
