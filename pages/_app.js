import { GlobalStyle } from "../styles/globals";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import NextNprogress from "nextjs-progressbar";

const supportedChainIds = [4];
const connectors = {
	injected: {},
};

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebWeb3Provider
			supportedChainIds={supportedChainIds}
			connectors={connectors}
		>
			<GlobalStyle />
			<NextNprogress color="#534AB5" />
			<Component {...pageProps} />
		</ThirdwebWeb3Provider>
	);
}

export default MyApp; 
