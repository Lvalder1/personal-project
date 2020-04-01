import React, { Component } from  'react';
import styles from "./Beerslist.module.scss";
import Beers from "./Beers"; 
import { firestore } from "../../../firebase";

export default class Beerslist extends Component {

state = {
  favoriteBeers: {
  },
}



handleClick = (event) => {
  event.preventDefault();
    this.setState({
        favoriteBeers: {
            ...this.state.favoriteBeers,
        }
    })
  
  firestore
      .collection("favorite beer")
      .add({
          ...this.state.favoritebeers,
        })
      .then(() => {
          console.log("click")
      })
  }

  render () {
    console.log(this.state)
    return (
          <section className={styles.beers} >
                {this.props.filteredbeers.map((beer, index) => (
                    <Beers handleClick={(event, favoriteBeers) => this.handleClick(event, favoriteBeers)} beersData={beer} key={index} />
                ))}
          </section>
    )  
  }

}