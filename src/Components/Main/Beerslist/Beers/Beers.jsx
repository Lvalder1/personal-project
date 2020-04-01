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
    const handleClick = this.props.handleClick
    console.log(this.props.handleClick)
    return (
    <section className={styles.beers} onClick={handleClick}>
        <p>Name: {beersData.name}</p>
        <p>{this.description}</p> 
        <div style={styles.img}>
            <img src={beersData.image_url} alt="A Brewdog Beer"></img>
        </div>
    </section>
    ) 
  }

}