require('./style.css');

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var klass = "medium-spinner";
    if(this.props.active === true) klass += " active";
    return <div className={klass} />;
  }
});
