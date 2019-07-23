import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";

// import Counter from "./components/Counter";
import characters from "./characters.json";

class App extends Component {
  //   // Setting this.state.friends to the friends json array
  // state = {
  //   characters
  // };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  
    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
  
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
        <p className="card-text">Score: {this.state.count}</p>
        <div className="row">
         <a className = "card123" onClick={this.handleIncrement}>
          <CharacterCard
            name={characters[0].name}
            image={characters[0].image}
          />
          </a>
          
          <CharacterCard
            name={characters[1].name}
            image={characters[1].image}
          />
          <CharacterCard
            name={characters[2].name}
            image={characters[2].image}
          />
          <CharacterCard
            name={characters[3].name}
            image={characters[3].image}
          />
        </div>
        <div className="row">
          <CharacterCard
            name={characters[4].name}
            image={characters[4].image}
          />
          <CharacterCard
            name={characters[5].name}
            image={characters[5].image}
          />
          <CharacterCard
            name={characters[6].name}
            image={characters[6].image}
          />
          <CharacterCard
            name={characters[7].name}
            image={characters[7].image}
          />
        </div>
        <div className="row">
          <CharacterCard
            name={characters[8].name}
            image={characters[8].image}
          />
          <CharacterCard
            name={characters[9].name}
            image={characters[9].image}
          />
          <CharacterCard
            name={characters[10].name}
            image={characters[10].image}
          />
          <CharacterCard
            name={characters[11].name}
            image={characters[11].image}
          />
        </div>
        
      </div>
    )
  }
}

export default App;
