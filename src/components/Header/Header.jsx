import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import logo from '../../images/logo/ITS_no_tag.png';
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
          <img src={logo} alt="Import Transit Service LLC" />
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
