import BrandQuality from './BrandQuality/BrandQuality';
import Brands from './Brands/Brands';
import Categories from './Categories/Categories';
import Navbar from './Navbar/Navbar';
import NewProducts from './NewProducts/NewProducts'

const Home = () => {
    return (
        <>
            <Navbar />
            <NewProducts />
            <Categories />
            <Brands />
            <BrandQuality />
        </>
    )
}

export default Home;