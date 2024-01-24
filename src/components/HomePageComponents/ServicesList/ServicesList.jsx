import { useTranslation } from 'react-i18next';
import { ServList } from './ServicesList.styled';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServicesList = () => {
  const { t } = useTranslation();

  const services = [
    {
      img: '#icon-tipper-truck',
      alt: 'grain',
      title: t('grainTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679667453',
          telNumb: '+38 (067) 966-74-53',
        },
      ],
    },

    {
      img: '#icon-tilt_truck',
      alt: 'Tilt Truck',
      title: t('tiltTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679663681',
          telNumb: '+38 (067) 966-36-81',
        },
        {
          telLink: 'tel:+380679663615',
          telNumb: '+38 (067) 966-36-15',
        },
      ],
    },
    {
      img: '#icon-fuel_truck',
      alt: 'Fuel Truck',
      title: t('tankTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679663681',
          telNumb: '+38 (067) 966-36-81',
        },
        {
          telLink: 'tel:+380679663615',
          telNumb: '+38 (067) 966-36-15',
        },
      ],
    },
    {
      img: '#icon-container-truck',
      alt: 'container',
      title: t('containerTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679663681',
          telNumb: '+38 (067) 966-36-81',
        },
        {
          telLink: 'tel:+380679663615',
          telNumb: '+38 (067) 966-36-15',
        },
      ],
    },
    {
      img: '#icon-ref',
      alt: 'refrigerator',
      title: t('refrigeratorTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679667453',
          telNumb: '+38 (067) 966-74-53',
        },
      ],
    },
    {
      img: '#icon-loader-truck',
      alt: 'trawl',
      title: t('trawlTransportation'),
      contacts: [
        {
          telLink: 'tel:+380679667453',
          telNumb: '+38 (067) 966-74-53',
        },
      ],
    },
  ];

  return (
    <ServList
    >
      {services.map((service, index) => (
        <ServiceItem
          index={index}
          service={service}
        />
      ))}
    </ServList>
  );
};

export default ServicesList;
