import { shoppingSections } from './shoppingSections'
import './index.css'
import { Link } from 'react-router-dom'
function ShoppingSections() {
    const sections = shoppingSections.map(section => {
        return (
            <Link 
                to={`/shop/${section.section}`} 
                className="section-item"
            >
                <div className="image-container"><img src={require(`../../../assets/${section.img}.png`).default} alt=""/></div>
                <div className="section-label">
                    <div
                        
                        className="label-container"
                    >
                        {section.title}
                    <span className="half-color">{section.title}</span>
                    </div> 
                </div>
            </Link>
        )
    })

    return (
        <section className="shopping-sections">
            <div className="shopping-section-container">
                { sections }
            </div>
        </section>
    )
}

export default ShoppingSections