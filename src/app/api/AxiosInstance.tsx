import axios from 'axios';

// const config = require('../tsconfig.json');
// const baseUrl = config.applicationApiBaseUrl;
// withCredentials:true

const baseUrl = 'http://localhost:8080'

export default axios.create({
    baseURL: baseUrl,
})