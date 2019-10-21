const tagReducer = (state = ['blue', 'bold', 'hipster'], action) => {
    let flagList = state
    if (action.type === 'ADD_TAG') {
        if (!flagList.includes(action.tag)) {
            return [...state, action.tag]
        }
        return state
    }
    if (action.type === 'REMOVE_TAG') {
        if (state.includes(action.tag)) {
            let newList = flagList.filter(element => element !== action.tag)
            return newList
        }
        return state
    }
    if (action.type === 'REMOVE_TAGS') {
        return []
    }
    return state
}

export default tagReducer;