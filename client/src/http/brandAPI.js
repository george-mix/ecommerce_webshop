import { $host, $authhost } from './index';

const brandAPI = {

    async createBrand(brand) {
        const { data } = await $authhost.post('/api/brand', brand);
        return data;
    },

    async fetchBrands() {
        const { data } = await $host.get('/api/brand');
        return data;
    }
};

export default brandAPI;