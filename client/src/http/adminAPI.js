import { $host } from './index';
import jwt_decode from 'jwt-decode';


const adminAPI = {
    async login(param) {
        try {
            const { data } = await $host.post('api/admin/login', param);
            localStorage.setItem('token', data.token);
            return jwt_decode(data.token);
        } catch (e) {
            console.log(e);
        }
    }
};

export default adminAPI;