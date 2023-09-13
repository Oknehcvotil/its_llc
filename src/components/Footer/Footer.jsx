import AddressList from 'components/AddressList/AddressList';
import useResize from '../../hooks/useResize';
import { Foot, FooterCont, LogoLink, LogPicture } from './Footer.styled';
import logo from '../../images/logo/logo_main.svg';

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
        <LogoLink to="/">
          <LogPicture>
            <img
              src={logo}
              width={isMobile ? 84 : 168}
              height={isMobile ? 51 : 102}
              loading="lazy"
              alt="Import Transit Service LLC"
            />
          </LogPicture>
          {/* <Tag>CARRY ON CARRY ALL</Tag> */}
        </LogoLink>
        <AddressList addresses={addresses} footer={'footer_adress_list'} />
      </FooterCont>
    </Foot>
  );
};

export default Footer;
