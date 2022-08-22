import React from 'react';

import Image from 'next/image';

import { Container } from 'react-bootstrap';

import { Body, Wrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Body>
      <div className="first">
        <Container className="h-100">
          <div>
            <div className="wrapper">
              <p>uma empresa do</p>
              <Wrapper>
                <Image
                  src="/grupo-unus01.svg"
                  alt="Logo do Grupo Unus"
                  layout="fill"
                  objectFit="contain"
                />
              </Wrapper>
            </div>
          </div>
        </Container>
      </div>
      <div className="second">
        <Container className="h-100 d-flex align-items-center">
          <p>
            Copyright © 2013 - 2022 TK GERENCIAMENTO DE RISCO. Todos os Direitos
            Reservados.
          </p>
        </Container>
      </div>
    </Body>
  );
};

export default Footer;
