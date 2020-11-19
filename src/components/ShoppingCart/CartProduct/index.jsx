import './index.css'
function CartProduct({item, dispatch}) {
    const product = item.product
    const quantity = item.quantity
    function removeItem() {
        dispatch({type: 'REMOVE_ITEM', product})
    }
    function increase() {
        dispatch({type: 'ADD_ITEM', product})
    }
    function decrease() {
        if ( quantity > 1 ){
            dispatch({type: 'DECREASE_ITEM', product})
        } else {
            dispatch({type: 'REMOVE_ITEM', product})
        }
        
    }
    return <div className="cart-product">
        <div className="info">
            <img src={require(`../../../assets/${product.img}`).default} alt="" className="image"/>
            <div className="label">
                <div className="name">{product.name}</div>
                <div className="price">{product.price}</div>
            </div>
        </div>
        <div className="quantity"><span style={{fontWeight: 'bold'}} onClick={increase}>+</span>{quantity}<span style={{fontWeight: 'bold'}} onClick={decrease}>-</span></div>
        <div className="sub-total">{quantity * product.price}$</div>
        <button onClick={removeItem} className="remove">Remove</button>
    </div>
}

export default CartProduct