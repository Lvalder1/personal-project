import React, { Component } from  'react';
import styles from "./Beers.module.scss";


export default class Beers extends Component {

  get description() {
    const dataDescription = this.props.beersData.description;
    return dataDescription.length > 150 
      ? dataDescription.substring(0, 130) + "..." 
      : dataDescription;
  }

  render () {
    const beersData = this.props.beersData
    return (
    <section className={styles.beers}>
        <p>Name: {beersData.name}</p>
        <p>{this.description}</p> 
        <div className={styles.img}>
            <img src={beersData.image_url}></img>
        </div>
    </section>
    )
  }

}