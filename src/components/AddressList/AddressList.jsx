import { AddressLink, AddrList, Location } from './AddressList.styled';
import { useTranslation } from 'react-i18next';

const AddressList = ({ addresses, footer }) => {
  const { t } = useTranslation();

  return (
    <AddrList className={footer ? footer : ''}>
      {addresses.map(({ link, textKey }, index) => (
        <li key={index}>
          {link ? (
            <AddressLink href={link}>
              {textKey}
            </AddressLink>
          ) : (
            <Location>{t(textKey)}</Location>
          )}
        </li>
      ))}
    </AddrList>
  );
};

export default AddressList;
