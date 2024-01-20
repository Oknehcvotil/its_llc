import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { Head, HeadCont, HeadOptions } from './Header.styled';
import AddressList from '../AddressList/AddressList';
import LogoLink from 'components/LogoLink/LogoLink';

const Header = () => {
  const addresses = [
    { link: 'mailto:office@ua-its.com', textKey: 'office@ua-its.com' },
    { link: 'tel:+380674455145', textKey: '+38 (067) 445-51-45' },
  ];

  return (
    <Head>
      <HeadCont>
          <LogoLink
            width="84"
            height="51"
            iconName="#icon-logo"
            header={true}
          />
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
