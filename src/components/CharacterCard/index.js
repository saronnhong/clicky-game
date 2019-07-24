import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="mikeland_img" id={props.id} src={props.url} width="119%" alt="mikeland_img"/>
            </div>
           
        </div>
    );
}

export default CharacterCard;
