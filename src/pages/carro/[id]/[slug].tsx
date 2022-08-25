import React, { useState, useRef, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import { Container, Row, Col } from 'react-bootstrap';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import Navbar from '../../../components/Navbar';
import Fab from '../../../components/Fab';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import Ad from '../../../components/Ad';
import Product from '../../../components/Product';

import {
  preventDragHandler,
  numberWithCommas,
  returnFormattedDate,
  formatBRL,
  useWindowSize
} from '../../../functions/';
import useDrag from '../../../functions/useDrag';

import { Wrapper, InfoBox, FloatingBox } from '../../../styles/carro';
import {
  Divider,
  Title,
  Button,
  Loader,
  AllWrapper
} from '../../../styles/global';
import { BannerWrapper } from '../../../styles/';

import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';

import { ServerProps } from '../../../interfaces';

function onWheel(apiObj, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const Carro: React.FC<ServerProps> = ({ data, recommended }) => {
  const CarImage: React.FC<{ item: string; index?: number }> = ({
    item,
    index
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <Wrapper onDragStart={preventDragHandler}>
        {!isLoaded && <Loader />}
        <Image
          src={`https://transdesk.com.br/souunus/assets/img/veiculos/${data.id}_${item}`}
          alt="Logo da TKARS"
          layout="fill"
          objectFit="cover"
          onLoad={() => setIsLoaded(true)}
          priority={index == 0 ? true : false}
        />
      </Wrapper>
    );
  };
  let items = [
    {
      name: 'Carros',
      url: '/carros'
    },
    {
      name: data.nome,
      url: '#!'
    }
  ];

  const [minInfoHeight, setMinInfoHeight] = useState(0);
  const [maxInfoHeight, setMaxInfoHeight] = useState(0);
  const [floatingHeight, setFloatingHeight] = useState(0);
  const [fichaTecnicaReveal, setFichaTecnicaReveal] = useState('show');
  const infoRef = useRef(null);

  useEffect(() => {
    setMaxInfoHeight(infoRef.current.offsetHeight);
  }, [infoRef]);
  useEffect(() => {
    setFichaTecnicaReveal('');

    setTimeout(() => {
      setMinInfoHeight(infoRef.current.offsetHeight);
    }, 1000);
  }, [maxInfoHeight]);
  useEffect(() => {
    if (fichaTecnicaReveal == 'show') {
      setFloatingHeight(maxInfoHeight);
    } else {
      setFloatingHeight(minInfoHeight);
    }
  }, [fichaTecnicaReveal]);

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = //@ts-ignore

      ({ scrollContainer }: scrollVisibilityApiType) =>
      (ev: React.MouseEvent) =>
        dragMove(ev, posDiff => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        });

  let link = `https://api.whatsapp.com/send?phone=5545988134329&text=*[TKARS]*%0ahttps://tkars.vercel.app/carro/${data.id}/${data.slug}%0a%0aMe interessei por esse *${data.nome}* e gostaria de saber mais sobre 😁`;

  const handleShare = () => {
    navigator.share({
      title: '[TKARS] ' + data.nome,
      text:
        data.nome + ' ' + data.modelo + ' por apenas ' + formatBRL(data.preco),
      url: `https://tkars.vercel.app/carro/${data.id}/${data.slug}`
    });
  };

  const [heightFix, setHeightFix] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    setHeightFix(size.width > 992 ? true : false);
  }, [size]);

  const handleKey = value => {
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

  return (
    <AllWrapper>
      <Head>
        <title>{data.nome} | TKars</title>

        <meta name="og:site_name" content="TKars" />
        <meta name="author" content="Gabriel Sabara Krüger" />
        <link rel="canonical" href="https://diretodotrecho.com.br/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="locale" content="pt_BR" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={data.nome + ' ' + data.modelo} />
        <meta property="og:title" content={data.nome + ' ' + data.modelo} />
        <meta
          property="og:url"
          content={`https://tkars.vercel.app/carro/${data.id}/${data.slug}`}
        />
        <meta
          property="og:description"
          content={data.nome + ' ' + data.modelo}
        />
        <meta
          property="og:image"
          content={`https://transdesk.com.br/souunus/assets/img/veiculos/${data.id}_og.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={data.nome + ' ' + data.modelo + ' | TKars'}
        />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content={
            data.nome +
            ', ' +
            data.marca +
            ', ' +
            data.modelo +
            ', ' +
            data.motorizacao
          }
        />
        <meta property="article:published_time" content={data.createdAt} />
        <meta
          property="article:tag"
          content={
            data.nome +
            ', ' +
            data.marca +
            ', ' +
            data.modelo +
            ', ' +
            data.motorizacao
          }
        />
        {/* @ts-ignore */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:site" content="@krugerrgabriel" />
        <meta name="twitter:title" content={data.nome + ' ' + data.modelo} />
        <meta
          name="twitter:description"
          content={data.nome + ' ' + data.modelo}
        />
        <meta name="twitter:creator" content="@krugerrgabriel" />
      </Head>

      <Navbar handleKey={handleKey} />

      {/* Banners */}
      <BannerWrapper onMouseLeave={dragStop}>
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
          onWheel={onWheel}
          LeftArrow={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="11.23" viewBox="0 0 18 11.23"><path id="bx-chevron-down" d="M22.063,9.293l-6.77,6.77-6.77-6.77-2.23,2.23,9,9,9-9Z" transform="translate(-6.293 -9.293)" fill="#fff"/></svg>`}
        >
          {data.files.map((item, index) => (
            <CarImage key={index} item={item + '.jpg'} index={index} />
          ))}
        </ScrollMenu>
      </BannerWrapper>

      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12} ref={infoRef}>
            <InfoBox>
              <Breadcrumb items={items} />

              <Row className="justify-content-between">
                <Col lg={3}>
                  <div className="marca">
                    <p>{data.marca}</p>
                    <div className={`marca-wrapper ${data.marca}`}>
                      <Image
                        src={`/marcas/${data.marca}.${
                          data.marca == 'chevrolet' ? 'png' : 'svg'
                        }`}
                        alt="Logo da TKARS"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={3} className="d-flex f-column justify-content-end">
                  <div className="icon-wrapper" onClick={handleShare}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.8"
                      height="24"
                      viewBox="0 0 22.8 24"
                    >
                      <g id="bx-share-alt" transform="translate(-2 -2)">
                        <ellipse
                          id="Elipse_20"
                          data-name="Elipse 20"
                          cx="1.5"
                          cy="2"
                          rx="1.5"
                          ry="2"
                          transform="translate(18.895 19.89)"
                          fill="none"
                        />
                        <ellipse
                          id="Elipse_21"
                          data-name="Elipse 21"
                          cx="2"
                          cy="1.5"
                          rx="2"
                          ry="1.5"
                          transform="translate(4 11.948)"
                          fill="none"
                        />
                        <ellipse
                          id="Elipse_22"
                          data-name="Elipse 22"
                          cx="1.5"
                          cy="2"
                          rx="1.5"
                          ry="2"
                          transform="translate(18.895 4)"
                          fill="none"
                        />
                        <path
                          id="Caminho_119"
                          data-name="Caminho 119"
                          d="M6.2,17.6a4.174,4.174,0,0,0,2.828-1.116l7.512,4.292a4.223,4.223,0,1,0,1.231-2.06L10.26,14.424a4.018,4.018,0,0,0,.13-.922L17.77,9.284A4.186,4.186,0,1,0,16.4,6.2a4.18,4.18,0,0,0,.14,1.024l-6.821,3.9A4.2,4.2,0,1,0,6.2,17.6ZM20.6,20a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,20.6,20Zm0-15.6a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,20.6,4.4ZM6.2,11.6a1.8,1.8,0,1,1-1.8,1.8A1.8,1.8,0,0,1,6.2,11.6Z"
                        />
                      </g>
                    </svg>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <h1> {data.nome} </h1>
                </Col>
                <Col lg={12}>
                  <h3> {data.modelo} </h3>
                </Col>
              </Row>

              <Row className="show-592px">
                <Col lg={12}>
                  <h2> {formatBRL(data.preco)} </h2>
                </Col>
              </Row>

              <Row>
                <div className="items">
                  <div className="item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.6"
                        height="14"
                        viewBox="0 0 12.6 14"
                      >
                        <g id="bx-calendar" transform="translate(0)">
                          <path
                            id="Caminho_82"
                            data-name="Caminho 82"
                            d="M7,11H8.4v1.4H7Zm0,2.806H8.4v1.4H7ZM9.8,11h1.4v1.4H9.8Zm0,2.806h1.4v1.4H9.8ZM12.591,11h1.4v1.4h-1.4Zm0,2.806h1.4v1.4h-1.4Z"
                            transform="translate(-4.194 -4.705)"
                          />
                          <path
                            id="Caminho_83"
                            data-name="Caminho 83"
                            d="M4.4,16h9.8a1.4,1.4,0,0,0,1.4-1.4V4.8a1.4,1.4,0,0,0-1.4-1.4H12.8V2H11.4V3.4H7.2V2H5.8V3.4H4.4A1.4,1.4,0,0,0,3,4.8v9.8A1.4,1.4,0,0,0,4.4,16Zm9.8-9.8v8.4H4.4V6.2Z"
                            transform="translate(-3 -2)"
                          />
                        </g>
                      </svg>
                      <p> ANO </p>
                    </div>
                    <p> {data.ano} </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <g id="bx-trip" transform="translate(0 0)">
                          <path
                            id="Caminho_84"
                            data-name="Caminho 84"
                            d="M11,14.6H5.153a1.75,1.75,0,1,1,0-3.5h4.9a2.45,2.45,0,1,0,0-4.9H6.652A6.868,6.868,0,0,1,5.7,7.6h4.355a1.05,1.05,0,1,1,0,2.1h-4.9a3.15,3.15,0,1,0,0,6.3h6.722A7.289,7.289,0,0,1,11,14.6ZM4.1,2A2.1,2.1,0,0,0,2,4.1,4.511,4.511,0,0,0,4.1,7.6,4.513,4.513,0,0,0,6.2,4.1,2.1,2.1,0,0,0,4.1,2Zm0,3.15A1.05,1.05,0,1,1,5.153,4.1,1.051,1.051,0,0,1,4.1,5.15Z"
                            transform="translate(-2 -2)"
                          />
                          <path
                            id="Caminho_85"
                            data-name="Caminho 85"
                            d="M18.094,14A2.1,2.1,0,0,0,16,16.094a4.5,4.5,0,0,0,2.094,3.49,4.5,4.5,0,0,0,2.094-3.49A2.1,2.1,0,0,0,18.094,14Zm0,3.141a1.047,1.047,0,1,1,1.047-1.047A1.047,1.047,0,0,1,18.094,17.141Z"
                            transform="translate(-6.188 -5.583)"
                          />
                        </g>
                      </svg>

                      <p> Quilometragem </p>
                    </div>
                    <p> {numberWithCommas(data.quilometragem)}km </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        id="bx-dialpad-alt"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.667"
                        height="14"
                        viewBox="0 0 18.667 14"
                      >
                        <circle
                          id="Elipse_14"
                          data-name="Elipse 14"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                          transform="translate(6.996)"
                        />
                        <circle
                          id="Elipse_15"
                          data-name="Elipse 15"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                        />
                        <circle
                          id="Elipse_16"
                          data-name="Elipse 16"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                          transform="translate(13.993)"
                        />
                        <circle
                          id="Elipse_17"
                          data-name="Elipse 17"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                          transform="translate(6.996 9.326)"
                        />
                        <circle
                          id="Elipse_18"
                          data-name="Elipse 18"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                          transform="translate(0 9.326)"
                        />
                        <circle
                          id="Elipse_19"
                          data-name="Elipse 19"
                          cx="2.337"
                          cy="2.337"
                          r="2.337"
                          transform="translate(13.993 9.326)"
                        />
                        <line
                          id="Linha_1"
                          data-name="Linha 1"
                          y2="7.321"
                          transform="translate(2.337 2.797)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1"
                        />
                        <line
                          id="Linha_2"
                          data-name="Linha 2"
                          y2="6.734"
                          transform="translate(9.333 2.797)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1"
                        />
                        <line
                          id="Linha_3"
                          data-name="Linha 3"
                          y2="6.734"
                          transform="translate(16.422 2.797)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1"
                        />
                        <line
                          id="Linha_4"
                          data-name="Linha 4"
                          x2="14.646"
                          transform="translate(2.337 6.724)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1"
                        />
                      </svg>

                      <p> CÂMBIO </p>
                    </div>
                    <p> MANUAL </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.778"
                        height="14"
                        viewBox="0 0 14.778 14"
                      >
                        <path
                          id="bx-gas-pump"
                          d="M15.7,5.707l.011-.013L12.6,3.173l-.98,1.209,1.608,1.3a2.326,2.326,0,0,0-1.085,2.378,2.361,2.361,0,0,0,1.217,1.643,2.153,2.153,0,0,0,1.854.153L15.2,14.667a.782.782,0,0,1-.474.717.789.789,0,0,1-.607,0,.774.774,0,0,1-.474-.717l.018-1.556a2.325,2.325,0,0,0-.682-1.648,2.36,2.36,0,0,0-.742-.5,2.333,2.333,0,0,0-.909-.184h-.778V4.556A1.557,1.557,0,0,0,9,3H3.556A1.557,1.557,0,0,0,2,4.556V15.444A1.557,1.557,0,0,0,3.556,17H9a1.557,1.557,0,0,0,1.556-1.556V12.333h.778a.781.781,0,0,1,.717.475.773.773,0,0,1,.061.3l-.019,1.556a2.334,2.334,0,0,0,3.242,2.15,2.274,2.274,0,0,0,.74-.5,2.318,2.318,0,0,0,.685-1.651l.019-7A2.331,2.331,0,0,0,15.7,5.707ZM3.556,4.556H9V7.667H3.556Zm0,10.889V9.222H9v6.222Zm10.889-7a.778.778,0,1,1,.778-.778A.778.778,0,0,1,14.444,8.444Z"
                          transform="translate(-2 -3)"
                        />
                      </svg>

                      <p> COMBUSTÍVEL </p>
                    </div>
                    <p> {data.combustivel} </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        id="bx-paint-roll"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.6"
                        height="14"
                        viewBox="0 0 12.6 14"
                      >
                        <path
                          id="Caminho_89"
                          data-name="Caminho 89"
                          d="M14.045,2H6.392A1.393,1.393,0,0,0,5,3.392V5.479A1.393,1.393,0,0,0,6.392,6.871h7.654a1.393,1.393,0,0,0,1.392-1.392V3.392A1.393,1.393,0,0,0,14.045,2ZM6.392,5.479V3.392h7.654V5.479Z"
                          transform="translate(-2.837 -2)"
                        />
                        <path
                          id="Caminho_90"
                          data-name="Caminho 90"
                          d="M9.654,12.007v-1.4A1.4,1.4,0,0,0,8.262,9.2H3.392V5A1.4,1.4,0,0,0,2,6.4V9.2a1.4,1.4,0,0,0,1.392,1.4H8.262v1.4a.7.7,0,0,0-.7.7v3.5a.7.7,0,0,0,.7.7H9.654a.7.7,0,0,0,.7-.7v-3.5A.7.7,0,0,0,9.654,12.007Z"
                          transform="translate(-2 -2.913)"
                        />
                      </svg>

                      <p> COR </p>
                    </div>
                    <p> {data.cor} </p>
                  </div>

                  <div className="item">
                    <div>
                      <div className="item-wrapper">
                        <Image
                          src={`/steering-wheel.png`}
                          alt="Logo da TKARS"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>

                      <p> DIREÇÃO </p>
                    </div>
                    <p> {data.direcao} </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <path
                          id="bx-badge"
                          d="M14.576,6.565A2.784,2.784,0,0,0,14.6,6.2a2.816,2.816,0,0,0-3.165-2.775,2.793,2.793,0,0,0-4.871,0A2.814,2.814,0,0,0,3.4,6.2a2.784,2.784,0,0,0,.024.365,2.794,2.794,0,0,0,0,4.871A2.784,2.784,0,0,0,3.4,11.8a2.816,2.816,0,0,0,3.165,2.775,2.793,2.793,0,0,0,4.871,0A2.818,2.818,0,0,0,14.6,11.8a2.784,2.784,0,0,0-.024-.365,2.794,2.794,0,0,0,0-4.871Zm-1.009,3.782-.771.205.3.737a1.352,1.352,0,0,1,.1.511,1.4,1.4,0,0,1-1.4,1.4,1.355,1.355,0,0,1-.511-.1l-.738-.3-.205.771a1.393,1.393,0,0,1-2.692,0l-.205-.771-.738.3a1.355,1.355,0,0,1-.511.1,1.4,1.4,0,0,1-1.4-1.4,1.352,1.352,0,0,1,.1-.511l.3-.737-.771-.205a1.394,1.394,0,0,1,0-2.694l.771-.205-.3-.737A1.352,1.352,0,0,1,4.8,6.2,1.4,1.4,0,0,1,6.2,4.8a1.355,1.355,0,0,1,.511.1l.738.3.205-.771a1.393,1.393,0,0,1,2.692,0l.205.771.738-.3a1.355,1.355,0,0,1,.511-.1,1.4,1.4,0,0,1,1.4,1.4,1.352,1.352,0,0,1-.1.511l-.3.737.771.205a1.394,1.394,0,0,1,0,2.694Z"
                          transform="translate(-2 -2)"
                        />
                      </svg>

                      <p> GARANTIA DE </p>
                    </div>
                    <p> 6 meses motor e câmbio </p>
                  </div>

                  <div className="item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <g id="search" transform="translate(2)">
                          <path
                            id="Caminho_17"
                            data-name="Caminho 17"
                            d="M16.77,15.666,14.126,13.03A6.158,6.158,0,0,0,15.44,9.22a6.22,6.22,0,1,0-6.22,6.22,6.158,6.158,0,0,0,3.81-1.314l2.636,2.644a.781.781,0,1,0,1.1-1.1ZM4.555,9.22A4.665,4.665,0,1,1,9.22,13.885,4.665,4.665,0,0,1,4.555,9.22Z"
                            transform="translate(-5 -3)"
                          />
                        </g>
                      </svg>

                      <p> REVISÃO REALIZADA EM </p>
                    </div>
                    <p> {returnFormattedDate(data.revisao)} </p>
                  </div>
                </div>
              </Row>

              <Row>
                <p className="ipva">
                  ✅ IPVA DE <b>{data.ipva}</b> PAGO
                </p>
              </Row>

              <Divider full={true} />

              <div className={`ficha-tecnica ${fichaTecnicaReveal}`}>
                <div
                  className="header"
                  onClick={() =>
                    setFichaTecnicaReveal(
                      fichaTecnicaReveal == 'show' ? '' : 'show'
                    )
                  }
                >
                  <p className="name"> Ficha técnica </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="14.973"
                    viewBox="0 0 24 14.973"
                  >
                    <path
                      id="bx-chevron-down"
                      d="M27.32,9.293,18.293,18.32,9.266,9.293,6.293,12.266l12,12,12-12Z"
                      transform="translate(30.293 24.266) rotate(180)"
                    />
                  </svg>
                </div>
                <div className={`reveal ${fichaTecnicaReveal}`}>
                  <div
                    className="fr-view"
                    dangerouslySetInnerHTML={{
                      __html: data.ficha_tecnica.replaceAll(
                        '<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>',
                        ''
                      )
                    }}
                  />
                </div>
              </div>

              <Divider full={true} className="show-592px" />
            </InfoBox>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            xs={12}
            className="position-relative"
            style={{ height: heightFix ? floatingHeight : 'unset' }}
          >
            <FloatingBox>
              <p className="label hide-592px"> PREÇO </p>
              <h2 className="hide-592px"> {formatBRL(data.preco)} </h2>

              <h3>Se interessou no veículo ou quer agendar uma visita? 😎</h3>
              <p className="description">
                Clique no botão abaixo e entre em contato conosco para nós te
                oferecermos a melhor condição para esse veículo 😁
              </p>

              <Link href={link}>
                <a rel="noreferrer" target="_blank">
                  <Button className="margin-top-16px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.5"
                      height="14"
                      viewBox="0 0 17.5 14"
                    >
                      <g id="bx-share" transform="translate(0)">
                        <path
                          id="Caminho_91"
                          data-name="Caminho 91"
                          d="M12.889,8.679a.893.893,0,0,0,.895-.876V6.414L17.8,10.431l-4.014,4.017V13.058a.875.875,0,0,0-.76-.868,13.179,13.179,0,0,0-1.729-.116,11.456,11.456,0,0,0-6.878,2.233C5.786,8.855,12.092,8.679,12.889,8.679Z"
                          transform="translate(-2.408 -3.431)"
                          fill="none"
                        />
                        <path
                          id="Caminho_92"
                          data-name="Caminho 92"
                          d="M11.628,6.547V3.875a.875.875,0,0,1,1.494-.619l6.125,6.125a.874.874,0,0,1,0,1.237l-6.125,6.125a.875.875,0,0,1-1.494-.619V13.416c-.248-.017-.494-.025-.738-.025a9.493,9.493,0,0,0-7.317,3.264A.874.874,0,0,1,2,16.125C2,8.141,9.078,6.779,11.628,6.547Zm-.738,5.093a13.191,13.191,0,0,1,1.728.116.876.876,0,0,1,.759.868v1.388L17.39,10,13.378,5.987V7.375a.893.893,0,0,1-.894.875c-.8,0-7.1.176-8.469,5.622A11.461,11.461,0,0,1,10.89,11.641Z"
                          transform="translate(-2.003 -3)"
                        />
                      </g>
                    </svg>
                    <p>ENTRAR EM CONTATO</p>
                  </Button>
                </a>
              </Link>
            </FloatingBox>
          </Col>
        </Row>

        <Row className="margin-top-64px">
          <Col lg={12}>
            <Ad />
          </Col>
        </Row>

        <Row className="margin-top-64px">
          <Col lg={12}>
            <Title> Mais baratos </Title>
          </Col>
        </Row>
        <Row>
          {/* @ts-ignore */}
          {recommended.map((item, index) => {
            return (
              <Col lg={3} key={index}>
                {/* @ts-ignore */}
                <Product item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Fab />

      <Footer />
    </AllWrapper>
  );
};

export default Carro;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://transdesk.com.br/souunus/backend/admin/tkars/site/get.php'
  );
  const { data } = await response.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id, slug: item.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;

  const response = await fetch(
    `https://transdesk.com.br/souunus/backend/admin/tkars/site/get.php?itemId=${id}`
  );
  const { data, recommended } = await response.json();

  return {
    props: {
      data,
      recommended
    }
  };
};
