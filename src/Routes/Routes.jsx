import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Cardlist from "../Components/Cardlist";
import Frontpage from "../Components/Frontpage";



const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <NotFound default />
                <Cardlist path="cardlist" />
                <Frontpage path="frontpage" />
            </Router>
        );
    }
}