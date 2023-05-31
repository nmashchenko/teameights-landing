import NavBar from "@/components/NavBar/NavBar";
import BasicLayout from "../layout/Basic";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <BasicLayout>
      <NavBar />
      <Hero />
    </BasicLayout>
  );
};

export default Home;
