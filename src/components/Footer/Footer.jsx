import AddressList from 'components/AddressList/AddressList';
import useResize from '../../hooks/useResize';
import { Foot, FooterCont } from './Footer.styled';
import logo from '../../images/logo/logo_main.svg';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <picture>
            <img
              src={logo}
              width={isMobile ? 84 : 168}
              height={isMobile ? 51 : 102}
              loading="lazy"
              alt="Import Transit Service LLC"
            />
          </picture>
        </Link>
        <AddressList addresses={addresses} footer={'footer_adress_list'} />
      </FooterCont>
    </Foot>
  );
};

export default Footer;
