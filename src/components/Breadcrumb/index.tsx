import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Body } from './styles';

import { BreadcrumbProps } from './interfaces';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Body>
      <Link href="/">
        <a>
          <div className="wrapper">
            <Image
              src="/bxs-home.svg"
              alt="Logo de casa | TKars"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
      </Link>
      {items.map((item, index) => {
        return (
          <Link href={item.url} key={index}>
            <a>
              <p>
                {'>'} {item.name}
              </p>
            </a>
          </Link>
        );
      })}
    </Body>
  );
};

export default Breadcrumb;
