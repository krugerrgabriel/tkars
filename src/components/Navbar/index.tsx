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
  SearchOverlay,
  CloseWrapper,
  OverlaySidenav
} from './styles';
import { Button } from '../../styles/global';

const Navbar: React.FC<{ handleKey: Function; handleLink: Function }> = ({
  handleKey,
  handleLink
}) => {
  const [sidenavActive, setSidenavActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleClickLink = value => {
    handleLink(value);
    setSidenavActive(false);
  };

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

          <SidenavWrapper onClick={() => setSidenavActive(true)}>
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

      <Sidenav active={sidenavActive}>
        <CloseWrapper
          active={sidenavActive}
          onClick={() => setSidenavActive(false)}
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
        </CloseWrapper>

        <Link href="/">
          <a>
            <div className="logo-wrapper">
              <Image
                src="/icon01.svg"
                alt="Logo da TKARS"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>

        <div className="links">
          <div>
            <p onClick={() => handleClickLink('mais-baratos')}>
              MAIS BARATOS <i>(R$)</i>
            </p>
            <p onClick={() => handleClickLink('mais-caros')}>
              MAIS CAROS <i>(R$)</i>
            </p>
            <p onClick={() => handleClickLink('novidade')}> NOVIDADE </p>
            <p onClick={() => handleClickLink('menos-rodados')}>
              MENOS RODADOS <i>(km)</i>
            </p>
            <p onClick={() => handleClickLink('mais-rodados')}>
              MAIS RODADOS <i>(km)</i>
            </p>
            <p onClick={() => handleClickLink('por-marca')}> POR MARCA </p>
          </div>

          <div>
            <a
              href="mailto:gabriel.kruger@transdesk.com.br?subject=[TKARS] Relatar problema"
              target="_blank"
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17.736"
                  viewBox="0 0 18 17.736"
                >
                  <path
                    id="bx-bug"
                    d="M15.406,6.1l2.532-2.531L16.665,2.293,14.1,4.854a5.918,5.918,0,0,0-.651-.409,5.2,5.2,0,0,0-4.9,0,5.849,5.849,0,0,0-.65.408L5.336,2.293,4.064,3.566,6.6,6.1A7.626,7.626,0,0,0,5.38,8.329H2v1.8H4.076a10.384,10.384,0,0,0-.1,1.35,10.525,10.525,0,0,0,.1,1.36H2v1.8H4.478c.012.035.019.072.031.106a9.332,9.332,0,0,0,.625,1.44c.04.073.086.139.127.211l-2.1,2.1,1.273,1.273,1.9-1.9A7.566,7.566,0,0,0,7,18.51a6.73,6.73,0,0,0,1.2.813,6.131,6.131,0,0,0,1.346.522,5.856,5.856,0,0,0,2.913,0,6.131,6.131,0,0,0,1.346-.522A6.774,6.774,0,0,0,15,18.51a7.424,7.424,0,0,0,.661-.644l1.9,1.9,1.273-1.273-2.1-2.1c.042-.072.088-.14.128-.212a9.205,9.205,0,0,0,.625-1.439c.012-.035.019-.071.031-.106H20v-1.8H17.923a10.536,10.536,0,0,0,.1-1.36,10.543,10.543,0,0,0-.1-1.35H20v-1.8H16.62A7.645,7.645,0,0,0,15.406,6.1ZM8.013,7.2A4.407,4.407,0,0,1,9.388,6.038a3.4,3.4,0,0,1,3.223,0A4.4,4.4,0,0,1,13.988,7.2a5.634,5.634,0,0,1,.678,1.126H7.334A5.644,5.644,0,0,1,8.013,7.2Zm8.207,4.277a8.605,8.605,0,0,1-.113,1.4,8.1,8.1,0,0,1-.319,1.292,7.452,7.452,0,0,1-.5,1.159,6.831,6.831,0,0,1-.66,1,5.9,5.9,0,0,1-.782.808,5.018,5.018,0,0,1-.881.6,4.344,4.344,0,0,1-.951.369c-.036.009-.074.013-.11.021V12.829H10.1v5.293c-.036-.008-.074-.012-.11-.021a4.362,4.362,0,0,1-.951-.369,4.979,4.979,0,0,1-.88-.6,5.815,5.815,0,0,1-.784-.809,6.662,6.662,0,0,1-.658-1,7.5,7.5,0,0,1-.5-1.16,8.168,8.168,0,0,1-.32-1.294,8.634,8.634,0,0,1-.005-2.745H16.112A8.519,8.519,0,0,1,16.22,11.479Z"
                    transform="translate(-2 -2.293)"
                    fill="#fff"
                  />
                </svg>
                RELATAR PROBLEMA{' '}
              </p>
            </a>
          </div>
        </div>
      </Sidenav>
      <OverlaySidenav active={sidenavActive} />
    </>
  );
};

export default Navbar;
