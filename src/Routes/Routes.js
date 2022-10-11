import React from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import Minter from '../Minter'

export default function RouteFunction() {
    return (
        <Routes>
            <Route path='/' element={<Minter />} />
        </Routes>
    );
}