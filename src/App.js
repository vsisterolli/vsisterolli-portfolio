import GlobalStyle from "./assets/styles/GlobalStyle"
import AboutMe from "./components/AboutMe/AboutMe"
import Header from "./components/Header/Header"
import IntroductionSection from "./components/IntroductionSection/IntroductionSection"
import Projects from "./components/Projects/Projects"
import Tecnologies from "./components/Tecnologies/Tecnologies"

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <IntroductionSection/>
            <AboutMe/>
            <Tecnologies/>
            <Projects/>
        </>
        )
}