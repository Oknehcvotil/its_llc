import SvgSelector from '../../../helpers/SvgSelector';
import { useTranslation } from 'react-i18next';
import TruckList from '../TruckList/TruckList';
import {
  ServList,
  ServItem,
  ServImgCont,
  ServTitles,
} from './ServicesList.styled';
import { useInView } from 'react-intersection-observer';

const ServicesList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const services = [
    {
      id: 'uaMap',
      title: t('countryTransportation'),
    },
    {
      id: 'world',
      title: t('worldTransportation'),
    },
  ];

  return (
    <ServList ref={ref}>
      {services.map(service => (
        <ServItem key={service.id}>
          <ServImgCont className={`${inView ? 'visible' : ''}`}>
            <SvgSelector id={service.id} />
          </ServImgCont>
          <ServTitles>{service.title}</ServTitles>
          <TruckList />
        </ServItem>
      ))}
    </ServList>
  );
};

export default ServicesList;
