import axios from 'axios';

//Base da Url
//https://api.themoviedb.org/3

//URL DA API
//https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&api_key=93b872e765d2e0bc708fe8fd68ea2ad0


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;