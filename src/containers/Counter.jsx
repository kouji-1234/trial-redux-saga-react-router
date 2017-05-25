import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CounterContent from '../components/Counter';
import * as CounterActions from '../actions/counter';

class Counter extends Component {

  static get propTypes() {
    return {
      value: PropTypes.number.isRequired,
      actions: PropTypes.object.isRequired
    };
  }

  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <Header />
        <CounterContent value={value} actions={actions} />
        <Footer />
      </div>
    );
  }
}

//stateから必要な値を取り出してthis.propsにセット。
function mapStateToProps(state) {
  return state.counter;
}

//ViewからStateにイベントを伝える
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);