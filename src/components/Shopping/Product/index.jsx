import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './index.css'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
function Product({product}) {
    const {dispatch} = useContext(ShoppingCartContext)
    function addToBag() {
        dispatch({type: 'ADD_ITEM', product, quantity: 1})
    }
    return (<div style={{position: 'relative'}}>
        <Link to={`/product/${product.id}`} className="product-container">
            <img src={require(`../../../assets/${product.img}`).default} alt="" className="product-image"/>
            {/* <img src="" alt="" className="product-alt-image"/> */}
            <div className="product-tag">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}$</span>
            </div>
        </Link>
        <div onClick={addToBag} className="add-to-bag">+</div>
    </div>
        
    )
}

export default Product