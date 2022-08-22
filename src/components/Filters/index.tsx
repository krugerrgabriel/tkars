import React, { useRef, useState, useEffect } from 'react';

import Image from 'next/image';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Row, Col } from 'react-bootstrap';

import MarcaCheck from '../MarcaCheck';
import InputField from '../InputField';
import CheckBox from '../CheckBox';

import useDrag from '../../functions/useDrag';
import { formatBRL } from '../../functions/';
import {
  MarcasArray,
  CoresArray,
  CombustiveisArray,
  TiposArray
} from '../../functions/list';

import {
  Body,
  StyledThumb,
  StyledTrack,
  StyledSlider,
  Bubble,
  BackWrapper
} from './styles';

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const Filters: React.FC<{
  type?: string;
  active: boolean;
  filterChange: Function;
}> = ({ active, filterChange, type }) => {
  const [minValue, setMinValue] = useState(21000);
  const [maxValue, setMaxnValue] = useState(200000);

  const [statusMinValue, setStatusMinValue] = useState(minValue);
  const [statusMaxValue, setStatusMaxValue] = useState(maxValue);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [bubbleOneWidth, setBubbleOneWidth] = useState(0);
  const [bubbleTwoWidth, setBubbleTwoWidth] = useState(0);

  const sliderRef = useRef(null);
  const bubbleOneRef = useRef(null);
  const bubbleTwoRef = useRef(null);

  const sliderChange = value => {
    if (statusMinValue != value[0]) {
      setStatusMinValue(value[0]);
    }
    if (statusMaxValue != value[1]) {
      setStatusMaxValue(value[1]);
    }
  };

  useEffect(() => {
    setSliderWidth(sliderRef.current.offsetWidth);
  }, [sliderRef.current]);
  useEffect(() => {
    setBubbleOneWidth(bubbleOneRef.current.offsetWidth);
  }, [bubbleOneRef.current]);
  useEffect(() => {
    setBubbleTwoWidth(bubbleTwoRef.current.offsetWidth);
  }, [bubbleTwoRef.current]);

  const [marcas, setMarcas] = useState([]);
  const handleMarca = name => {
    if (marcas.includes(name)) {
      setMarcas(marcas.filter(item => item != name));
    } else {
      setMarcas([...marcas, name]);
    }
  };

  const [cores, setCores] = useState([]);
  const handleCorChange = name => {
    if (cores.includes(name)) {
      setCores(cores.filter(item => item != name));
    } else {
      setCores([...cores, name]);
    }
  };

  const [combustiveis, setCombustiveis] = useState([]);
  const handleCombustiveisChange = name => {
    if (combustiveis.includes(name)) {
      setCombustiveis(combustiveis.filter(item => item != name));
    } else {
      setCombustiveis([...combustiveis, name]);
    }
  };

  const [tipos, setTipos] = useState([]);
  const handleTiposChange = name => {
    if (tipos.includes(name)) {
      setTipos(tipos.filter(item => item != name));
    } else {
      setTipos([...tipos, name]);
    }
  };

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = //@ts-ignore

      ({ scrollContainer }: scrollVisibilityApiType) =>
      (ev: React.MouseEvent) =>
        dragMove(ev, posDiff => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        });
  return (
    <Body type={type} active={active}>
      <BackWrapper type={type} onClick={() => filterChange()}>
        <div className="wrapper">
          <Image
            src="/bx-chevron-left-circle.svg"
            alt="Logo da TKARS"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </BackWrapper>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Marcas </p>
          <p className="subtitle"> arraste para o lado </p>
        </div>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {MarcasArray.map((item, index) => {
              return (
                <MarcaCheck
                  active={marcas.includes(item)}
                  name={item}
                  key={index}
                  changeStatus={handleMarca}
                />
              );
            })}
          </ScrollMenu>
        </div>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Ano do carro </p>
        </div>
        <Row>
          <Col lg={6}>
            <InputField
              type="number"
              placeholder="do ano..."
              icon={`<svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="16" viewBox="0 0 14.4 16"><g id="bx-calendar-star" transform="translate(-3 -2)"><path id="Caminho_74" data-name="Caminho 74" d="M9.58,13.838l-.373,2.175,1.954-1.027,1.954,1.027-.373-2.175L14.323,12.3l-2.184-.318L11.162,10l-.977,1.979L8,12.3Z" transform="translate(-0.991 -1.589)"/><path id="Caminho_75" data-name="Caminho 75" d="M15.8,3.6H14.2V2H12.6V3.6H7.8V2H6.2V3.6H4.6A1.6,1.6,0,0,0,3,5.2V16.4A1.6,1.6,0,0,0,4.6,18H15.8a1.6,1.6,0,0,0,1.6-1.6V5.2A1.6,1.6,0,0,0,15.8,3.6Zm0,12.8H4.6V6.8H15.8Z" transform="translate(0 0)"/></g></svg>`}
            />
          </Col>
          <Col lg={6}>
            <InputField
              type="number"
              placeholder="até o ano..."
              icon={`<svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="16" viewBox="0 0 14.4 16"><g id="bx-calendar-exclamation" transform="translate(-3 -2)"><path id="Caminho_76" data-name="Caminho 76" d="M15.8,3.6H14.2V2H12.6V3.6H7.8V2H6.2V3.6H4.6A1.6,1.6,0,0,0,3,5.2V16.4A1.6,1.6,0,0,0,4.6,18H15.8a1.6,1.6,0,0,0,1.6-1.6V5.2A1.6,1.6,0,0,0,15.8,3.6Zm0,12.8H4.6V6.8H15.8Z" transform="translate(0)"/><path id="Caminho_77" data-name="Caminho 77" d="M11,10h1.6v4H11Zm0,4.8h1.6v1.6H11Z" transform="translate(-1.6 -1.598)"/></g></svg>`}
            />
          </Col>
        </Row>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Preço </p>
        </div>
        <Row className="margin-top-42px position-relative" ref={sliderRef}>
          {/* @ts-ignore */}
          <StyledSlider
            defaultValue={[minValue * 2, maxValue / 2]}
            renderTrack={Track}
            renderThumb={Thumb}
            min={minValue}
            max={maxValue}
            onChange={sliderChange}
            step={500}
          />

          <Bubble
            bubbleWidth={bubbleOneWidth}
            max={maxValue}
            value={statusMinValue}
            width={sliderWidth}
            ref={bubbleOneRef}
          >
            <p>{formatBRL(statusMinValue)}</p>
          </Bubble>
          <Bubble
            bubbleWidth={bubbleTwoWidth}
            max={maxValue}
            value={statusMaxValue}
            width={sliderWidth}
            ref={bubbleTwoRef}
          >
            <p>{formatBRL(statusMaxValue)}</p>
          </Bubble>
        </Row>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Quilometragem </p>
        </div>
        <Row>
          <Col lg={6}>
            <InputField
              type="number"
              placeholder="de..."
              icon={`<svg xmlns="http://www.w3.org/2000/svg" width="12.8" height="16" viewBox="0 0 12.8 16"><g id="bx-map" transform="translate(-4 -2)"><path id="Caminho_78" data-name="Caminho 78" d="M11.2,12.41A3.2,3.2,0,1,0,8,9.2,3.208,3.208,0,0,0,11.2,12.41Zm0-4.807A1.6,1.6,0,1,1,9.6,9.2,1.6,1.6,0,0,1,11.2,7.6Z" transform="translate(-0.805 -0.803)" fill="#fff"/><path id="Caminho_79" data-name="Caminho 79" d="M9.936,17.851a.8.8,0,0,0,.928,0c.243-.172,5.959-4.3,5.936-9.451A6.4,6.4,0,0,0,4,8.4C3.977,13.552,9.693,17.679,9.936,17.851ZM10.4,3.6a4.806,4.806,0,0,1,4.8,4.8c.017,3.55-3.51,6.738-4.8,7.784C9.111,15.142,5.583,11.953,5.6,8.4A4.8,4.8,0,0,1,10.4,3.6Z" transform="translate(0)" fill="#fff"/></g></svg>`}
            />
          </Col>
          <Col lg={6}>
            <InputField
              type="number"
              placeholder="até..."
              icon={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="bx-map-pin" transform="translate(-2 -2)"><path id="Caminho_80" data-name="Caminho 80" d="M11.2,14l.8-1.6V8.286a3.2,3.2,0,1,0-1.6,0V12.4ZM9.6,5.2a1.6,1.6,0,1,1,1.6,1.6A1.6,1.6,0,0,1,9.6,5.2Z" transform="translate(-1.2)" fill="#fff"/><path id="Caminho_81" data-name="Caminho 81" d="M13.414,10.563l-.426,1.542c2.073.573,3.413,1.674,3.413,2.807,0,1.514-2.628,3.2-6.4,3.2s-6.4-1.686-6.4-3.2c0-1.133,1.34-2.234,3.414-2.808l-.426-1.542C3.758,11.344,2,13.011,2,14.912c0,2.691,3.514,4.8,8,4.8s8-2.109,8-4.8C18,13.011,16.242,11.344,13.414,10.563Z" transform="translate(0 -1.712)" fill="#fff"/></g></svg>`}
            />
          </Col>
        </Row>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Cores </p>
        </div>

        <div className="checkboxs">
          {CoresArray.map((item, index) => {
            return (
              <CheckBox
                label={item}
                active={cores.includes(item)}
                checkChange={handleCorChange}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Combustível </p>
        </div>

        <div className="checkboxs">
          {CombustiveisArray.map((item, index) => {
            return (
              <CheckBox
                label={item}
                active={combustiveis.includes(item)}
                checkChange={handleCombustiveisChange}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="section">
        <div className="wrapper">
          <p className="title"> Tipo </p>
        </div>

        <div className="checkboxs">
          {TiposArray.map((item, index) => {
            return (
              <CheckBox
                label={item}
                active={tipos.includes(item)}
                checkChange={handleTiposChange}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Body>
  );
};

export default Filters;
