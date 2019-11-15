import React from 'react'

import { Image, View } from 'react-native';

const Mask = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  },
  maskImg
}) => {
  const glassesWidth = faceWidth
  const glassesHeight = faceHeight / 3
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  return (
    <View style={{
      position: 'absolute',
      left: rightEyePosition.x - glassesWidth * 0.35,
      top: rightEyePosition.y - glassesHeight * 0.4
    }}>
      <Image
        source={maskImg}
        style={{
          width: glassesWidth,
          height: glassesHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Mask