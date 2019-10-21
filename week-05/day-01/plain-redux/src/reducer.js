
const initState = {
    counter: 0,
    tags: []
}

const reducer = (state = initState, action) => {
    let newCounter = state.counter
    if (action.type === 'INCREASE') {
        if (action.amount) {
            return {
                ...state,
                counter: newCounter + action.amount
            }
        }
        return {
            ...state,
            counter: newCounter + 1
        }
    }
    if (action.type === 'DECREASE') {
        if (action.amount) {
            return {
                ...state,
                counter: newCounter - action.amount
            }
        }
        return {
            ...state,
            counter: newCounter - 1
        }
    }
    if(action.type === 'SET') {
        return {
            ...state,
            counter: action.amount
        }
    }
    if(action.type === 'RESET') {
        return {
            ...state,
            counter: 0
        }
    }
}

export default reducer;