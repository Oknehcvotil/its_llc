import { AdvList, AdvItem, ImgCont, AdvText } from './AdvancesList.styled';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import sprite from '../../../images/icons/svg-sprite.svg';

const AdvancesList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const advantages = [
    { id: '#icon-small-truck', textKey: 'advCarPark' },
    { id: '#icon-punctualityClock', textKey: 'advPunctuality' },
    { id: '#icon-handshake', textKey: 'advPartners' },
    { id: '#icon-fullWeek', textKey: 'advControl' },
  ];

  return (
    <AdvList ref={ref}>
      {advantages.map((advantage, index) => (
        <AdvItem key={index}>
          <ImgCont className={`${inView ? 'visible' : ''}`}>
            <svg width="64" height="64">
              {advantage.id && <use href={sprite + advantage.id} />}
            </svg>
          </ImgCont>
          <AdvText className={`${inView ? 'visible' : ''}`}>
            {t(advantage.textKey)}
          </AdvText>
        </AdvItem>
      ))}
    </AdvList>
  );
};

export default AdvancesList;
