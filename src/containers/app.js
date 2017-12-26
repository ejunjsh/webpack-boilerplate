import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increaseAction} from '../actions/index'
import Counter from "../components/counter"
import Avatar from "../components/avatar"
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'


class App extends Component {
  
      render() {
        const { value, onIncreaseClick } = this.props
        return (
          <div>
             <Counter onIncreaseClick={this.props.onIncreaseClick} value={this.props.value} />
             <Avatar/>
             <DatePicker />
          </div>
        )
      }
}


function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)