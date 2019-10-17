import React from 'react';

function bigImg(props) {
    const {name, description} = props
    return(
        <div className="bigImg">
            <div className="blackGlass">
                <h3>name</h3>
                <p>description</p>
            </div>
        </div>
    )
}

export default bigImg;