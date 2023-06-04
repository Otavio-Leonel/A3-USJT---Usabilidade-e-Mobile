import axios from 'axios';

export const apiCadastro = axios.create({
    baseURL: "http://localhost:3000"//URL DA SUA API
})

export const apiBusca = axios.create({
    baseURL: "http://localhost:4000"
})

export const apiLogin = axios.create({
    baseURL: "http://localhost:5000"//URL DA SUA API
})