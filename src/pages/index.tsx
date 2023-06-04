import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Overview from "@/components/Overview/Overview";
import Features from "@/components/Features/Features";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Waiting from "@/components/Waiting/Waiting";
import { Toaster } from "react-hot-toast";
import Questions from "@/components/Questions/Questions";
import { Container } from "../layout/Basic";

const Home = () => {
  return (
    <BasicLayout>
      <Toaster />
      <NavBar />
      <Container>
        <Hero />
        <Overview />
        <Features />
        <GetInTouch />
        <Questions />
        <Waiting />
        <Footer />
      </Container>
    </BasicLayout>
  );
};

export default Home;
