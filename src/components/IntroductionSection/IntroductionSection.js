import React from "react";
import IntroductionSectionStyle from "./IntroductionSectionStyle";

export default function IntroductionSection() {

    const initialString = "Olá! Sou o Victor Sisterolli";
    const descriptionString = "Desenvolvedor Web Fullstack";

    const [firstString, setFirstString] = React.useState('');
    const [secondString, setSecondString] = React.useState('');
    const [buttonDisplay, setButtonDisplay] = React.useState(false);
    const [buttonClass, setButtonClass] = React.useState('slide-top')
    let firstStringAlias = "";
    let secondStringAlias = "";


    function simulateTyping(string, position) {
        if(!string && !position && firstStringAlias.length)
            return;
        if(!string) {
            if(position === initialString.length)
                return simulateTyping(1, 0);
            else {
                firstStringAlias += initialString[position];
                setFirstString(firstStringAlias);
                return setTimeout(() => simulateTyping(0, position + 1), 80);
            }   
        }
        else {
            if(position === descriptionString.length) {
                setButtonDisplay(true);
                return setTimeout(() => setButtonClass('slide-fwd-center'), 1000)
            }
            else {
                secondStringAlias += descriptionString[position];
                setSecondString(secondStringAlias);
                return setTimeout(() => simulateTyping(1, position + 1), 80);
            }            
        }
    }

    React.useEffect(() => {
        simulateTyping(0, 0);
    }, []) 

    return (    
        <IntroductionSectionStyle id="introduction" buttonDisplay={buttonDisplay}>
          <h1>{firstString}</h1>
          <h1>{secondString}</h1>  
          <a href="#about-me" className={buttonClass}>
            <h2>Saiba mais!</h2>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </a>
        </IntroductionSectionStyle>
    )
}