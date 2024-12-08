import axios from "axios";


const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    // headers: {
    //     Authorization: `token ${token}` // Adiciona o token globalmente
    // }
})

export default api;
