export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    getters: {
        getInventory(state) {
            return state.nventory
        }
    }
}