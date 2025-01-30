import DashboardLayout from "../layouts/DashboardLayout";
import Slider from "react-slick"; 
import { RiCameraFill } from "react-icons/ri";
import { useState } from "react";
import '../scss/Dashboard/EditProfile.scss';

const EditProfile = () => {
    const [selectedImage, setSelectedImage] = useState("/images/profile3.png");
    const [selectedBanner, setSelectedBanner] = useState("/images/banner-psikolog.png");
  
    const handleImageChange = (event, type) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        if (type === "profile") {
          setSelectedImage(imageUrl);
        } else {
          setSelectedBanner(imageUrl);
        }
      }
    };

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
        <div className="content-profile">
            <div className="edit-profile-container">
                <div className="edit-profile-card">
                    <div className="profile-banner">
                        <label className="banner-overlay">
                        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "banner")} />
                        <RiCameraFill className="camera-icon" />
                        </label>
                        <img src={selectedBanner} alt="Banner" className="banner-image" />
                    </div>

                    <div className="profile-picture">
                        <label className="profile-overlay">
                        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "profile")} />
                        <RiCameraFill className="camera-icon" />
                        </label>
                        <img src={selectedImage} alt="Profile" className="profile-avatar" />
                    </div>
                    <div className="edit-profile-data">
                        <div className="profile-info">
                            <h2>Zahra Adinda Yaskur, M.Psi.</h2>
                            <p>Lecturer in Psychology at Gunadarma University</p>
                        </div>

                        <div className="profile-fields">
                            <label>Full Name</label>
                            <input type="text" placeholder="Full Name" />

                            <label>Headline</label>
                            <input type="text" placeholder="Write your Headline" />

                            <label>Bio</label>
                            <textarea placeholder="Write your Bio"></textarea>

                            <label>Education Background</label>
                            <input type="text" placeholder="Your Education Background" />

                            <label>Workplace</label>
                            <input type="text" placeholder="Your Workplace" />

                            <label>STR Number</label>
                            <input type="text" placeholder="STR Number" />

                            <label>Work Experience</label>
                            <input type="text" placeholder="Work Experience" />

                            <div className="submition">
                                <button className="save-btn">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-sidebar" style={{ marginTop: "30px" }}>
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

export default EditProfile;
