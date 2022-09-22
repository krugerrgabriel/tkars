import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatBRL, numberWithCommas } from '../../functions/index';

import { Body, ImageWrapper, Info, MarcaWrapper } from './styles';

import { ProductProps } from './interfaces';

const Product: React.FC<ProductProps> = props => {
  let { margin, fixedWidth, className } = props;
  let { id, slug, marca, nome, modelo, preco, ano, quilometragem } = props.item;

  const SEO = marca + ' ' + nome + ' ' + ano + ' ' + modelo;

  return (
    <Body margin={margin} fixedWidth={fixedWidth} className={className}>
      <Link href={`/carro/${id}/${slug}`}>
        <a>
          <ImageWrapper>
            <Image
              src={
                'https://transdesk.com.br/souunus/assets/img/veiculos/' +
                id +
                '_og.jpg'
              }
              alt={'Logo do ' + SEO}
              title={'Logo do ' + SEO}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </ImageWrapper>

          <Info>
            <div className="d-flex align-items-center">
              <h4> {marca} </h4>
              <MarcaWrapper className={marca}>
                <Image
                  src={`/marcas/${marca}.${
                    marca == 'chevrolet' ? 'png' : 'svg'
                  }`}
                  alt={'Logo da' + marca}
                  title={'Logo da' + marca}
                  layout="fill"
                  objectFit="contain"
                />
              </MarcaWrapper>
            </div>
            <h2> {nome} </h2>
            <h5> {modelo} </h5>

            <h3> {formatBRL(preco)} </h3>

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
