import { useTranslation } from 'react-i18next';
import { List, TruckItem, TruckName } from './TruckList.styled';
import { useInView } from 'react-intersection-observer';

const TruckList = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const trucks = [
    t('grainTrucks'),
    t('containerTruks'),
    t('tankerTruks'),
    t('tarpauTruks'),
  ];

  return (
    <List ref={ref}>
      {trucks.map((truck, index) => (
        <TruckItem key={index} className={`${inView ? 'active' : ''}`}>
          <TruckName>{truck}</TruckName>
        </TruckItem>
      ))}
    </List>
  );
};

export default TruckList;
