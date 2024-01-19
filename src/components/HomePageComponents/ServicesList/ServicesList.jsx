import { useTranslation } from 'react-i18next';
import {
  ServList,
  ServItem,
  ServImgCont,
  ServTitles,
  ContactsList,
  ContactsItem,
  ContactsLink,
} from './ServicesList.styled';
import { useInView } from 'react-intersection-observer';
import sprite from '../../../images/icons/svg-sprite.svg';

const ServicesList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const services = [
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
    <div>
      <ServList ref={ref}>
        {services.map((service, index) => (
          <ServItem key={index} className={`${inView ? 'visible' : ''}`}>
            <ServImgCont>
              <svg width="160" height="48">
                <use href={sprite + service.img} />
              </svg>
            </ServImgCont>
            <ServTitles>{service.title}</ServTitles>
            <ContactsList>
              {service.contacts.map((contact, index) => (
                <ContactsItem key={index}>
                  <ContactsLink href={contact.telLink}>
                    {contact.telNumb}
                  </ContactsLink>
                </ContactsItem>
              ))}
            </ContactsList>
          </ServItem>
        ))}
      </ServList>
    </div>
  );
};

export default ServicesList;
