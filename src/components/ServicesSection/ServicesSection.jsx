import { useTranslation } from "react-i18next";

import {  ServCont, ServTitle } from "./ServicesSection.styled";
import ServicesList from "../ServicesList/ServicesList";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <ServCont>
        <ServTitle>{t("servicesTitle")}</ServTitle>
        <ServicesList />
      </ServCont>
    </section>
  );
};

export default ServicesSection;
