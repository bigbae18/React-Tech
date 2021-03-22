import Slider from "react-slick";

const BrandsDesktop = () => {

    const sliderSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1
    }

    return (
        <div className="container p-auto my-5">
            <div className="row text-center">
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/anex.png" alt="Anex Logo"/>
                </div>
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/mitutoyo.png" alt="Mitutoyo Logo"/>
                </div>
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/olfa.png" alt="Olfa Logo"/>
                </div>
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/pentel.png" alt="Pentel Logo"/>
                </div>
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/tone.png" alt="Tone Logo"/>
                </div>
                <div className="col-2 p-3 brands">
                    <img srcSet="./assets/vessel.png" alt="Vessel Logo"/>
                </div>
            </div>
        </div>
    )
}

export default BrandsDesktop;