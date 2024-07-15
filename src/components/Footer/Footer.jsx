import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer-section">
			created by{" "}
			<a
				href="https://github.com/Aesaltos2/Mini-Proyecto-L3.git"
				target="_blank"
				className="username"
				rel="noopener noreferrer"
			>
				@Aesaltos2{" "}
			</a>
			- devChallenges.io
		</div>
	);
}
