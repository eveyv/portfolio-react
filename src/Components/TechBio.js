import React, { Component } from 'react'

class TechBio extends Component {
    render(){
      if(this.props.data){
        var resumeMessage = this.props.data.skillmessage;
        var techSkills = this.props.data.skills;
        //.map skills here
      }

        return(
            <div className="content">
                <p className="center-column"> {resumeMessage} </p>
             </div>
          )
        }
    }

export default TechBio;