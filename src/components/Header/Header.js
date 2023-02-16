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
            <h1>VSISTEROLLI</h1>
            <div className="options">
                <li onClick={changeTheme}><ion-icon name={icon}></ion-icon></li>
                <ul>
                    <li>INTRODUÇÃO</li>
                    <li>SOBRE MIM</li>
                    <li>TECNOLOGIAS</li>
                    <li>PROJETOS</li>
                    <li>CONTATO</li>
                </ul>
            </div>
        </HeaderStyle>
    )   
}