import Title from 'components/Title/Title';
import {
  Hero,
  HeroCont,
  AboutText,
  CompName,
} from './HeroSection.styled';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  
  return (
    <Hero>
      <HeroCont>
        <Title className={'hero_title'}>CARRY ON CARRY ALL</Title>
        <AboutText>
          <CompName>{t('companyName')}</CompName>
          {t('aboutText')}
        </AboutText>
      </HeroCont>
    </Hero>
  );
};

export default HeroSection;
