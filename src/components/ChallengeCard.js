import { Link } from "react-router-dom";
import styles from "./ChallengeCard.module.css";

function ChallengeCard({ title, img, to }) {
	return (
		<div className={styles.card}>
			<div>
				<img src={img} alt="Preview" />
			</div>
			<div>
				<h1>{title}</h1>
				<Link to={to} className={styles.button}>
					Navigate
				</Link>
			</div>
		</div>
	);
}

export default ChallengeCard;
