import React from 'react';

class CardDetail extends React.Component{
  render(){
    return(
      <div className="left">
        <div className="detail-box card-picture">
          <img className="" src="10000.jpg" alt="万物创世龙"/>
        </div>
        <div className="detail-box">
          <h1>万物创世龙</h1>
          <h2>[龙族/特殊召唤/效果]</h2>
          <p>这张卡不能通常召唤</p>
        </div>
      </div>
    )
  }
}

export default CardDetail;