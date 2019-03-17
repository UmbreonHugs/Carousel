import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Indicators extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        updatePosition: PropTypes.func.isRequired,
        currentPosition: PropTypes.number.isRequired
    }
    render() {
      const { index, updatePosition, currentPosition } = this.props
      let icon
      if (currentPosition === index) {
        icon = "o"
      } else {
        icon = "O"
      }
      return (
        <li><button onClick={(event) => updatePosition(index)}>{icon}</button></li>
      )
    }
  }
export default Indicators;