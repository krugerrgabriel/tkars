import React from 'react';

import Link from 'next/link';

import { Row, Col } from 'react-bootstrap';

import SearchField from '../SearchField';

import { Button, FilterToggle } from '../../styles/global';
import { Body } from './styles';

const SearchBox: React.FC<{ filterClick: Function }> = ({ filterClick }) => {
  return (
    <Body>
      <h1> Seu novo carro está aqui! 🤩 </h1>
      <h3>
        São mais de 39 carros esperando por você! Dê uma olhada em nosso
        catalogo e encontre o seu carro ideal.
      </h3>

      <Row>
        <Col lg={8}>
          <SearchField />
        </Col>
        <Col lg={4}>
          <Link href="/carros">
            <a>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14.4"
                  viewBox="0 0 16 14.4"
                >
                  <path
                    id="bxs-car"
                    d="M17.018,8.924,15.923,5.641A2.4,2.4,0,0,0,13.647,4H6.353A2.4,2.4,0,0,0,4.077,5.641L2.982,8.924A1.6,1.6,0,0,0,2,10.4v4a1.593,1.593,0,0,0,.8,1.378V17.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V16h9.6v1.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V15.778A1.592,1.592,0,0,0,18,14.4v-4A1.6,1.6,0,0,0,17.018,8.924ZM6.353,5.6h7.294a.8.8,0,0,1,.759.547L15.29,8.8H4.71l.884-2.653A.8.8,0,0,1,6.353,5.6ZM4.8,13.6A1.2,1.2,0,1,1,6,12.4,1.2,1.2,0,0,1,4.8,13.6Zm10.4,0a1.2,1.2,0,1,1,1.2-1.2A1.2,1.2,0,0,1,15.2,13.6Z"
                    transform="translate(-2 -4)"
                  />
                </svg>
                <p>VER TUDO</p>
              </Button>
            </a>
          </Link>
        </Col>
      </Row>

      <FilterToggle onClick={() => filterClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.888"
          height="15"
          viewBox="0 0 15.888 15"
        >
          <g id="bx-slider-alt" transform="translate(-2 -2.5)">
            <path
              id="Caminho_20"
              data-name="Caminho 20"
              d="M6.342,13.265a2.761,2.761,0,0,0-2.634,1.985H2v1.588H3.708a2.74,2.74,0,0,0,5.269,0h8.813V15.251H8.976A2.761,2.761,0,0,0,6.342,13.265Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,6.342,17.236Zm7.1-8.736a2.761,2.761,0,0,0-2.634,1.985H2v1.588h8.813a2.74,2.74,0,0,0,5.269,0h1.708V10.485H16.081A2.761,2.761,0,0,0,13.447,8.5Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,13.447,12.471Z"
              transform="translate(0 -1.324)"
            />
            <path
              id="Caminho_21"
              data-name="Caminho 21"
              d="M10.556,4.485a2.741,2.741,0,0,0-5.269,0H2V6.074H5.287a2.741,2.741,0,0,0,5.269,0h7.333V4.485ZM7.921,6.471A1.191,1.191,0,1,1,9.105,5.28,1.189,1.189,0,0,1,7.921,6.471Z"
              transform="translate(0)"
            />
          </g>
        </svg>
        <p> FILTRAR </p>
      </FilterToggle>
    </Body>
  );
};

export default SearchBox;
