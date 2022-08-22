import React from 'react';

import Image from 'next/image';

import { Subtext, ImageWrapper } from './styles';
import { Box } from '../../styles/global';

const Ad: React.FC = () => {
  return (
    <>
      <Subtext> ANÚNCIO PUBLICITÁRIO </Subtext>
      <Box>
        <h3> Deseja comprar um veículo mas está sem grana à vista? 😥 </h3>
        <h6>
          Clique na imagem abaixo e solicite já uma simulação do{' '}
          <u>Consórcio Transdesk</u>, a melhor forma de realizar o seu sonho! 🤑
        </h6>
        <ImageWrapper>
          <Image
            src="https://www.transdesk.com.br/realizeseusonho/assets/img/banners/desktop/carro-novinho1.jpg"
            alt="Logo da TKARS"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
      </Box>
    </>
  );
};

export default Ad;
