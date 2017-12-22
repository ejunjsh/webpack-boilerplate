import React, { Component } from 'react'
import PropTypes from 'prop-types'
import empty from "../assets/empty.png"

export default class Counter extends Component {
    render() {
      const { value, onIncreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
          <img src={empty}/>
        </div>
      )
    }
  }
  
  Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  }