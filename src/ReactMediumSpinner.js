import React from 'react';
import requestAnimationFrame from './raf';
import calculate from './calculate';

const ReactMediumSpinner = React.createClass({
  propTypes: {
    height: React.PropTypes.string,
    color: React.PropTypes.string,
    duration: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      height: '2px',
      color: '#60d778',
      duration: 500,
    };
  },
  getInitialState() {
    return {
      width: 0,
      left: 0,
    };
  },
  componentDidMount() {
    requestAnimationFrame(this._animate);
  },
  _animate() {
    const step = 100 / 60 / (this.props.duration / 1000);
    this.setState(calculate(this.state.width, this.state.left, step));
    requestAnimationFrame(this._animate);
  },
  render() {
    return (
      <div style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: `${this.state.left}%`,
        width: `${this.state.width}%`,
        height: this.props.height,
        backgroundColor: this.props.color,
        zIndex: 2200,
      }} />
    );
  },
});

export default ReactMediumSpinner;
