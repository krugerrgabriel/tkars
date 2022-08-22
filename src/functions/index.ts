export const formatBRL = (valor) => {
    let formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return formatter.format(valor);
};

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const preventDragHandler = e => {
    e.preventDefault();
  };