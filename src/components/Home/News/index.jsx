import { Link } from 'react-router-dom'
import { homeNews } from './homeNews'
import './index.css'
import PaginationDots from './PaginationDots'
function News() {
    const news = homeNews.map(news => {
        return (
            <Link 
                className="news-item"
                to={news.link}
            >
                <div className="fade" />
                <img src={news.src} alt={news.alt} className="news-image"/>
                <span className="news-title">{ news.title }</span>
            </Link>
        )
    })
    
    function scrollTo(index) {
        const nodeWidth = document.querySelector('.news-item').offsetWidth
        const container = document.querySelector('.news-container')
        container.scrollLeft = index * nodeWidth
    }

    return (
        <section className="news">
            <div className="news-container">
                { news }
                <PaginationDots dots={news} scrollTo={scrollTo} />
            </div>
        </section>
    )
}

export default News