import React, { Component } from 'react'

class TechBio extends Component {
    render(){
      if(this.props.data){
        var resumeMessage = this.props.data.skillmessage;
        //.map skills next
      }

        return(
            <div className="content">
                  <p> {resumeMessage} </p>
                  <p>  </p>
            </div>
          )
        }
    }

export default TechBio;