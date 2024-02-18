import { AdvItem, ImgCont, AdvText } from './AdvancesItem.styled';
import { useTranslation } from 'react-i18next';
import sprite from '../../../assets/icons/svg-sprite.svg';

const AdvancesItem = ({ advantage, inView }) => {
  const { t } = useTranslation();

  const { id, textKey } = advantage;

  return (
    <AdvItem>
      <ImgCont className={`${inView ? 'visible' : ''}`}>
        <svg width="64" height="64">
          {id && <use href={sprite + id} />}
        </svg>
      </ImgCont>
      <AdvText className={`${inView ? 'visible' : ''}`}>{t(textKey)}</AdvText>
    </AdvItem>
  );
};

export default AdvancesItem;
