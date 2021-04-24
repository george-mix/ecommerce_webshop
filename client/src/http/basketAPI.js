import { $authhost } from './index';

const basketAPI = {
    async fetchBasket(id) {
        const { data } = await $authhost.get(`/api/basket/${id}`);
        return data;
    },

    async incrementBasketProduct(basketId, productId) {
        let body = {
            productId
        }
        const { data } = await $authhost.post(`/api/basket/plus/${basketId}`, body);
        return data;
    },

    async decrementBasketProduct(basketId, productId) {
        let body = {
            productId
        }
        const { data } = await $authhost.post(`/api/basket/minus/${basketId}`, body);
        return data;
    }
};

export default basketAPI;