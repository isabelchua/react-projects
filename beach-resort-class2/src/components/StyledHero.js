import styled from "styled-components";
//3.01
import defaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
	min-height: 60vh;
	background: url(${defaultImg}) center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
// const orange = "#f15025";

// const SimpleButton = styled.button`
// 	color: ${orange};
// 	background: green;
// 	font-size: 3rem;
// `;

export default StyledHero;
