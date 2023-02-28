import styles from "./style.module.css";
import { ReactComponent as MemoryIcon } from "./assets/images/icon-memory.svg";
import { ReactComponent as ReactionIcon } from "./assets/images/icon-reaction.svg";
import { ReactComponent as VerbalIcon } from "./assets/images/icon-verbal.svg";
import { ReactComponent as VisualIcon } from "./assets/images/icon-visual.svg";

function ResultsSummary() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.left_container}>
					<h2 className={styles.heading_first}>Your Result</h2>
					<div className={styles.cirlce_container}>
						<div>
							<div className={styles.score_text}>76</div>
							<div className={styles.total_text}>of 100</div>
						</div>
					</div>
					<div>
						<h2 className={styles.heading_second}>Great</h2>
						<p>
							You scored higher than 65% of the people who have
							taken these tests.
						</p>
					</div>
				</div>
				<div className={styles.right_container}>
					<h2>Summary</h2>
					<div className={styles.icons_container}>
						<div className={styles.reaction_container}>
							<div>
								<ReactionIcon className={styles.icon} />
								<span>Reaction</span>
							</div>
							<div>
								<span>80</span> / 100
							</div>
						</div>
						<div className={styles.memory_container}>
							<div>
								<MemoryIcon className={styles.icon} />
								<span>Memory</span>
							</div>
							<div>
								<span>92</span> / 100
							</div>
						</div>
						<div className={styles.verbal_container}>
							<div>
								<VerbalIcon className={styles.icon} />
								<span>Verbal</span>
							</div>
							<div>
								<span>60</span> / 100
							</div>
						</div>
						<div className={styles.visual_container}>
							<div>
								<VisualIcon className={styles.icon} />
								<span>Visual</span>
							</div>
							<div>
								<span>72</span> / 100
							</div>
						</div>
					</div>
					<button>Continue</button>
				</div>
			</div>
		</div>
	);
}

export default ResultsSummary;
