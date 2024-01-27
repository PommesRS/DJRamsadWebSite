import axios from 'axios';

export default axios.create({
    baseURL: 'https://djramsadbackend.onrender.com' //actual backend accesspoint
    //baseURL: 'http://localhost:3500' //local backend accesspoint
})