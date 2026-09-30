import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/images/logo/logo_main.svg';
import truck from '../../assets/images/background/TruckL.jpg';
import sprite from '../../assets/icons/svg-sprite.svg';
import './HomePage.css';

const copy = {
  ua: {
    navServices: 'Послуги',
    navAdvantages: 'Переваги',
    navProcess: 'Як працюємо',
    navContacts: 'Контакти',
    call: 'Зателефонувати',
    eyebrow: 'Логістика без зайвих складнощів',
    heroTitle: 'Перевезення, на які можна покластися.',
    heroAccent: 'В Україні та за кордоном.',
    heroLead:
      'Організовуємо автомобільні, контейнерні, мультимодальні та авіаперевезення. Беремо на себе маршрут, комунікацію та контроль вантажу від заявки до доставки.',
    quote: 'Обговорити перевезення',
    explore: 'Наші послуги',
    sinceLabel: 'на ринку',
    sinceValue: 'З 2014',
    controlLabel: 'контроль доставки',
    controlValue: '24/7',
    directionsLabel: 'напрямків перевезень',
    directionsValue: '8',
    servicesEyebrow: 'Що ми перевозимо',
    servicesTitle: 'Логістика під різні задачі бізнесу',
    servicesLead:
      'Від регулярних перевезень до складних і негабаритних вантажів. Для кожного напрямку — окремий контакт і швидка комунікація.',
    phoneLabel: 'Зв’язатися',
    advantagesEyebrow: 'Чому ITS',
    advantagesTitle: 'Спокійна логістика починається з контролю',
    advantagesLead:
      'Ми будуємо роботу навколо зрозумілих строків, постійного зв’язку та відповідальності за кожен етап перевезення.',
    advantageFleetTitle: 'Власний автопарк',
    advantageFleetText: 'Більше контролю над подачею авто, станом техніки та строками.',
    advantageTimeTitle: 'Пунктуальність',
    advantageTimeText: 'Плануємо маршрут і комунікацію так, щоб мінімізувати простої.',
    advantagePartnerTitle: 'Перевірені партнери',
    advantagePartnerText: 'Підключаємо надійних учасників ланцюга там, де потрібне комплексне рішення.',
    advantageControlTitle: 'Підтримка 24/7',
    advantageControlText: 'Залишаємося на зв’язку та контролюємо доставку в дорозі.',
    processEyebrow: 'Просто і прозоро',
    processTitle: 'Як проходить перевезення',
    step1Title: 'Заявка',
    step1Text: 'Отримуємо маршрут, тип вантажу, строки та особливі умови.',
    step2Title: 'Рішення',
    step2Text: 'Підбираємо транспорт і формат доставки, погоджуємо умови.',
    step3Title: 'Перевезення',
    step3Text: 'Контролюємо рух вантажу та тримаємо вас в курсі.',
    step4Title: 'Доставка',
    step4Text: 'Закриваємо перевезення та передаємо необхідні документи.',
    ctaEyebrow: 'Є вантаж?',
    ctaTitle: 'Давайте знайдемо найкращий маршрут.',
    ctaText: 'Напишіть або зателефонуйте — швидко зорієнтуємо по варіантах перевезення.',
    ctaButton: 'Написати на email',
    contactsTitle: 'Контакти',
    office: 'Офіс',
    navigationTitle: 'Навігація',
    footerTagline:
      'Вантажні перевезення для бізнесу по Україні та міжнародних напрямках.',
    rights: 'Всі права захищені.',
    mailSubject: 'Запит на перевезення — Import Transit Service',
    menu: 'Відкрити меню',
  },
  en: {
    navServices: 'Services',
    navAdvantages: 'Advantages',
    navProcess: 'How it works',
    navContacts: 'Contacts',
    call: 'Call us',
    eyebrow: 'Logistics without unnecessary complexity',
    heroTitle: 'Transportation you can rely on.',
    heroAccent: 'Across Ukraine and beyond.',
    heroLead:
      'We organize road, container, multimodal and air transportation. From request to delivery, we manage the route, communication and shipment control.',
    quote: 'Discuss a shipment',
    explore: 'Explore services',
    sinceLabel: 'in the market',
    sinceValue: 'Since 2014',
    controlLabel: 'delivery monitoring',
    controlValue: '24/7',
    directionsLabel: 'transport directions',
    directionsValue: '8',
    servicesEyebrow: 'What we move',
    servicesTitle: 'Logistics for different business needs',
    servicesLead:
      'From regular shipments to complex and oversized cargo. Each direction has a dedicated contact and fast communication.',
    phoneLabel: 'Contact',
    advantagesEyebrow: 'Why ITS',
    advantagesTitle: 'Reliable logistics starts with control',
    advantagesLead:
      'We build our work around clear timing, constant communication and responsibility at every stage of transportation.',
    advantageFleetTitle: 'Own fleet',
    advantageFleetText: 'More control over vehicle availability, technical condition and timing.',
    advantageTimeTitle: 'Punctuality',
    advantageTimeText: 'We plan routes and communication to minimize downtime.',
    advantagePartnerTitle: 'Reliable partners',
    advantagePartnerText: 'We involve proven partners when a shipment requires a comprehensive solution.',
    advantageControlTitle: '24/7 support',
    advantageControlText: 'We stay available and keep the shipment under control while it is in transit.',
    processEyebrow: 'Simple and transparent',
    processTitle: 'How transportation works',
    step1Title: 'Request',
    step1Text: 'We receive the route, cargo type, timing and special requirements.',
    step2Title: 'Solution',
    step2Text: 'We select the transport and delivery format, then agree on terms.',
    step3Title: 'Transportation',
    step3Text: 'We monitor the shipment and keep you informed throughout the route.',
    step4Title: 'Delivery',
    step4Text: 'We complete the shipment and provide the required documents.',
    ctaEyebrow: 'Have a shipment?',
    ctaTitle: 'Let’s find the right route.',
    ctaText: 'Email or call us and we will quickly outline the available transport options.',
    ctaButton: 'Send an email',
    contactsTitle: 'Contacts',
    office: 'Office',
    navigationTitle: 'Navigation',
    footerTagline:
      'Freight transportation for businesses across Ukraine and international routes.',
    rights: 'All rights reserved.',
    mailSubject: 'Shipment request — Import Transit Service',
    menu: 'Open menu',
  },
};

const serviceData = [
  { icon: '#icon-tipper-truck', key: 'grainTransportation', phones: ['+38 (067) 966-74-53'] },
  { icon: '#icon-tilt_truck', key: 'tiltTransportation', phones: ['+38 (067) 966-36-81', '+38 (067) 966-36-15'] },
  { icon: '#icon-fuel_truck', key: 'tankTransportation', phones: ['+38 (067) 966-36-81', '+38 (067) 966-36-15'] },
  { icon: '#icon-container-truck', key: 'containerTransportation', phones: ['+38 (067) 966-36-81', '+38 (067) 966-36-15'] },
  { icon: '#icon-ref', key: 'refrigeratorTransportation', phones: ['+38 (067) 966-74-53'] },
  { icon: '#icon-loader-truck', key: 'trawlTransportation', phones: ['+38 (067) 966-74-53'] },
  { icon: '#icon-plane', key: 'airTransportaiton', phones: ['+38 (050) 588-26-28'] },
  { icon: '#icon-vessle', key: 'multimodalTransportaiton', phones: ['+38 (050) 588-26-28'] },
];

const telHref = phone => 'tel:' + phone.replace(/[^\d+]/g, '');

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const language = i18n.language === 'en' ? 'en' : 'ua';
  const c = copy[language];
  const quoteMail =
    'mailto:office@ua-its.com?subject=' + encodeURIComponent(c.mailSubject);

  const advantages = [
    { icon: '#icon-small-truck', title: c.advantageFleetTitle, text: c.advantageFleetText },
    { icon: '#icon-punctualityClock', title: c.advantageTimeTitle, text: c.advantageTimeText },
    { icon: '#icon-handshake', title: c.advantagePartnerTitle, text: c.advantagePartnerText },
    { icon: '#icon-fullWeek', title: c.advantageControlTitle, text: c.advantageControlText },
  ];

  const steps = [
    { number: '01', title: c.step1Title, text: c.step1Text },
    { number: '02', title: c.step2Title, text: c.step2Text },
    { number: '03', title: c.step3Title, text: c.step3Text },
    { number: '04', title: c.step4Title, text: c.step4Text },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="rb-page" id="top">
      <header className="rb-header">
        <div className="rb-header__inner">
          <a className="rb-brand" href="#top" aria-label="Import Transit Service">
            <img src={logo} alt="Import Transit Service" />
          </a>

          <nav className={'rb-nav ' + (menuOpen ? 'is-open' : '')}>
            <a href="#services" onClick={closeMenu}>{c.navServices}</a>
            <a href="#advantages" onClick={closeMenu}>{c.navAdvantages}</a>
            <a href="#process" onClick={closeMenu}>{c.navProcess}</a>
            <a href="#contacts" onClick={closeMenu}>{c.navContacts}</a>
          </nav>

          <div className="rb-header__actions">
            <div className="rb-language" aria-label="Language">
              <Link to="/ua" className={language === 'ua' ? 'is-active' : ''}>UA</Link>
              <span>/</span>
              <Link to="/en" className={language === 'en' ? 'is-active' : ''}>EN</Link>
            </div>
            <a className="rb-call" href="tel:+380674455145">{c.call}</a>
            <button
              className={'rb-menu ' + (menuOpen ? 'is-open' : '')}
              type="button"
              aria-label={c.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(value => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section
          className="rb-hero"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(8, 16, 18, .94) 0%, rgba(8, 16, 18, .78) 48%, rgba(8, 16, 18, .24) 100%), url(' +
              truck +
              ')',
          }}
        >
          <div className="rb-container rb-hero__content">
            <div className="rb-eyebrow rb-eyebrow--light">
              <span className="rb-eyebrow__line" />
              {c.eyebrow}
            </div>
            <h1>
              {c.heroTitle}
              <span>{c.heroAccent}</span>
            </h1>
            <p className="rb-hero__lead">{c.heroLead}</p>
            <div className="rb-hero__actions">
              <a className="rb-button rb-button--primary" href="#contacts">{c.quote}</a>
              <a className="rb-button rb-button--ghost" href="#services">{c.explore}</a>
            </div>

            <div className="rb-hero__stats" aria-label="Company facts">
              <div>
                <strong>{c.sinceValue}</strong>
                <span>{c.sinceLabel}</span>
              </div>
              <div>
                <strong>{c.controlValue}</strong>
                <span>{c.controlLabel}</span>
              </div>
              <div>
                <strong>{c.directionsValue}</strong>
                <span>{c.directionsLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rb-section rb-services" id="services">
          <div className="rb-container">
            <div className="rb-section__intro">
              <div>
                <div className="rb-eyebrow">
                  <span className="rb-eyebrow__line" />
                  {c.servicesEyebrow}
                </div>
                <h2>{c.servicesTitle}</h2>
              </div>
              <p>{c.servicesLead}</p>
            </div>

            <div className="rb-services__grid">
              {serviceData.map((service, index) => (
                <article className="rb-service-card" key={service.key}>
                  <div className="rb-service-card__top">
                    <span className="rb-service-card__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="rb-service-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 160 64">
                        <use href={sprite + service.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3>{t(service.key)}</h3>
                  <div className="rb-service-card__contacts">
                    <span>{c.phoneLabel}</span>
                    {service.phones.map(phone => (
                      <a href={telHref(phone)} key={phone}>{phone}</a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rb-section rb-advantages" id="advantages">
          <div className="rb-container">
            <div className="rb-advantages__heading">
              <div className="rb-eyebrow rb-eyebrow--light">
                <span className="rb-eyebrow__line" />
                {c.advantagesEyebrow}
              </div>
              <h2>{c.advantagesTitle}</h2>
              <p>{c.advantagesLead}</p>
            </div>

            <div className="rb-advantages__grid">
              {advantages.map(item => (
                <article className="rb-advantage-card" key={item.title}>
                  <div className="rb-advantage-card__icon">
                    <svg viewBox="0 0 72 72">
                      <use href={sprite + item.icon} />
                    </svg>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rb-section rb-process" id="process">
          <div className="rb-container">
            <div className="rb-process__heading">
              <div className="rb-eyebrow">
                <span className="rb-eyebrow__line" />
                {c.processEyebrow}
              </div>
              <h2>{c.processTitle}</h2>
            </div>

            <div className="rb-process__grid">
              {steps.map(step => (
                <article className="rb-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rb-cta">
          <div className="rb-container rb-cta__inner">
            <div>
              <div className="rb-eyebrow">
                <span className="rb-eyebrow__line" />
                {c.ctaEyebrow}
              </div>
              <h2>{c.ctaTitle}</h2>
              <p>{c.ctaText}</p>
            </div>
            <a className="rb-button rb-button--dark" href={quoteMail}>{c.ctaButton}</a>
          </div>
        </section>
      </main>

      <footer className="rb-footer" id="contacts">
        <div className="rb-container rb-footer__grid">
          <div className="rb-footer__brand">
            <img src={logo} alt="Import Transit Service" />
            <p>{c.footerTagline}</p>
          </div>

          <div className="rb-footer__column">
            <h3>{c.contactsTitle}</h3>
            <a href="tel:+380674455145">+38 (067) 445-51-45</a>
            <a href="mailto:office@ua-its.com">office@ua-its.com</a>
            <span>{t('locationName')}</span>
          </div>

          <div className="rb-footer__column">
            <h3>{c.navigationTitle}</h3>
            <a href="#services">{c.navServices}</a>
            <a href="#advantages">{c.navAdvantages}</a>
            <a href="#process">{c.navProcess}</a>
          </div>
        </div>

        <div className="rb-container rb-footer__bottom">
          <span>© {new Date().getFullYear()} {t('companyName')}. {c.rights}</span>
          <a
            href="https://www.linkedin.com/in/kirill-litovchenko/"
            target="_blank"
            rel="noreferrer"
          >
            Development — K_Litovchenko
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
