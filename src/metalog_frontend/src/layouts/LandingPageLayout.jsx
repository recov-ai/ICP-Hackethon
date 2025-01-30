import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";
import '../scss/LandingPage/Home.scss';

const LandingPageLayout = ({children}) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="content-home">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
