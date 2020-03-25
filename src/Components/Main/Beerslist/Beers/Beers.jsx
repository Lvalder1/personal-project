import React, { Component } from  'react';
import styles from "./Beers.module.scss";


export default class Beers extends Component {


  render () {
    const beersData = this.props.beersData
    console.log(this.state);
    return (
    <section className={styles.beers}>
        <p>Name: {beersData.Name}</p>
        <p>Type: {beersData.Type}</p>
    </section>
    )
  }

}