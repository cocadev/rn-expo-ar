import React from 'react'
import { Text, View } from 'react-native'

const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

class MainView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
    <View style={flexCenterStyle}>
      <Text>Panda Sunglassess!</Text>
    </View>
    )
  }
}

export default MainView