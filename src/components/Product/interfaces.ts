export interface ProductProps{
    margin?: boolean;
    fixedWidth?: boolean;
    item: {
        id: number,
        nome: string,
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        cambio: string,
        combustivel: string,
        cor: string,
        direcaO; string,
        garantia: string,
        revisao: Date,
        ipva: string,
        motorizacao: string,
        ficha_tecnica: string,
        preco: number,
        extension: string,
        views: number,
    }
}