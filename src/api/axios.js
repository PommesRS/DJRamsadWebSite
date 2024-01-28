import axios from 'axios';
//const BASE_URL  = 'https://djramsadbackend.onrender.com'; //actual backend accesspoint
const BASE_URL  = 'http://localhost:3500'; //local backend accesspoint


export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});