import React, { Component } from 'react'

class TechBio extends Component {
    render(){
      if(this.props.data){
        var resumeMessage = this.props.data.skillmessage;
        //.map skills here
      }

        return(
            <div className="content">
                <p className="center-column"> {resumeMessage} </p>
                //.forEach education info here
             </div>
          )
        }
    }

export default TechBio;