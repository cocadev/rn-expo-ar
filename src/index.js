

import React from 'react'
import { Text, View } from 'react-native'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

const cameraStyle = { flex: 1 }
const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: [] // initialize found faces with empty array
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
    // bind the callbacks
    // to set the correct context
    this.onFacesDetected = this.onFacesDetected.bind(this)
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
  }

  componentDidMount() {
    Permissions
      .askAsync(Permissions.CAMERA)
      .then(this.onCameraPermission)
  }

  onCameraPermission({ status }) {
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  // implement face detection callback function
  onFacesDetected({ faces }) {
    // print the found face data to console
    console.log(faces)
    // store faces to component state
    this.setState({ faces })
  }

  // implement face detection error function
  onFaceDetectionError(error) {
    console.log(error)
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />
    }

    if (hasCameraPermission === false) {
      return (
        <View style={flexCenterStyle}>
          <Text>No access to camera</Text>
        </View>
        )
    }

    return (
      <View style={cameraStyle}>
        {/*
          Enable face detector in camera component
          mode: fast or accurate,
          detectLandmarks: whether to get the eyes, nose, mouth position
          runClassifications: eyes open and smiling probability
         */}
        <Camera
          style={cameraStyle}
          type={Camera.Constants.Type.front}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.all,
            runClassifications: FaceDetector.Constants.Classifications.all
          }}
          onFacesDetected={this.onFacesDetected}
          onFacesDetectionError={this.onFacesDetectionError}
        />
      </View>
    )
  }
}

export default MainView