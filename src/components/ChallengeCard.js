import styles from "./ChallengeCard.module.css";

function ChallengeCard({ title, img }) {
	return (
		<div className={styles.card}>
			<div>
				<img src={img} alt="Preview" />
			</div>
			<div>
				<h1>{title}</h1>
				<button className={styles.button}>Navigate</button>
			</div>
		</div>
	);
}

export default ChallengeCard;
