import {
  Hero,
  HeroCont,
  Tagline,
  // AboutTitle,
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
        {/* <AboutTitle>{t("aboutTitle")}</AboutTitle> */}
        <AboutText>
          <CompName>{t("companyName")}</CompName>
          {t("aboutText")}
        </AboutText>
      </HeroCont>
    </Hero>
  );
};

export default HeroSection;
