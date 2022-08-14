import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://kriptopedija-backend.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Authorization': localStorage.getItem("JWT")
    }
})

export default instance;