import React, { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { Body } from './styles';
import { Button } from '../../styles/global';

const SearchField: React.FC<{ handleKey: Function }> = ({ handleKey }) => {
  const inputRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.searchParams) {
      // @ts-ignore
      inputRef.current.value = router.query.searchParams;
    }
  }, []);

  const onKeyUp = event => {
    if (event.key == 'Enter' || event.keyCode === 13) {
      sendKey();
    }
  };

  const sendKey = () => {
    handleKey(inputRef.current.value);
  };
  return (
    <Body>
      <div className="corpse">
        <svg
          id="search"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            id="Caminho_17"
            data-name="Caminho 17"
            d="M18.737,17.475l-3.021-3.012a7.038,7.038,0,0,0,1.5-4.354,7.109,7.109,0,1,0-7.109,7.109,7.038,7.038,0,0,0,4.354-1.5l3.012,3.021a.892.892,0,1,0,1.262-1.262ZM4.777,10.109a5.332,5.332,0,1,1,5.332,5.332,5.332,5.332,0,0,1-5.332-5.332Z"
            transform="translate(-3 -3)"
          />
        </svg>

        <input
          type="text"
          ref={inputRef}
          placeholder="Digite o modelo, marca, ano, ficha técnica..." // @ts-ignore
          onKeyUp={onKeyUp}
        />
      </div>
      <Button className="button" onClick={() => sendKey()}>
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
              fill="#fff"
            />
          </g>
        </svg>
      </Button>
    </Body>
  );
};

export default SearchField;
