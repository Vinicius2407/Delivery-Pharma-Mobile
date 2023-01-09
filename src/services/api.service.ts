import axios, { AxiosInstance } from "axios";

export let api = axios.create({
    baseURL: `http://192.168.0.106:8080/`,
})

export const changeBaseURLAPI = (newBaseUrl: string) => {
    api = axios.create({ baseURL: `http://${newBaseUrl}:8080/` })
    
    return api
}

export const checkApiResponse = () => {
    let isResponseOK = false;
    console.log(isResponseOK)
    const apiRequest = async() => {
        try {
            const request = await api.get<AxiosInstance>('cliente/2')
            if (request.status == 200) isResponseOK = true;
        } catch (error) {
            console.log(error)
            isResponseOK = false
        }
    }

    apiRequest()

    console.log(isResponseOK)
    return isResponseOK
}