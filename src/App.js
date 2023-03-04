import styles from "./App.module.css";
import ChallengeCard from "./components/ChallengeCard";

function App() {
	return (
		<div className={styles.challenge_cards_container}>
			<ChallengeCard
				title="QR Code Component"
				img={require("./challenges/qr_code_component/preview.jpg")}
			/>
			<ChallengeCard
				title="Results Summary Component"
				img={require("./challenges/results_summary_component/preview.jpg")}
			/>
		</div>
	);
}

export default App;
