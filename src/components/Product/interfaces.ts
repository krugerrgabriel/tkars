export interface ProductProps{
    margin?: boolean;
    item: {
        id: number,
        marca: string,
        nome: string,
        modelo: string,
        preco: number,
        ano: string,
        quilometragem: number,
    }
}