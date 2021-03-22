import { Mobile, Desktop } from '../Breakpoints/Breakpoints';
import './BrandQuality.css';
import QualityDesktop from './QualityDesktop/QualityDesktop';
import QualityMobile from './QualityMobile/QualityMobile';

const BrandQuality = () => {
    return (
        <>
            <Mobile>
                <QualityMobile />
            </Mobile>
            <Desktop>
                <QualityDesktop />
            </Desktop> 
        </>
    )
}

export default BrandQuality;