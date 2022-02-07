import { GlobalStyle } from "../styles/globals";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

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
			<Component {...pageProps} />
		</ThirdwebWeb3Provider>
	);
}

export default MyApp;
