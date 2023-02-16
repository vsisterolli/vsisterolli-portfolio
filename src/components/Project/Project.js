import ProjectStyle from "./ProjectStyle"
import Modal from 'react-modal';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StyledModal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";


export default function Project(name) {
        
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    return (
        <ProjectStyle className="big-on-hover">
            <h2 onClick={openModal}>Linkr</h2>
            <div className="portrait" onClick={openModal}></div>
            <StyledModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Modal"
                className="Modal"
            >
                <h1>Linkr</h1>
                <Carousel images={["https://i.imgur.com/YqnhD5t.png", "https://i.imgur.com/YqnhD5t.png"]}/>
                <p>O Linkr é uma rede social de compartilhamento de links com layout responsivo inspirada pelo twitter. Possuí diversas funcionalidades de uma rede social: cadastro/login, timeline de carregamento infinito que prioriza posts de quem você segue, trending, perfis, etc. Foi construído por um total de 5 pessoas utilizando o método SCRUM. 
                <br/><br/>
                O front-end foi construído utilizando React e suas bibliotecas, como Axios, Styled-Components e outras.
                <br/><br/>
                O back-end foi construído utilizando Node, com Express.js e PostgresSQL;
                <br/><br/>
                Atuei na construção e revisão de features majoritárias, como a página de perfil e pesquisa de usuários. Tanto na parte do front-end quanto na parte do back-end.
                </p>
                <div className="link-project">
                    <a href="https://linkr-front-sandy.vercel.app/" target="_blank">Dê uma olhada!</a>
                </div>
            </StyledModal>
        </ProjectStyle>
    )
}