import { useTranslation } from 'react-i18next';

import { ServSect, ServCont, ServTitle } from './ServicesSection.styled';
import ServicesList from '../ServicesList/ServicesList';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <ServSect>
      <ServCont>
        <ServTitle>{t('servicesTitle')}</ServTitle>
        
        <ServicesList />
      </ServCont>
    </ServSect>
  );
};

export default ServicesSection;
