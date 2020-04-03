import React, { Component } from  'react';
import styles from "./Favbeerslist.module.scss";
import Favbeers from "../../Main/Beerslist/Beers/Favbeers"; 

export default class Favbeerslist extends Component {

  render () {
    return (
      <section className={styles.beers} >
        {this.props.beersData.map((beer, index) => (
          <Favbeers beersData={beer} key={index} />
        ))}
      </section>
    )  
  }
}