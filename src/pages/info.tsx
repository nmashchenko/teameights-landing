import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Footer from "@/components/Footer/Footer";
import { Container } from "../layout/Basic";
import AboutPlatform from "@/components/AboutPlatform/AboutPlatform";
import TargetAudience from "@/components/TargetAudience/TargetAudience";
import Benefits from "@/components/Benefits/Benefits";
import Waiting from "@/components/Waiting/Waiting";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";

const Info = () => {
  const { query } = useRouter();

  useEffect(
    () =>
      scroller.scrollTo((query.section as string) || "About Platform", {
        smooth: true,
        duration: 1200,
        offset: -80,
      }),
    [query]
  );

  return (
    <BasicLayout>
      <NavBar shouldScroll={false} />
      <ScrollToTop />
      <Container>
        <AboutPlatform />
        <TargetAudience />
        <Benefits />
        <Waiting />
        <Footer />
      </Container>
    </BasicLayout>
  );
};

export default Info;
