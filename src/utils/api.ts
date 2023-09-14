import axios, {AxiosInstance} from 'axios'

// class Api {
//     private axios: AxiosInstance;
//     constructor() {
//         this.axios = axios.create({
//             baseURL: 'http://localhost:8000/'
//         });
//     }
//
//     async get(url:string = '', options:object = {}) {
//         return await this.axios.get(url, options)
//     }
//
//     async post(url:string = '', options:object = {}) {
//         return await this.axios.post(url, options)
//     }
// }
//
// export default Api;

const useApi = () => {

    const apiUtil = axios.create({
        baseURL: 'http://localhost:8000/'
    });

    const get = async (url:string = '', options:object = {}) => {
        return await apiUtil.get(url, options)
    }

    const post = async (url:string = '', options:object = {}) => {
        return await apiUtil.post(url, options)
    }

    return {
        get,
        post,
    }
}

export default useApi;