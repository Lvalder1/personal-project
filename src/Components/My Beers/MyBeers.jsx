import React, { Component } from  'react';
import styles from "./MyBeers.module.scss";
import { firestore } from "../../firebase";
import Favbeerslist from "../My Beers/Favbeerslist";
import Header from "../Header";

export default class MyBeers extends Component {

state = {
  beersData: [],
}

  componentDidMount() {
    firestore
        .collection("favorite beer")
        .get()
        .then((query) => {
            const beersData = query.docs.map(doc => doc.data());
            this.setState({ 
              beersData: beersData,
            });
        })
}


  render () {
    console.log(this.state);
    return (
          <>
          <Header text={"Here are your favorite beers!"} />
            <section className={styles.mybeers}>
              <Favbeerslist beersData={this.state.beersData} />
            </section>
          </>
    )
  }

}