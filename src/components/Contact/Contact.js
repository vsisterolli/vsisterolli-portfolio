import React from "react";
import ContactStyle from "./ContactStyle";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import githubIcon from "../../assets/images/github-icon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
	function copyContact(contact) {
		toast.success(`${contact.includes("@") ? "Email" : "WhatsApp"} copiado com sucesso!`);
		navigator.clipboard.writeText(contact);
	}
	return (    
		<ContactStyle>
			<h1>CONTATO</h1>
			<h2>Tem alguma idéia em mente? Me contate e podemos fazê-la se tornar realidade.</h2>
			<div className="contact-me">
				<div>
					<div className="contact" onClick={() => copyContact("vsisterolli@gmail.com")}>
						<p>Email: vsisterolli@gmail.com</p>
						<ion-icon name="copy-outline"></ion-icon>
					</div>
					<div className="contact" onClick={() => copyContact("Telefone/WhatsApp: +55 (34) 99126-0031")}>
						<p>Telefone/WhatsApp: +55 (34) 99126-0031</p>
						<ion-icon name="copy-outline"></ion-icon>
					</div>
				</div>
				<div className="icons">
					<a href="https://www.linkedin.com/in/victorsisterolli/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin icon"/></a>  
					<a href="https://github.com/vsisterolli" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github icon"/></a>
				</div>
			</div>
		</ContactStyle>
	);
}