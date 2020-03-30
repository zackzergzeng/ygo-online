import React from 'react';
import CardContain from '../CardContain/CardContain';

class Side extends React.Component{
  render(){
    return(
      <div class="side">
        <CardContain>卡组</CardContain>
        <CardContain>墓地</CardContain>
        <CardContain>除外</CardContain>
        <CardContain>场地魔法</CardContain>
        <CardContain>额外卡组</CardContain>
        {/* <div class="opponent deck card-contain">
          卡组
        </div>
        <div class="opponent graveyard card-contain">
          墓地
        </div>
        <div class="opponent banish-zone card-contain">
          除外
        </div>
        <div class="myself field-magic card-contain">
          场地魔法
        </div>
        <div class="myself ex-deck card-contain">
          额外卡组
        </div> */}
      </div>
    )
  }
}

export default Side;