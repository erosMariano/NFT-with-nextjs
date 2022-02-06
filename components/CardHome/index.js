import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	ContainerCard,
	ContainerCard__Button,
	ContainerCard__CardNFT,
	ContainerCard__Monkeys,
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
			</ContainerCard__CardNFT>
		</ContainerCard>
	);
}

export default CardHome;
