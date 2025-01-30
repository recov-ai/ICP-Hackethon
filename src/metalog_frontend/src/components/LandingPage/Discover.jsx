import * as React from 'react';
import '../../scss/LandingPage/Discover.scss';
import Slider from "react-slick";

const Discover = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [galleryData, setGalleryData] = React.useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: "20%",
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: 0,
                }
            }
        ],
    };

    React.useEffect(() => {
        const fetchData = () => {
            const images = [
                { image: "/images/banner1.png" },
                { image: "/images/banner2.png" },
                { image: "/images/banner3.png" },
                { image: "/images/banner4.png" },
            ];
            console.log("Gallery Data:", images); 
            setGalleryData(images);
        };
    
        fetchData();
    }, []);
    

    return (
        <section className="discover">
            <div className="content-text">
                <h1>Discover What Metalog Has to Offer</h1>
            </div>
            <div className="content-img">
                <Slider {...settings} className="slider">
                    {galleryData.map((item, index) => (
                        <div
                            key={index}
                            className={`slide ${activeSlide === index ? "active" : "inactive"}`}
                        >
                            <img
                                src={item.image}
                                alt={`Gallery ${index + 1}`}
                                draggable="false"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Discover;
