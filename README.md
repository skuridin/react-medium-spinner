# React Medium Spinner

React medium-like spinner component.  
[Live demo](https://skurid.in/react-medium-spinner/)

## Installation

The easiest way to use React Medium Spinner is to install it from NPM and include it in your own React build process (using Webpack, Browserify, etc).
```
npm install react-medium-spinner --save
```

## Usage

```jsx
// Include CSS into your document or use webpack:
// require('react-medium-spinner/dist/style.css');
// Feel free to override or amend default styles.

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

#### props.active
The only propery, Boolean.

## License

MIT Licensed. Copyright (c) Evgeniy Skuridin 2015.
