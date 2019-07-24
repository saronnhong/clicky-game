import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img id={props.id} src={props.url} width="200px" alt="mikeland_img"/>
            </div>
           
        </div>
    );
}

export default CharacterCard;
