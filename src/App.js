import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
// import "./App.css";

var shuffleCards = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

var clickedArray = [];
class App extends Component {
  state = {
    characters,
    count: 0,
    highScore: 0,
    id: null,
    endGame: false
  };

  checkIfClicked = (num, array) => {
    for (let i = 0; i < array.length; i++) {
      if (num === array[i]) {
        if(this.state.count > this.state.highScore){
          this.setState({ highScore: this.state.count});
        }
        this.setState({ count: 0 });
        array.length=0;
        // this.setState({endGame: "Game Over!"})
        alert("Game Over! You scored " + this.state.count + ". Please try again.");
        return;
      } 
    }
    this.setState({ count: this.state.count + 1 });
    array.push(num);
    shuffleCards(characters);
  }

  handleIncrement = (event) => {
    const targetId = event.target.id;
    this.checkIfClicked(targetId, clickedArray);
  };


  render() {
    return (
      <div>
        
        <Navbar score={this.state.count} highScore={this.state.highScore} endGame={this.state.endGame}/>
        <div className="container">
          <div className="row">
              {this.state.characters.map(character => (
               <a className="col-lg-2" onClick={this.handleIncrement}>
                 <CharacterCard
                   id={character.id}
                   url={process.env.PUBLIC_URL + '/img/' + character.imageFile}
                 />
               </a>
             ))} 
          </div>
        </div>
      </div>

    )
  }
}

export default App;
