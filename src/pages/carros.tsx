import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../components/Navbar';
import Fab from '../components/Fab';
import Filters from '../components/Filters';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import SearchField from '../components/SearchField';
import SelectButton from '../components/SelectButton';
import Product from '../components/Product';

import { useWindowSize } from '../functions';

import { Button, Title, FilterToggle, AllWrapper } from '../styles/global';
import { ProductWrapper, StyledContainer, BoxAppear } from '../styles/carros';

import { ServerProps } from '../interfaces';

// import { Container } from './styles';

const List: React.FC<ServerProps> = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState('');

  const [filters, setFilters] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://transdesk.com.br/souunus/backend/admin/tkars/site/get.php`,
      {
        method: 'POST',
        body:
          filters.length > 0 || searchParams.length > 0
            ? JSON.stringify({ params: filters, searchParams })
            : ''
      }
    );

    const { data } = await response.json();
    return data;
  };

  const [showCars, setShowCars] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getData().then(data => {
        setShowCars(data);
      });
    }, 500);
  }, [filters, searchParams]);

  const handleKey = event => {
    if (event.key == 'Enter') {
      let { value } = event.target;
      setSearchParams(value);
    }
  };

  useEffect(() => {
    if (router.query.searchParams) {
      // @ts-ignore
      setSearchParams(router.query.searchParams);
    }
  }, []);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterWidthActive, setFilterWidthActive] = useState(false);

  const size = useWindowSize();
  useEffect(() => {
    setFilterWidthActive(size.width > 1400 ? true : false);
  }, [size]);

  let items = [
    {
      name: 'Carros',
      url: '#!'
    }
  ];

  const [carsTitle, setCarsTitle] = useState('');

  useEffect(() => {
    let carsCount = showCars.length;
    if (carsCount > 0) {
      let personChar = '';
      if (carsCount > 1) {
        personChar = 's';
      }

      setCarsTitle(
        carsCount + ' veiculo' + personChar + ' encontrado' + personChar + ' 🤩'
      );
    } else {
      setCarsTitle('Nenhum veículo encontrado 😥');
    }
  }, [showCars]);

  const [selectStatus, setSelectStatus] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    let newArray = [];
    switch (selectValue) {
      case 'mais-baratos':
        newArray = showCars.sort((a, b) => {
          if (a.preco < b.preco) {
            return -1;
          }
          if (a.preco > b.preco) {
            return 1;
          }
          return 0;
        });
        break;
      case 'mais-caros':
        newArray = showCars.sort((a, b) => {
          if (a.preco > b.preco) {
            return -1;
          }
          if (a.preco < b.preco) {
            return 1;
          }
          return 0;
        });
        break;
      case 'menos-rodados':
        newArray = showCars.sort((a, b) => {
          if (a.quilometragem < b.quilometragem) {
            return -1;
          }
          if (a.quilometragem > b.quilometragem) {
            return 1;
          }
          return 0;
        });
        break;
      case 'mais-rodados':
        newArray = showCars.sort((a, b) => {
          if (a.quilometragem > b.quilometragem) {
            return -1;
          }
          if (a.quilometragem < b.quilometragem) {
            return 1;
          }
          return 0;
        });
        break;
      case 'por-marca':
        newArray = showCars.sort((a, b) => {
          if (a.marca > b.marca) {
            return -1;
          }
          if (a.marca < b.marca) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        newArray = showCars.sort((a, b) => {
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          return 0;
        });
        break;
    }
    setShowCars(newArray);

    setTimeout(() => {
      setSelectStatus(true);
      setTimeout(() => {
        setSelectStatus(false);
      }, 5);
    }, 5);
  }, [selectValue]);

  const filterChange = event => {
    setSearchParams('');

    setTimeout(() => {
      setFilters(event);
    }, 250);
  };

  return (
    <AllWrapper>
      <Head>
        <title>As melhores ofertas de carros | TKars</title>

        <meta name="og:site_name" content="TKars" />
        <meta name="author" content="Gabriel Sabara Krüger" />
        <link rel="canonical" href="https://diretodotrecho.com.br/" />
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
      <Navbar handleKey={handleKey} />

      <Row>
        {/* Filters */}
        <Filters
          className="col-lg-3"
          active={filterWidthActive}
          type="full"
          filterChange={filterChange}
        />
        {/* Filters */}
        <Filters active={filterOpen} filterChange={filterChange} />

        <Col xxl={3} lg={0} />

        <Col xxl={9} lg={12} className="padding-right-0-480px">
          <Container>
            <Row>
              <Col lg={12}>
                <Breadcrumb items={items} />
              </Col>
            </Row>

            <BoxAppear>
              <Row>
                <Col lg={12}>
                  <Title> {carsTitle} </Title>
                </Col>
              </Row>

              <Row className="justify-content-between">
                <Col xl={5} lg={5} md={7} className="d-flex">
                  <SearchField handleKey={handleKey} />
                </Col>

                <Col
                  xl={5}
                  lg={6}
                  md={5}
                  className="d-flex align-items-center justify-content-end-1400pxmax hide-768px"
                >
                  <Button
                    className="show-1400px filter"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.888"
                      height="15"
                      viewBox="0 0 15.888 15"
                    >
                      <g id="bx-slider-alt" transform="translate(-2 -2.5)">
                        <path
                          id="Caminho_20"
                          data-name="Caminho 20"
                          d="M6.342,13.265a2.761,2.761,0,0,0-2.634,1.985H2v1.588H3.708a2.74,2.74,0,0,0,5.269,0h8.813V15.251H8.976A2.761,2.761,0,0,0,6.342,13.265Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,6.342,17.236Zm7.1-8.736a2.761,2.761,0,0,0-2.634,1.985H2v1.588h8.813a2.74,2.74,0,0,0,5.269,0h1.708V10.485H16.081A2.761,2.761,0,0,0,13.447,8.5Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,13.447,12.471Z"
                          transform="translate(0 -1.324)"
                        />
                        <path
                          id="Caminho_21"
                          data-name="Caminho 21"
                          d="M10.556,4.485a2.741,2.741,0,0,0-5.269,0H2V6.074H5.287a2.741,2.741,0,0,0,5.269,0h7.333V4.485ZM7.921,6.471A1.191,1.191,0,1,1,9.105,5.28,1.189,1.189,0,0,1,7.921,6.471Z"
                          transform="translate(0)"
                        />
                      </g>
                    </svg>
                  </Button>
                  <SelectButton
                    active={selectStatus}
                    value={selectValue}
                    changeValue={item => setSelectValue(item)}
                    changeStatus={() => setSelectStatus(!selectStatus)}
                  />
                </Col>

                <Col
                  md={12}
                  sm={12}
                  className="show-768px justify-content-between"
                >
                  <FilterToggle
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="show-1400px filter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.888"
                      height="15"
                      viewBox="0 0 15.888 15"
                    >
                      <g id="bx-slider-alt" transform="translate(-2 -2.5)">
                        <path
                          id="Caminho_20"
                          data-name="Caminho 20"
                          d="M6.342,13.265a2.761,2.761,0,0,0-2.634,1.985H2v1.588H3.708a2.74,2.74,0,0,0,5.269,0h8.813V15.251H8.976A2.761,2.761,0,0,0,6.342,13.265Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,6.342,17.236Zm7.1-8.736a2.761,2.761,0,0,0-2.634,1.985H2v1.588h8.813a2.74,2.74,0,0,0,5.269,0h1.708V10.485H16.081A2.761,2.761,0,0,0,13.447,8.5Zm0,3.971a1.191,1.191,0,1,1,1.184-1.191A1.189,1.189,0,0,1,13.447,12.471Z"
                          transform="translate(0 -1.324)"
                        />
                        <path
                          id="Caminho_21"
                          data-name="Caminho 21"
                          d="M10.556,4.485a2.741,2.741,0,0,0-5.269,0H2V6.074H5.287a2.741,2.741,0,0,0,5.269,0h7.333V4.485ZM7.921,6.471A1.191,1.191,0,1,1,9.105,5.28,1.189,1.189,0,0,1,7.921,6.471Z"
                          transform="translate(0)"
                        />
                      </g>
                    </svg>
                    <p> FILTRAR </p>
                  </FilterToggle>

                  <SelectButton
                    active={selectStatus}
                    value={selectValue}
                    changeValue={item => setSelectValue(item)}
                    changeStatus={() => setSelectStatus(!selectStatus)}
                  />
                </Col>
              </Row>
            </BoxAppear>
          </Container>

          <StyledContainer>
            <ProductWrapper>
              {showCars.map((item, index) => {
                return (
                  <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={4}
                    sm={12}
                    className="width-unset-1920px"
                    key={index}
                  >
                    <Product item={item} />
                  </Col>
                );
              })}
            </ProductWrapper>
          </StyledContainer>
        </Col>
      </Row>

      {/* Fab */}
      <Fab />

      {/* Footer */}
      <Footer />
    </AllWrapper>
  );
};

export default List;
