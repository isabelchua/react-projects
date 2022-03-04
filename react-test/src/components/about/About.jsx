import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="me" />
					</div>
				</div>
				<div className="about__content">
					<article className="about__card">
						<FaAward className="about__icon" />
						<h5>Experience</h5>
						<small>3+ Years Experience</small>
					</article>
					<article className="about__card">
						<FiUser className="about__icon" />
						<h5>Clients</h5>
						<small>100+ Worldwide</small>
					</article>
					<article className="about__card">
						<VscFolderLibrary className="about__icon" />
						<h5>Projects</h5>
						<small>50+ Completed</small>
					</article>
				</div>
				<p>
					asdnjrg kdsnf old asd asdngf ieajnd ijvdnspidvn iosdnvnsdv nsd
					sdfnhi dsonfon ondfo noin onouehfou hweoufhueowh fouwehfr
					ouenfoin oiznfo unfoudsbfoudsbfovubsdoubgouernfoinon oiu efhoeuf
				</p>
				<a href="#contact" className="btn btn-primary">
					Let's Talk'
				</a>
			</div>
		</section>
	);
};

export default About;
