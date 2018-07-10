import React, { Component } from 'react';
import { connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddValueCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractValueCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(strResults =>(
                            <li key={strResults.id} onClick={() =>this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                        ))
                    }                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddValueCounter: () => dispatch(actionCreators.add(10)),
        onSubtractValueCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);