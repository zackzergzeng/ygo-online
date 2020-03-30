import React from 'react';
import CardContain from '../CardContain/CardContain';

class Field extends React.Component{
  render(){
    return(
      <div class="field">
        <div class="opponent magic-trap-zone">
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
        </div>
        <div class="opponent main-monster-zone">
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
        </div>
        <div class="ex-monster-zone">
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
        </div>
        <div class="myself main-monster-zone">
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
        </div>
        <div class="myself magic-trap-zone">
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
          <CardContain></CardContain>
        </div>
      </div>
    )
  }
}

export default Field;