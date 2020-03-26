import React, { Component } from  'react';
import styles from "./Beerslist.module.scss";
import Beers from "./Beers"; 
import Header from "../../Header";

export default class Beerslist extends Component {


  render () {
    return (
          <section className={styles.beers}>
                {this.props.beers.map((beer, index) => (
                    <Beers beersData={beer} key={index} />
                ))}
          </section>
    )
  }

}