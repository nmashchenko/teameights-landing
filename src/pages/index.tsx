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
import dynamic from "next/dynamic";

const Home = () => {
  // dynamically importing the countdown in order to prevent bug with difference
  const CountdownComponent = dynamic(
    () => import("../components/Countdown/Countdown"),
    {
      ssr: false,
    }
  );

  return (
    <BasicLayout>
      <Toaster />
      <NavBar shouldScroll />
      <Container>
        <Hero />
        <Overview />
        <Features />
        <GetInTouch />
        <Questions />
        <Waiting />
        <CountdownComponent />
        <Footer />
      </Container>
    </BasicLayout>
  );
};

export default Home;
