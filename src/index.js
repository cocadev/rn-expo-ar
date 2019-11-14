import React from 'react'
import { Text, View } from 'react-native'
// Use Camera component from Expo library
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const cameraStyle = { flex: 1 } // fill the whole screen with camera component
const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
  }

  componentDidMount() {
    Permissions
      .askAsync(Permissions.CAMERA)
      .then(this.onCameraPermission)
  }

  onCameraPermission({ status }) {
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render() {
    // Use destructuring to read camera permission value
    const { hasCameraPermission } = this.state;

    // Flag not initialized, permission dialog is not yet dismissed.
    // -> Return an empty view.
    if (hasCameraPermission === null) {
      return <View />
    }

    // User did not give permission to use the camera
    // -> Show error message
    if (hasCameraPermission === false) {
      return (
        <View style={flexCenterStyle}>
          <Text>No access to camera</Text>
        </View>
        )
    }

    // Camera permission ok, show camera component
    return (
      <View style={cameraStyle}>
        <Camera
          style={cameraStyle}
          type={Camera.Constants.Type.front}
        />
      </View>
    )
  }
}

export default MainView