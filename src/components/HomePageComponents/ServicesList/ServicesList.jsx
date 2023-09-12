import SvgSelector from '../../../helpers/SvgSelector';
import { useTranslation } from 'react-i18next';
import TruckList from '../TruckList/TruckList';
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
      contacts: [
        {
          telLink: 'tel:+380679667453',
          telNumb: '+38 (067) 966-74-53',
        },
      ],
    },
    {
      id: 'world',
      title: t('worldTransportation'),
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
      <TruckList />
      <ServList ref={ref}>
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
      </ServList>
    </ServListCont>
  );
};

export default ServicesList;
