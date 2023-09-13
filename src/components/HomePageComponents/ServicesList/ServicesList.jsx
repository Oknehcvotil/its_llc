// import SvgSelector from '../../../helpers/SvgSelector';
import { useTranslation } from 'react-i18next';
// import TruckList from '../TruckList/TruckList';
import {
  ServList,
  ServItem,
  ServImgCont,
  ServTitles,
  ServListCont,
  ContactsList,
  ContactsItem,
  ContactsLink,
} from './ServicesList.styled';
import { useInView } from 'react-intersection-observer';
import grain from '../../../images/serviceImages/grain.svg';
import container from '../../../images/serviceImages/container.svg';
import fuelTruck from '../../../images/serviceImages/fuel_truck.svg';
import tiltTruck from '../../../images/serviceImages/tilt_truck.svg';

const ServicesList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const services = [
    {
      img: grain,
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
      img: fuelTruck,
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
      img: container,
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
      img: tiltTruck,
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
  ];

  return (
    <ServListCont>
      <ServList ref={ref}>
        {services.map((service, index) => (
          <ServItem key={index} className={`${inView ? 'visible' : ''}`}>
            <ServImgCont>
              <picture>
                <img src={service.img} alt={service.alt} height="160px" />
              </picture>
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
      {/* <ServList ref={ref}>
        {services.map(service => (
          <ServItem key={service.id}>
            <ServImgCont className={`${inView ? 'visible' : ''}`}>
              <SvgSelector id={service.id} />
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
      </ServList> */}
    </ServListCont>
  );
};

export default ServicesList;
