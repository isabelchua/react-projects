import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "free cocktails",
				text: "lorem ipsum"
			},
			{
				icon: <FaHiking />,
				title: "free hikinh",
				text: "lorem ipsum"
			},
			{
				icon: <FaShuttleVan />,
				title: "free shuttle van",
				text: "lorem ipsum"
			},
			{
				icon: <FaBeer />,
				title: "free beer",
				text: "lorem ipsum"
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.text}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
