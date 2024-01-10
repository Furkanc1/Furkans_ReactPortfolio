import "../../App.css";
import React from 'react';

export default function Portfolio({projects}) {
  console.log("projects", projects);
  return (
    <div className="sectionContainer">
      <h2>My Projects:</h2>
      <div className="projectBoxContainer">
        <div className={"project flex alignCenter justifyCenter flexColumn"}>
          <h3>project 1</h3>
          <p>
            project description
          </p>
        </div>
        <div className={"project flex alignCenter justifyCenter flexColumn"}>
          <h3>project 2</h3>
          <p>
            project description
          </p>
        </div>
        <div className={"project flex alignCenter justifyCenter flexColumn"}>
          <h3>project 3</h3>
          <p>
            project description
          </p> flexColumn
        </div>
      </div>
    </div>
  );
}
