import HeaderStyle from "./HeaderStyle"
import { ThemeContext } from "styled-components"
import React from "react"

export default function AboutMe() {
    
    const [theme, setTheme] = React.useContext(ThemeContext);
    const [icon, setIcon] = React.useState("sunny");

    function changeTheme() {
        console.log(theme, setTheme);
        setIcon((theme === "dark" ? "moon" : "sunny"));
        setTheme((theme !== "dark" ? "dark" : "bright"))
    }

    return (
        <HeaderStyle>
            <a href="#introduction"><h1>VSISTEROLLI</h1></a>
            <div className="options">
                <li onClick={changeTheme}><ion-icon name={icon}></ion-icon></li>
                <ul>
                    <li><a href="#introduction">INTRODUÇÃO</a></li>
                    <li><a href="#about-me">SOBRE MIM</a></li>
                    <li><a href="#tecnologies">TECNOLOGIAS</a></li>
                    <li><a href="#projects">PROJETOS</a></li>
                    <li>CONTATO</li>
                </ul>
            </div>
        </HeaderStyle>
    )   
}