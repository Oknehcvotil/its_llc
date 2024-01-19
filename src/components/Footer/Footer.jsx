import AddressList from 'components/AddressList/AddressList';
import useResize from '../../hooks/useResize';
import { Foot, FooterCont } from './Footer.styled';
import { Link } from 'react-router-dom';
import sprite from '../../images/icons/svg-sprite.svg';

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
          <svg width={isMobile ? 84 : 168} height={isMobile ? 51 : 102}>
            <use href={sprite + '#icon-logo-main'} />
          </svg>
        </Link>
        <AddressList addresses={addresses} footer={'footer_adress_list'} />
      </FooterCont>
    </Foot>
  );
};

export default Footer;
