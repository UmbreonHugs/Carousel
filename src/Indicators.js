import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faDotCircle )

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
        icon = <FontAwesomeIcon icon="dot-circle" />
      } else {
        icon = <FontAwesomeIcon icon="circle" />
      }
      return (
        <li><button onClick={(event) => updatePosition(index)}>{icon}</button></li>
      )
    }
  }
export default Indicators;