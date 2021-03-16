import { $host, $authhost } from './index';

const categoryAPI = {

    async createCategory(category) {
        const { data } = await $authhost.post('/api/category', category);
        return data;
    },

    async fetchCategories() {
        const { data } = await $host.get('/api/category');
        return data;
    }
};

export default categoryAPI;