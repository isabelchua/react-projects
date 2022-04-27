const Item = ({ plushi }) => {
	return (
		<div>
			Plushisaur {plushi.name} <img src={plushi.src} alt="" />
		</div>
	);
};

export default Item;
