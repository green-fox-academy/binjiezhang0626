import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    filter: {
        display: 'flex',
        flexDirection: 'column'
      },
    bordered:{
        border: '1px solid black',
        padding: '20px 40px'
    },
})


function Filter(props) {
    const{title, filterElements, handleChange} = props
    return (
        <div className={css(styles.filter, styles.bordered)}>
        <h5>Star rating</h5>
        {
            filterElements.map((element, index) => (
                <label>
                    <input type="checkbox" checked ={element.checked} 
                    onChange={(event) => {handleChange(title, index, event.target.checked)}}/> {element.name}
                </label>
            ))
        }
      </div>
    )
}

export default Filter;