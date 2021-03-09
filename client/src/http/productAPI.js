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

export const createCategory = async (category) => {
    const { data } = await $authhost.post('/api/category', category);
    return data;
};

export const fetchCategories = async () => {
    const { data } = await $host.get('/api/category');
    return data;
};

export const createBrand = async (brand) => {
    const { data } = await $authhost.post('/api/brand', brand);
    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get('/api/brand');
    return data;
};

