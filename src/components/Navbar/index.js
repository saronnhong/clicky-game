import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark transparent" id="nav1">
            <div className="justify-content-left">
                <a className="navbar-brand" href="/">Clicky Game</a>
                <a id="scoreText">Score: {props.score}</a>
                <a id="scoreText"> High Score: {props.highScore}</a>
            </div>
        </nav>
    );
}

export default Navbar;
