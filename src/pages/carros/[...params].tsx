import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import Fab from '../../components/Fab';
import Filters from '../../components/Filters';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import InputField from '../../components/InputField';
import SelectButton from '../../components/SelectButton';
import Product from '../../components/Product';

import { CarrosArray } from '../../functions/list';

import { Button, Title } from '../../styles/global';
import { ProductWrapper } from '../../styles/carros';

import { ServerProps } from '../../interfaces';

// import { Container } from './styles';

const List: React.FC<ServerProps> = () => {
  let items = [
    {
      name: 'Carros',
      url: '#!'
    }
  ];

  const [carsTitle, setCarsTitle] = useState('');
  const [carsCount, setCarsCount] = useState(0);

  useEffect(() => {
    setCarsCount(CarrosArray.length);
  }, []);

  useEffect(() => {
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
  }, [carsCount]);

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
          active={true}
          type="full"
          filterChange={event => console.log(event)}
        />

        <Col lg={3} />

        <Col lg={9}>
          <Container>
            <Row>
              <Col lg={12}>
                <Breadcrumb items={items} />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Title> {carsTitle} </Title>
              </Col>
            </Row>

            <Row className="justify-content-between">
              <Col lg={5} className="d-flex">
                <InputField
                  type="text"
                  placeholder="Digite o modelo, marca, ano, ficha técnica..."
                  icon={`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><g id="search" transform="translate(-0.5 0.5)"><path id="Caminho_17" data-name="Caminho 17" d="M19.721,18.38l-3.21-3.2a7.478,7.478,0,0,0,1.6-4.626,7.553,7.553,0,1,0-7.553,7.553,7.478,7.478,0,0,0,4.626-1.6l3.2,3.21a.948.948,0,1,0,1.341-1.341ZM4.888,10.553a5.665,5.665,0,1,1,5.665,5.665,5.665,5.665,0,0,1-5.665-5.665Z" transform="translate(-2.5 -3.5)"/></g></svg>`}
                />

                <Button type="small">
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

              <Col lg={5} className="d-flex">
                <SelectButton
                  active={selectStatus}
                  value={selectValue}
                  changeValue={item => setSelectValue(item)}
                  changeStatus={() => setSelectStatus(!selectStatus)}
                />
              </Col>
            </Row>
          </Container>

          <ProductWrapper>
            {CarrosArray.map((item, index) => {
              return (
                <Product
                  margin={true}
                  fixedWidth={true}
                  key={index} /* @ts-ignore */
                  item={item}
                />
              );
            })}
          </ProductWrapper>
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
