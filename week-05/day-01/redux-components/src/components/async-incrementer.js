import React, { useState } from 'react';
import { connect } from 'react-redux';

const asyncIncrease = (number, timeDelayed) => {
    return dispatch =>
        setTimeout(() => {
            dispatch({ type: 'INCREASE', amount: number })
        }, timeDelayed)
}

const AsyncIncrementer = props => {
    const [amount, setAmount] = useState(0)
    const [timeDelayed, setTimeDelayed] = useState(0)

    const { counter, asyncIncrease } = props

    const handleChange = event => {
        const target = event.target
        if (target.name === 'amount') {
            setAmount(parseInt(target.value))
        }
        if (target.name === 'timeDelayed') {
            setTimeDelayed(parseInt(target.value))
        }
    }
    const handleSubmit = event => {
        event.preventDefault()
        asyncIncrease(amount, timeDelayed)
        setAmount("")
        setTimeDelayed("")
        
    }
    return (
        <div className="asyncIncrementer">
            <h1>Async Incrementer</h1>
            <p>{counter}</p>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    Amount:
                        <input
                        type="number"
                        placeholder="Input the amount"
                        value={amount}
                        id="amount"
                        name="amount"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label htmlFor="timeDelayed">
                    Time delayed:
                        <input
                        type="number"
                        placeholder="Input the delay time (in millisec)"
                        value={timeDelayed}
                        id="timeDelayed"
                        name="timeDelayed"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Increase</button>
            </form>
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
        asyncIncrease: (number, timeDelayed) =>
            dispatch(asyncIncrease(number, timeDelayed))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AsyncIncrementer)