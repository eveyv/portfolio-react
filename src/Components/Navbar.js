import React, { Component } from 'react'

class Navbar extends Component  {
    render(){

        
    if(this.props.data){
        var name = this.props.data.name;
        var profilepic= "images/"+this.props.data.image;
        var email = this.props.data.email;
      }
      
    return(
        <div className="first row">
            <div className="col-med-3">
                <span>About</span>
            </div>
            <div className="col-med-3">
                <p>Skills</p>
            </div>
            <div className="col-med-3">
                <p>Projects</p>
            </div>
            <div className="col-med-3">
                <p>Contact</p>
            </div>
        </div>
      )
    }
  }


export default Navbar;