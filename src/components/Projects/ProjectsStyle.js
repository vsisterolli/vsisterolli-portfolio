import styled from "styled-components";
import { secondaryColor, textColor } from "../../assets/styles/colors";

const ProjectsStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${secondaryColor};
    position: relative;
    align-items: center;
    h1 {
        padding-top: 60px;
        margin-bottom: 20px;
        color: ${textColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Inter Tight";
    }
    .projects {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        cursor: pointer;
    }
`

export default ProjectsStyle;