import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Creator({ nameCreator, image, display, position, width, displayResponsive}) {
	//IMAGEM
	const [tamanhoImg, setTamanhoImg] = useState(200);

	useEffect(() => {
		if (window.innerWidth <= 1500) {
			setTamanhoImg(100);
		}
	}, []);

	return (
		<CollectionMain__Creator
			display={display}
			position={position}
			width={width}
            displayResponsive ={displayResponsive}
		>
			<CollectionMain_Creator__AuthorIMG>
				<Image
					width={tamanhoImg}
					height={tamanhoImg}
					src={image ? image : "https://via.placeholder.com/200"}
					alt="Perfil usuário NFT"
				/>
			</CollectionMain_Creator__AuthorIMG>
			<h2>{nameCreator}</h2>

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
	);
}

export default Creator;

export const CollectionMain__Creator = styled.div`
	position: fixed;
	right: 5%;
	background: rgba(255, 255, 255, 0.1);
	width: 20%;
	border-radius: 5px;
	flex-direction: column;
	display: ${(props) => props.display};
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

	@media (max-width: 1055px) {
		display: ${(props) => props.displayResponsive};
		position: ${(props) => props.position};
		width: ${(props) => props.width};
	}
`;

export const CollectionMain_Creator__AuthorIMG = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		border-radius: 100%;
		object-fit: cover;
	}
`;

export const CollectionMain__Creator__Buttons = styled.div`
	padding-top: 30px;
	.follow {
		background: #f0187a;
		padding: 10px 20px;
		border-radius: 20px;
	}

	.like,
	.reticencias {
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 10px;
		border-radius: 50%;
	}
	.reticencias {
		height: 40px;
		width: 40px;
	}
	.reticencias span {
		width: 5px;
		height: 5px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		margin: 1px;
	}
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
`;
