import { createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer'

export const ShoppingCartContext = createContext()

function ShoppingCartcontextProvider(props) {
    
    const [cartItems, dispatch] = useReducer(cartReducer, [])

    return <ShoppingCartContext.Provider value={{cartItems, dispatch}}>
            {props.children}
        </ShoppingCartContext.Provider>
}

export default ShoppingCartcontextProvider