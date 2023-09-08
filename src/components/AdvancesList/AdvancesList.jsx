import { AdvList, AdvItem, ImgCont, AdvText } from "./AdvancesList.styled";
import SvgSelector from "../../helpers/SvgSelector";
import { useTranslation } from "react-i18next";

const AdvancesList = () => {
  const { t } = useTranslation();

  const advantages = [
    { id: "truck", textKey: "advCarPark" },
    { id: "punctualityClock", textKey: "advPunctuality" },
    { id: "handshake", textKey: "advPartners" },
    { id: "fullWeek", textKey: "advControl" },
  ];

  return (
    <AdvList>
      {advantages.map((advantage, index) => (
        <AdvItem key={index}>
          <ImgCont>
            {advantage.id && <SvgSelector id={advantage.id} />}
          </ImgCont>
          <AdvText>{t(advantage.textKey)}</AdvText>
        </AdvItem>
      ))}
    </AdvList>
  );
};

export default AdvancesList;
