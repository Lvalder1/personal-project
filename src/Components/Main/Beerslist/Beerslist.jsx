import React, { Component } from  'react';
import styles from "./Beerslist.module.scss";
import Beers from "./Beers"; 

export default class Beerslist extends Component {

  render () {
    return (
      <section className={styles.beers} >
        {this.props.filteredbeers.map((beer, index) => (
          <Beers beersData={beer} key={index} />
        ))}
      </section>
    )  
  }

}