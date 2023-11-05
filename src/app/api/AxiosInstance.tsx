import axios from 'axios';

// const config = require('../tsconfig.json');
// const baseUrl = config.applicationApiBaseUrl;
// withCredentials:true

// Load environment variables from .env file

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080"

export default axios.create({
    baseURL: baseUrl,
    withCredentials: true
})