import React from "react";
import TecnologiesStyle from "./TecnologiesStyle";
import cssIcon from "../../assets/images/css-icon.png";
import htmlIcon from "../../assets/images/html-icon.png"
import javascriptIcon from "../../assets/images/javascriptIcon.png"
import typescriptIcon from "../../assets/images/typescript-icon.png"
import pythonIcon from "../../assets/images/python-icon.png"
import postgresIcon from "../../assets/images/postgres-icon.png"
import sqlIcon from "../../assets/images/sql-icon.png"
import mongodbIcon from "../../assets/images/mongodb-icon.png"
import prismaIcon from "../../assets/images/prisma-icon.png"
import nodeIcon from "../../assets/images/node-icon.png"
import reactIcon from "../../assets/images/react-icon.png"
import jestIcon from "../../assets/images/jest-icon.png"
import seleniumIcon from "../../assets/images/selenium-icon.png"
import awsIcon from "../../assets/images/aws-icon.png"
import dockerIcon from "../../assets/images/docker-icon.png"


export default function Tecnologies() {

    return (    
        <TecnologiesStyle>
            <div className="titles">
                <h1>TECNOLOGIAS</h1>
                <h2>Tecnologias que domino e utilizo nos meus projetos</h2>
            </div>
            <div className="all-tecnologies">
                <div className="tecnologies-container">
                    <h3>Front-end</h3>
                    <div className="icons">
                        <div className="tecnology htmlIcon">
                            <h4>HTML</h4>
                            <img src={htmlIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>CSS</h4>
                            <img src={cssIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>JavaScript</h4>
                            <img src={javascriptIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>React</h4>
                            <img src={reactIcon}/>
                        </div>
                    </div>
                </div>
                <div className="tecnologies-container">
                    <h3>Back-end</h3>
                    <div className="icons">
                        <div className="tecnology">
                            <h4>Node</h4>
                            <img src={nodeIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>TypeScript</h4>
                            <img src={typescriptIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>Python</h4>
                            <img src={pythonIcon}/>
                        </div>
                    </div>
                </div>
                <div className="tecnologies-container">
                    <h3>Banco de dados</h3>
                    <div className="icons">
                        <div className="tecnology">
                            <h4>SQL</h4>
                            <img src={sqlIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>PostgresSQL</h4>
                            <img src={postgresIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>MongoDB</h4>
                            <img src={mongodbIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>Prisma</h4>
                            <img src={prismaIcon}/>
                        </div>
                    </div>
                </div>
                <div className="tecnologies-container">
                    <h3>Testes</h3>
                    <div className="icons">
                        <div className="tecnology">
                            <h4>Jest</h4>
                            <img src={jestIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>Selenium</h4>
                            <img src={seleniumIcon}/>
                        </div>
                    </div>
                </div>
                <div className="tecnologies-container">
                    <h3>Cloud</h3>
                    <div className="icons">
                        <div className="tecnology">
                            <h4>AWS</h4>
                            <img src={awsIcon}/>
                        </div>
                        <div className="tecnology">
                            <h4>Docker</h4>
                            <img src={dockerIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </TecnologiesStyle>
    )
}