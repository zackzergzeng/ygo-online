import React from 'react';
import CardContain from '../CardContain/CardContain';

class Field extends React.Component{
  render(){
    return(
      <div className="card-zone">
        <div className="side">
          <CardContain type="deck" own="opponent">卡组</CardContain>
          <CardContain type="gravy" own="opponent">墓地</CardContain>
          <CardContain type="banish" own="opponent">除外</CardContain>
          <CardContain type="field-magic" own="opponent">场地魔法</CardContain>
          <CardContain type="ex-deck" own="opponent">额外卡组</CardContain>
        </div>
        <div className="field">
          <div className="opponent magic-trap-zone">
            <CardContain type=""></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
          </div>
          <div className="opponent main-monster-zone">
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
          </div>
          <div className="ex-monster-zone">
            <CardContain type="empty"></CardContain>
            <CardContain></CardContain>
            <CardContain type="empty"></CardContain>
            <CardContain></CardContain>
            <CardContain type="empty"></CardContain>
          </div>
          <div className="myself main-monster-zone">
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
            <CardContain type="monster"></CardContain>
          </div>
          <div className="myself magic-trap-zone">
            <CardContain></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
            <CardContain></CardContain>
          </div>
        </div>
        <div className="side">
          <CardContain type="ex-deck" own="opponent">额外卡组</CardContain>
          <CardContain type="field-magic" own="opponent">场地魔法</CardContain>
          <CardContain type="banish" own="opponent">除外</CardContain>
          <CardContain type="gravy" own="opponent">墓地</CardContain>
          <CardContain type="deck" own="opponent">卡组</CardContain>
        </div>
      </div>
      
    )
  }
}

export default Field;