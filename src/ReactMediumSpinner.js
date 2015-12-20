import React from 'react';
import requestAnimationFrame from './raf';
import calculate from './calculate';

export default class ReactMediumSpinner extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      width: 0,
      left: 0,
    };

    this._animate = this._animate.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this._animate);
  }

  _animate() {
    const step = 100 / 60 / (this.props.duration / 1000);
    this.setState(calculate(this.state.width, this.state.left, step));
    requestAnimationFrame(this._animate);
  }

  render() {
    const style = {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: `${this.state.left}%`,
      width: `${this.state.width}%`,
      height: this.props.height,
      backgroundColor: this.props.color,
      zIndex: 2200,
    };

    return <div style={style} />;
  }
}

ReactMediumSpinner.propTypes = {
  height: React.PropTypes.string,
  color: React.PropTypes.string,
  duration: React.PropTypes.number,
};

ReactMediumSpinner.defaultProps = {
  height: '2px',
  color: '#60d778',
  duration: 500,
};
