import Axios from 'axios';

const axios = Axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        "X-Requested-With":"XMLHttpRequest",
    },
    withCredentials: true
});

const axiosCSRF = async (func) => {
    await axios.get('/sanctum/csrf-cookie').then(func());
}

export {axios, axiosCSRF}