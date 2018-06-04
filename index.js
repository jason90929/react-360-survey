import React from 'react'
import {
  AppRegistry,
  StyleSheet
} from 'react-360'
import Banner from './components/banner'

export default class vrlive_viewer extends React.Component {
  render () {
    return (
      <Banner/>
    )
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('vrlive_viewer', () => vrlive_viewer)
