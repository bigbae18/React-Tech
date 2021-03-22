import { Mobile, Desktop } from '../Breakpoints/Breakpoints';
import BrandsMobile from './BrandsMobile/BrandsMobile';
import BrandsDesktop from './BrandsDesktop/BrandsDesktop';

import './Brands.css';

const Brands = () => {
    return (
        <>
            <Mobile>
                <BrandsMobile />
            </Mobile>
            <Desktop>
                <BrandsDesktop />
            </Desktop>
        </>
    )
}

export default Brands;