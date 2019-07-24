import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";

// import Counter from "./components/Counter";
import characters from "./characters.json";
import Navbar from "./components/Navbar";

class App extends Component {
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Setting the initial state of the Counter component
  state = {
    // count: 0
    characters,
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  shuffleCards = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.count}/>
        <div className="container">
          {/* <p className="card-text">Score: {this.state.count}</p> */}

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
