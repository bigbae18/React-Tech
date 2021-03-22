import { FaSearch, FaDollarSign } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { MdPermIdentity, MdShoppingCart } from 'react-icons/md';

const DesktopNavbar = () => {

    return (
        <IconContext.Provider value={{ color: "#fff", size: "1.5em" }}>
            <div className="container-fluid p-3 header-container">
                <div className="d-flex flex-row justify-content-between align-items-center text-center px-3 py-2">
                    <a href="#">
                        <img src="./assets/white-logo.png" alt="Daitool logo" width="100%" height="100%" />
                    </a>
                
                    <div className="input-group w-50">
                        <input type="text" placeholder="Search" className="rounded form-control" aria-descrbedby="searchbar" aria-label="searchbar" />
                        <div className="input-group-text">
                            <button type="button" className="btn rounded" id="searchbar">
                                <FaSearch color="#000" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>

                    <div className="icons-nav d-inline-flex align-items-center flex-row justify-content-around">
                        <a href="#" className="d-flex flex-column align-items-center mx-2">
                            <MdPermIdentity />
                            <span>Sign In</span>
                        </a>
                        <a href="#" className="d-flex flex-column align-items-center mx-2">
                            <MdShoppingCart />
                            <span>Cart</span>
                        </a>
                        <a href="#" className="d-flex flex-column align-items-center mx-2">
                            <FaDollarSign />
                            <span className="region-span">
                                EN | USD
                            </span>
                        </a>
                        
                    </div>
                </div>

                <div>

                </div>
            </div>
        </IconContext.Provider>
    )
}

export default DesktopNavbar;