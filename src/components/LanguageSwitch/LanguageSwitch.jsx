import { EnBtn, LanguageCont, UaBtn } from './LanguageSwitch.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const LanguageSwitch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useParams();
  const { i18n } = useTranslation();

  const handleLanguageChange = selectedLanguage => {
    const newPath = location.pathname.replace(
      `/${i18n.language}`,
      `/${selectedLanguage}`
    );
    navigate(newPath);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageCont>
      <UaBtn
        type="button"
        onClick={() => handleLanguageChange('ua')}
        className={`${language === 'ua' ? 'active' : ''}`}
      />
      <EnBtn
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`${language === 'en' ? 'active' : ''}`}
      />
    </LanguageCont>
  );
};

export default LanguageSwitch;
