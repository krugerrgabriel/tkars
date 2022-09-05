import React from 'react';

import Image from 'next/image';

import { Body, ImageWrapper, Info } from './styles';

const ComingSoon: React.FC = () => {
  return (
    <Body>
      <a>
        <ImageWrapper>
          <Image
            src={'https://transdesk.com.br/souunus/assets/img/em-breve.jpg'}
            alt={'Em breve novidades e mais carros | TKars'}
            title={'Em breve novidades e mais carros | TKars'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />
        </ImageWrapper>

        <Info>
          <p> Em breve muitas novidades 🤩 </p>
          <p>
            Estamos trabalhando em novidades e ofertas imperdiveis para você!
          </p>
        </Info>
      </a>
    </Body>
  );
};

export default ComingSoon;
