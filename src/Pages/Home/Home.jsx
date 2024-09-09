import "../../index.css";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Faq from "../../Components/Faq/Faq";
import Media from "../../Components/Media/Media";

const Home = () => {
  return (
    <div>
      <NavBar />

      <Hero />

      <AboutUs />
      <Faq />

      <Media />
    </div>
  );
};

export default Home;
