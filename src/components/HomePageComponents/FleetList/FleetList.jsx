import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import truck from '../../../images/fleet/photo.jpg';
import {
  FleetListTitle,
  FleetListImg,
  FleetUl,
  FleetListItem,
  FleetListCont,
} from './FleetList.styled';
import useResize from '../../../hooks/useResize';

const FleetList = () => {
  const { t } = useTranslation();

  const windowSize = useResize();
  const isLaptop = windowSize.width > 950;

  const settings = {
    arrows: isLaptop ? true : false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const fleet = [
    {
      imagen: truck,
      characteristics: [t('capacity'), t('weight'), t('cargo'), t('axle')],
    },
    {
      imagen: truck,
      characteristics: [t('capacity'), t('weight'), t('cargo'), t('axle')],
    },
    {
      imagen: truck,
      characteristics: [t('capacity'), t('weight'), t('cargo'), t('axle')],
    },
    {
      imagen: truck,
      characteristics: [t('capacity'), t('weight'), t('cargo'), t('axle')],
    },
    {
      imagen: truck,
      characteristics: [t('capacity'), t('weight'), t('cargo'), t('axle')],
    },
  ];

  return (
    <Slider {...settings}>
      {fleet.map((truck, index) => {
        return (
          <div>
            <FleetListCont key={index}>
              <div>
                <FleetListImg src={truck.imagen} alt="ITS Truck" />
              </div>
              <div>
                <FleetListTitle>{t('characteristics')}</FleetListTitle>
                <FleetUl>
                  {truck.characteristics.map((characteristic, index) => {
                    return (
                      <FleetListItem key={index}>
                        {characteristic}
                      </FleetListItem>
                    );
                  })}
                </FleetUl>
              </div>
            </FleetListCont>
          </div>
        );
      })}
    </Slider>
  );
};

export default FleetList;
