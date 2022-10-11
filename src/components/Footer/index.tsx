import React from 'react';

import Image from 'next/image';

import { Container } from 'react-bootstrap';

import { Body, Wrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Body>
      <div className="first">
        <Container className="h-100">
          <div className="instagram">
            <a
              href="https://instagram.com/tkars_revendedora"
              target="_blank"
              rel="nofollow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.064"
                height="26.107"
                viewBox="0 0 26.064 26.107"
              >
                <g id="bxl-instagram-alt" transform="translate(-2.997 -2.981)">
                  <path
                    id="Caminho_25"
                    data-name="Caminho 25"
                    d="M28.977,10.687a9.45,9.45,0,0,0-.606-3.207A6.672,6.672,0,0,0,24.56,3.668,9.562,9.562,0,0,0,21.4,3.061C20,3,19.562,2.981,16.028,2.981s-3.987,0-5.37.08A9.561,9.561,0,0,0,7.5,3.668,6.668,6.668,0,0,0,3.684,7.479a9.486,9.486,0,0,0-.606,3.162C3.016,12.036,3,12.477,3,16.012s0,3.986.081,5.37a9.546,9.546,0,0,0,.606,3.165A6.672,6.672,0,0,0,7.5,28.356a9.529,9.529,0,0,0,3.162.651c1.394.062,1.835.081,5.37.081s3.987,0,5.37-.081a9.538,9.538,0,0,0,3.164-.606,6.68,6.68,0,0,0,3.811-3.811,9.532,9.532,0,0,0,.606-3.165c.062-1.392.081-1.834.081-5.37S29.058,12.072,28.977,10.687ZM16.019,22.7A6.691,6.691,0,1,1,22.71,16,6.69,6.69,0,0,1,16.019,22.7Zm6.957-12.069a1.56,1.56,0,1,1,1.559-1.56A1.558,1.558,0,0,1,22.976,10.626Z"
                    transform="translate(0)"
                    fill="#fff"
                  />
                  <circle
                    id="Elipse_1"
                    data-name="Elipse 1"
                    cx="4"
                    cy="4"
                    r="4"
                    transform="translate(12.053 12.05)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div>
            <div className="wrapper">
              <p>uma empresa do</p>
              <a href="https://grupounus.com.br" rel="nofollow" target="_blank">
                <Wrapper>
                  <Image
                    src="/grupo-unus01.svg"
                    alt="Logo do Grupo Unus"
                    layout="fill"
                    objectFit="contain"
                  />
                </Wrapper>
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="second">
        <Container className="h-100 d-flex align-items-center justify-content-between">
          <p>
            Copyright © 2013 - 2022 TK GERENCIAMENTO DE RISCO. Todos os Direitos
            Reservados.
          </p>

          <p>Cascavel - PR</p>
        </Container>
      </div>
    </Body>
  );
};

export default Footer;
