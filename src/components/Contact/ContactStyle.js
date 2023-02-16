import styled from "styled-components";
import {brightBorderColor, darkBorderColor, primaryBrightColor, primaryDarkColor, primaryTextColor, secondaryBrightColor, secondaryDarkColor, secondaryTextColor} from "../../assets/styles/colors";

const ContactStyle = styled.section`
    width: 100vw;
    min-height: 300px;
    background-color: ${props => props.theme[0] === "dark" ? primaryDarkColor : primaryBrightColor};
    padding-top: 40px;
    h1 {
        font-size: 2.6em;
        font-family: "Noto Sans";
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        text-align: center;
    }
    h2 {
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        text-align: center;
        margin-top: 8px;
        font-size: 1.4em;
        font-family: "Roboto";
        margin: 20px 0px;
    }
    .contact-me {
        color: ${props => props.theme[0] === "dark" ? primaryTextColor : secondaryTextColor};
        margin-top: 8px;
        font-size: 1.4em;
        font-family: "Roboto";
        display: flex;
        align-items: center;
        padding: 3% 5%;
        justify-content: space-between;
        p {
            margin-bottom: 8px;
        }
    }
    .contact {
        display: flex;
        align-items: center;
        :hover {
            cursor: pointer;
        }
        p {
            margin-right: 8px;
        }
        ion-icon {
            margin-bottom: 7px;
        }
    }
`

export default ContactStyle;