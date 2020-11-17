import { createContext, useState } from 'react'

export const ProductsContext = createContext()

function ProductsContextProvider(props) {
    const [products, setProducts] = useState([
        {name: 'Cool Pants', id: 1, img: 'Untitled.png', price: 15, section: 'bottom', category: 'short'},
        {name: 'Cool Pants', id: 2, img: 'Untitled.png', price: 15, section: 'bottom', category: 'pants'},
        {name: 'Cool Pants', id: 3, img: 'Untitled.png', price: 15, section: 'bottom', category: 'underwear'},
        {name: 'Cool T-shirt', id: 4, img: 'Untitled2.png', price: 15, section: 'top'},
        {name: 'Cool T-shirt', id: 5, img: 'Untitled2.png', price: 15, section: 'top'},
        {name: 'Cool T-shirt', id: 6, img: 'Untitled2.png', price: 15, section: 'top'},
        {name: 'Cool Cap', id: 7, img: 'Untitled3.png', price: 15, section: 'head'},
        {name: 'Cool Cap', id: 8, img: 'Untitled3.png', price: 15, section: 'head'},
        {name: 'Cool Cap', id: 9, img: 'Untitled3.png', price: 15, section: 'head'},
    ])
    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider