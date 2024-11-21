import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.github.com',
    // headers: {
    //     Authorization: `token ${token}` // Adiciona o token globalmente
    // }
})

export default api;
