import News from './News'
import ShoppingSections from './ShoppingSections'
import Other from './Other'
function Home() {
    return (
        <div className="Home">
            <News />
            <ShoppingSections />
            <Other />
        </div>
    )
}

export default Home