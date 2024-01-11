import "../../App.css";
import React from "react";

export default function Portfolio({ projects }) {
  console.log("projects", projects);
  return (
    <div className="sectionContainer">
      <h2>My Projects:</h2>

      <div className="projectBoxContainer">
        {projects && projects.length > 0 ? (
          projects.map((project, projectIndex) => {
            return (
              <div key={projectIndex} className={"project flex alignCenter justifyCenter flexColumn"}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.url}>
                  <button className="projectLinkButton">Click Me!</button>
                  </a>
              </div>
            );
            
          })
        ) : (
          <div className={"project flex alignCenter justifyCenter flexColumn"}>
            No Projects Found {`:(`}
          </div>
        )}
      </div>
    </div>
  );
}
