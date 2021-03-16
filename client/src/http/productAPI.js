import { $authhost, $host } from './index';

export const fetchProducts = async (brandId, categoryId, limit, page) => {
    const { data } = await $host.get('/api/product', { params: brandId, categoryId, limit, page });
    return data;
};

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('/api/product' + id);
    return data;
};

export const createProduct = async (product) => {
    const { data } = await $authhost.post('/api/product', product);
    return data;
};





