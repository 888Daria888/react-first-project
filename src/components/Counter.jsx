import React, {Component} from "react";
import reactDom from "react-dom";
export default class Counter extends Component{
   state={
      number:0,
      color:''
   }

   onClickMinus=()=>{
      if(this.state.number <= -10){
      return
      } 
         this.setState({number: this.state.number - 1 })
         this.setState({color: "red"})
         // this.setState({color: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()})
   }
   onClickPlus=()=>{
      if(this.state.number >= 10){
         return
      }
      this.setState({number: this.state.number + 1})
      // this.setState({color: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`})
   }

   getColor=()=>{
      background:'red'
   }

   render(){
      return(
         <div style={getColor}>
            <button onClick={this.onClickMinus}>-</button>
            <p>{this.state.number}</p>
            <button onClick={this.onClickPlus}>+</button>
         </div>
      )
   }
}