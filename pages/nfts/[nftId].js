import React from "react";
import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import NFTImage from "../../components/NFTImage/NFTImage";
import styled from "styled-components";
import Head from "next/head";
import {client} from "../../lib/sanityClient"
function NFT() {

	
	const { address, connectWallet } = useWeb3();

	useEffect(() => {
		if(!address) return;
		(async() =>{
			const userDoc ={
				_type: "users",
				_id: address,
				userName: "Unnamed",
				walletAddress: address
			}

			const result = await client.createIfNotExists(userDoc)
		})
	},)

	
	const { provider } = useWeb3();
	const [selectedNft, setSelectedNft] = useState();
	const [listings, setListings] = useState([]);
	const router = useRouter();
 
	const nftModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(
			provider.getSigner(),
			"https://eth-rinkeby.alchemyapi.io/v2/MVETExL6KHr1BJ3ERWxVeuoOIergM1bd"
		);

		return sdk.getNFTModule("0xE76b59Eb0C66b701043b89144a3dA8c0c50125aA");
	}, [provider]);

	useEffect(() => {
		if (!nftModule) return;

		(async () => {
			const nfts = await nftModule.getAll();

			const selectedNftArray = nfts.find(
				(nft) => nft.id === router.query.nftId
			);

			setSelectedNft(selectedNftArray);
		})();
	}, [nftModule, router.query.nftId]);

	const marketPlaceModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(
			provider.getSigner(),
			"https://eth-rinkeby.alchemyapi.io/v2/MVETExL6KHr1BJ3ERWxVeuoOIergM1bd"
		);
		return sdk.getMarketplaceModule(
			"0x1302ef4095DEBf6F255844917EDb706F7E44E986"
		);
	}, [provider]);

	useEffect(() => {
		if (!marketPlaceModule) return;

		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);
	return (
		<>
			<Head>
				<title>NFT supersonico</title>
			</Head>
			{address ? (
				<>
					<Container>
						<NFTImage
							selectedNft={selectedNft}
							isListed={router.query.isListed}
							listings={listings}
							marketPlaceModule={marketPlaceModule}
						></NFTImage>
					</Container>
				</>
			) : (
				<ContainerButtonCollection>
					<Head>
						<title>NFT supersonico</title>
					</Head>
					<CollectionMain__Button
						onClick={() => connectWallet("injected")}
					>
						Conectar Metamask
					</CollectionMain__Button>
				</ContainerButtonCollection>
			)}
		</>
	);
}

export default NFT;

export const Container = styled.main`
	height: auto;
	min-height: 100vh;
	background: url("/images/background-nft.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding-bottom: 50px;
`;

export const ContainerButtonCollection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: #131129;
`;

export const CollectionMain__Button = styled.button`
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
		background: #131129;
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
