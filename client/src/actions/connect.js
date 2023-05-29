import axios from 'axios';

const token = localStorage.getItem('token')
const request = axios.create({
    baseURL: 'http://localhost:3281/',
    timeout: 10000,
    headers: { 'token': 'Bearer ' + token }
});

export default request;