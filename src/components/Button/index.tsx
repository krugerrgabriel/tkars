import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Body } from './styles';

import { ButtonProps } from './interfaces';

const Button: React.FC<ButtonProps> = ({
  icon,
  iconAlt,
  link,
  label,
  className,
  type
}) => {
  return (
    <Link href={link}>
      <a>
        <Body className={className || ''} type={type || ''}>
          <div className="wrapper">
            <Image src={icon} alt={iconAlt} layout="fill" objectFit="contain" />
          </div>
          {label ? <p>{label}</p> : ''}
        </Body>
      </a>
    </Link>
  );
};

export default Button;
