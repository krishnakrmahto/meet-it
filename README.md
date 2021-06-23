# Meet It
**Version 2.2.0** <br/> <br/>
Go back to Meet tab, Mute and Unmute yourself from anywhere on Chrome using context menus.

## Simple to use
### Same window
![Demo](./static/same-window-take-me-back-to-meet.gif)

### Multiple windows
![Demo](./static/multi-window-take-me-to-meet.gif)

### Mute and Unmute
![Demo](./static/mute-unmute.gif)

## Installation
### Install from the Chrome Web Store
https://chrome.google.com/webstore/detail/meet-it/fgdkopfjcbombbonmfkgjpjgaeaddlak
#### or,
1. Clone the repo
2. Go to [chrome://extensions](chrome://extensions)
3. Make sure `Developer mode` is toggled to on
4. Click `Load Unpacked`
5. Select the `dist/` directory from cloned files; done.
6. [More](https://developer.chrome.com/docs/extensions/mv3/getstarted/) on using unpacked extensions

## Uninstall
Click `Remove` on the extension card from [chrome://extensions](chrome://extensions)

## Build your changes
The `dist/ ` directory is all that you need to load on Chrome to start using the extension. The directory will always contain the latest deployable code.
However, if you add your own changes and want to see how it works out, you'll have to run the following on your terminal:
```sh
yarn
yarn build
```
`yarn` installs all the packages required by the project, and should be run only the first time. `yarn build` will update the `dist/` directory with all the js files along with your changes.

