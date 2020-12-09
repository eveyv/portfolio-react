import React, { Component } from 'react'
import "./background.css"

class Welcome extends Component {
    render(){
      if(this.props.data){
        var bio= this.props.data.bio;
        var description = this.props.data.description;
      }

    return(
      <div className="bg">
        <div className="content">
          <h2> {bio} </h2>
          <h3> {description} </h3>
        </div>
      </div>
    )
  }
}

export default Welcome;