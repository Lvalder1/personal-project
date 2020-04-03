import React, { Component } from  'react';
import styles from "./Favbeers.module.scss";
import { firestore } from "../../../../../firebase";

export default class Favbeers extends Component {

  handleClick = (event) => {
    event.preventDefault();
    firestore
      .collection("favorite beer")
      .delete(this.props.beersData)
      .then(() => {
          console.log("click")
          alert("This beer has been removed!");
          // change something on the page to tell the user it's worked
          // make the button not clickable!
      })
  }

  get description() {
    const dataDescription = this.props.beersData.description;
    return dataDescription.length > 150 
      ? dataDescription.substring(0, 130) + "..." 
      : dataDescription;
  }

  render () {
    const beersData = this.props.beersData
    return (
    <section className={styles.beers} onClick={this.handleClick}>
        <p className={styles.name}>Name: {beersData.name}</p>
        <p>{this.description}</p> 
        <div className={styles.img}>
            <img src={beersData.image_url} alt="A Brewdog Beer"></img>
        </div>
    </section>
    ) 
  }

}