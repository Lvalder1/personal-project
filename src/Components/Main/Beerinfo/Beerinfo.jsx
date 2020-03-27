import React, { Component } from  'react';
import styles from "./Beerinfo.module.scss";
import Beerslist from '../Beerslist/Beerslist';
import Header from "../../Header";
import Searchbar from "../../Searchbar";

export default class Beerinfo extends Component {

state = {
  url: 'https://api.punkapi.com/v2/beers',
  beers: [],
  searchText: "",
  filteredbeers: [],
}

setSearchText = (event) => {
  const searchText = event.target.value;
  this.setState({ searchText }, this.filterbeers);
  
}

filterbeers = () => {
  let filteredbeers = this.state.beers.filter(beer => {
      return beer.name
      .toUpperCase()
      .includes(this.state.searchText.toUpperCase());  
  })
  this.setState({ filteredbeers });
}

componentDidMount() {
      fetch(this.state.url)
      .catch(err => {console.log(err)})
      .then(res => res.json())
      .then(data => {
          this.setState({ 
              beers: data,
              filteredbeers: data 
          });
      })
     
}

  render () {
    // console.log(this.state);
    return (
      <>
        <Header text={"Choose Your Favorite Beer!"} />
        <Searchbar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        <section className={styles.beerinfo}>
            <Beerslist filteredbeers={this.state.filteredbeers} />
        </section>
      </>
    )
  }

}