import {
  Hero,
  HeroCont,
  Tagline,
  AboutText,
  CompName,
} from "./HeroSection.styled";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Hero>
      <HeroCont>
        <Tagline>CARRY ON CARRY ALL</Tagline>
        <AboutText>
          <CompName>{t("companyName")}</CompName>
          {t("aboutText")}
        </AboutText>
      </HeroCont>
    </Hero>
  );
};

export default HeroSection;
