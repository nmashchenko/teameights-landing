import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Overview from "@/components/Overview/Overview";
import Features from "@/components/Features/Features";

const Home = () => {
  return (
    <BasicLayout>
      <NavBar />
      <Hero />
      <Overview />
      <Features />
      <Footer />
    </BasicLayout>
  );
};

export default Home;
