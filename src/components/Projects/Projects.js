import React from "react";
import Project from "../Project/Project";
import ProjectsStyle from "./ProjectsStyle";
import projectsData from "./ProjectsData";

export default function Projects() {
	return (
		<ProjectsStyle id="projects">
			<div className="title">
				<h1>PROJETOS</h1>
			</div>
			<div className="projects">
				{projectsData.map((value, index) => <Project value={value} key={index}/>)}
			</div>
			<p>Os repositórios de todos esses projetos podem ser encontrados no meu <a>github</a><br/>O link "dê uma olhada" te levará diretamente para o repositório do back-end caso o projeto se trate apenas da API</p>
		</ProjectsStyle>
	);
}