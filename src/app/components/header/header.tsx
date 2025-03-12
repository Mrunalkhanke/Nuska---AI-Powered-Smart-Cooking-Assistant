import React from "react";
import Image from "next/image";
import logo from "/public/images/images-removebg-preview.png";

import styles from "./styles.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<a className={styles.logo} href="/">
				<Image
					src={logo}
					width={80}
					height={80}
					alt="Logo"
					className="non-draggable-img"
					style={{ objectFit: "contain" }}
				/>
				<span className={styles.logo__text}>Nuska </span>
			</a>
			
		</header>
	);
};

export default Header;
