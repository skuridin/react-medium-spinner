import React from 'react';

export default class ReactMediumSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, left: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(this.animate.bind(this), this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  animate() {
    if(this.props.active !== true) return false;
    let { left, width } = this.state;
    if(left === 0 && width < 100) {
      width+=4;
    } else if(width <= 100 && left < 100) {
      left+=4;
      width-=4;
    } else if(left === 100 && width === 0) {
      left = 0;
    }
    this.setState({ left: left, width: width });
  }
  render() {
    const style = {
      display: this.props.active ? 'block' : 'none',
      position: 'fixed',
      top: '0px',
      left: `${this.state.left}%`,
      right: '0px',
      width: `${this.state.width}%`,
      height: this.props.height,
      backgroundColor: this.props.color,
      zIndex: 800
    };
    return <div style={style} />;
  }
}

ReactMediumSpinner.defaultProps = {
  active: false,
  speed: 20,
  color: "#60d778",
  height: "2px"
};

ReactMediumSpinner.propTypes = {
  active: React.PropTypes.bool,
  speed: React.PropTypes.number,
  color: React.PropTypes.string,
  height: React.PropTypes.string
};
