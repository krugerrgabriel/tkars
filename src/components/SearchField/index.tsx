import React from 'react';

import { Body } from './styles';

const SearchField: React.FC = () => {
  return (
    <Body>
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
        placeholder="Digite o modelo, marca, ano, ficha técnica..."
      />
    </Body>
  );
};

export default SearchField;
