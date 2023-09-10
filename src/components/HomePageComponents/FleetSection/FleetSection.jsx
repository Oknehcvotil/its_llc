import FleetList from '../FleetList/FleetList';
import { FleetSect, FleetCont, FleetTitle } from './FleetSection.styled';
import { useTranslation } from 'react-i18next';

const FleetSection = () => {
  const { t } = useTranslation();

  return (
    <FleetSect>
      <FleetCont>
        <FleetTitle>{t('fleetTitle')}</FleetTitle>
        <FleetList />
      </FleetCont>
    </FleetSect>
  );
};

export default FleetSection;
