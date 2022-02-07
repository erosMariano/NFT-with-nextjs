import styled from "styled-components";

export const MainHome = styled.main`
	background-image: url("/images/background.png");
	min-height: 100vh;
	width: 100%;
	background-size: cover;
	background-position: center;
	padding-left: 150px;

	display: flex;
`;

export const HomeContainer = styled.section`
	padding-top: 50px;
	padding-bottom: 50px;
`;

export const HomeContainer__Header = styled.h1`
	font-family: "Righteous", cursive;
	display: flex;
	align-items: center;
	color: #fff;
	margin-bottom: 100px;
	p {
		margin-left: 8px;
		font-size: 16px;
		letter-spacing: 5px;
	}

	@media (max-width: 1550px) {
		margin-bottom: 50px;
	}
`;

export const HomeContainer__TitleContainer = styled.div`
	font-family: "Righteous", cursive;

	width: 60%;
	h3 {
		font-size: 16px;
		line-height: 28px;
		letter-spacing: 2px;
		color: #0fdfe5;
		margin-bottom: 16px;
	}

	h2 {
		font-size: 64px;
		line-height: 67px;
		/* or 105% */

		letter-spacing: 2px;

		color: #ffffff;

		span {
			color: #0fdfe5;
		}
	}

	p {
		font-size: 16px;
		line-height: 31px;
		/* or 194% */

		letter-spacing: 0.05em;

		color: rgba(255, 255, 255, 0.77);
		margin-top: 68px;
		font-family: Roboto;
		width: 650px;
	}

	@media (max-width: 1550px) {
		h2{
			font-size: 50px
		}

		p{
			margin-top: 30px;
		}
	}
`;

export const HomeContainer__Button = styled.button`
	width: 182px;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	font-family: Roboto;
	font-weight: bold;
	font-size: 12.8976px;
	line-height: 15px;

	color: #ffffff;
	border: none;
	margin-top: 40px;

	background: linear-gradient(
		87.66deg,
		#ff41d5 0.61%,
		#ad23e4 23.06%,
		#8031e8 54.46%,
		#6c54e6 76.49%,
		#3da7e1 98.66%
	);
	border-radius: 2px;
	cursor: pointer;

	position: relative;

	&::before {
		content: "";
		width: 20px;
		height: 20px;
		position: absolute;

		bottom: 16px;
		left: -12px;
		background: #00040d;
		transform: rotate(45deg);
	}

	&::after {
		content: "";
		width: 20px;
		height: 20px;
		position: absolute;

		bottom: 16px;
		left: -30px;
		border-radius: 2px;
		background: linear-gradient(
			87.66deg,
			#ff41d5 0.61%,
			#ad23e4 23.06%,
			#8031e8 54.46%,
			#6c54e6 76.49%,
			#3da7e1 98.66%
		);
		animation: animationSquare 2s ease-in-out infinite;
		transform: rotate(45deg);
	}

	@keyframes animationSquare {
		0% {
			/*transform: translateX(-15px);*/
			left: -40px;
		}
		50% {
			/* transform: translateX(0); */
			left: -20px;
		}
		100% {
			/* transform: translateX(-15px); */
			left: -40px;
		}
	}
`;

export const HomeContainer__Quantity = styled.div`\

  cursor: pointer;
	margin-top: 50px;
	background: rgba(255, 255, 255, 0.26);
	backdrop-filter: blur(9px);
	/* Note: backdrop-filter has minimal browser support */

	border-radius: 5px;
	color: #fff;

	font-family: "Righteous", cursive;

	display: flex;
	justify-content: space-between;
	max-width: 541px;

	padding: 40px 50px;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.borderLareterais {
		&::before {
			content: "";
			position: absolute;

			width: 99px;
			height: 3px;
			left: 65px;
			border-radius: 20px;
			bottom: 50px;

			background: rgba(255, 255, 255, 0.47);
			transform: rotate(90deg);
		}

		&::after {
			content: "";
			position: absolute;

			width: 99px;
			height: 3px;
			left: -95px;
			border-radius: 20px;
			bottom: 50px;

			background: rgba(255, 255, 255, 0.47);
			transform: rotate(90deg);
		}
	}

	h4 {
		font-size: 48px;
		line-height: 67px;
	}

	p {
		font-size: 12px;
		line-height: 26px;
		/* identical to box height, or 220% */

		letter-spacing: 0.05em;

		color: rgba(255, 255, 255, 0.54);
	}
`;
