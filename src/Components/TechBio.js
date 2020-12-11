import React, { Component } from 'react'

class TechBio extends Component {
    render(){
      if(this.props.data.resumeData){
        var resume= this.props.data.resumeData.resume;
      }

        return(
            <div className="first row">
                  <p>
                    {resume}
                  </p>
            </div>
          )
        }
    }

export default TechBio;