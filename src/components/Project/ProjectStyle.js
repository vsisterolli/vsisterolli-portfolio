import styled from "styled-components";
import { bordersColor, textColor } from "../../assets/styles/colors";

const ProjectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    margin: 20px;
    width: 160px;
    h2 {
        font-family: "Roboto";
        color: ${textColor};
        text-align: center;
        font-size: 1.6em;
        margin-bottom: 12px;
    }
    div {
        width: 15em;
        height: 15em;
        border: solid 2px ${bordersColor};
        border-radius: 20%;
        outline: 1px solid black;
        background-image: url("https://i.imgur.com/oKLnL01.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
`

export default ProjectStyle;