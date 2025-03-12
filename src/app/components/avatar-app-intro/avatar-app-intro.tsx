import React from "react";
import styles from "./styles.module.css";

const AvatarAppIntro = () => {
	const introText = [
		"Your friendly kitchen companion for delightful recipes.",
		"Simply write your ingredients, press 'Generate Recipe', and let the magic happen!",
	];

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.welcomeText}>Welcome to Nuska</h1>
				<div className={styles.textContainer}>
					<p className={styles.subHeading}>{introText[0]}</p>
					<p className={styles.instructions}>{introText[1]}</p>
				</div>
			</div>
		</div>
	);
};

export default AvatarAppIntro;