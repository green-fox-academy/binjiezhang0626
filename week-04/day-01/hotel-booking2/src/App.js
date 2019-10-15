import React from 'react';
import {StyleSheet, css } from 'aphrodite';

import './App.css';

import Filter from "./filter"
import Hotel from "./hotel"
import data from "./data"

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'row'
  },
  bordered:{
    border: '1px solid black',
    padding: '20px 40px'
  },
  filter: {
    display: 'flex',
    flexDirection: 'column'
  },
  row:{
    display:'flex',
    flexDirection: 'row'
  },
  hotels:{
    marginLeft: '20px'
  },
  filters: {
    width:400
  }
})



class App extends React.Component{
  state = data;
  constructor(props){
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);

  }

  handleFilterChange(key, index, value) {
    this.setState((state) => {
      return {
        filters:{
          ...state.filters,
          [key]: state.filters[key].map((element,elementIndex) => elementIndex === index ? {...element,checked:value}:element)
        }
      }
    })
  }

  filterHotels = (hotel) => {
    return this.state.filters['Star rating'].find((filter) => filter.name === hotel.stars).checked ||
           this.state.filters['Property type'].find((filter) => filter.name === hotel.propertyType).checked
  }

  render(){
    return(
      <div className="App">
        <h1>Hotel Booking</h1>
        <div className={css(styles.container)}>
          <div className={css(styles.filters)}>
            {
              Object.keys(this.state.filters).map(key => <Filter title={key} filterElements={this.state.filters[key]} handleChange={this.handleFilterChange} />)
            }
          </div>
          <div className={css(styles.hotels)}>
            <h2>Hotel list</h2>
            {this.state.hotels.filter(this.filterHotels).map(hotel =><Hotel {...hotel}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
