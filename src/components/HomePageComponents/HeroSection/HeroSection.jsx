import Title from 'components/Title/Title';
import {
  Hero,
  HeroCont,
  AboutText,
  CompName,
  WelcomText,
} from './HeroSection.styled';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const welcomeText = t('welcomText');
  const companyName = t('companyName');
  const aboutText = t('aboutText');
  const ourTeam = t('ourTeam');

  return (
    <Hero>
      <HeroCont>
        <Title className={'hero_title'}>CARRY ON CARRY ALL</Title>
        <WelcomText>
          {welcomeText.includes('{{companyName}}') ? (
            <>
              {welcomeText.split('{{companyName}}')[0]}
              <CompName>{companyName}</CompName>
              {welcomeText.split('{{companyName}}')[1]}
            </>
          ) : (
            welcomeText
          )}
        </WelcomText>
        <AboutText>
          {aboutText}
          <br />
          {ourTeam}
        </AboutText>
      </HeroCont>
    </Hero>
  );
};

export default HeroSection;
