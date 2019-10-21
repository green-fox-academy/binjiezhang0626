import React from 'react';
import { connect } from 'react-redux';

const Decreaser = (props) => {
    console.log(props)
    return (
        <div className="decreaser">
            <h1>The Decreaser</h1>
            <p>{props.counter}</p>
            <button onClick={props.decreaser}>Decrease</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decreaser: () => {
            dispatch({ type: 'DECREASE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser)