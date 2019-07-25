import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark transparent" id="nav1">
            <div className="navDiv">
                <a className="navbar-brand" href="/">Clicky Game</a>
                <a className= "scoreNav" id="highScoreText"> High Score: {props.highScore}</a>
                <a className= "scoreNav" id="scoreText">Score: {props.score}</a>
            </div>
        </nav>
    );
}

export default Navbar;
