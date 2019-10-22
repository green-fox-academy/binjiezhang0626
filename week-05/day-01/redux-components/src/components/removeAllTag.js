import React from 'react';
import { connect } from 'react-redux';

const RemoveAllTag = (props) => {
    return (
        <div className="tags">
            <h1>Remove Tags</h1>
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