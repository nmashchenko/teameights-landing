import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Footer from "@/components/Footer/Footer";
import { Container } from "../layout/Basic";
import AboutPlatform from "@/components/AboutPlatform/AboutPlatform";
import TargetAudience from "@/components/TargetAudience/TargetAudience";
import Benefits from "@/components/Benefits/Benefits";

const Info = () => {
  return (
    <BasicLayout>
      <NavBar />
      <Container>
        <AboutPlatform />
        <TargetAudience />
        <Benefits />
        <Footer />
      </Container>
    </BasicLayout>
  );
};

export default Info;