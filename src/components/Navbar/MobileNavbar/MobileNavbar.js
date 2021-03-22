import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { MdPermIdentity, MdShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons'

const MobileNavbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleIconMenuClick = () => setClicked(!clicked)
    const handleCloseMenu = () => setClicked(false);

    return (
        <IconContext.Provider value={{ color: "#fff", size: "1.5em" }}>
            <div className="container-fluid px-4 py-3 header-container">

                <div className="d-flex flex-row justify-content-between text-center m-2">

                    <div className="d-inline-flex align-items-center justify-content-between" onClick={handleIconMenuClick}>
                        {clicked ? <FaTimes /> : <FaBars />}
                        <a href="#">
                            <img src="./assets/white-logo.png" alt="Daitool logo" width="75%" height="75%" />
                        </a>
                    </div>

                    <div className="icons-nav d-inline-flex align-items-center flex-row justify-content-around">
                        <a href="#">
                            <MdPermIdentity />
                        </a>
                        <a href="#">
                            <MdShoppingCart />
                        </a>
                    </div>

                </div>

                <div className="d-flex flex-row justify-content-center align-items-center w-75 m-auto pt-1">
                    <div className="input-group">
                        <input type="search" placeholder="Search" className="form-control rounded" aria-descrbedby="searchbar" aria-label="Search" />
                        <div className="input-group-text">
                            <button type="button" className="btn rounded" id="searchbar">
                                <FaSearch color="#000" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </IconContext.Provider>
    )
}

export default MobileNavbar;