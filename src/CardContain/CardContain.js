import React from 'react';
import CardMenu from '../CardMenu/CardMenu';

class CardContain extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showMenu:false,
      menuPosition:{
        x:null,
        y:null
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    
  }

  handleClick(e){
    console.log("location x:",e.screenX,",y:",e.screenY);
    this.setState({
      showMenu:true,
      menuPosition:{
        x:e.screenX,
        y:e.screenY
      }
    });
    document.addEventListener("click", this.handleBlur);
  }

  handleBlur(e){
    this.setState({showMenu:false});
    document.removeEventListener("click", this.handleBlur);
    e.preventDefault();
  }

  render(){
    if (this.props.type==="monster") {
      return(
        <div className="card-contain">
          {this.state.showMenu && <CardMenu position={this.state.menuPosition}/>}
          <div className="card-number-top">
            <span>L10</span>
          </div>
          <div className="card">
            <img src="10000.jpg" onClick={this.handleClick} alt=""/>
          </div>
          <div className="card-number-bottom">
            <span>10000/10000</span>
          </div>
        </div>
      )
    } else if(this.props.type==="empty") {
      return(
        <div className="card-contain"></div>
      )
    } else {
      return(
        <div className="card-contain">
          <div className="card-number-top">
            <span></span>
          </div>
          <div className="card">
            <img src="cover.jpg" alt=""/>
          </div>
          <div className="card-number-bottom">
            <span></span>
          </div>
        </div>
      )
    }
    
  }
}

export default CardContain;