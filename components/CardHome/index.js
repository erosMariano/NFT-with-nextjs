import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	ContainerCard,
	ContainerCard__Button,
	ContainerCard__CardNFT,
	ContainerCard__Monkeys,
	ContainerCard__Informations,
} from "./styles";
function CardHome() {
	return (
		<ContainerCard>
			<ContainerCard__Button>
				<Link href="/teste">
					<a>Ver coleção</a>
				</Link>
			</ContainerCard__Button>

			<ContainerCard__CardNFT>
				<Image
					src="/images/imageCard.png"
					width={401}
					height={478.74}
					alt="NFT Diamond"
				/>

				<ContainerCard__Monkeys>
					<Image
						src="/images/monkeyCard1.png"
						width={70}
						height={70}
						alt="Monkey NFT"
					/>
					<Image
						src="/images/monkeyCard2.png"
						width={70}
						height={70}
						alt="Monkey NFT"
					/>
					<Image
						src="/images/monkeyCard3.png"
						width={70}
						height={70}
						alt="Monkey NFT"
					/>
					<Image
						src="/images/monkeyCard4.png"
						width={70}
						height={70}
						alt="Monkey NFT"
					/>
				</ContainerCard__Monkeys>

				<ContainerCard__Informations>
					<div>
						<p>100 ETHICON #01</p>
						<p className="ContainerCard__Informations--ciano">
						1.00 ETH
						</p>
					</div>

					<div>
						<Link href="/">
							<a>Eros Mariano</a>
						</Link>
						<p>
							$3,618.36
						</p>
					</div>


					<div>
						<Link href="/">
							<a>Compre Agora</a>
						</Link>
						<Link href="/">
							<a>Ver mais NFTS</a>
						</Link>
					</div>
				</ContainerCard__Informations>
			</ContainerCard__CardNFT>
		</ContainerCard>
	);
}

export default CardHome;
