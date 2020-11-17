import './index.css'
import { useState, useEffect } from 'react'
import FilterOption from './FilterOption'
function ProductFilter({onFilter}) {
    const [filters, setFilters] = useState([])
    const options = ['short', 'pants', 'underwear']
    function handleCheck(value, action) {
        console.log(value, action);
        if (action === 'add') {
            setFilters([...filters, value])
        } else {
            setFilters(
                filters.filter(option => {
                    return option !== value
                })
            )
        }
    }
    useEffect(() => {
        onFilter(filters)
    },[filters])
    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <div className="filter-options">
                { options.map(option => {
                    return(
                    <FilterOption option={option} handleCheck={handleCheck}/>
                    )
                }) }
            </div>
        </div>
    )
}

export default ProductFilter