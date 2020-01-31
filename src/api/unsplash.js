import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 584e37f3fcf578c81c672487ba2320e61daca838ee72907b90ff51367580105e'
    }
});