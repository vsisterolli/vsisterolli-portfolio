import React from "react";
import Project from "../Project/Project";
import ProjectsStyle from "./ProjectsStyle";

export default function Projects() {
    return (
        <ProjectsStyle id="projects">
            <div className="title">
                <h1>PROJETOS</h1>
            </div>
            <div className="projects">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </ProjectsStyle>
    )
}