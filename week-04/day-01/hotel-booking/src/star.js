import React from 'react'

function Star(props) {
  let { name: starLevel, checked: checkStatus } = props.star

  return (
    <li>
      <div>
        <input
          type="checkbox"
          id={starLevel}
          name="star"
          checked={checkStatus}
          onChange={() => {}} 
        />
        <label htmlFor={starLevel}>{starLevel}</label>
      </div>
    </li>
  )
}

export default Star