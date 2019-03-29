import React, { Component } from 'react';

class HobbiesCard extends Component {
  render(){
    const {hobby} = this.props
    return(
      <div>
        <h1>{hobby.hobby_name}</h1>
        <h2>{hobby.about}</h2>
        <img src={hobby.img1} />
        <img src={hobby.img2} />
      </div>
    )
  }
}
export default HobbiesCard;
