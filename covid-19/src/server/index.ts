import axios from 'axios'

const server = axios.create({
    //后端接口地址
    baseURL: "http://localhost:3333"
})

export const getApiList = () => server.get('/api/list').then(res => res.data)