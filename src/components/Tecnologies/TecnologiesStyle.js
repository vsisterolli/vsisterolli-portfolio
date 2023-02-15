import styled from "styled-components";
import { primaryColor, secondaryColor, textColor } from "../../assets/styles/colors";

const TecnologiesStyle = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: ${primaryColor};
    padding-top: 110px;
    clear: both;
    h1 {
        color: ${textColor};
        text-align: center;
        font-size: 2.6em;
        font-family: "Inter Tight";
    }
    h2 {
        color: ${textColor};
        text-align: center;
        margin-top: 8px;
        font-size: 1.4em;
        font-family: "Noto Sans";
        margin-bottom: 20px;
    }
    .all-tecnologies {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        h3 {
            font-size: 1.4em;
            font-family: "Noto Sans";  
            color: ${textColor};
            text-align: center;
        }
    }
    .tecnologies-container {
        flex-basis: 30%;
        background-color: ${primaryColor};
        margin-bottom: 50px;
        h3 {
            margin-bottom: 12px;
        }
    }
    .icons {
        img {
            width: 4.6em;
            height: 4.6em;
        }
        .htmlIcon {
            img {
                width: 3.8em;
                height: 3.8em;
            }
            h4 {
                margin-top: 0px;
                margin-bottom: 4px;
            }
        }
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 800px;
        background-color: ${secondaryColor};
        padding: 5px 20px;
    }
    .tecnology {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 {
        margin-top: 8px;
        font-size: 1.1em;
        @media (max-width: 900px) {
            font-size: 0.9em;
        }
        font-family: "Noto Sans";  
        color: ${textColor};
        text-align: center;        
    }


`

export default TecnologiesStyle;