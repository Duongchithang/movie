import axios from 'axios';
import queryString from 'query-string';
import configAPI from './config_api';
const axiosClient = axios.create({
    baseURL : configAPI.baseUrl,
    headers :{
        'Content-Type': 'application/json'
    },
    paramsSerializer : params => queryString.stringify({
    ...params,'api_key' : configAPI.apikey
    })
    }
)
axiosClient.interceptors.request.use(async (config)=>{
    return config;
});
axiosClient.interceptors.response.use((reponse)=>{
    if(reponse && reponse.data){
        return reponse.data;
    }
    return reponse;
},(err)=>{
    throw err;
});
export default axiosClient;
