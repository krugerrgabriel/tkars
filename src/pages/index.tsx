import React, { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import { Container, Row, Col } from 'react-bootstrap';

// Components
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Banner from '../components/Banner';
import SearchBox from '../components/SearchBox';
import Marca from '../components/Marca';
import Product from '../components/Product';
import Ad from '../components/Ad';
import Footer from '../components/Footer';
import Fab from '../components/Fab';
import Filters from '../components/Filters';
import ScrollMenu from '../components/ScrollMenu';

import { MarcasArray } from '../functions/list';

import { BannerWrapper } from '../styles/';
import { Title, Subtitle, Divider, Box, AllWrapper } from '../styles/global';

import { ServerProps } from '../interfaces/';

const Home: React.FC<ServerProps> = ({
  data,
  lessPrice,
  moreViewed,
  carsNumber
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilter = event => {
    Router.push({
      pathname: '/carros'
    });
  };

  const handleKey = value => {
    console.log(value);

    Router.push(
      {
        pathname: '/carros',
        query: {
          searchParams: value
        }
      },
      '/carros',
      { shallow: true }
    );
  };

  const handleLink = value => {
    Router.push(
      {
        pathname: '/carros',
        query: {
          orderBy: value
        }
      },
      '/carros',
      { shallow: true }
    );
  };

  const handleRedirect = itemId => {
    location.href = '#!';
  };
  return (
    <AllWrapper>
      <Head>
        <title>Os melhores carros para você | TKars</title>

        <meta name="og:site_name" content="TKars" />
        <meta name="author" content="Gabriel Sabara Krüger" />
        <link rel="canonical" href="https://tkars.vercel.app/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="locale" content="pt_BR" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Os melhores carros para você estão aqui na TKars"
        />
        <meta
          property="og:title"
          content="Os melhores carros para você | TKars"
        />
        <meta property="og:url" content={`https://tkars.vercel.app`} />
        <meta
          property="og:description"
          content="Os melhores carros para você estão aqui na TKars"
        />
        <meta
          property="og:image"
          content={`https://transdesk.com.br/souunus/assets/img/veiculos/6_og.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TKars" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="Carros" />
        <meta property="article:published_time" content="24/08/2022" />
        <meta property="article:tag" content="Carros" />
        {/* @ts-ignore */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@krugerrgabriel" />
        <meta
          name="twitter:title"
          content="Os melhores carros para você estão aqui na TKars"
        />
        <meta
          name="twitter:description"
          content="Os melhores carros para você estão aqui na TKars"
        />
        <meta name="twitter:creator" content="@krugerrgabriel" />
      </Head>

      {/* Navbar */}
      <Navbar handleKey={handleKey} handleLink={handleLink} />

      {/* Banners */}
      <BannerWrapper>
        <ScrollMenu>
          {/* @ts-ignore */}
          {data.slice(0, 5).map((item, index) => (
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
            <SearchBox carsNumber={carsNumber} filterClick={handleFilter} />
          </Col>
        </Row>
      </Container>

      {/* Filtros */}
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
        <ScrollMenu>
          {MarcasArray.map((item, index) => {
            return (
              <div>
                <Marca name={item} key={index} />
              </div>
            );
          })}
        </ScrollMenu>
        <Divider />
      </Container>

      {/* Produtos mais novos */}
      <Container>
        <Row>
          <Col lg={12}>
            <Title> Novidade </Title>
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
            <Button
              icon="/bxs-car.svg"
              iconAlt="Ícone de carro para ver todas as ofertas | TKars"
              link="/carros"
              label="VER TUDO"
              className="margin-top-24px"
            />
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
            <Button
              icon="/bxs-car.svg"
              iconAlt="Ícone de carro para ver todas as ofertas | TKars"
              link="/carros"
              label="VER MAIS"
              className="margin-top-24px"
            />
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
              <Button
                type="whatsapp"
                icon="/bxl-whatsapp.svg"
                iconAlt="Ícone de entrar em contato com WhatsApp | TKars"
                link="https://api.whatsapp.com/send?phone=5545988134329&text=Olá! Acessei o site da TKars e gostaria de tirar uma dúvida 😁"
                label="ENTRAR EM CONTATO"
              />
            </Box>
          </Col>
        </Row>
      </Container>

      {/* Fab button */}
      <Fab />

      {/* Rodapé */}
      <Footer />
    </AllWrapper>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://transdesk.com.br/souunus/backend/admin/tkars/site/get.php`
  );
  const { data, lessPrice, moreViewed } = await response.json();

  return {
    props: {
      data,
      lessPrice,
      moreViewed,
      carsNumber: data.length
    },
    revalidate: 720
  };
};
