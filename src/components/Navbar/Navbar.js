import { Mobile, Desktop } from '../Breakpoints/Breakpoints';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <Desktop>
                <DesktopNavbar />
            </Desktop>
            <Mobile>
                <MobileNavbar />
            </Mobile> 
        </>
    )
}

export default Navbar;