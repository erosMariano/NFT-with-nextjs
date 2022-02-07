import React from "react";
import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import NFTImage from "../../components/NFTImage/NFTImage";
import styled from "styled-components";
import Head from "next/head";
import MakeOffer from "../../components/NFTImage/Purchase";

function NFT() {
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

		return sdk.getNFTModule("0x41f1bFaDDd69b6655ad4909C37E68A1b488f4400");
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
			"0x622d7659d155b1c6EDF84D436bCC07d2704d4D72"
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
			<Container>
				<NFTImage selectedNft={selectedNft}></NFTImage>
			</Container>

			<MakeOffer
				isListed={router.query.isListed}
				selectedNft={selectedNft}
				listings={listings}
				marketPlaceModule={marketPlaceModule}
			/>
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
`;
