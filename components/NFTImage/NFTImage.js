/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import GeneralDetails from "./GeneralDetails";

function NFTImage({ selectedNft, isListed, listings, marketPlaceModule }) {
	return (
		<Container>
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

			<ContainerNFT>
				<ContainerImg>
					<img src={selectedNft?.image} alt={selectedNft?.name} />
				</ContainerImg>

				<GeneralDetails
					selectedNft={selectedNft}
					isListed={isListed}
					listings={listings}
					marketPlaceModule={marketPlaceModule}
				/>
			</ContainerNFT>
		</Container>
	);
}

export default NFTImage;
export const Container = styled.div`
	padding-top: 10px;
	max-width: 1500px;
	margin-left: auto;
	margin-right: auto;
`;

export const HomeContainer__Header = styled.h1`
	font-family: "Righteous", cursive;
	display: flex;
	align-items: center;
	color: #fff;
	margin-bottom: 100px;

	cursor: pointer;
	max-width: fit-content;

	p {
		margin-left: 8px;
		font-size: 16px;
		letter-spacing: 5px;
	}

	@media (max-width: 1550px) {
		margin-top: 50px;
		margin-bottom: 50px;
		padding-left: 30px;
		padding-right: 30px;
	}
`;

export const ContainerImg = styled.div`
	background: linear-gradient(
		179.87deg,
		#c39fac 0.11%,
		#bb9bad 40.92%,
		#999afa 68.61%,
		#6a67e8 106.7%
	);
	outline: none;
	border: none;
	width: 600px;
	height: 600px;

	border-top-left-radius: 260px;
	border-top-right-radius: 260px;
	z-index: 12;
	img {
		width: 100%;
		height: inherit;
		object-fit: contain;
	}

	position: relative;

	@media(max-width: 625px){
		width: 300px;
		height: 300px;
	}
`;

export const ContainerNFT = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;

	@media (max-width: 1550px) {
		padding-left: 30px;
		padding-right: 30px;
	}

	@media (max-width: 1229px) {
		flex-direction: column;
	}
`;
