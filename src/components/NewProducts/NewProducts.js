import './NewProducts.css'

const NewProducts = () => {
    return (
        <div id="newProducts" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#newProducts" data-bs-slide-to="0" aria-current="true" className="active"></button>
                <button type="button" data-bs-target="#newProducts" data-bs-slide-to="1" aria-current="true"></button>
                <button type="button" data-bs-target="#newProducts" data-bs-slide-to="2" aria-current="true"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item carousel-products-item active">
                    <div className="overlay-image overlay-image1"></div>
                    <div className="container d-flex flex-column justify-content-center text-end carousel-containers h-100">
                        <h1>New Products</h1>
                        <h4>Japan</h4>
                        <a href="#" className="new-product-link">Discover now</a>
                    </div>
                </div>

                <div className="carousel-item carousel-products-item">
                    <div className="overlay-image overlay-image2"></div>
                    <div className="container d-flex flex-column justify-content-center text-end carousel-containers h-100">
                        <h1>New Products</h1>
                        <h4>Ecuador</h4>
                        <a href="#" className="new-product-link">Discover now</a>
                    </div>
                </div>

                <div className="carousel-item carousel-products-item">
                    <div className="overlay-image overlay-image3"></div>
                    <div className="container d-flex flex-column justify-content-center text-end carousel-containers h-100">
                        <h1>New Products</h1>
                        <h4>Russia</h4>
                        <a href="#" className="new-product-link">Discover now</a>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}

export default NewProducts;