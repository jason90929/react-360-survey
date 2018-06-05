// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web'
// import { AsyncStorage } from 'react-native'

let r360

function init (bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  })

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vrlive_viewer', { /* initial props */ }),
    r360.getDefaultSurface()
  )

  // console.log('AsyncStorage', AsyncStorage)
  // persistAllPanoramas([
  //   r360.getAssetURL('人行磚造景.jpg'),
  //   r360.getAssetURL('樹林panorama.jpg'),
  //   r360.getAssetURL('hamburger-banner.jpg')
  // ]).then(resp => {
  // Load the initial environment
  setBackground(r360.getAssetURL('樹林panorama.jpg'))
  // })
}

// function persistAllPanoramas (panoramas) {
// // Persisting data
//   return new Promise(resolve => {
//     try {
//       console.log('AsyncStorage12')
//       AsyncStorage.multiSet('my-panoramas', panoramas).then((resp) => {
//         resolve()
//       })
//     } catch (error) {
//       console.error('persistAllPanoramas failed', error)
//       // Error saving data
//     }
//   })
// }

function setBackground (imageUrl, options) {
  options = options || {
    format: '2D'
  }
  r360.compositor.setBackground(imageUrl, options)
}

window.React360 = {
  init,
  setBackground
}
