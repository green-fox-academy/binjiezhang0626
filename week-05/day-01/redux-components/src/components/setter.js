import React ,{ useState } from 'react';
import { connect } from 'react-redux';

const Setter = (props) => {
    const [value, setValue] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        props.setter(parseInt(value))
        setValue('')
    }
    console.log(props)
    return (
        <div className="increaser">
            <h1>The Setter</h1>
            <input type="text" onChange={handleChange} value={value}></input>
            <button onClick={handleClick}>Set</button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        setter: (number) => {
            dispatch({ type: 'SET', amount: number })
        }
    }
}

export default connect(null, mapDispatchToProps)(Setter)