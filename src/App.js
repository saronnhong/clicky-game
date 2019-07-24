import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";

// import Counter from "./components/Counter";
import characters from "./characters.json";
import Navbar from "./components/Navbar";

var shuffleCards = (array) => {
  return array.sort(() => Math.random() - 0.5);
};


var clickedArray = [];
class App extends Component {


  state = {
    // count: 0
    characters,
    count: 0,
    highScore: 0,
    id: null
  };

  checkIfClicked = (num, array) => {
    for (let i = 0; i < array.length; i++) {
      if (num === array[i]) {
        if(this.state.count > this.state.highScore){
          this.setState({ highScore: this.state.count});
        }
        this.setState({ count: 0 });
        array.length=0;
        alert("You Lose!");
        return;
      } 
    }
    this.setState({ count: this.state.count + 1 });
    array.push(num);
    shuffleCards(characters);
  }

  handleIncrement = (event) => {
    const targetId = event.target.id;
    console.log(targetId);
    // clickedArray.push(targetId);
    console.log(clickedArray);
    this.checkIfClicked(targetId, clickedArray);
    // this.setState({ count: this.state.count + 1 });
    // shuffleCards(characters);
  };




  render() {
    return (
      <div>
        <Navbar score={this.state.count} highScore={this.state.highScore}/>
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <a onClick={this.handleIncrement}>
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
