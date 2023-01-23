import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Body } from './styles';

const Fab: React.FC = () => {
  let link = `https://api.whatsapp.com/send?phone=5545999438811&text=Olá! Acessei o site da TKars e gostaria de tirar uma dúvida 😁`;
  return (
    <Link href={link}>
      <a rel="noreferrer" target="_blank">
        <Body>
          <div className="wrapper">
            <Image
              src="/bxl-whatsapp.svg"
              alt="Ícone de entrar em contato pelo WhatsApp"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Body>
      </a>
    </Link>
  );
};

export default Fab;
