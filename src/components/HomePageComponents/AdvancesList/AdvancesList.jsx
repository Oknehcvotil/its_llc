import { AdvList } from './AdvancesList.styled';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AdvancesItem from '../AdvancesItem/AdvancesItem';

const AdvancesList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const advantages = [
    { id: '#icon-small-truck', textKey: 'advCarPark' },
    { id: '#icon-punctualityClock', textKey: 'advPunctuality' },
    { id: '#icon-handshake', textKey: 'advPartners' },
    { id: '#icon-fullWeek', textKey: 'advControl' },
  ];

  return (
    <AdvList ref={ref}>
      {advantages.map((advantage, index) => (
        <AdvancesItem key={index} advantage={advantage} inView={isInView} />
      ))}
    </AdvList>
  );
};

export default AdvancesList;
