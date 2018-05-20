import React from 'react';
import {icons} from '_constants/app_constants';
import Image from '_components/Image/Image';

const Icon = props => {
  const {name} = props;
  const iconFound = Object.keys(icons).find(iconName => iconName.includes(name.toLowerCase()));
  const src = icons[iconFound ? iconFound : 'default'];
  return (
    <Image src={src} alt={iconFound} />
  );
};

export default Icon;