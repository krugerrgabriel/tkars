import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Box, Loader } from '../../styles/global';
import { Subtext, ImageWrapper } from './styles';

const Ad: React.FC = () => {
  let link = `https://api.whatsapp.com/send?phone=5545988134329&text=Olá! Acessei o site da TKars e me interessei por um anúncio do Consórcio Transdesk 🤩`;

  return (
    <>
      <Subtext> ANÚNCIO PUBLICITÁRIO </Subtext>
      <Link href={link}>
        <a rel="nofollow" target="_blank">
          <ImageWrapper className="mobile">
            <Image
              src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/mobile/carro-novinho1.jpg`}
              alt="Carro Novinho com parcelinhas a partir de R$ 273,70 com o Consórcio Transdesk"
              title="Carro Novinho com parcelinhas a partir de R$ 273,70 com o Consórcio Transdesk"
              layout="fill"
              objectFit="contain"
              priority
            />
          </ImageWrapper>
        </a>
      </Link>
      <Box className="ad">
        <h3> Deseja comprar um veículo mas está sem grana à vista? 😥 </h3>
        <h6>
          Clique na imagem abaixo e solicite já uma simulação do{' '}
          <u>Consórcio Transdesk</u>, a melhor forma de realizar o seu sonho! 🤑
        </h6>
        <Link href={link}>
          <a rel="nofollow" target="_blank">
            <ImageWrapper className="desktop">
              <Image
                src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/desktop/carro-novinho1.jpg`}
                alt="Carro Novinho com parcelinhas a partir de R$ 273,70 com o Consórcio Transdesk"
                title="Carro Novinho com parcelinhas a partir de R$ 273,70 com o Consórcio Transdesk"
                layout="fill"
                objectFit="contain"
                priority
              />
            </ImageWrapper>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default Ad;
