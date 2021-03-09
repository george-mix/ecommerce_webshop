import { $host } from './index';
import jwt_decode from 'jwt-decode';

export const login = async (param) => {
    const { data } = await $host.post('api/admin/login', param)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}