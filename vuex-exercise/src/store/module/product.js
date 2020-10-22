export default {
    namespaced: true,
    state: {
        products: [
            { name: 'Chair', price: 699.99 },
            { name: 'Headset', price: 169.99 },
            { name: 'Webcam', price: 769.99 },
        ]
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    },
    mutations: {
        registerProduct(state, product) {
            state.products.push(product)
        }
    },
    actions: {
        registerProduct(context, product) {
            context.commit('registerProduct', product)
        }
    }
}