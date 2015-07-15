# React Medium Spinner

React medium-like spinner component. JS animation. Inline styles.

## Demo
[Live demo](https://skurid.in/react-medium-spinner/)

## Installation

The easiest way to use React Medium Spinner is to install it from NPM and include it in your own React build process (using Webpack, Browserify, etc).
```
npm i react-medium-spinner --save
```

## Usage

```jsx
import React from 'react';
import MediumSpinner from 'react-medium-spinner';

React.render(
  <MediumSpinner active={true}/>,
  document.getElementById('app')
);
```

## Properties

`props.active` Boolean, default: false

`props.color` String, css color, default: "#60d778"

`props.height` String, line height, default: "2px"

`props.speed` Integer, speed in ms, default: 20

## License

MIT Licensed. Copyright (c) Evgeniy Skuridin 2015.
