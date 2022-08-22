import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatBRL, numberWithCommas } from '../../functions/index';

import { Body, ImageWrapper, Info, MarcaWrapper } from './styles';

import { ProductProps } from './interfaces';

const Product: React.FC<ProductProps> = props => {
  let { margin } = props;
  let { id, marca, nome, modelo, preco, ano, quilometragem } = props.item;
  return (
    <Body margin={margin}>
      <Link href={`/carro/${id}`}>
        <a>
          <ImageWrapper>
            <Image
              src={`/misc/${id}_principal.jpg`}
              alt="Logo da TKARS"
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>

          <Info>
            <div className="d-flex align-items-center">
              <h3> {marca} </h3>
              <MarcaWrapper className={marca}>
                <Image
                  src={`/marcas/${marca}.${
                    marca == 'chevrolet' ? 'png' : 'svg'
                  }`}
                  alt="Logo da TKARS"
                  layout="fill"
                  objectFit="contain"
                />
              </MarcaWrapper>
            </div>
            <h1> {nome} </h1>
            <h4> {modelo} </h4>

            <h2> {formatBRL(preco)} </h2>

            <div className="more-info">
              <p> {ano} </p>
              <p> {numberWithCommas(quilometragem)}km </p>
            </div>
          </Info>
        </a>
      </Link>
    </Body>
  );
};

export default Product;
