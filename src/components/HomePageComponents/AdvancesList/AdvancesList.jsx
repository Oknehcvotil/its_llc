import { AdvList, AdvItem, ImgCont, AdvText } from './AdvancesList.styled';
import SvgSelector from '../../../helpers/SvgSelector';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const AdvancesList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const advantages = [
    { id: 'truck', textKey: 'advCarPark' },
    { id: 'punctualityClock', textKey: 'advPunctuality' },
    { id: 'handshake', textKey: 'advPartners' },
    { id: 'fullWeek', textKey: 'advControl' },
  ];

  return (
    <AdvList ref={ref}>
      {advantages.map((advantage, index) => (
        <AdvItem key={index}>
          <ImgCont className={`${inView ? 'visible' : ''}`}>
            {advantage.id && <SvgSelector id={advantage.id} />}
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
