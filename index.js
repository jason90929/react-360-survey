import React from 'react'
import {
  AppRegistry,
  AsyncStorage,
  asset,
  Environment,
  StyleSheet
} from 'react-360'
import Banner from './components/banner'

export default class vrlive_viewer extends React.Component {
  constructor () {
    super()
    this.state = {
      isAppReady: false
    }
  }

  componentDidMount () {
    AsyncStorage.multiSet([
      ['p1', asset('人行磚造景.jpg')],
      ['p2', asset('樹林panorama.jpg')],
      ['banner', asset('hamburger-banner.jpg')]
    ]).then(() => {
      AsyncStorage.getItem('p2').then(resp => {
        Environment.setBackgroundImage(
          resp,
          { format: '2D' } /* one of the formats mentioned above */
        )
      })
      this.setState({
        isAppReady: true
      })
    })
  }

  render () {
    if (this.state.isAppReady) {
      return (
        <Banner/>
      )
    }
    return null
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
