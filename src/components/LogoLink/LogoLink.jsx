import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/svg-sprite.svg';
import { motion } from 'framer-motion';

const LogoLink = ({ iconName, width, height, header }) => {
  return (
    <Link to="/">
      {header ? (
        <motion.svg width={width} height={height} whileHover={{ scale: 1.1 }}>
          <use href={sprite + iconName}></use>
        </motion.svg>
      ) : (
        <svg width={width} height={height}>
          <use href={sprite + iconName}></use>
        </svg>
      )}
    </Link>
  );
};

export default LogoLink;
