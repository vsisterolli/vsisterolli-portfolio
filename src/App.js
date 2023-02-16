import GlobalStyle from "./assets/styles/GlobalStyle";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import Projects from "./components/Projects/Projects";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import React from "react";
import { ThemeContext } from "styled-components";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";


export default function App() {

	const themeSetter = React.useState("dark");

	return (
		<>
			<ThemeContext.Provider value={themeSetter}>
				<GlobalStyle/>
				<ToastContainer
					theme={themeSetter[0] === "dark" ? "dark" : "light"}
				/>
				<Header/>
				<IntroductionSection/>
				<AboutMe/>
				<Tecnologies/>
				<Projects/>
				<Contact/>
			</ThemeContext.Provider>
		</>
	);
}