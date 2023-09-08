import AdvancesList from "../AdvancesList/AdvancesList";
import { AdvSect, AdvCont, AdvTitle } from "./AdvancesSection.styled";
import { useTranslation } from "react-i18next";


const AdvancesSection = () => {
    const { t } = useTranslation();       

  return (
      <AdvSect>
      <AdvCont>
        <AdvTitle>{t("advTitle")}</AdvTitle>
        <AdvancesList />
      </AdvCont>
    </AdvSect>
  );
};

export default AdvancesSection;
