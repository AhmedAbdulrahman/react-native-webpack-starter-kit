import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class App extends Component {
  static propTypes = {
    actions: React.PropTypes.obj,
    state: React.PropTypes.obj,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
          counter={state.count}
          {...actions}
      />
    );
  }
}

export default connect(state => ({
  state: state.counter,
}),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch),
  })
)(App);
