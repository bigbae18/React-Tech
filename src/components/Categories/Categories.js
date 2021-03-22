import './Categories.css';

const Categories = () => {
    return (
        <div className="container">
            <div className="row rounded">
                <div className="col-12 py-4 my-3 mv-category">
                    <div className="mv p-3">
                        <div className="mv-overlay mv-overlay-img"></div>
                        <h6 className="primary-color">MOST VIEWED CATEGORY</h6>
                        <h2>Highlighted Product Category</h2>
                        <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare et mauris non pretium. Sed vitae est erat. Pellentesque dictum eros turpis, vitae volutpat magna.</p>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12 col-lg-4 p-2 categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image safety-image"></div>
                        <h3>Safety</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 text-center text-lg-start categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image janitorial-image"></div>
                        <h3>Janitorial</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 text-center text-lg-start categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image tools-image"></div>
                        <h3>Tools</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12 col-lg-4 p-2 categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image woodworking-image"></div>
                        <h3>Woodworking</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 text-center text-lg-start categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image gardening-image"></div>
                        <h3>Gardening</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 p-2 text-center text-lg-start categories-container">
                    <div className="cat d-flex flex-column px-3 justify-content-center text-center text-lg-start h-100">
                        <div className="overlay-cat-image supplies-image"></div>
                        <h3>Office Supplies</h3>
                        <h5>Subtitle</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;