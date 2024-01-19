import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { Head, HeadCont, HeadOptions, LogoLink } from './Header.styled';
import AddressList from '../AddressList/AddressList';
import sprite from '../../images/icons/svg-sprite.svg'

const Header = () => {
  const addresses = [
    { link: 'mailto:office@ua-its.com', textKey: 'office@ua-its.com' },
    { link: 'tel:+380674455145', textKey: '+38 (067) 445-51-45' },
  ];

  return (
    <Head>
      <HeadCont>
        <LogoLink to="/">
          <svg width="84" height="51">
            <use href={sprite + '#icon-logo'} />
          </svg>
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
