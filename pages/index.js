import CHead from "@/components/CHead";
import Hero from "@/components/Hero";
import HowToDonate from "@/components/HowToDonate";
import Progress from "@/components/Progress";

const Home = () => {
  return (
    <>
      <CHead title='Home' />
      <Hero/>
      <Progress/>
      <HowToDonate/>
    </>
  );
};

export default Home;