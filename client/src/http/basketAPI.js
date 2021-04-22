import { $authhost } from './index';

const basketAPI = {
    async fetchBasket(id) {
        const { data } = await $authhost.get(`/api/basket/${id}`);
        return data;
    },

    async incrementBasketProduct(id, body) {
        const { data } = await $authhost.post(`/api/basket/plus/${id}`, body);
        return data;
    },

    async decrementBasketProduct(id, body) {
        const { data } = await $authhost.post(`/api/basket/minus/${id}`, body);
        return data;
    }
};

export default basketAPI;