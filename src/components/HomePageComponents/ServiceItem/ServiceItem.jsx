import sprite from '../../../assets/icons/svg-sprite.svg';
import ServiceContacts from '../ServiceContacts/ServiceContacts';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ServItem,
  ServImgCont,
  ServTitles,
  ContactsList,
} from './ServiceItem.styled';

const ServiceItem = ({ index, className, service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const { img, title, contacts } = service;

  return (
    <ServItem
      key={index}
      className={className}
      variants={item}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: 0.2, ease: 'linear', duration: 0.4 }}
      ref={ref}
    >
      <ServImgCont>
        <svg width="160" height="48">
          <use href={sprite + img} />
        </svg>
      </ServImgCont>

      <ServTitles>{title}</ServTitles>

      <ContactsList>
        {contacts.map(({ telLink, telNumb }, index) => (
          <ServiceContacts index={index} telLink={telLink} telNumb={telNumb} />
        ))}
      </ContactsList>
    </ServItem>
  );
};

export default ServiceItem;
