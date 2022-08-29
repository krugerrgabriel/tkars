export interface ServerProps{
    carsNumber?: number,
    lessPrice?: {
        id: number,
        slug: string,
        nome: string,
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        cambio: string,
        combustivel: string,
        cor: string,
        direcao: string,
        garantia: string,
        revisao: Date,
        ipva: string,
        motorizacao: string,
        ficha_tecnica: string,
        preco: number,
        extension: string,
        views: number,
    }[],
    moreViewed?: {
        id: number,
        slug: string,
        nome: string,
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        cambio: string,
        combustivel: string,
        cor: string,
        direcao: string,
        garantia: string,
        revisao: Date,
        ipva: string,
        motorizacao: string,
        ficha_tecnica: string,
        preco: number,
        extension: string,
        views: number,
    }[],
    data?: {
        id: number,
        slug: string,
        nome: string,
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        cambio: string,
        combustivel: string,
        cor: string,
        direcao: string,
        garantia: string,
        revisao: Date,
        ipva: string,
        motorizacao: string,
        ficha_tecnica: string,
        preco: number,
        extension: string,
        views: number,
        files: number[],
        createdAt: string
    },
    recommended?: {
        id: number,
        slug: string,
        nome: string,
        marca: string,
        modelo: string,
        ano: number,
        quilometragem: number,
        cambio: string,
        combustivel: string,
        cor: string,
        direcao: string,
        garantia: string,
        revisao: Date,
        ipva: string,
        motorizacao: string,
        ficha_tecnica: string,
        preco: number,
        extension: string,
        views: number,
        files: number[]
    },
    images?: {
        src: string,
        width: number,
        height: number,
        type: string,
        base64: string
    }[]
}

export interface CarImageProps{
    item: {
        src: string,
        width: number,
        height: number,
        type: string,
        base64: string,
        index: number,
    }
}