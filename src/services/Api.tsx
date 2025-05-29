import axios from "axios"
import backendRoute from "./httpClient"
import { LoginInput, LoginOutput } from "@/models/dtos/auth"


const Api = {
    login: async function(data: LoginInput) { 
        try { 
            const response = await backendRoute.post('/login', data, { 
                headers: { 
                    'Content-Type': 'application/json'
                }
            }) as LoginOutput
            return response;
        } catch (err) {
            console.warn(err)
        }
    }
}