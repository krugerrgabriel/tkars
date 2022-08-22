import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import SearchField from '../SearchField/';

import { Body, LogoWrapper, SidenavWrapper, NavbarMargin } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarMargin />
      <Body>
        <Container className="h-100">
          <Row className="justify-content-between h-100">
            <Col
              lg={1}
              className="d-flex justify-content-start align-items-center"
            >
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
            </Col>

            <Col lg={4} className="d-flex align-items-center">
              <SearchField />
            </Col>

            <Col
              lg={1}
              className="d-flex justify-content-end align-items-center"
            >
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
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default Navbar;
