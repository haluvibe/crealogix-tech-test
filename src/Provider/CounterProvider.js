import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

// local imports
import * as actions from "../store/counter/counterActionCreators";

export class CounterProvider extends Component {
  render() {
    const { render, ...other } = this.props;
    return render(other);
  }
}

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    history: counter.history
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        handleIncrementCounter: actions.incrementCounter,
        handleDecrementCounter: actions.decrementCounter
        },
        dispatch
    );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterProvider);
