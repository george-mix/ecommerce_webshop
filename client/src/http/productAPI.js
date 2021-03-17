import { $authhost, $host } from './index';

const productAPI = {

    async fetchProducts(brandId, categoryId, limit, page) {
        const { data } = await $host.get('/api/product', { params: brandId, categoryId, limit, page });
        return data;
    },

    async fetchOneProduct(id) {
        const { data } = await $host.get('/api/product' + id);
        return data;
    },

    async createProduct(product) {
        const { data } = await $authhost.post('/api/product', product);
        return data;
    }
};

export default productAPI;





