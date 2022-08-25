import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Container } from 'react-bootstrap';

import SearchField from '../SearchField/';

import {
  Body,
  LogoWrapper,
  SidenavWrapper,
  NavbarMargin,
  SearchWrapper,
  Sidenav,
  SearchReveal,
  SearchOverlay
} from './styles';
import { Button } from '../../styles/global';

const Navbar: React.FC<{ handleKey: Function }> = ({ handleKey }) => {
  const [sidenavActive, setSidenavActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <NavbarMargin />
      <Body>
        <SearchReveal active={searchActive}>
          <Container className="d-flex">
            <SearchField handleKey={handleKey} />
            <Button
              className="button-style"
              onClick={() => setSearchActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  id="Close_Icon"
                  data-name="Close Icon"
                  d="M10.758,25.758l6-6,6,6,3-3-6-6,6-6-3-3-6,6-6-6-3,3,6,6-6,6Z"
                  transform="translate(-7.758 -7.758)"
                  fill="#fff"
                />
              </svg>
            </Button>
          </Container>
        </SearchReveal>
        <SearchOverlay active={searchActive} />
        <Container className="h-100 container-wrapper">
          <SearchWrapper
            className="show-768px"
            onClick={() => setSearchActive(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24.001"
              viewBox="0 0 24 24.001"
            >
              <path
                id="bx-search"
                d="M12.264,22.527a10.2,10.2,0,0,0,6.283-2.166L24.186,26,26,24.187l-5.64-5.64a10.251,10.251,0,1,0-8.1,3.98Zm0-17.961a7.7,7.7,0,1,1-7.7,7.7A7.705,7.705,0,0,1,12.264,4.566Z"
                transform="translate(-2 -2)"
                fill="#fff"
              />
            </svg>
          </SearchWrapper>

          <Link href="/">
            <a>
              <LogoWrapper>
                <Image
                  src="/icon01.svg"
                  alt="Logo da TKARS"
                  layout="fill"
                  objectFit="contain"
                />
              </LogoWrapper>
            </a>
          </Link>

          <div className="search-wrapper hide-768px">
            <SearchField handleKey={handleKey} />
          </div>

          <SidenavWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 32 24"
            >
              <path
                id="sidenav-icon"
                d="M4,6H36v4H4Zm8,10H36v4H12ZM22,26H36v4H22Z"
                transform="translate(-4 -6)"
              />
            </svg>
          </SidenavWrapper>
        </Container>
      </Body>

      <Sidenav active={sidenavActive}></Sidenav>
    </>
  );
};

export default Navbar;
