import React from 'react'
import { Text, View } from 'react-native';
import ExpoGraphics from 'expo-graphics';

export default class MainView extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ExpoGraphics.View style={{ flex: 1 }}
          onContextCreate={this.onContextCreate}
          onRender={this.onRender}
          arEnabled={true}
        />
      </View>
    )
  }
}