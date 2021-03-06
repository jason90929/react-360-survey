import React from 'react'
import {
  AppRegistry,
  AsyncStorage,
  Environment,
  StyleSheet,
  Image,
  Text,
  View,
  VrButton
} from 'react-360'

export default class banner extends React.Component {
  constructor () {
    super()
    this.state = {
      banner: { uri: '' },
      buttonOpacity: false,
      buttonLarge: false
    }
    this.handleEnterBanner = this.handleEnterBanner.bind(this)
    this.handleExitBanner = this.handleExitBanner.bind(this)
    this.handleButtonPressBanner = this.handleButtonPressBanner.bind(this)
    this.handleButtonReleaseBanner = this.handleButtonReleaseBanner.bind(this)
  }

  componentDidMount () {
    AsyncStorage.getItem('banner').then(resp => {
      this.setState({
        banner: resp
      })
    })
  }

  handleEnterBanner (e) {
    this.setState({
      buttonOpacity: true
    })
  }

  handleExitBanner (e) {
    this.setState({
      buttonOpacity: false
    })
  }

  handleButtonPressBanner (e) {
    this.setState({
      buttonLarge: true
    })
  }

  handleButtonReleaseBanner (e) {
    AsyncStorage.getItem('p1').then(resp => {
      Environment.setBackgroundImage(
        resp,
        { format: '2D' } /* one of the formats mentioned above */
      )
    })
    this.setState({
      buttonLarge: false
    })
  }

  render () {
    let combineStyle = [styles.banner]
    if (this.state.buttonOpacity) {
      combineStyle.push(styles.buttonOpacity)
    }
    if (this.state.buttonLarge) {
      combineStyle.push(styles.buttonLarge)
    }
    return (
      <View style={combineStyle}>
        <VrButton
          onEnter={this.handleEnterBanner}
          onExit={this.handleExitBanner}
          onButtonPress={this.handleButtonPressBanner}
          onButtonRelease={this.handleButtonReleaseBanner}>
          <Image
            style={styles.image}
            source={this.state.banner}
          />
          <Text style={styles.title}>
            Hamburger
          </Text>
          <Text style={styles.text}>
            US 14.99
          </Text>
        </VrButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    width: 400,
    height: 200,
    opacity: .9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    left: 200
  },
  buttonOpacity: {
    opacity: 1
  },
  buttonLarge: {
    transform: [{
      scale: 1.1
    }]
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 30,
    position: 'absolute',
    top: 15,
    left: 15,
    color: 'yellow'
  },
  text: {
    fontSize: 24,
    position: 'absolute',
    top: 60,
    left: 15,
    color: 'yellow'
  }
})

AppRegistry.registerComponent('banner', () => banner)
