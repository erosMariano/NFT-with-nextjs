import { useWeb3 } from "@3rdweb/hooks";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { ThirdwebSDK } from "@3rdweb/sdk";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function GeneralDetails({ selectedNft }) {
	const [newHora, setNewHora] = useState(24);
	const [newMinute, setNewMinute] = useState(10);
	const [newSecond, setNewSecond] = useState(4);

	const [listings, setListings] = useState([]);
	const { provider } = useWeb3();
	const [price, setPrice] = useState(0);

	const marketPlaceModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(
			provider.getSigner(),
			"https://eth-rinkeby.alchemyapi.io/v2/MVETExL6KHr1BJ3ERWxVeuoOIergM1bd"
		);
		return sdk.getMarketplaceModule(
			"0x622d7659d155b1c6EDF84D436bCC07d2704d4D72"
		);
	}, [provider]);

	useEffect(() => {
		if (!marketPlaceModule) return;

		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);

	useEffect(() => {
		const listing = listings.find(
			(listing) => listing.asset.id === selectedNft?.id
		);

		if (Boolean(listing)) {
			setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
		}
	}, [listings, selectedNft?.id]);

	return (
		<Container>
			<h3>NFTS supersonicos</h3>
			<h2>{selectedNft?.name || <Skeleton baseColor="#6C6C6C" />}</h2>

			<Price>
				<div>
					<p>Oferta atual</p>
					<h2>
						{`${price} ETH` || <Skeleton baseColor="#6C6C6C" />}
					</h2>
					<p>R$1.675,168</p>
				</div>

				<Time>
					<p>Fim da oferta</p>

					<ContainerTime>
						<div>
							<p>{newHora}</p>
							<span>Horas</span>
						</div>
						<div>
							<p>{newMinute}</p>
							<span>Minutos</span>
						</div>

						<div>
							<p>{newSecond}</p>
							<span>segundos</span>
						</div>
					</ContainerTime>
				</Time>
			</Price>
			<Button>Comprar NFT supersonico!</Button>
		</Container>
	);
}

export default GeneralDetails;

export const Container = styled.aside`
	margin-left: 100px;
	h3 {
		color: rgba(255, 255, 255, 0.2);
	}

	h2 {
		font-size: 48px;
		color: #fff;
		margin-top: 20px;
	}
`;

export const Price = styled.div`
	margin-top: 200px;

	display: flex;
	p {
		color: rgba(255, 255, 255, 0.3);
	}

	h2 {
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

export const Time = styled.div`
	display: flex;
	justify-content: space-between;
	div p {
		font-size: 48px;
		color: #fff;
	}

	position: relative;
	> p {
		position: absolute;
	}

	margin-left: 120px;

	&::before {
		content: "";
		position: absolute;
		width: 100px;
		height: 2px;
		background-color: rgba(255, 255, 255, 0.4);
		transform: rotate(90deg);
		bottom: 60px;
		left: -110px;
		border-radius: 10px;
	}
`;

export const ContainerTime = styled.div`
	display: flex;
	justify-content: space-between;
	top: 30px;
	position: relative;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 30px;
	}
	span {
		color: rgba(255, 255, 255, 0.3);
	}
`;

export const Button = styled.button`
	bottom: 20px;
	cursor: pointer;
	border: none;

	width: 200px;
	height: 60px;
	background: linear-gradient(
		87.66deg,
		#ff41d5 0.61%,
		#ad23e4 23.06%,
		#8031e8 54.46%,
		#6c54e6 76.49%,
		#3da7e1 98.66%
	);
	border-radius: 4px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-weight: 700;

	margin-top: 50px;

	transition: 0.3s;
	&:hover {
		filter: drop-shadow(0px 1px 10px rgba(91, 115, 228, 0.77))
			drop-shadow(0px 2px 12px rgba(206, 47, 222, 0.69));
	}
`;
