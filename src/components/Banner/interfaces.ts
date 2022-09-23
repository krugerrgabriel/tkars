export type BannerProps = {
  onMouseDown?: Function;
  onMouseUp?: Function;
  first: boolean;
  item: {
    src: string;
    base64: string;

    item: {
      id: number;
      slug: string;
      marca: string;
      nome: string;
      modelo: string;
      preco: number;
    };
  };
};
