import React, { Component } from 'react'

class Navbar extends Component  {
    render(){

        
    if(this.props.data){
        var name = this.props.data.name;
        var profilepic= "images/"+this.props.data.image;
        var bio = this.props.data.bio;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone= this.props.data.phone;
        var email = this.props.data.email;
        var resumeDownload = this.props.data.resumedownload;
      }
      
    return(
        <div className="first row">
            <div className="col-med-3">
                <span>{name}</span>
            </div>
            <div className="col-med-3">
                <p>Projects</p>
            </div>
            <div className="col-med-3">
                <p>Skills</p>
            </div>
        </div>
      )
    }
  }


export default Navbar;