import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function NFTCard({ nftItem, listings }) {
	const [isListed, setIsListed] = useState(false);
	const [price, setPrice] = useState(0);

  const Router = useRouter();

	useEffect(() => {
		const listing = listings.find(
			(listing) => listing.asset.id === nftItem.id
		);

		if (Boolean(listing)) {
			setIsListed(true);
			setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
		}
	}, [nftItem, listings]);

	return (
		<Container>
			<Containe__IMG>
				<Image src={nftItem.image} alt="NFT" width={100} height={100} />
				<div>
					<h2>Preço</h2>
					<h3>{price} ETH </h3>
				</div>

				<TitleImage>{nftItem.name}</TitleImage>
				<button
					onClick={() => {
						Router.push({
							pathname: `/assets/${nftItem.id}`,
							query: { isListed: isListed },
						});
					}}
				>
					Comprar NFT
				</button>
			</Containe__IMG>
		</Container>
	);
}

export default NFTCard;

export const Container = styled.div`
	width: 200px;
	height: auto;
	background: linear-gradient(180deg, #220631 0%, #400b5a 100%);
	margin-bottom: 20px;
	margin-top: 20px;
	border-radius: 5px;
	padding-bottom: 20px;

	margin-left: 5px;
	margin-right: 5px;
	position: relative;

	height: 300px;
`;

export const Containe__IMG = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 20px;
	flex-direction: column;
	align-items: center;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		margin-top: 10px;
		h2 {
			color: rgba(255, 255, 255, 0.34);
			font-size: 12px;
		}
		h3 {
			font-family: "Righteous", cursive;
			color: #fff;
			font-size: 16px;
			display: flex;

			position: relative;
			left: -30px;
			&::after {
				content: url("/images/etherium.svg");
				width: 24px;
				height: 24px;
				position: absolute;
				left: 65px;
				top: -8px;
			}
		}
		backdrop-filter: blur(26px);
		width: 95%;
	}

	img {
		background: rgba(0, 0, 0, 0.3);
	}

	.eth-logo {
		background: none;
	}

	button {
		position: absolute;
		bottom: 20px;
    cursor: pointer;
    border: none;

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
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		font-weight: 700;

		margin-top: 20px;

		transition: 0.3s;
		&:hover {
			filter: drop-shadow(0px 1px 10px rgba(91, 115, 228, 0.77))
				drop-shadow(0px 2px 12px rgba(206, 47, 222, 0.69));
		}
	}
`;

export const TitleImage = styled.h2`
	font-size: 16px;
	width: 100%;
	margin: 0 auto;
	margin-top: 10px;
	color: #fff;
	padding-left: 10px;
	padding-right: 10px;
`;
