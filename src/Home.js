import ChallengeCard from "./components/ChallengeCard";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.challenge_cards_container}>
			<ChallengeCard
				title="QR Code Component"
				img={require("./challenges/qr_code_component/preview.jpg")}
				to="/frontend-mentor-challenges/challenges/qr_code_component"
			/>
			<ChallengeCard
				title="Results Summary Component"
				img={require("./challenges/results_summary_component/preview.jpg")}
				to="/frontend-mentor-challenges/challenges/results_summary_component"
			/>
		</div>
	);
}

export default Home;
