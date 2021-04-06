import React from "react";
import Hero from "../components/Hero";

const Home = () => {
	return <Hero hero="defaultHero"></Hero>;
};

Hero.defaultProps = {
	hero: "defaultHero"
};

export default Home;
