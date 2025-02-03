import DashboardLayout from "../layouts/DashboardLayout";
import Slider from "react-slick";
import { RiStarFill, RiChat3Fill, RiArrowLeftLine, RiBookmarkFill, RiHandbagFill } from "react-icons/ri";
import '../scss/Dashboard/Consultation.scss';
import { useNavigate } from "react-router-dom";
import { getFrontendCanisterId } from "../utils/canister"; 

const Consultation = () => {
  const navigate = useNavigate();
  const frontendCanisterId = getFrontendCanisterId(); 

  const carouselImages = [
    "/images/adv1.png",
    "/images/adv2.png",
    "/images/adv3.png",
    "/images/adv4.png"
  ];

  const consultants = Array(10).fill({
    name: "Amira Farouq",
    experience: "10 Years",
    rating: 4.5,
    price: "1.2 ICP",
    image: "/images/profile-placeholder.png"
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <DashboardLayout>
      <div className="consultant-container">
        <div className="consultant-feed">
          <div className="consultation-section">
          <button className="back-button"><RiArrowLeftLine className="back-icon"/> Back to Home</button>
          <div className="consultant-title-section">
            <div className="consultation-suggested">
                <RiBookmarkFill className="icon-title" />
            </div>
            <p>Suggested</p>
          </div>
            <div className="consultation-grid">
              {consultants.slice(0, 3).map((consultant, index) => (
                <div key={index} className="consultation-card">
                <img src={consultant.image} alt={consultant.name} className="consultant-avatar" />
                <p className="consultant-name">{consultant.name}</p>
                <div className="consultant-info">
                  <span className="consultant-exp">
                    <RiHandbagFill className="icon" /> {consultant.experience}
                  </span>
                  <span className="consultant-rating">
                    <RiStarFill className="star-icon" /> {consultant.rating} / 5
                  </span>
                </div>
                <div className="consultant-footer"> 
                  <p className="consultant-price">
                      <img src="/images/ICP Logo.png" className="consultant-icp" /> {consultant.price}
                  </p>
                  <div>
                      <a href={`/psychologist?canisterId=${frontendCanisterId}`} className="chat-button">
                          <RiChat3Fill className="icon-chat" /> Chat
                      </a>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>

          <div className="consultation-section">
            <div className="consultant-title-section">
                <div className="consultation-suggested">
                    <RiBookmarkFill className="icon-title" />
                </div>
                <p>Suggested</p>
            </div>
            <div className="consultation-grid">
              {consultants.map((consultant, index) => (
                <div key={index} className="consultation-card">
                <img src={consultant.image} alt={consultant.name} className="consultant-avatar" />
                <p className="consultant-name">{consultant.name}</p>
                <div className="consultant-info">
                  <span className="consultant-exp">
                    <RiHandbagFill className="icon" /> {consultant.experience}
                  </span>
                  <span className="consultant-rating">
                    <RiStarFill className="star-icon" /> {consultant.rating} / 5
                  </span>
                </div>
                <div className="consultant-footer"> 
                  <p className="consultant-price">
                      <img src="/images/ICP Logo.png" className="consultant-icp" /> {consultant.price}
                  </p>
                  <div>
                      <a href={`/psychologist?canisterId=${frontendCanisterId}`} className="chat-button">
                          <RiChat3Fill /> Chat
                      </a>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-sidebar">
          <div className="carousel-advertisement">
            <Slider {...settings}>
              {carouselImages.map((img, index) => (
                <div key={index} className="carousel-slide">
                  <img src={img} alt={`Banner ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Consultation;
