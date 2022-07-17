import React from "react";




function ProjectItem({ name, about, technologies }) {

  const techList = technologies.map(tech => {
    return(
      <span key={tech}>{tech}</span>
    )
  })

  return (
    <div className="project-item">
      <span><h3>{name}</h3></span>
      <span><p>{about}</p></span>
      <div className="technologies">
        {techList}

      </div>
    </div>
  );
}

export default ProjectItem;
