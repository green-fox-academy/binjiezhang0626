const counterReducer = (state = 0, action) => {
    let newCounter = state
    if (action.type === 'INCREASE') {
        if (action.amount) {
            return newCounter + action.amount
        }
        return newCounter + 1
    }
    if (action.type === 'DECREASE') {
        if (action.amount) {
            return newCounter - action.amount
        }
        return newCounter - 1
    }
    if (action.type === 'SET') {
        return action.amount
    }
    if (action.type === 'RESET') {
        return 0
    }
    return state
}

export default counterReducer;