import React from 'react';
import {
  Image,
  ImageProps as RNImageProps,
} from 'react-native';

export interface AppImageProps extends RNImageProps {
};


const AppImage: React.FC<AppImageProps> = ({
  ...props
}: AppImageProps) => {
  return (
    <Image
      {...props}
    />
  );
};

export default AppImage;




