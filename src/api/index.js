
export const apiGet = (url) => () => fetch(url).then(v => v.json());
//const apiFetchCustomersBiscaytik = () => fetch(url_biscaytik_simulaciones).then(v => v.json());