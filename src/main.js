

import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class MainView extends React.Component {
  
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={()=>Actions.camera()}>
           <Text>Pig</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>Actions.glasses()}>
           <Text>Glassess</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>Actions.three()}>
           <Text>Three</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btn: {
    padding: 12, 
    borderWidth: 2, 
    borderColor: 'purple',
    width: 200,
    borderRadius: 16,
    marginVertical: 12
  },
});
