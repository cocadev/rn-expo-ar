import React from 'react'

import { View } from 'react-native';

// Destructure face data given as argument
const Mask = ({
  face: {
    bounds: {
      origin: { x: containerX, y: containerY },
      size: { width: faceWidth }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  // Define the helpers for calculating the correct positions
  const eyeWidth = faceWidth / 4

  const translatedEyePositionX = eyePosition => eyePosition.x - eyeWidth / 2 - containerX
  const translatedEyePositionY = eyePosition => eyePosition.y - eyeWidth / 2 - containerY

  const translatedLeftEyePosition = {
    x: translatedEyePositionX(leftEyePosition),
    y: translatedEyePositionY(leftEyePosition)
  }
  const translatedRightEyePosition = {
    x: translatedEyePositionX(rightEyePosition),
    y: translatedEyePositionY(rightEyePosition)
  }

  // Define the style for the eye component
  const eyeStyle = (eyePosition, eyeBorderWidth = eyeWidth / 10) => ({
    position: 'absolute',
    left: eyePosition.x,
    top: eyePosition.y,
    borderRadius: eyeWidth,
    width: eyeWidth,
    height: eyeWidth,
    borderWidth: eyeBorderWidth,
    borderColor: 'black',
    backgroundColor:'yellow'
  });

  return (
    <View style={{ position: 'absolute', left: containerX, top: containerY }}>
      { /* Add left eye */ }
      <View style = {{...eyeStyle(translatedLeftEyePosition)}} />
      { /* Add right eye */ }
      <View style = {{...eyeStyle(translatedRightEyePosition)}} />
    </View>
  );
};

export default Mask