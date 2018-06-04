// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

let r360
function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vrlive_viewer', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  setBackground(r360.getAssetURL('樹林panorama.jpg'))
}

function setBackground(imageUrl, options) {
  options = options || {
    format: '2D'
  }
  r360.compositor.setBackground(imageUrl, options);
}

window.React360 = {
  init,
  setBackground
};
