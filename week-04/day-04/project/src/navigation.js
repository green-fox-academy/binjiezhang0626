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
function Navigation() {
    return (
        <div className="Navigation">
            {
                Images.map((image) => {
                    return <div className="item" style={{'backgroundImage': `url(${image})`}}></div>
                })
            }
          {/* <div className="item" style={{'backgroundImage': `url(${Images[1]})`}}></div>
          
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div> */}
        </div>
    ) 
}

export default Navigation;