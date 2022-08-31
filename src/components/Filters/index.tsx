import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import Image from 'next/image';

import { Row, Col } from 'react-bootstrap';

import MarcaCheck from '../MarcaCheck';
import InputField from '../InputField';
import CheckBox from '../CheckBox';
import ScrollMenu from '../ScrollMenu';

import {
  MarcasArray,
  CoresArray,
  CombustiveisArray,
  TiposArray
} from '../../functions/list';

import { Body, Overlay, BackWrapper } from './styles';
import { Button } from '../../styles/global';

import { FiltersProps } from './interfaces';

const Filters: React.FC<FiltersProps> = ({
  active,
  filterChange,
  type,
  className,
  data
}) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  const [filters, setFilters] = useState([]);

  const filterTextApply = prop => {
    let { id, value, type } = prop;

    let newId;
    let typeIndex;
    switch (id) {
      case 'first-year':
        newId = 'year';
        typeIndex = 'first';
        break;
      case 'last-year':
        newId = 'year';
        typeIndex = 'last';
        break;
      case 'first-price':
        newId = 'price';
        typeIndex = 'first';
        break;
      case 'last-price':
        newId = 'price';
        typeIndex = 'last';
        break;
      case 'first-km':
        newId = 'km';
        typeIndex = 'first';
        break;
      case 'last-km':
        newId = 'km';
        typeIndex = 'last';
        break;
    }
    if (type == 'add') {
      let item = filters.filter(item => item.id == newId)[0];

      if (item) {
        let newFilters = filters.filter(item => item.id != newId);
        // @ts-ignore
        if (typeIndex == 'first') {
          item.first = value;
        } else {
          item.last = value;
        }
        setFilters([...newFilters, item]);
      } else {
        let first = 0;
        let last = 0;
        if (typeIndex == 'first') {
          first = value;
        } else {
          last = value;
        }

        let item = { id: newId, first, last };
        setFilters([...filters, item]);
      }
    } else {
      let newFilters = filters.filter(item => item.id != newId);
      setFilters(newFilters);
    }
  };

  const [marcas, setMarcas] = useState([]);
  const handleMarca = name => {
    let type = marcas.includes(name) ? 'remove' : 'add';

    if (marcas.includes(name)) {
      setMarcas(marcas.filter(item => item != name));
    } else {
      setMarcas([...marcas, name]);
    }
  };

  const [cores, setCores] = useState([]);
  const handleCorChange = name => {
    let type = cores.includes(name) ? 'remove' : 'add';

    if (cores.includes(name)) {
      setCores(cores.filter(item => item != name));
    } else {
      setCores([...cores, name]);
    }
  };

  const [combustiveis, setCombustiveis] = useState([]);
  const handleCombustiveisChange = name => {
    let type = combustiveis.includes(name) ? 'remove' : 'add';

    if (combustiveis.includes(name)) {
      setCombustiveis(combustiveis.filter(item => item != name));
    } else {
      setCombustiveis([...combustiveis, name]);
    }
  };

  const [tipos, setTipos] = useState([]);
  const handleTiposChange = name => {
    let type = tipos.includes(name) ? 'remove' : 'add';

    if (tipos.includes(name)) {
      setTipos(tipos.filter(item => item != name));
    } else {
      setTipos([...tipos, name]);
    }
  };

  const handleSubmit = () => {
    let sendFilters = [];
    if (marcas.length > 0) {
      sendFilters.push({ id: 'marcas', value: marcas });
    }
    if (cores.length > 0) {
      sendFilters.push({ id: 'cores', value: cores });
    }
    if (combustiveis.length > 0) {
      sendFilters.push({ id: 'combustiveis', value: combustiveis });
    }
    if (tipos.length > 0) {
      sendFilters.push({ id: 'tipos', value: tipos });
    }
    filterChange([...filters, ...sendFilters]);
  };

  const handleCancel = () => {
    filterChange([]);

    setMarcas([]);
    setCores([]);
    setCombustiveis([]);
    setTipos([]);
  };

  return (
    <>
      <Body className={className} type={type} active={active}>
        <BackWrapper active={active} onClick={() => filterChange('close')}>
          <div className="wrapper">
            <Image
              src="/bx-chevron-left-circle.svg"
              alt="Ícone de voltar dos filtros | TKars"
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
          <ScrollMenu>
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

        <div className="section">
          <div className="wrapper">
            <p className="title"> Ano do carro </p>
          </div>
          <Row>
            <Col>
              <InputField
                type="number"
                placeholder="do ano..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="16" viewBox="0 0 14.4 16"><g id="bx-calendar-star" transform="translate(-3 -2)"><path id="Caminho_74" data-name="Caminho 74" d="M9.58,13.838l-.373,2.175,1.954-1.027,1.954,1.027-.373-2.175L14.323,12.3l-2.184-.318L11.162,10l-.977,1.979L8,12.3Z" transform="translate(-0.991 -1.589)"/><path id="Caminho_75" data-name="Caminho 75" d="M15.8,3.6H14.2V2H12.6V3.6H7.8V2H6.2V3.6H4.6A1.6,1.6,0,0,0,3,5.2V16.4A1.6,1.6,0,0,0,4.6,18H15.8a1.6,1.6,0,0,0,1.6-1.6V5.2A1.6,1.6,0,0,0,15.8,3.6Zm0,12.8H4.6V6.8H15.8Z" transform="translate(0 0)"/></g></svg>`}
                id="first-year"
                changeValue={value => filterTextApply(value)}
              />
            </Col>
            <Col>
              <InputField
                type="number"
                placeholder="até o ano..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="16" viewBox="0 0 14.4 16"><g id="bx-calendar-exclamation" transform="translate(-3 -2)"><path id="Caminho_76" data-name="Caminho 76" d="M15.8,3.6H14.2V2H12.6V3.6H7.8V2H6.2V3.6H4.6A1.6,1.6,0,0,0,3,5.2V16.4A1.6,1.6,0,0,0,4.6,18H15.8a1.6,1.6,0,0,0,1.6-1.6V5.2A1.6,1.6,0,0,0,15.8,3.6Zm0,12.8H4.6V6.8H15.8Z" transform="translate(0)"/><path id="Caminho_77" data-name="Caminho 77" d="M11,10h1.6v4H11Zm0,4.8h1.6v1.6H11Z" transform="translate(-1.6 -1.598)"/></g></svg>`}
                id="last-year"
                changeValue={value => filterTextApply(value)}
              />
            </Col>
          </Row>
        </div>

        <div className="section">
          <div className="wrapper">
            <p className="title"> Preço </p>
          </div>
          <Row>
            <Col>
              <InputField
                type="number"
                placeholder="do preço..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,4H3C2.447,4,2,4.447,2,5v14c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V5C22,4.447,21.553,4,21,4z M20,15 c-1.657,0-3,1.343-3,3H7c0-1.657-1.343-3-3-3V9c1.657,0,3-1.343,3-3h10c0,1.657,1.343,3,3,3V15z"/><path d="M12,8c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S14.206,8,12,8z M12,14c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S13.103,14,12,14z"/></svg>`}
                id="first-price"
                changeValue={value => filterTextApply(value)}
              />
            </Col>
            <Col>
              <InputField
                type="number"
                placeholder="até o preço..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,4H3C2.447,4,2,4.447,2,5v14c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V5C22,4.447,21.553,4,21,4z M20,15 c-1.657,0-3,1.343-3,3H7c0-1.657-1.343-3-3-3V9c1.657,0,3-1.343,3-3h10c0,1.657,1.343,3,3,3V15z"/><path d="M12,8c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S14.206,8,12,8z M12,14c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S13.103,14,12,14z"/></svg>`}
                id="last-price"
                changeValue={value => filterTextApply(value)}
              />
            </Col>
          </Row>
        </div>

        <div className="section">
          <div className="wrapper">
            <p className="title"> Quilometragem </p>
          </div>
          <Row>
            <Col>
              <InputField
                type="number"
                placeholder="do km..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="12.8" height="16" viewBox="0 0 12.8 16"><g id="bx-map" transform="translate(-4 -2)"><path id="Caminho_78" data-name="Caminho 78" d="M11.2,12.41A3.2,3.2,0,1,0,8,9.2,3.208,3.208,0,0,0,11.2,12.41Zm0-4.807A1.6,1.6,0,1,1,9.6,9.2,1.6,1.6,0,0,1,11.2,7.6Z" transform="translate(-0.805 -0.803)" /><path id="Caminho_79" data-name="Caminho 79" d="M9.936,17.851a.8.8,0,0,0,.928,0c.243-.172,5.959-4.3,5.936-9.451A6.4,6.4,0,0,0,4,8.4C3.977,13.552,9.693,17.679,9.936,17.851ZM10.4,3.6a4.806,4.806,0,0,1,4.8,4.8c.017,3.55-3.51,6.738-4.8,7.784C9.111,15.142,5.583,11.953,5.6,8.4A4.8,4.8,0,0,1,10.4,3.6Z" transform="translate(0)" /></g></svg>`}
                id="first-km"
                changeValue={value => filterTextApply(value)}
              />
            </Col>
            <Col>
              <InputField
                type="number"
                placeholder="até o km..."
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="bx-map-pin" transform="translate(-2 -2)"><path id="Caminho_80" data-name="Caminho 80" d="M11.2,14l.8-1.6V8.286a3.2,3.2,0,1,0-1.6,0V12.4ZM9.6,5.2a1.6,1.6,0,1,1,1.6,1.6A1.6,1.6,0,0,1,9.6,5.2Z" transform="translate(-1.2)" /><path id="Caminho_81" data-name="Caminho 81" d="M13.414,10.563l-.426,1.542c2.073.573,3.413,1.674,3.413,2.807,0,1.514-2.628,3.2-6.4,3.2s-6.4-1.686-6.4-3.2c0-1.133,1.34-2.234,3.414-2.808l-.426-1.542C3.758,11.344,2,13.011,2,14.912c0,2.691,3.514,4.8,8,4.8s8-2.109,8-4.8C18,13.011,16.242,11.344,13.414,10.563Z" transform="translate(0 -1.712)" /></g></svg>`}
                id="last-km"
                changeValue={value => filterTextApply(value)}
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
                  checkChange={value => handleCorChange(value)}
                  key={index}
                  id="cores"
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
                  id="combustiveis"
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
                  id="tipos"
                />
              );
            })}
          </div>
        </div>

        <div className="button-box col-lg-3">
          <Button type="secondary" onClick={handleCancel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13.999"
              viewBox="0 0 14 13.999"
            >
              <path
                id="bx-x"
                d="M18.543,6.344l-5.251,5.25-5.25-5.25-1.75,1.75,5.25,5.25-5.25,5.25,1.75,1.75,5.25-5.25,5.251,5.25,1.75-1.75-5.25-5.25,5.25-5.25Z"
                transform="translate(-6.293 -6.344)"
              />
            </svg>
            <p> CANCELAR </p>
          </Button>
          <div className="margin-left-12px"></div>
          <Button onClick={() => handleSubmit()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13.217"
              viewBox="0 0 14 13.217"
            >
              <g id="bx-slider-alt" transform="translate(-2 -2.5)">
                <path
                  id="Caminho_20"
                  data-name="Caminho 20"
                  d="M5.826,12.672A2.431,2.431,0,0,0,3.5,14.411H2V15.8H3.5a2.419,2.419,0,0,0,4.643,0h7.766V14.411H8.147A2.431,2.431,0,0,0,5.826,12.672Zm0,3.477A1.043,1.043,0,1,1,6.87,15.106,1.045,1.045,0,0,1,5.826,16.149ZM12.087,8.5a2.431,2.431,0,0,0-2.321,1.738H2v1.391H9.766a2.419,2.419,0,0,0,4.643,0h1.5V10.238h-1.5A2.431,2.431,0,0,0,12.087,8.5Zm0,3.477a1.043,1.043,0,1,1,1.043-1.043A1.045,1.045,0,0,1,12.087,11.977Z"
                  transform="translate(0 -1.823)"
                />
                <path
                  id="Caminho_21"
                  data-name="Caminho 21"
                  d="M9.539,4.238a2.419,2.419,0,0,0-4.643,0H2V5.629H4.9a2.419,2.419,0,0,0,4.643,0H16V4.238ZM7.217,5.977A1.043,1.043,0,1,1,8.261,4.934,1.045,1.045,0,0,1,7.217,5.977Z"
                />
              </g>
            </svg>
            <p> APLICAR </p>
          </Button>
        </div>
      </Body>
      <Overlay active={active} />
    </>
  );
};

export default Filters;
