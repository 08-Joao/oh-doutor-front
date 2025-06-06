import axios from "axios"
import backendRoute from "./httpClient"
import { LoginInput, LoginOutput, User } from "@/models/dtos/auth"


const Api2 = {
    login: async function(data: LoginInput) { 
        try { 
            const response = await backendRoute.post('/login', data, { 
                headers: { 
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }) as LoginOutput

            console.log(response);
            return response;
        } catch (err) {
            throw err;
        }
    },

    logout: async function() { 
        try { 
            const response = await backendRoute.post('/logout', {
                withCredentials: true
            });
            return response;
        } catch (err) {
            throw err;
        }
    },

    getMe: async function(): Promise<User> {
        try {
            const response = await backendRoute.get('/me', {
                withCredentials: true
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    },

    getAllExames: async function() {
        try {
            const response = await backendRoute.get('/exams', {
                withCredentials: true
            });

            return response;
        } catch (err) {
            throw err;
        }
    }
}

export default Api2;