import axios from 'axios';

const instance = axios.create({
 baseURL: 'https://react-my-burger-udemy-max.firebaseio.com/'
});

export default instance;