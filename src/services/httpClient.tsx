import axios from "axios";

const backendRoute = axios.create({
    baseURL: process.env.BACKEND_ROUTE
})

export default backendRoute;