import React from 'react';
import { connect } from 'react-redux';

const RemoveTag = (props) => {
    return (
        <div className="tags">
            <h1>Remove Tags</h1>
            <ul className='list'>
                {props.tags.map(tag => (
                    <li
                        key={tag}
                        className='element remove'
                        onClick={() => props.removeTag(tag)}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
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
        removeTag: tag => {
            dispatch({ type: 'REMOVE_TAG', tag: tag })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag)