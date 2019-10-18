import React from 'react';

const Images = [
    './pictures/Beijing.jpeg',
    './pictures/Budepast.jpeg',
    './pictures/London.jpeg',
    './pictures/Neuschwanstein.jpeg',
    './pictures/Newyork.jpeg',
    './pictures/Paris.jpeg',
    './pictures/Switzerland.jpeg'
  ];
function Navigation(props) {
    return (
        <div className="Navigation">
            {
                Images.map((image,index) => {
                    return <div className="item" style={{'backgroundImage': `url(${image})`}} onClick={() => props.changeIndex(index)}></div>
                })
            }
        </div>
    ) 
}

export default Navigation;