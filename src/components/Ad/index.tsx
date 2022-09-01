import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Box, Loader } from '../../styles/global';
import { Subtext, ImageWrapper } from './styles';

const Ad: React.FC<{ price?: number }> = ({ price }) => {
  const [isLoadedOne, setIsLoadedOne] = useState(false);
  const [isLoadedTwo, setIsLoadedTwo] = useState(false);

  let link = `https://api.whatsapp.com/send?phone=5545988134329&text=Olá! Acessei o site da TKars e me interessei por um anúncio do Consórcio Transdesk 🤩`;

  let imageSrc;
  if (price <= 35000) {
    imageSrc = 'carro-novinho1.jpg';
  } else if (price > 45000 && price <= 95000) {
    imageSrc = 'carro-novinho2.jpg';
  } else {
    imageSrc = 'carro-novinho3.jpg';
  }

  return (
    <>
      <Subtext> ANÚNCIO PUBLICITÁRIO </Subtext>
      <Link href={link}>
        <a rel="noreferrer" target="_blank">
          <ImageWrapper className="mobile">
            {!isLoadedOne && <Loader />}
            <Image
              src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/mobile/${imageSrc}`}
              alt="Logo da TKARS"
              layout="fill"
              objectFit="contain"
              onLoad={() => setIsLoadedOne(true)}
              priority
            />
          </ImageWrapper>
        </a>
      </Link>
      <Box className="ad">
        <h3> Deseja comprar um veículo mas está sem grana à vista? 😥 </h3>
        <h6>
          Clique na imagem abaixo e solicite já uma simulação do
          <u>Consórcio Transdesk</u>, a melhor forma de realizar o seu sonho! 🤑
        </h6>
        <Link href={link}>
          <a rel="noreferrer" target="_blank">
            <ImageWrapper className="desktop">
              {!isLoadedTwo && <Loader />}
              <Image
                src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/desktop/${imageSrc}`}
                alt="Logo da TKARS"
                layout="fill"
                objectFit="contain"
                onLoad={() => setIsLoadedTwo(true)}
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
