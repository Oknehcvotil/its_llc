import { useTranslation } from 'react-i18next';
import { ServSect, ServCont } from './ServicesSection.styled';
import ServicesList from '../ServicesList/ServicesList';
import Title from 'components/Title/Title';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <ServSect>
      <ServCont>
        <Title level={2} className={'service_title'}>
          {t('servicesTitle')}
        </Title>

        <ServicesList />
      </ServCont>
    </ServSect>
  );
};

export default ServicesSection;
