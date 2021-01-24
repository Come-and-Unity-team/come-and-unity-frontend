import axios from 'axios';
import {getFromLocalStorage} from '../utils/local-storage';

export default axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    withCredentials: true,
    crossDomain: true
});
