var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      active: false,
      speed: 20,
      color: "#60d778"
    };
  },
  getInitialState: function() {
    return {
      width: 0,
      left: 0
    };
  },
  componentDidMount: function() {
    this.interval = setInterval(this.animate, this.props.speed);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  animate: function() {
    if(this.props.active !== true) return false;

    var state = this.state;

    if(state.left === 0 && state.width < 100) {
      state.width+=4;
    } else if(state.width <= 100 && state.left < 100) {
      state.left+=4;
      state.width-=4;
    } else if(state.left === 100 && state.width === 0) {
      state.left = 0;
    }

    this.setState(state);
  },
  render: function() {
    var style = {
      display: (this.props.active) ? 'block' : 'none',
      position: 'fixed',
      top: '0px',
      left: this.state.left + '%',
      right: '0px',
      width: this.state.width + '%',
      height: '2px',
      backgroundColor: this.props.color,
      zIndex: 800
    };
    return <div style={style} />;
  }
});
