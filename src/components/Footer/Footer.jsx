import AddressList from 'components/AddressList/AddressList';
import logo from '../../images/logo/ITS_b.png';
import logoSmall from '../../images/logo/ITS.png';
import useResize from '../../hooks/useResize';
import { FooterCont } from './Footer.styled';

const Footer = () => {
  const addresses = [
    { textKey: 'locationName' },
    { link: 'mailto:office@ua-its.com', textKey: 'office@ua-its.com' },
    { link: 'tel:+380674455145', textKey: '+38 (067) 445-51-45' },
  ];

  const windowSize = useResize();
  const isMobile = windowSize.width < 768;

  return (
    <footer>
      <FooterCont>
        <a href="/">
          <img
            src={isMobile ? logoSmall : logo}
            alt="Import Transit Service LLC"
          />
        </a>
        <AddressList addresses={addresses} footer={'footer_adress_list'} />
      </FooterCont>
    </footer>
  );
};

export default Footer;
