import ProjectStyle from "./ProjectStyle";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StyledModal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";


export default function Project({value}) {
        
	function openModal() {
		setIsOpen(true);
	}
    
	function closeModal() {
		setIsOpen(false);
	}

	const [modalIsOpen, setIsOpen] = React.useState(false);
    
	return (
		<ProjectStyle className="big-on-hover" image={value.images[0]}>
			<h2 onClick={openModal}>{value.name}</h2>
			<div className="portrait" onClick={openModal}></div>
			<StyledModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Project Modal"
				className="Modal"
			>
				<h1>{value.name}</h1>
				<Carousel images={value.images}/>
				<p>{value.description}</p>
				<div className="link-project">
					<a href={value.deploy} target="_blank" rel="noreferrer">Dê uma olhada!</a>
				</div>
			</StyledModal>
		</ProjectStyle>
	);
}