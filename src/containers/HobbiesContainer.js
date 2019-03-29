import React, { Component } from 'react';
import HobbyCard from '../components/HobbyCard'

class HobbiesContainer extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <h1>Hobbies</h1>
        {this.props.hobbies.map(hobby =>
          <HobbyCard
            key={hobby.id}
            hobby={hobby}
          />
        )}
      </div>
    )
  }
}
export default HobbiesContainer;
