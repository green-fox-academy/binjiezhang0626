import React from 'react';
import { connect } from 'react-redux';

const Resetter = (props) => {
    console.log(props)
    return (
        <div className="increaser">
            <h1>The Resetter</h1>
            <p>{props.counter}</p>
            <button onClick={props.resetter}>Reset</button>
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
        resetter: () => {
            dispatch({ type: 'RESET' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter)