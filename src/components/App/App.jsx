import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useTranslation } from 'react-i18next';
import { lazy, useEffect } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const seoByLanguage = {
  ua: {
    htmlLang: 'uk',
    title: 'Вантажні перевезення | Import Transit Service',
    description:
      'Import Transit Service — вантажні перевезення по Україні та за кордоном: контейнери, тенти, цистерни, рефрижератори, зерновози, негабаритні, авіа та мультимодальні перевезення.',
    ogDescription:
      'Надійні вантажні перевезення для бізнесу по Україні та міжнародних напрямках.',
    locale: 'uk_UA',
    alternateLocale: 'en_US',
    url: 'https://ua-its.com/ua',
  },
  en: {
    htmlLang: 'en',
    title: 'Freight Transportation | Import Transit Service',
    description:
      'Import Transit Service provides road, container, refrigerated, tanker, oversized, air and multimodal freight transportation across Ukraine and international routes.',
    ogDescription:
      'Reliable freight transportation for businesses across Ukraine and international routes.',
    locale: 'en_US',
    alternateLocale: 'uk_UA',
    url: 'https://ua-its.com/en',
  },
};

const setMetaContent = (id, content) => {
  const element = document.getElementById(id);
  if (element) {
    element.setAttribute('content', content);
  }
};

const setLinkHref = (id, href) => {
  const element = document.getElementById(id);
  if (element) {
    element.setAttribute('href', href);
  }
};

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language === 'en' ? 'en' : 'ua';
    const seo = seoByLanguage[language];

    document.documentElement.lang = seo.htmlLang;
    document.title = seo.title;

    setMetaContent('seo-description', seo.description);
    setMetaContent('og-title', seo.title);
    setMetaContent('og-description', seo.ogDescription);
    setMetaContent('og-url', seo.url);
    setMetaContent('og-locale', seo.locale);
    setMetaContent('og-locale-alt', seo.alternateLocale);
    setMetaContent('twitter-title', seo.title);
    setMetaContent('twitter-description', seo.ogDescription);

    setLinkHref('seo-canonical', seo.url);
    setLinkHref('seo-hreflang-uk', 'https://ua-its.com/ua');
    setLinkHref('seo-hreflang-en', 'https://ua-its.com/en');
    setLinkHref('seo-hreflang-default', 'https://ua-its.com/ua');
  }, [i18n.language]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ua" replace />} />
      <Route path="/:language" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/ua" replace />} />
    </Routes>
  );
};

export default App;
