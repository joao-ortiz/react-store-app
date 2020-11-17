import './index.css'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContex'
import Product from './Product'
import ProductFilter from './ProductFilter'
function Shopping(props) {
    const [filters, setFilters] = useState([])
    const { products } = useContext(ProductsContext)
    let productList = products.filter(product => {
        return product.section === props.match.params.section
    })
    function onFilter(filterList) {
        setFilters(filterList)
    }
    function renderProducts() {
        if (filters.length) {
            const filterSet = {}
        filters.map(filter => filterSet[filter] = true)
        const filteredProducts = productList.filter(product => {
            return filterSet[product.category]
        })
        return filteredProducts
        }
        return productList
        
    }
    return (
        <section className="products-container">
            <div className="section-title">
                <h1>{props.match.params.section ? props.match.params.section + ' apparel' : 'Shop All'}</h1>
            </div>
            <ProductFilter onFilter={onFilter}/>
            <div className="product-list">
                { renderProducts().map(product => {
            return (
                <Product product={product} />
            )
        }) }
            </div>
        </section>
    )
}

export default Shopping