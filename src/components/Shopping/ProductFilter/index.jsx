import './index.css'
import FilterOption from './FilterOption'
function ProductFilter({setFilters, filters}) {
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
    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <div className="filter-options">
                { options.map(option => {
                    return(
                    <FilterOption key={option} option={option} handleCheck={handleCheck}/>
                    )
                }) }
            </div>
        </div>
    )
}

export default ProductFilter