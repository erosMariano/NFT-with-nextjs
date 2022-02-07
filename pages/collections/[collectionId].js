import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../lib/sanityClient";
import { ThirdwebSDK } from "@3rdweb/sdk";

import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import NFTCard from "../../components/NFTCard";
import Link from "next/link";
import Image from "next/image";

function Collection() {
	//Connect ======================================
	const { address, connectWallet } = useWeb3();

	const welcomeUser = (userName, toastHandler = toast) => {
		toastHandler.success(
			`Bem vindo de volta${userName !== "Unnamed" ? ` ${userName}` : ""}`
		),
			{
				style: {
					background: "#04111d",
					color: "#fff",
				},
			};
	};
	const marketPlaceModule = useEffect(() => {
		if (!address) return;

		(async () => {
			const userDoc = {
				_type: "users",
				_id: address,
				userName: "Unnamed",
				walletAddress: address,
			};

			const result = await client.createIfNotExists(userDoc);
			//welcomeUser(result.userName);
		})();
	}, [address]);

	//Connect ======================================
	const router = useRouter();

	const { provider } = useWeb3();
	const { collectionId } = router.query;
	const [collection, setCollection] = useState({});
	const [nfts, setNfts] = useState([]);
	const [listings, setListings] = useState([]);

	const nftModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(
			provider.getSigner(),
			"https://eth-rinkeby.alchemyapi.io/v2/MVETExL6KHr1BJ3ERWxVeuoOIergM1bd"
		);
		return sdk.getNFTModule(collectionId);
	}, [collectionId, provider]);

	// get all NFTs in the collection
	useEffect(() => {
		if (!nftModule) return;
		(async () => {
			const nfts = await nftModule.getAll();

			setNfts(nfts);
		})();
	}, [nftModule]);

	const marketPlaceModuleMemo = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(
			provider.getSigner(),
			"https://eth-rinkeby.alchemyapi.io/v2/MVETExL6KHr1BJ3ERWxVeuoOIergM1bd"
		);
		return sdk.getMarketplaceModule(
			"0x622d7659d155b1c6EDF84D436bCC07d2704d4D72"
		);
	}, [provider]);

	// get all listings in the collection
	useEffect(() => {
		if (!marketPlaceModuleMemo) return;
		(async () => {
			setListings(await marketPlaceModuleMemo.getAllListings());
		})();
	}, [marketPlaceModuleMemo]);

	const fetchCollectionData = async (sanityClient = client) => {
		const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
		"imageUrl": profileImage.asset->url,
		"bannerImageUrl": bannerImage.asset->url,
		volumeTraded,
		createdBy,
		contractAddress,
		"creator": createdBy->userName,igHandle,
		title, floorPrice,
		"allOwners": owners[]->,
		description
	  }`;

		const collectionData = await sanityClient.fetch(query);

		// the query returns 1 object inside of an array
		//console.log(collectionData[0]);

		setCollection(collectionData[0]);
	};

	useEffect(() => {
		fetchCollectionData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [collectionId]);

	return (
		<CollectionMain>
			{address ? (
				<>
					<Toaster position="top-center" reverseOrder="false" />

					<Link href="/" passHref>
						<HomeContainer__Header>
							<Image
								src="/images/icons/logo.svg"
								width={50}
								height={50}
								alt="Logo supersonic"
							/>
							<p>NFTSONIC</p>
						</HomeContainer__Header>
					</Link>

					<MaxContainer>
						<CollectionMain__NFTS>
							<ContainerBanner
								background={
									collection?.bannerImageUrl
										? collection.bannerImageUrl
										: "https://via.placeholder.com/200"
								}
							>
								<h2>Criar seu NFT Supersonico!</h2>
								<Link href="/">Criar</Link>
							</ContainerBanner>

							<CollectionMain__NFTS_FLEX>
								{nfts.map((nftItem, id) => {
									return (
										<NFTCard
											key={id}
											nftItem={nftItem}
											title={collection?.title}
											listings={listings}
										/>
									);
								})}
							</CollectionMain__NFTS_FLEX>
						</CollectionMain__NFTS>

						<CollectionMain__Creator>
							<CollectionMain_Creator__AuthorIMG>
								<Image
									width={200}
									height={200}
									src={
										collection?.imageUrl
											? collection.imageUrl
											: "https://via.placeholder.com/200"
									}
									alt="Perfil usuário NFT"
								/>
							</CollectionMain_Creator__AuthorIMG>
							<h2>{collection?.creator}</h2>

							<CollectionMain__Creator__Buttons>
								<div className="follow">Follow</div>

								<div className="like">
									<Image
										width={20}
										height={20}
										src="/images/icons/like.svg"
										alt="Perfil usuário NFT"
									/>
								</div>

								<div className="reticencias">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</CollectionMain__Creator__Buttons>
						</CollectionMain__Creator>
					</MaxContainer>
				</>
			) : (
				<ContainerButtonCollection>
					<CollectionMain__Button
						onClick={() => connectWallet("injected")}
					>
						Conectar Metamask
					</CollectionMain__Button>
				</ContainerButtonCollection>
			)}
		</CollectionMain>
	);
}

export default Collection;

export const CollectionMain = styled.main`
	height: auto;
	min-height: 100vh;
	background-color: #131129;
	position: relative;
	padding-top: 40px;
`;
export const ContainerButtonCollection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
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

export const MaxContainer = styled.div`
	position: relative;
	max-width: 1500px;
	margin: 0 auto;
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	justify-content: space-between;
`;

export const CollectionMain__NFTS = styled.div`
	width: 70%;
`;

export const ContainerBanner = styled.div`
	background: ${(props) => `url(${props.background}) no-repeat`};
	width: 100%;
	height: auto;

	background-size: cover;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 10px;

	padding-left: 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 30px;
	padding-bottom: 30px;
	h2 {
		font-family: "Righteous", cursive;
		color: #fff;
		font-size: 48px;
		width: 400px;
	}

	a {
		display: flex;
		margin-top: 30px;
		align-items: center;
		justify-content: center;
		width: 200px;
		font-weight: 700;
		color: #fff;
		height: 50px;
		border-radius: 4px;
		background: linear-gradient(
			87.66deg,
			#ff41d5 0.61%,
			#ad23e4 23.06%,
			#8031e8 54.46%,
			#6c54e6 76.49%,
			#3da7e1 98.66%
		);
		text-decoration: none;
	}
`;

export const CollectionMain__Creator = styled.div`
	position: fixed;
	right: 5%;
	background: rgba(255, 255, 255, 0.1);
	width: 20%;
	border-radius: 5px;
	flex-direction: column;
	display: flex;
	color: #fff;
	padding-top: 30px;
	padding-bottom: 30px;
	h2 {
		font-family: "Righteous", cursive;
		padding-top: 24px;
		text-align: center;

		display: flex;
		justify-content: center;
	}
`;

export const CollectionMain_Creator__AuthorIMG = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		border-radius: 100%;
	}
`;

export const CollectionMain__Creator__Buttons = styled.div`
	padding-top: 30px;
	.follow {
		background: #f0187a;
		padding: 10px 20px;
		border-radius: 20px;
	}

	.like, .reticencias{
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content:center;
		padding: 10px 10px;
		border-radius: 50%;

	}
	.reticencias{
		height:40px;
		width:40px;
	}
	.reticencias span{
		width: 5px;
		height: 5px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		margin: 1px
	}
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
`;

export const CollectionMain__NFTS_FLEX = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const HomeContainer__Header = styled.h1`
	font-family: "Righteous", cursive;
	display: flex;
	align-items: center;
	color: #fff;
	margin-bottom: 100px;

	cursor: pointer;
	max-width: 1500px;
	margin-left: auto;
	margin-right: auto;
	p {
		margin-left: 8px;
		font-size: 16px;
		letter-spacing: 5px;
	}

	@media (max-width: 1550px) {
		margin-bottom: 50px;
	}
`;
