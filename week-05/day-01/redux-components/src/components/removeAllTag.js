import React from 'react';
import { connect } from 'react-redux';

const RemoveAllTag = (props) => {
    console.log(props)
    return (
        <div className="removeAllTags">
            <h1>Remove All Tags</h1>
            <button onClick={() => props.removeAllTag()}>Remove All Tags</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tags: state.tags
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeAllTag: () => {
            dispatch({ type: 'REMOVE_TAGS' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllTag)