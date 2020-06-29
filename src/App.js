import React, { Component } from "react";
import "./App.css";
import projects from "./projects.json";
import ProjCard from "./components/ProjCard";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div id="proj-container">
        <div id="header-and-buttons">
          <h2 id="header">Projects</h2>
          <div id="search-input-box"></div>
        </div>
        <div id="api-content">
        {this.state.projects.map(project => (
          <ProjCard
            id={project.id}
            key={project.id}
            name={project.name}
            pic_link={project.pic_link}
            authors={project.authors}
            repo_link={project.repo_link}
            deployed_link={project.deployed_link}
            tech_used={project.tech_used}
            blurb={project.blurb}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
