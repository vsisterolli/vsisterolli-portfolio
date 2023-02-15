import React from "react";
import AboutMeStyle from "./AboutMeStyle";
import mypfp from "../../assets/images/my-pfp.jpeg"

export default function AboutMe() {
    return (
        <AboutMeStyle id="about-me">
            <div className="title">
                <h1>SOBRE MIM</h1>
            </div>
            <div className="description">
                <img src={mypfp} alt="my profile picture"/>
                <h2>Olá! Sou o Victor Sisterolli. Desenvolvedor Web Fullstack. Atualmente completando a graduação em Engenharia da Computação pela UNICAMP. Sou apaixonado por jogos e programação competitiva. Tri-medalhista da Olimpíada Brasileira de Informática e aficcionado por algoritmos. Já atuei na elaboração de mais de 20 projetos, incluindo APIs RESTFul e Layouts Responsivos.</h2>
            </div>
        </AboutMeStyle>
    )
}