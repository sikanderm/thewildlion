import React, { Component } from "react";

import "../Test.css";
export default class Test2 extends React.Component {
    render(){
        return(
            
              <div>
                  <div className="y">
                  <img alt="pic" className="ban-img" src={this.props.animal.pic}/>
                  <div className="id-div">
                  <div className="id">{this.props.animal.name}</div></div>
                </div>
                
            </div>
            )
    }
}