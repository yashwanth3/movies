import axios from 'axios';


export default axios.create({
    baseURL: 'https://08e1-2607-fea8-1c40-1560-a8a7-6e38-e41a-2759.ngrok-free.app',
    headers: {'ngrok-skip-browser-warning': "true"}
})