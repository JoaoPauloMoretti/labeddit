import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import InitialPage from "../Pages/InicitialPage/InitialPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} > <InitialPage /> </Route>

            <Route exact path={"/login"}> <LoginPage />  </Route>

            <Route exact path={"/signup"}> <RegisterPage /> </Route>

            <Route exact path={"/feed"}> <FeedPage /> </Route> 

            <Route exact path={"/post/:postId"}> <DetailsPage /> </Route>
            
        </Switch>
    </BrowserRouter>
    )
}

export default Router