import React from 'react';

function BigImg(props) {
    return (
        <div className="bigImg" style={{ 'backgroundImage': `url(${props.images[props.index].url})` }}>
            <div className="blackGlass" >
                <h3 className="text">{props.images[props.index].name}</h3>
                <p className="text">{props.images[props.index].description}</p>
            </div>
        </div>
    )
}

export default BigImg;