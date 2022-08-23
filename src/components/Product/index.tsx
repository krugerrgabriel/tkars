import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatBRL, numberWithCommas } from '../../functions/index';

import { Loader } from '../../styles/global';
import { Body, ImageWrapper, Info, MarcaWrapper } from './styles';

import { ProductProps } from './interfaces';

const Product: React.FC<ProductProps> = props => {
  let { margin, fixedWidth, className } = props;
  let { id, slug, marca, nome, modelo, preco, ano, quilometragem, extension } =
    props.item;

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Body margin={margin} fixedWidth={fixedWidth} className={className}>
      <Link href={`/carro/${id}/${slug}`}>
        <a>
          <ImageWrapper>
            {!isLoaded && <Loader />}
            <Image
              src={
                'https://transdesk.com.br/souunus/assets/img/veiculos/' +
                id +
                '_principal.' +
                extension
              }
              alt="Logo da TKARS"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
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
