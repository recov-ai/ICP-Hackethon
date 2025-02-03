import DashboardLayout from "../layouts/DashboardLayout";
import PostCard from "../components/Dashboard/PostCard";
import Slider from "react-slick"; 
import { RiGraduationCapFill, RiSchoolFill, RiBookOpenFill, RiTimeFill } from "react-icons/ri";
import '../scss/Dashboard/Psikologis.scss';
import { getFrontendCanisterId } from "../utils/canister"; 

const Psikologis = () => {
  const frontendCanisterId = getFrontendCanisterId(); 
  
  const carouselImages = [
    "/images/adv1.png",
    "/images/adv2.png",
    "/images/adv3.png",
    "/images/adv4.png"
  ];

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
      <div className="dashboard-container">
        <div className="main-feed">
          <div className="profile-psychologist">
            <div className="banner-container">
              <img src="/images/banner-psikolog.png" alt="Banner" className="banner-image" />
            </div>

            <div className="profile-header">
              <img src="/images/profile3.png" alt="Psychologist" className="profile-avatar" />
              <div className="info-profile">
                <h2>Zahra Adinda Yaskur, M.Psi.</h2>
                <p>Lecturer in Psychology at Gunadarma University</p>
              </div>
              {import.meta.env.VITE_ROLE === 'user' ? (
                <div className="chat-psikolog">
                  <a href="">Book Later</a>
                  <a className="book-btn" href={`/payment?canisterId=${frontendCanisterId}`}>Book Now</a>
                </div>
              ) : (
                <a className="edit-profile" href={`/edit-profile?canisterId=${frontendCanisterId}`}>Edit Profile</a>
              )}
            </div>
          </div>
          <div className="information-psychologist">
            <div className="profile-details">
              <h3>Profile</h3>
              <p>I am an experienced joiner with well developed skills.</p>
              <ul>
                <li><RiGraduationCapFill className="icon" /> Gunadarma University</li>
                <li><RiSchoolFill className="icon" /> Lecture @ Gunadarma University</li>
                <li><RiBookOpenFill className="icon" /> SK/342847FDKHBIFSYG8392</li>
                <li><RiTimeFill className="icon" /> 5 years experience as a psychologist at Gunadarma University</li>
              </ul>
            </div>
            <div className="content-psychologist">
                <PostCard 
                    username="Zahra Adinda Yaskur" 
                    time="14 minutes ago" 
                    content="AHhhhhhhhhhhhhhh"
                    likes="2.6K"
                    comments="297"
                    profile="/images/profile3.png"
                />
                <PostCard 
                    username="Zahra Adinda Yaskur" 
                    time="6 hours ago" 
                    content="AHhhhhhhhhhhhhhh"
                    likes="2.6K"
                    comments="297"
                    profile="/images/profile3.png"
                />
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

export default Psikologis;
