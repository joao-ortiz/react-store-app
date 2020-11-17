import { Link } from 'react-router-dom'
import './index.css'
function Product({product}) {
    return (
        <Link to={`/product/${product.id}`} className="product-container">
            <img src={require(`../../../assets/${product.img}`).default} alt="" className="product-image"/>
            {/* <img src="" alt="" className="product-alt-image"/> */}
            <div className="product-tag">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}$</span>
            </div>
            <div className="add-to-bag">+</div>
        </Link>
    )
}

export default Product