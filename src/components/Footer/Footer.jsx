import AddressList from 'components/AddressList/AddressList';
import useResize from '../../hooks/useResize';
import { Foot, FooterCont, PoweredCont } from './Footer.styled';
import LogoLink from 'components/LogoLink/LogoLink';

const Footer = () => {
  const addresses = [
    { textKey: 'locationName' },
    { link: 'mailto:office@ua-its.com', textKey: 'office@ua-its.com' },
    { link: 'tel:+380674455145', textKey: '+38 (067) 445-51-45' },
  ];

  const windowSize = useResize();
  const isMobile = windowSize.width < 768;

  return (
    <Foot>
        <FooterCont>
          <LogoLink
            width={isMobile ? 84 : 168}
            height={isMobile ? 51 : 102}
            iconName="#icon-logo-main"
          />
          <AddressList addresses={addresses} footer={'footer_adress_list'} />
        </FooterCont>
        <PoweredCont>
          Powered by
          <a
            href="https://www.linkedin.com/in/kirill-litovchenko/"
            target="blank"
          >
            K_Litovchenko
          </a>
        </PoweredCont>
    </Foot>
  );
};

export default Footer;
