

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

import Mask from './Glasses'
import { Actions } from 'react-native-router-flux';
import images from './config/images';

const cameraStyle = { flex: 1 }
const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: []
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
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

  onFacesDetected({ faces }) {
    this.setState({ faces })
  }

  onFaceDetectionError(error) {
    console.log(error)
  }

  render() {
    // Read faces by destructuring state
    const { faces, hasCameraPermission } = this.state;

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
        {
          // For each face draw the mask
          faces.map(face => <Mask key={face.faceID} face={face} />)
        }
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={()=>Actions.pop()}>
              <Text style={{ marginLeft: 12, fontSize: 20}}>Back</Text>
          </TouchableOpacity>
          <Image source={images.glasses1} style={{ width: 120, height: 40, marginHorizontal: 12}}/>

        </View>
      </View>
    )
  }
}

export default MainView

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#aaa',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row'
  },

});