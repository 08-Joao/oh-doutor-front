import axios from "axios";

const backendRoute = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    withCredentials: true // This is required for cookies to be sent and received
})

export default backendRoute;