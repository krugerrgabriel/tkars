import React from 'react';

import Link from 'next/link';

import { Body } from './styles';

import { BreadcrumbProps } from './interfaces';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Body>
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.008"
            height="11"
            viewBox="0 0 11.008 11"
          >
            <path
              id="bxs-home"
              d="M12.867,7.693l-4.954-5.5a.567.567,0,0,0-.818,0l-4.954,5.5a.55.55,0,0,0,.409.919h1.1v3.853a.55.55,0,0,0,.55.55H5.853a.55.55,0,0,0,.55-.55v-2.2H8.6v2.2a.55.55,0,0,0,.55.55h1.651a.55.55,0,0,0,.55-.55V8.611h1.1a.55.55,0,0,0,.409-.919Z"
              transform="translate(-2 -2.015)"
            />
          </svg>
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
