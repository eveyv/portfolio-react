import React, { Component } from 'react'

class TechBio extends Component {
    render(){
      if(this.props.data){
        var resume= this.props.data.skillmessage;
      }

        return(
            <div className="first row">
                  <p> {resume} </p>
            </div>
          )
        }
    }

export default TechBio;