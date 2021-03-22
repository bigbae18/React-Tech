import { FaAward, FaComments, FaGlobe, FaUser, FaShieldAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const QualityMobile = () => {
    return (
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="container my-2">
                <h6 className="default-color">
                    Daitool Promise
                </h6>
                <div className="container">
                    <div className="row text-center my-3 px-auto">
                        <div className="col-6 p-3 quality-container">
                            <FaComments className="display-6 primary-color my-3" />
                            <h3>Efficient</h3>
                            <h6 className="default-color">International Shipping</h6>
                        </div>
                        <div className="col-6 p-3 quality-container">
                            <FaAward className="display-6 primary-color my-3" />
                            <h3>High-Quality</h3>
                            <h6 className="default-color">Guaranteed</h6>
                        </div>
                        <div className="col-6 p-3 quality-container">
                            <FaShieldAlt className="display-6 primary-color my-3" />
                            <h3>Reliable</h3>
                            <h6 className="default-color">From $40</h6>
                        </div>
                        <div className="col-6 p-3 quality-container">
                            <FaGlobe className="display-6 primary-color my-3" />
                            <h3>Global</h3>
                            <h6 className="default-color">Ships to 50 countries</h6>
                        </div>
                        <div className="col-6 offset-3 p-3 quality-container">
                            <FaUser className="display-6 primary-color my-3" />
                            <h3>Costumer Focus</h3>
                            <h6 className="default-color">From $40</h6>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default QualityMobile;