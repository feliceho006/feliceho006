import React from 'react';
import { useNavigate } from "react-router-dom";
import { HardwareData } from "../HardwareData";
import "../Styles/Project.css"
import sample from '../Assets/sample-proj.jpg'

function Hardware() {
  return(
    <div className="listOfProjects">
      <div className="projectsList">
        {HardwareData.map((project) => {
          return (
            <div className="projectsDisplay">
                <div className="projectBlock">
                    <img src={project.image}></img>
                    <p>{project.name}</p> 
                    
                </div>
                <div className='projectDesc'>
                    <p>{project.description}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Hardware;

