import styled from "styled-components";

export const ContainerCard = styled.aside`
	background-image: url("/images/background-card.png");

	height: 100vh;
	width: 50%;
	background-size: auto;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContainerCard__Button = styled.div`
	border: none;
	background-color: none;
	text-align: center;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 36px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		text-decoration: none;
		width: 182px;
		height: 46.84px;
		background: linear-gradient(
			87.66deg,
			#ff41d5 0.61%,
			#ad23e4 23.06%,
			#8031e8 54.46%,
			#6c54e6 76.49%,
			#3da7e1 98.66%
		);
		border-radius: 4px;

		border: none;
		color: #fff;
		font-weight: bold;
		text-transform: uppercase;
		font-weight: bold;
		font-family: Roboto;
		cursor: pointer;
	}
`;

export const ContainerCard__CardNFT = styled.div`
	margin-top: 56px;
`;

export const ContainerCard__Monkeys = styled.div`
	display: flex;
`;
