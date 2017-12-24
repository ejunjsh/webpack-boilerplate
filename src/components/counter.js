import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    render() {
      const { value, onIncreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
      )
    }
  }
  
  Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  }