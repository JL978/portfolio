import "../styles/styles.global.scss";
import NavBar from "./components/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<NavBar>
			<Component {...pageProps} />
		</NavBar>
	);
}

export default MyApp;
