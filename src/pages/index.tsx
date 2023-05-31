import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Overview from "@/components/Overview/Overview";

const Home = () => {
  return (
    <BasicLayout>
      <NavBar />
      <Hero />
      <Overview />
      <Footer />
    </BasicLayout>
  );
};

export default Home;
