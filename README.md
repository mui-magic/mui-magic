<h1 align="center">MUI Magic</h1>

<div align="center">

Use our [Theme Generator](https://google.com/) to publish a custom [Material-UI](https://material-ui.com/) theme and import your customized components from '@mui-magic/your-theme' in your [React](https://reactjs.org/) app.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)


</div>

## Installation

First, design a theme using the MUI Magic dashboard.

Publish your theme and follow the installation instructions.

Your customized Material-UI library will be available as an [npm package](https://www.npmjs.com/package/@mui-magic/core). Each revision to your theme will be labeled with an 8 character semantic tag, which should be specified in your installation:

```sh
// with npm
npm install @mui-magic/your-theme@f54OdD13

```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@mui-magic/your-theme';

function App() {
  return <Button>Hello World</Button>; // This button is styled for you automatically! No ThemeProvider required.
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
## How it Works

Your personalized component library will be published to the NPM registry under the @mui-magic scope. It's a clone of @material-ui/core@4.11.3, so you get all the Material-UI bells and whistles without any of the styling headaches!
## Examples

Are you looking for an example project to get started?
[Material-UI hosts some](https://material-ui.com/getting-started/example-projects/).

## Documentation

Check out Material-UI's [documentation website](https://material-ui.com/).

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
