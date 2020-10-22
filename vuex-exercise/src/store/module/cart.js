export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product)
        }
    },
    actions: {
        addToCart(context, product) {
            context.commit('addToCart', product)
        }
    }
}