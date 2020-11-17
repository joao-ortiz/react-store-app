import './index.css'
import { otherLinks } from './otherLinks'
import { Link } from 'react-router-dom'
function Other() {
    const links = otherLinks.map(link => {
        return (<Link
            to={link.path}
            className="other-item"
        >
            <div className="other-fade" />
            <img src={link.img} alt={link.title}/>
            <span>{link.title}</span>
        </Link>)
    })

    return (
        <section className="other-container">
            { links }
        </section>
    )
}

export default Other