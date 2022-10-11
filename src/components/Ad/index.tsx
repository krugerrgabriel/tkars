import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Box } from '../../styles/global';
import { Subtext, ImageWrapper } from './styles';

const Ad: React.FC<{ price?: number }> = ({ price }) => {
  // @ts-ignore
  price = parseInt(price);
  let link = `https://api.whatsapp.com/send?phone=5545988134329&text=Olá! Acessei o site da TKars e me interessei por um anúncio do Consórcio Transdesk 🤩`;

  let imageSrc;
  if (price) {
    if (price >= 40000 && price <= 60000) {
      imageSrc = 'carro-novinho2-small.jpg';
    } else if (price > 60000 && price <= 120000) {
      imageSrc = 'carro-novinho1-small.jpg';
    } else {
      imageSrc = 'carro-novinho3-small.jpg';
    }
  } else {
    imageSrc = 'carro-novinho3-small.jpg';
  }
  return (
    <>
      <Subtext> ANÚNCIO PUBLICITÁRIO </Subtext>
      <Link href={link}>
        <a rel="nofollow" target="_blank">
          <ImageWrapper className="mobile">
            <Image
              src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/mobile/${imageSrc}`}
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
        <h3>
          Deseja comprar um veículo mas está sem grana à vista? 😥
          <br /> Conte com o{' '}
          <a
            href="https://transdesk.com.br/realizeseusonho"
            target="_blank"
            rel="nofollow"
          >
            Consórcio Transdesk
          </a>
        </h3>
        <h6>
          O que é o consórcio Transdesk?
          <br /> Para facilitar a realização do seu sonho, uma das modalidades
          de compra acontece por meio do consórcio Transdesk. Com ele, você
          adquiri uma carta de crédito no valor do veículo que deseja comprar,
          ao ser contemplado, o valor da carta é destinado ao pagamento do
          veículo.
        </h6>
        <Link href={link}>
          <a rel="nofollow" target="_blank">
            <ImageWrapper className="desktop">
              <Image
                src={`https://www.transdesk.com.br/realizeseusonho/assets/img/banners/desktop/${imageSrc}`}
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
