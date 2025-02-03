import DashboardLayout from "../layouts/DashboardLayout";
import PostCard from "../components/Dashboard/PostCard";
import PsychologistCard from "../components/Dashboard/PsychologistCard";
import Slider from "react-slick"; // Import Slider dari react-slick
import '../scss/Dashboard/Dashboard.scss';
import IconLoader from "../utils/IconLoader";

const Dashboard = () => {
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
          <div className="post-box">
            <textarea placeholder="What's on your mind?" />
            <div className="post-options">
              <button className="input-btn">
                <IconLoader name='image-input' className="icon-input"/>Image/Video
              </button>
              <div>
                <button className="post-btn">Upload</button>
              </div>
            </div>
          </div>

          <PostCard 
            username="Meta00002" 
            time="14 minutes ago" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum."
            likes="2.6K"
            comments="297"
            profile="/images/profile1.png"
          />
          <PostCard 
            username="Meta05002" 
            time="6 hours ago" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium. Integer sodales metus ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet, tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu."
            image="/images/post1.png"
            likes="1.2K"
            comments="120"
            profile="/images/profile2.png"
          />
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
          {import.meta.env.VITE_ROLE == "user" ? (
            <div className="recommendation">
              <h3>Recommendation Psychologist</h3>
              <PsychologistCard name="Amira Farouq" experience="10 Years" price="1.2 ICP" rating="4.5" profile="/images/psikolog1.png" />
              <PsychologistCard name="Petros Mambwe" experience="10 Years" price="1.2 ICP" rating="4.5" profile="/images/psikolog2.png" />
              <PsychologistCard name="Varun Choudhary" experience="10 Years" price="1.2 ICP" rating="4.5" profile="/images/psikolog3.png" />
            </div>
          ): ""}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
