import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Beerinfo from "../Components/Main/Beerinfo";
import styles from "./Routes.module.scss";
import Login from "../Components/Login";
import firebase, { providers } from "../firebase";
import PrivateRoutes from "./PrivateRoutes";
import MyBeers from "../Components/My Beers";


const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component { 
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user})
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                globalHistory.navigate("/login");
            })
    }

    render() {
        return (
            <Router className={styles.routes}>
                <Redirect noThrow from="/" to="login" />
                <Login path="login" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}>
                    <MyBeers path="mybeers" user={this.state.user} signOut={this.signOut}/>
                    <Beerinfo path="beerinfo" user={this.state.user} />
                </PrivateRoutes>
                <NotFound default />
            </Router>
        );
    }
}