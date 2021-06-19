export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    getters: {
        getInventory(state) {
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        setInventory addToCart(state, payload) {
            state.cart.push(payload);
        },
        removeItem(state, payload) {
            state.cart.splice(payload, 1);
        }
    }
}