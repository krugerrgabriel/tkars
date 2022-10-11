import React from 'react';

import Link from 'next/link';
import Router from 'next/router';

import { Row, Col } from 'react-bootstrap';

import SearchField from '../SearchField';
import Button from '../Button';

import { FilterToggle } from '../../styles/global';
import { Body } from './styles';

const SearchBox: React.FC<{ filterClick: Function; carsNumber: number }> = ({
  filterClick,
  carsNumber
}) => {
  const handleKey = value => {
    Router.push(
      {
        pathname: '/carros',
        query: {
          searchParams: value,
          searchBox: true
        }
      },
      '/carros',
      { shallow: true }
    );
  };

  return (
    <Body>
      <h1> Seu novo carro está aqui! 🤩 </h1>
      <h3>
        Aqui você encontra todos os modelos disponíveis. Navegue nas opções
        abaixo e encontre o carro que melhor combina com você 🚗
      </h3>

      <Row>
        <Col lg={8} md={8} sm={12}>
          <SearchField handleKey={handleKey} />
        </Col>
        <Col lg={4} md={4} sm={12} className="margin-top-12px-768px">
          <Button
            icon="/bxs-car.svg"
            iconAlt="Ícone de carro para ver todas as ofertas"
            link="/carros"
            label="VER TUDO"
          />
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
