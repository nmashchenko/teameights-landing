import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Overview from "@/components/Overview/Overview";
import Features from "@/components/Features/Features";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Waiting from "@/components/Waiting/Waiting";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <BasicLayout>
      <Toaster />
      <NavBar />
      <Hero />
      <Overview />
      <Features />
      <GetInTouch />
      <Waiting />
      <Footer />
    </BasicLayout>
  );
};

export default Home;
