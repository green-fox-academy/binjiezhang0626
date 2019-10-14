import React from 'react'

export default function SecondComponent(props) {
  return (
    <ul>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
     </ul>
  );
}