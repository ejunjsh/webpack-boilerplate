import {connect} from 'react-redux'
import {increaseAction} from '../actions/index'
import Counter from "../components/counter"


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
  )(Counter)