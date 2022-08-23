import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

// Components
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import SearchBox from '../components/SearchBox';
import Marca from '../components/Marca';
import Product from '../components/Product';
import Ad from '../components/Ad';
import Footer from '../components/Footer';
import Fab from '../components/Fab';
import Filters from '../components/Filters';

import useDrag from '../functions/useDrag';
import { MarcasArray } from '../functions/list';

import { BannerWrapper } from '../styles/';
import { Title, Subtitle, Divider, Button, Box } from '../styles/global';

import { ServerProps } from '../interfaces/';

const Home: React.FC<ServerProps> = ({ lessPrice, moreViewed }) => {
  const [lessPriceArray, setLessPriceArray] = useState({});
  const [moreViewedArray, setMoreViewedArray] = useState({});
  useEffect(() => {
    setLessPriceArray(lessPrice);
    setMoreViewedArray(moreViewed);
  }, []);

  const [filterOpen, setFilterOpen] = useState(false);

  let banners = [
    {
      id: 1,
      nome: 'HYUNDAI HB20',
      description:
        'Para a calda do seu pudim de leite condensado dar certo, fique sempre com a proporção de meia medida de água para uma medida de açúcar.'
    },
    {
      id: 2,
      nome: 'CHEVROLET ONIX',
      description:
        'Para a calda do seu pudim de leite condensado dar certo, fique sempre com a proporção de meia medida de água para uma medida de açúcar.'
    },
    {
      id: 3,
      nome: 'CHEVROLET CRUZE',
      description:
        'Para a calda do seu pudim de leite condensado dar certo, fique sempre com a proporção de meia medida de água para uma medida de açúcar.'
    },
    {
      id: 4,
      nome: 'TOYOTA COROLLA',
      description:
        'Para a calda do seu pudim de leite condensado dar certo, fique sempre com a proporção de meia medida de água para uma medida de açúcar.'
    }
  ];

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = //@ts-ignore

      ({ scrollContainer }: scrollVisibilityApiType) =>
      (ev: React.MouseEvent) =>
        dragMove(ev, posDiff => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        });

  const handleRedirect = itemId => {
    location.href = '#!';
  };
  return (
    <>
      <Head>
        <title> Os melhores carros para você | TKars </title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Banners */}
      <BannerWrapper onMouseLeave={dragStop}>
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {banners.map((item, index) => (
            <div
              className={`margin-banner-${index}`}
              key={index}
              onClick={() => handleRedirect(item.id)}
            >
              <Banner item={item} />
            </div>
          ))}
        </ScrollMenu>
      </BannerWrapper>

      {/* Caixa de pesquisa */}
      <Container>
        <Row className="justify-content-center margin-64px ">
          <Col lg={10} md={12} sm={12} xs={12} className="padding-0">
            <SearchBox filterClick={() => setFilterOpen(!filterOpen)} />
          </Col>
        </Row>
      </Container>

      {/* Filtrors */}
      <Filters
        active={filterOpen}
        filterChange={() => setFilterOpen(!filterOpen)}
      />

      {/* Marcas */}
      <Container>
        <Row>
          <Col lg={12} className="d-flex">
            <Title> Marcas </Title>
            <Subtitle> arraste para o lado </Subtitle>
          </Col>
        </Row>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {MarcasArray.map((item, index) => {
              return <Marca name={item} key={index} />;
            })}
          </ScrollMenu>
        </div>

        <Divider />
      </Container>

      {/* Produtos mais vistos */}
      <Container>
        <Row>
          <Col lg={12}>
            <Title> Mais vistos </Title>
          </Col>
        </Row>

        <Row>
          {moreViewed.map((item, index) => {
            return (
              <Col lg={3} md={4} sm={12} key={index}>
                {/* @ts-ignore */}
                <Product item={item} className={`product-${index}`} />
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col lg={3}>
            <Link href="/carros">
              <a>
                <Button className="margin-top-24px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14.4"
                    viewBox="0 0 16 14.4"
                  >
                    <path
                      id="bxs-car"
                      d="M17.018,8.924,15.923,5.641A2.4,2.4,0,0,0,13.647,4H6.353A2.4,2.4,0,0,0,4.077,5.641L2.982,8.924A1.6,1.6,0,0,0,2,10.4v4a1.593,1.593,0,0,0,.8,1.378V17.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V16h9.6v1.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V15.778A1.592,1.592,0,0,0,18,14.4v-4A1.6,1.6,0,0,0,17.018,8.924ZM6.353,5.6h7.294a.8.8,0,0,1,.759.547L15.29,8.8H4.71l.884-2.653A.8.8,0,0,1,6.353,5.6ZM4.8,13.6A1.2,1.2,0,1,1,6,12.4,1.2,1.2,0,0,1,4.8,13.6Zm10.4,0a1.2,1.2,0,1,1,1.2-1.2A1.2,1.2,0,0,1,15.2,13.6Z"
                      transform="translate(-2 -4)"
                    />
                  </svg>
                  <p>VER MAIS</p>
                </Button>
              </a>
            </Link>
          </Col>
        </Row>

        <Divider />
      </Container>

      {/* Anúncio */}
      <Container>
        <Row>
          <Col lg={12}>
            <Ad />
          </Col>
        </Row>

        <Divider />
      </Container>

      {/* Produtos mais baratos */}
      <Container>
        <Row>
          <Col lg={12}>
            <Title> Mais baratos </Title>
          </Col>
        </Row>

        <Row>
          {lessPrice.map((item, index) => {
            return (
              <Col lg={3} md={4} sm={12} key={index}>
                {/* @ts-ignore */}
                <Product item={item} className={`product-${index}`} />
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col lg={3}>
            <Link href="/carros">
              <a>
                <Button className="margin-top-24px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14.4"
                    viewBox="0 0 16 14.4"
                  >
                    <path
                      id="bxs-car"
                      d="M17.018,8.924,15.923,5.641A2.4,2.4,0,0,0,13.647,4H6.353A2.4,2.4,0,0,0,4.077,5.641L2.982,8.924A1.6,1.6,0,0,0,2,10.4v4a1.593,1.593,0,0,0,.8,1.378V17.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V16h9.6v1.6a.8.8,0,0,0,.8.8h.8a.8.8,0,0,0,.8-.8V15.778A1.592,1.592,0,0,0,18,14.4v-4A1.6,1.6,0,0,0,17.018,8.924ZM6.353,5.6h7.294a.8.8,0,0,1,.759.547L15.29,8.8H4.71l.884-2.653A.8.8,0,0,1,6.353,5.6ZM4.8,13.6A1.2,1.2,0,1,1,6,12.4,1.2,1.2,0,0,1,4.8,13.6Zm10.4,0a1.2,1.2,0,1,1,1.2-1.2A1.2,1.2,0,0,1,15.2,13.6Z"
                      transform="translate(-2 -4)"
                    />
                  </svg>
                  <p>VER MAIS</p>
                </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Não achou o que está procurando? */}
      <Container>
        <Row className="justify-content-center margin-top-64px">
          <Col lg={10}>
            <Box>
              <p> Não achou o que está procurando? 😱 </p>
              <p>
                Entre em contato para que possamos entender as suas necessidades
                e encontrar o melhor carro para você já sair dirigindo 🤩
              </p>
              <Button type="whatsapp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16.076"
                  viewBox="0 0 16 16.076"
                >
                  <path
                    id="bxl-whatsapp"
                    d="M16.669,5.337A7.969,7.969,0,0,0,4.13,14.949L3,19.076l4.223-1.108a7.97,7.97,0,0,0,3.807.97h0a7.969,7.969,0,0,0,5.635-13.6M11.034,17.593h0a6.608,6.608,0,0,1-3.37-.924l-.241-.144-2.506.658.668-2.443-.157-.25a6.621,6.621,0,1,1,5.609,3.1m3.632-4.96c-.2-.1-1.178-.581-1.36-.648s-.314-.1-.447.1-.515.647-.631.78-.233.149-.431.05a5.437,5.437,0,0,1-1.6-.988,6,6,0,0,1-1.107-1.379c-.116-.2-.012-.307.088-.406s.2-.233.3-.349a1.361,1.361,0,0,0,.2-.332.364.364,0,0,0-.017-.349c-.05-.1-.448-1.08-.614-1.478s-.325-.335-.447-.34-.248-.007-.381-.007a.733.733,0,0,0-.532.248,2.231,2.231,0,0,0-.7,1.66,3.877,3.877,0,0,0,.813,2.06,8.875,8.875,0,0,0,3.4,3.006,11.773,11.773,0,0,0,1.135.42,2.735,2.735,0,0,0,1.254.079,2.048,2.048,0,0,0,1.344-.946,1.665,1.665,0,0,0,.116-.947c-.05-.083-.184-.134-.382-.233"
                    transform="translate(-3 -3)"
                    fillRule="evenodd"
                  />
                </svg>
                <p>ENTRAR EM CONTATO</p>
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>

      {/* Fab button */}
      <Fab />

      {/* Rodapé */}
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://transdesk.com.br/pbe/souunus/backend/admin/tkars/site/get`
  );
  const { lessPrice, moreViewed } = await response.json();

  return {
    props: {
      lessPrice,
      moreViewed
    },
    revalidate: 720
  };
};
