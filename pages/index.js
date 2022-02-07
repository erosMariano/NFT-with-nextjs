import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tilt from "react-tilt";
import styled from "styled-components";
import CardHome from "../components/CardHome";
import {
	MainHome,
	HomeContainer,
	HomeContainer__Header,
	HomeContainer__TitleContainer,
	HomeContainer__Button,
	HomeContainer__Quantity,
} from "../styles/style";

export default function Home() {

	const [tiltWidth, setTiltWidth] = useState(541);

	useEffect(() => {
		if (window.innerWidth <= 541) {
			setTiltWidth(300);
		} else {
			setTiltWidth(541);
		}
	}, []);
	return (
		<MainHome>
			<Head>
				<title>Supersonic NFT</title>
			</Head>

			<HomeContainer>
				<HomeContainer__Header>
					<Image
						src="/images/icons/logo.svg"
						width={50}
						height={50}
						alt="Logo supersonic"
					/>
					<p>NFTSONIC</p>
				</HomeContainer__Header>

				<HomeContainer__TitleContainer>
					<h3>OS MELHORES NFTS CONSTRUÍDOS PARA VOCÊ </h3>
					<h2>
						Descubra e Colecione extraordinários NFTs{" "}
						<span>supersonicos</span>
					</h2>

					<p>
						O maior mercado NFT. Criação digital autêntica e
						verdadeiramente única. Assinado e emitido pelo criador,
						possibilitado pela tecnologia blockchain
					</p>
				</HomeContainer__TitleContainer>

				<Link
					href="/collections/0x41f1bFaDDd69b6655ad4909C37E68A1b488f4400"
					passHref
					style={{ cursor: "pointer" }}
				>
					<HomeContainer__Button>VER COLEÇÃO</HomeContainer__Button>
				</Link>

				<Tilt
					className="Tilt"
					options={{ max: 25 }}
					style={{ height: 173, width: tiltWidth }}
					easing="cubic-bezier(.03,.98,.52,.99)"
				>
					<HomeContainer__Quantity>
						<div>
							<h4>78</h4> <p>usuários ativos</p>
						</div>

						<div className="borderLareterais">
							<h4>17k</h4> <p>Artes</p>
						</div>

						<div>
							<h4>2.5k</h4> <p>Artistas</p>
						</div>
					</HomeContainer__Quantity>
				</Tilt>
			</HomeContainer>
			<CardHome />
		</MainHome>
	);
}
