# React Medium Spinner

React medium-like spinner component.  

## Demo
[Live demo](https://skurid.in/react-medium-spinner/)

## Installation

The easiest way to use React Medium Spinner is to install it from NPM and include it in your own React build process (using Webpack, Browserify, etc).
```
npm i react-medium-spinner --save
```

## Usage

```jsx
var React         = require('react'),
    MediumSpinner = require('react-medium-spinner');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <MediumSpinner active={true}/>
        <div className="content">
          // bla bla bla
        </div>
      </div>
    );
  }
});
```

## Properties

`props.active` Boolean, default: false

`props.color` String, css color, default: "#60d778"

`props.speed` Integer, speed in ms, default: 20

## License

MIT Licensed. Copyright (c) Evgeniy Skuridin 2015.
