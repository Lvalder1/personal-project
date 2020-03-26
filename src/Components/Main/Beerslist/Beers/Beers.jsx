import React, { Component } from  'react';
import styles from "./Beers.module.scss";


export default class Beers extends Component {


  render () {
    const beersData = this.props.beersData
    return (
    <section className={styles.beers}>
        <p>Name: {beersData.name}</p>
        <img src={beersData.image_url}></img>
        <p>{beersData.description}</p>
    </section>
    )
  }

}