import React from 'react';

class CardContain extends React.Component{
  render(){
    return(
      <div className="card-contain">
        <div className="card-number-top">
          <span>L10</span>
        </div>
        <div className="card">
          <img src="10000.jpg" alt=""/>
        </div>
        <div className="card-number-bottom">
          <span>10000/10000</span>
        </div>
      </div>
    )
  }
}

export default CardContain;