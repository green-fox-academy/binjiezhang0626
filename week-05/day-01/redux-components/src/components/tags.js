import React from 'react';
import { connect } from 'react-redux';

const Tags = (props) => {
    console.log(props)
    return (
        <div className="tags">
            <h1>Tags</h1>
            <ul className='list'>
                {props.tags.map(tag => (
                    <li key={tag} className='element'>
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

export default connect(mapStateToProps)(Tags)