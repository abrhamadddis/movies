import React from "react";
import { Route, Switch } from "react-router-dom";
import MovieCard from '../MovieCard/MovieCard';
import MovieDetail from '../MovieDetail/MovieDetail'
import Header from "../Header/Header";

import TvShow from '../Tvshow/Tvshow';
import { Year } from '../Year/Year';
import { Home } from '../Home/Home'
import { Genre } from '../Genre/Genre'
import Movies from '../Movies/Movies'

const Routing = () => {
    return (
        <Switch>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <MovieCard />
                </Route>
                <Route path="/movies/:id">
                    <MovieDetail />
                </Route>
                <Route path="/Home">
                    <Header />
                    <MovieCard />
                </Route>
                <Route path="/Movies">
                    <Movies />
                </Route>
                <Route path="/Tvshow">
                    <TvShow />
                </Route>
                <Route path="/Upcoming">
                    <Upcoming />
                </Route>

            </Switch>
        </Switch>
    );
};

export default Routing;