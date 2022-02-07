import styled from "styled-components";

export const ContainerCard = styled.aside`
	background-image: url("/images/background-card.png");
	background-repeat: no-repeat
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
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1550px) {
		img {
			width: 300px !important;
		}
	}
`;

export const ContainerCard__Monkeys = styled.div`
	display: flex;

	/* >span {
		position: relative;
		bottom: 40px;
		left: 20px;
	} */
	> span:nth-child(1) {
		position: relative;
		bottom: 40px;
		left: 20px;
		z-index: 100;
	}
	> span:nth-child(2) {
		position: relative;
		bottom: 40px;
		left: 0px;
		z-index: 100;
	}
	> span:nth-child(3) {
		position: relative;
		bottom: 40px;
		left: -20px;
		z-index: 100;
	}
	> span:nth-child(4) {
		position: relative;
		bottom: 40px;
		left: -40px;
		z-index: 100;
	}

	@media (max-width: 1550px) {
		img {
			width: 60px !important;
		}

		> span:nth-child(1) {
			left: -10px;
		}
		> span:nth-child(2) {
			left: -30px;
		}
		> span:nth-child(3) {
			left: -50px;
		}
		> span:nth-child(4) {
			left: -70px;
		}
	}
`;

export const ContainerCard__Informations = styled.div`
	font-family: "Righteous", cursive;

	display: flex;
	color: #fff;

	width: 401px;
	background: linear-gradient(
		180.26deg,
		rgba(255, 255, 255, 0.2) 2.82%,
		rgba(255, 255, 255, 0.2) 96.67%
	);
	backdrop-filter: blur(26px);
	padding-top: 62px;
	padding-bottom: 32px;
	position: relative;
	top: -72px;
	flex-direction: column;

	justify-content: space-between;
	padding-left: 32px;
	padding-right: 32px;
	div {
		display: flex;
		justify-content: space-between;
	}
	.ContainerCard__Informations--ciano {
		color: #0fdfe5;
	}

	div:nth-child(1) {
		margin-bottom: 15px;
		font-size: 20px;
	}

	div:nth-child(2) {
		margin-bottom: 36px;
		font-size: 20px;

		a {
			color: #fff;
			font-family: Roboto;
			font-size: 16px;
		}
	}

	div:nth-child(3) {
		a {
			font-family: Roboto;
			font-style: normal;
			font-weight: 600;
			font-size: 14.8816px;
			line-height: 17px;

			color: #ffffff;
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 121px;
			height: 41px;
			transition: all 0.3s;
			border: 1px solid transparent;
		}

		a:nth-child(1) {
			background: #a19daf;

			&:hover {
				background: transparent;
				border: 1px solid #fff;
			}
		}

		a:nth-child(2) {
			border: 1px solid #fff;

			&:hover {
				background: #a19daf;
			}
		}
	}

	@media (max-width: 1550px) {
		width: 300px !important;

		div:nth-child(1) {
			font-size: 16px;
		}

		div:nth-child(2) {
			font-size: 16px;

			a {
				font-size: 12px;
			}
		}

		div:nth-child(3) {
			a{
				width: 100px;
				font-size: 12px;
			}
		} 
	}
`;
