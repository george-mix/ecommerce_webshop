import { $host } from './index';
import jwt_decode from 'jwt-decode';


const userAPI = {
    async registration(param) {
        try {
            const { data } = await $host.post('/api/user/registration', param);
            localStorage.setItem('token', data.token);
            return jwt_decode(data.token);
        } catch (e) {
            console.log(e);
        }
    },
    async login(param) {
        try {
            const { data } = await $host.post('api/user/login', param);
            localStorage.setItem('token', data.token);
            return jwt_decode(data.token);
        } catch (e) {
            console.log(e);
        }
    }
};

export default userAPI;