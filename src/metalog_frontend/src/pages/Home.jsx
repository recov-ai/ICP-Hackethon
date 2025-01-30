import Heros from "../components/LandingPage/Heros";
import Support from "../components/LandingPage/Support";
import Privacy from "../components/LandingPage/Privacy";
import Chatbot from "../components/LandingPage/Chatbot";
import Solution from "../components/LandingPage/Solution";
import Discover from "../components/LandingPage/Discover";
import About from "../components/LandingPage/About";

import LandingPageLayout from "../layouts/LandingPageLayout";

const Home = () => {
  return (
    <LandingPageLayout>
      <Heros />
      <Support />
      <Privacy />
      <Chatbot />
      <Solution />
      <Discover />
      <About />
    </LandingPageLayout>
  );
};

export default Home;
