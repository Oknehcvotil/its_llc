// import { MainCont } from "./Main.styled";

import AdvancesSection from "../AdvancesSection/AdvancesSection";
import HeroSection from "../HeroSection/HeroSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AdvancesSection />
    </main>
  );
};

export default Main;
