import React from 'react'
import { Text, View } from 'react-native'
// import Permissions related logic from Expo library
import * as Permissions from 'expo-permissions';

const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       // initialize flag for camera permission
      hasCameraPermission: null
    }
    // bind the camera permission callback
    // to set the correct context
    this.onCameraPermission = this.onCameraPermission.bind(this)
  }

  componentDidMount() {
    // when component is initialized
    // user is asked for permission to use the camera
    Permissions
      .askAsync(Permissions.CAMERA)
      .then(this.onCameraPermission)
  }

  onCameraPermission({ status }) {
    // camera permission flag is updated once
    // when the user has dismissed the dialog
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render() {
    return (
    <View style={flexCenterStyle}>
      <Text>Hello World!</Text>
    </View>
    )
  }
}

export default MainView