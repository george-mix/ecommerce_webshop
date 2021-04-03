import { $host, $authhost } from './index';

const categoryAPI = {

    async createCategory(category) {
        const { data } = await $authhost.post('/api/category', category);
        return data;
    },

    async fetchCategories() {
        const { data } = await $host.get('/api/category');
        return data;
    },

    async updateCategory(id, name) {
        const { data } = await $authhost.put(`/api/category/${id}`, name);
        return data;
    },

    async deleteCategory(id) {
        const { data } = await $authhost.delete(`/api/category/${id}`,);
        return data;
    }
};

export default categoryAPI;