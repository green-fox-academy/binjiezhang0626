import React from 'react';
import {StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    bordered: {
      border: '1px solid black',
      padding: '20px 40px'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    thumbnail: {
      width: 200,
    },
    details: {
      marginLeft: 20
    }
  })

function Hotel(props){
    const {name, description, imageURL} = props
    return (
        <div className={css(styles.bordered)}>
            <h3>{name}</h3>
            <div className={css(styles.row)}>
              <img src={imageURL} alt={name} className={css(styles.thumbnail)}/>
              <div className={css(styles.details)}>
                <p>{description}</p>
                <button>Book Now!</button>
              </div>
            </div>
        </div>
    )
}

export default Hotel;