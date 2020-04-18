import React from 'react';
import './CardMenu.scss';

class CardMenu extends React.Component{

  handleClick(){
    alert("发动效果");
  }

  render(){
    return(
      <div className="card-menu" style={{top:this.props.position.y-70, left:this.props.position.x}}>
        <div className="card-menu-item" onClick={this.handleClick}>发动</div>
        <div className="card-menu-item">攻击</div>
        <div className="card-menu-item">召唤</div>
        <div className="card-menu-item">设置</div>
      </div>
    )
  }
}

export default CardMenu;