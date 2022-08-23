import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../components/Navbar';
import Fab from '../components/Fab';
import Filters from '../components/Filters';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import SelectButton from '../components/SelectButton';
import Product from '../components/Product';

import { useWindowSize } from '../functions';

import { Button, Title, FilterToggle } from '../styles/global';
import { ProductWrapper, StyledContainer, BoxAppear } from '../styles/carros';

import { ServerProps } from '../interfaces';

// import { Container } from './styles';

const getData = async () => {
  const response = await fetch(
    `https://transdesk.com.br/souunus/backend/admin/tkars/site/get`
  );
  const { data } = await response.json();
  return data;
};

const List: React.FC<ServerProps> = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setCarros(data);
    });
  }, []);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterWidthActive, setFilterWidthActive] = useState(true);

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
    let carsCount = carros.length;
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
  }, [carros]);

  const [selectStatus, setSelectStatus] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  return (
    <>
      <Head>
        <title> As melhores ofertas de carros | TKars </title>
      </Head>

      {/* Navbar */}
      <Navbar />

      <Row>
        {/* Filters */}
        <Filters
          className="col-lg-3"
          active={filterWidthActive}
          type="full"
          filterChange={event => console.log(event)}
        />
        {/* Filtrors */}
        <Filters
          active={filterOpen}
          filterChange={() => setFilterOpen(!filterOpen)}
        />

        <Col xxl={3} lg={0} />

        <Col xxl={9} lg={12}>
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
                  <InputField
                    type="text"
                    placeholder="Digite o modelo, marca, ano, ficha técnica..."
                    icon={`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><g id="search" transform="translate(-0.5 0.5)"><path id="Caminho_17" data-name="Caminho 17" d="M19.721,18.38l-3.21-3.2a7.478,7.478,0,0,0,1.6-4.626,7.553,7.553,0,1,0-7.553,7.553,7.478,7.478,0,0,0,4.626-1.6l3.2,3.21a.948.948,0,1,0,1.341-1.341ZM4.888,10.553a5.665,5.665,0,1,1,5.665,5.665,5.665,5.665,0,0,1-5.665-5.665Z" transform="translate(-2.5 -3.5)"/></g></svg>`}
                  />

                  <Button type="small" className="hide-768px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19.001"
                      viewBox="0 0 19 19.001"
                    >
                      <g id="bx-zoom-in" transform="translate(-2 -2)">
                        <path
                          id="Caminho_152"
                          data-name="Caminho 152"
                          d="M10.125,2A8.125,8.125,0,1,0,15.1,16.536L19.564,21,21,19.565,16.535,15.1A8.111,8.111,0,0,0,10.125,2Zm0,14.219a6.094,6.094,0,1,1,6.094-6.094A6.1,6.1,0,0,1,10.125,16.219Z"
                        />
                      </g>
                    </svg>
                  </Button>
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
              {carros?.map((item, index) => {
                return (
                  <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={4}
                    sm={12}
                    className="width-unset-1920px"
                  >
                    <Product key={index} item={item} />
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
    </>
  );
};

export default List;
