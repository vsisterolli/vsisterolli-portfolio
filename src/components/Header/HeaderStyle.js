import styled from "styled-components"
import { secondaryColor, textColor } from "../../assets/styles/colors";

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    color: ${textColor};
    z-index: 1;

    background-color: ${secondaryColor};
    border-bottom: solid 1px silver;
    height: 80px;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    li {
        display: inline;
        font-family: "Roboto";
        font-weight: bold;
        margin-left: 20px;
        cursor: pointer;
    }
    h1 {
        color: ${textColor};
        font-size: 2.6em;
        font-family: "Inter Tight";
        font-weight: 700;
    }
    @media (max-width: 900px) {
        h1 {
            font-size: 1.6em;
        }
        li {
            font-size: 0.8em;
        }
    }
    @media (max-width: 600px) {
        justify-content: center;
        h1 {
            font-size: 2em;
        }
        ul {
            display: none;
        }
    }
`

export default HeaderStyle;