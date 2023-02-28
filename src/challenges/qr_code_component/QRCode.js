import styles from "./style.module.css";
import QRImage from "./assets/image-qr-code.png";

function QRComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<img src={QRImage} alt="qr code"></img>
				<h2>Improve your front-end skills by building projects</h2>
				<p>
					Scan the QR code to visit Frontend Mentor anf take your
					coding skills to the next level
				</p>
			</div>
		</div>
	);
}

export default QRComponent;
