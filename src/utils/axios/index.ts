import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://floating-ravine-40718.herokuapp.com/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});