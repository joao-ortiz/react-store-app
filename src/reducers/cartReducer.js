function changeQuantity(cart, action){
    const newCart = cart.map(item => {
        if (item.product.id !== action.product.id) {
            return item
        }
        if (action.type === 'ADD_ITEM') {
            return {
                ...item,
                quantity: (item.quantity + 1)
            }

        } else {
            return {
                ...item,
                quantity: (item.quantity - 1)
            }
        }
    })
    return newCart
}

export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if (state.findIndex(item => action.product.id === item.product.id) >= 0) {
                return changeQuantity(state, action)
            } else {
                return [
                    ...state,
                    {
                        product: action.product,
                        quantity: action.quantity

                    }
                ]
            }
        case 'REMOVE_ITEM':
            return state.filter(cartItem => cartItem.product.id !== action.product.id)
        case 'DECREASE_ITEM':
                return changeQuantity(state, action)
        default:
            return state
    }
}