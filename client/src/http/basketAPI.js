import { $authhost } from './index';

const basketAPI = {
    async fetchBasket(id) {
        const { data } = await $authhost.get('/api/basket/' + id);
        return data;
    }
};

export default basketAPI;