import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import Camera from './src/camera'
import MainView from './src/main';
import Glasses from './src/glassess'
import Three from './src/three';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      
        <Router>
          <Scene>
            <Scene key="main" component={MainView} hideNavBar />
            <Scene key="camera" component={Camera} hideNavBar />
            <Scene key="glasses" component={Glasses} hideNavBar />
            <Scene key="three" component={Three} hideNavBar />

          </Scene>
        </Router>
      
    </KeyboardAvoidingView>
  );
}