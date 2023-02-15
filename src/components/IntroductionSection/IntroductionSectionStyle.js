import styled from "styled-components";
import { primaryColor, secondaryColor, textColor } from "../../assets/styles/colors";

const IntroductionSectionStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${primaryColor};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: ${textColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Noto Sans";
    }
    a {
        display: ${props => props.buttonDisplay ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        position: absolute;
        padding: 15px 30px;
        border: 1px silver solid;
        text-decoration: none   ;
        border-radius: 80px;
        top: calc(100vh - 140px);
        color: ${textColor};
        font-family: "Roboto";
        font-size: 2em;
        background-color: ${secondaryColor};
        :hover {
            cursor: pointer;
        }
        h2 {
            margin-bottom: 8px;
        }
    }
`

export default IntroductionSectionStyle;