import { useState } from 'react'
import './index.css'
function PaginationDots({ dots, scrollTo }) {
    const [active, setActive] = useState(0)
    let index = 0
    function handleClick(index) {
        setActive(index)
        scrollTo(index)
    }

    return (
        <div className="pagination-container">
            { dots.map(dot => {
                const dotIndex = index++
                return <span 
                    onClick={() => handleClick(dotIndex)} 
                    key={dotIndex} 
                    className={(active === dotIndex) ? 'dot active-dot' : 'dot'}
                />
            })}
        </div>
    )
}

export default PaginationDots