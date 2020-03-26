import React, { Component } from  'react';
import styles from "./Beerinfo.module.scss";
import Beerslist from '../Beerslist/Beerslist';
import Header from "../../Header";

export default class Beerinfo extends Component {

state = {
  url: 'https://api.punkapi.com/v2/beers',
  beers: []
}

componentDidMount() {
      fetch(this.state.url)
      .catch(err => {console.log(err)})
      .then(res => res.json())
      .then(data => {
          this.setState({ 
              beers: data,
          });
      })
     
}

  render () {
    console.log(this.state);
    return (
      <>
        <Header text={"Choose Your Favorite Beer!"} />
        <section className={styles.beerinfo}>
            <Beerslist beers={this.state.beers} />
        </section>
      </>
    )
  }

}