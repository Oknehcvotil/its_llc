import Title from 'components/Title/Title';
import AdvancesList from '../AdvancesList/AdvancesList';
import { AdvSect, AdvCont } from './AdvancesSection.styled';
import { useTranslation } from 'react-i18next';

const AdvancesSection = () => {
  const { t } = useTranslation();

  return (
    <AdvSect>
      <AdvCont>
        <Title className={'advance_title'} level={2}>
          {t('advTitle')}
        </Title>
        <AdvancesList />
      </AdvCont>
    </AdvSect>
  );
};

export default AdvancesSection;
