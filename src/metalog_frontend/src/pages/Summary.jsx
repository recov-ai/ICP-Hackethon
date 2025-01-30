import DashboardLayout from "../layouts/DashboardLayout";
import Slider from "react-slick";
import { RiArrowLeftLine, RiBookmarkFill } from "react-icons/ri";
import "../scss/Dashboard/Summary.scss";

const Summary = () => {
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
      <div className="summary-container">
        <div className="summary-content">
          <div className="summary-header">
            <div className="handle-back">
                <RiArrowLeftLine className="icon-back-summary"/>
                <h4>Back To Home</h4>
            </div>
            <div className="title-header">
                <RiBookmarkFill className="icon-title-summary"/>
                <h4>Summarized Insights from Psychological Consultations</h4>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-author">
              <img src="/images/profile1.png" alt="profile summary" className="avatar-summary" />
              <h4>Abdullah Bashar</h4>
            </div>

            <div className="summary-section">
              <h3>1. The Importance of Self-Awareness</h3>
              <p>
                Psychological consultations often highlight the importance of understanding 
                your own emotions, thoughts, and behaviors. Self-awareness is the foundation 
                of mental health because it helps individuals recognize patterns, triggers, 
                and areas of improvement. By understanding yourself, you can better manage 
                stress, improve relationships, and set meaningful goals.
              </p>
            </div>

            <div className="summary-section">
              <h3>2. Common Challenges Discussed in Therapy</h3>
              <ul>
                <li><strong>Anxiety:</strong> Worries about the future, overthinking, and fear of failure.</li>
                <li><strong>Depression:</strong> Persistent sadness, loss of interest, and lack of motivation.</li>
                <li><strong>Stress Management:</strong> Coping with work, studies, or family responsibilities.</li>
                <li><strong>Relationship Issues:</strong> Communication breakdowns, trust issues, and conflict resolution.</li>
                <li><strong>Self-Esteem:</strong> Overcoming negative self-talk and building confidence.</li>
              </ul>
            </div>

            <div className="summary-section">
              <h3>3. Techniques Often Shared During Sessions</h3>
              <ul>
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifying and changing negative thought patterns.</li>
                <li><strong>Mindfulness Practices:</strong> Staying present and focusing on the "here and now."</li>
                <li><strong>Grounding Techniques:</strong> Simple exercises to manage overwhelming emotions.</li>
                <li><strong>Journaling:</strong> Writing down thoughts to reflect and release pent-up emotions.</li>
                <li><strong>Goal Setting:</strong> Breaking long-term goals into smaller, achievable steps.</li>
              </ul>
            </div>

            <div className="summary-section">
              <h3>4. The Role of Validation</h3>
              <p>
                Psychological consultations emphasize the importance of validation. Feeling 
                heard and understood by a professional helps individuals process their emotions 
                without judgment. It’s a safe space to explore vulnerabilities and make sense of 
                difficult experiences.
              </p>
            </div>

            <div className="summary-section">
              <h3>5. When to Seek Professional Help</h3>
              <p>
                When emotions or problems feel overwhelming or unmanageable:
              </p>
              <ul>
                <li>If daily functioning, like work or relationships, is negatively affected.</li>
                <li>If physical symptoms, such as headaches or insomnia, persist due to emotional distress.</li>
                <li>If you need guidance to process trauma or make significant life decisions.</li>
              </ul>
            </div>

            <div className="summary-section">
              <h3>6. Key Takeaway: Therapy is a Journey</h3>
              <p>
                Psychological consultations are not about instant fixes but about gradual growth. 
                Regular sessions help individuals develop resilience, gain perspective, and build 
                skills to handle life’s complexities. Therapy is a collaborative process, with the 
                psychologist acting as a guide, not a solution provider.
              </p>
            </div>

            <div className="summary-footer">
              <button className="complete-btn">Complete</button>
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

export default Summary;
