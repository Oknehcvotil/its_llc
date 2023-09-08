import { useTranslation } from "react-i18next";
import { List, TruckItem, TruckName } from "./TruckList.styled";

const TruckList = () => {
  const { t } = useTranslation();

  const trucks = [
    t("grainTrucks"),
    t("containerTruks"),
    t("tankerTruks"),
    t("tarpauTruks"),
  ];

  return (
    <List>
      {trucks.map((truck, index) => (
        <TruckItem key={index}>
          <TruckName>{truck}</TruckName>
        </TruckItem>
      ))}
    </List>
  );
};

export default TruckList;
