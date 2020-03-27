import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Beerinfo from "../Components/Main/Beerinfo";
import Frontpage from "../Components/Main/Frontpage";
import styles from "./Routes.module.scss";
import Login from "../Components/Login";
import firebase, { providers } from "../firebase";


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
                <Redirect noThrow from="/" to="/frontpage" />
                <Frontpage path="frontpage" />
                <Beerinfo path="beerinfo" />
                <Login path="login" signIn={this.signIn} />
                <NotFound default />
            </Router>
        );
    }
}