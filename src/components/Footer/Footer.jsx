import AddressList from 'components/AddressList/AddressList';
import logo from '../../images/logo/ITS_b.png';
import logoSmall from '../../images/logo/ITS.png';
import useResize from '../../hooks/useResize';
import { Foot, FooterCont } from './Footer.styled';
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
          <img
            src={isMobile ? logoSmall : logo}
            alt="Import Transit Service LLC"
          />
        </Link>
        <AddressList addresses={addresses} footer={'footer_adress_list'} />
      </FooterCont>
    </Foot>
  );
};

export default Footer;
