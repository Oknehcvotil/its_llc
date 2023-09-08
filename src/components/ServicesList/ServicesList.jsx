import SvgSelector from "../../helpers/SvgSelector";
import { useTranslation } from "react-i18next";
import TruckList from "../TruckList/TruckList";
import { ServList, ServItem, ServTitles } from "./ServicesList.styled";

const ServicesList = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "uaMap",
      title: t("countryTransportation"),
    },
    {
      id: "world",
      title: t("worldTransportation"),
    },
  ];

  return (
    <ServList>
      {services.map((service) => (
        <ServItem key={service.id}>
          <div className="servImg">
            <SvgSelector id={service.id} />
          </div>
          <ServTitles>{service.title}</ServTitles>
          <TruckList />
        </ServItem>
      ))}
    </ServList>
  );
};

export default ServicesList;
