import './index.css'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useContext, useState } from 'react'
import CartProduct from './CartProduct'
function ShoppingCart() {
    const [visible,setVisible] = useState(false)
    const { cartItems, dispatch } = useContext(ShoppingCartContext)
    function total() {
        let cartTotal = 0
        cartItems.forEach(item => {
            cartTotal += item.product.price * item.quantity
        })
        return cartTotal
    }
    return <div className="cart-container">
        <div onClick={() => setVisible(!visible)} className="cart-button">
            Bag
        </div>
        <div className={visible ? 'cart open' : 'cart'}>
            <div className="cart-header">
                <span>Item</span>
                <span>Quantity</span>
                <span>Subtotal</span>
            </div>
            <div className="cart-products">
                {cartItems.length ? cartItems.map(item => {
                    return <CartProduct item={item} dispatch={dispatch} />
                }) : <h2 style={{
                    textAlign: 'center', 
                    width: '100%',
                    position: 'absolute', 
                    top: '50%', left: '50%', 
                    transform: 'translate(-50%, -50%)'
                    }}>There is nothing here..</h2>
                }
            </div>
            <div className="cart-checkout">
                <div className="total">
                    <span>Total</span>
                    <span>{total()}$</span>
                </div>
                <button>checkout</button>
            </div>
        </div>
    </div>
}

export default ShoppingCart