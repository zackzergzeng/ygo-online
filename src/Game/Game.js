import React from 'react';
import CardDetail from '../CardDetail/CardDetail';
import Message from '../Message/Message';
import Chat from '../Chat/Chat';
import Hand from '../Hand/Hand';
// import Side from '../Side/Side';
import Field from '../Field/Field';

class Game extends React.Component{
  render(){
    return(
      <div className="main">
        <div className="center">
          <div className="top">
            <div className="player-info">
              <div className="life-point">
                <span>8000</span>
              </div>
              <div className="player-name myself">user name</div>
            </div>
            <div className="turn-number">1</div>
            <div className="player-info">
              <div className="life-point">
                <span>8000</span>
              </div>
              <div className="player-name opponent">user name</div>
            </div>
          </div>
          <div className="game-zone">
            <Hand/>
            <Field/>
            <Hand/>
          </div>
        </div>
        <CardDetail/>
        <div className="right">
          <Message/>
          <Chat/>
        </div>
      </div>
    );
  }
}

export default Game;