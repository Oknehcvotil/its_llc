import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import logo from '../../images/logo/logo.svg';
import { Head, HeadCont, HeadOptions, LogoLink } from './Header.styled';
import AddressList from '../AddressList/AddressList';

const Header = () => {
  const addresses = [
    { link: 'mailto:office@ua-its.com', textKey: 'office@ua-its.com' },
    { link: 'tel:+380674455145', textKey: '+38 (067) 445-51-45' },
  ];

  return (
    <Head>
      <HeadCont>
        <LogoLink to="/">
          <picture>
            <img
              src={logo}
              width="84"
              height="51"
              loading="lazy"
              alt="Import Transit Service LLC"
            />
          </picture>
        </LogoLink>
        <HeadOptions>
          <address>
            <AddressList addresses={addresses} />
          </address>
          <LanguageSwitch />
        </HeadOptions>
      </HeadCont>
    </Head>
  );
};

export default Header;
