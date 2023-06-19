import Button from "./Button.jsx"
import Banner from "./Banner.jsx"
import "./Navbar.css"
import menuIcon from "/src/assets/list.svg"
import { useState, useEffect } from "react"
import StringsData from "./Hero/HeroData.json"

// for your own good dont read this code
export default function Navbar() {
	const [Strings, setStrings] = useState(StringsData.en)
	const language = localStorage.getItem("language")

	useEffect(() => {
		if (language === "en") {
			setStrings(StringsData.en)
		} else if (language === "pl") {
			setStrings(StringsData.pl)
		} else if (language === "ru") {
			setStrings(StringsData.ru)
		}
	}, [language])
	window.addEventListener("resize", () => setIsOpen(false))

	const [isOpen, setIsOpen] = useState(false)
	let styles = {
		translate: isOpen ? "-100%" : "0",
	}

	function openNavbar() {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Banner />
			<div className="navbar-bar">
				<Button  forceVisible={true} route="/Features" text={Strings.buttons.Features} backgroundColor="#ffb800" shadowColor="#cc9300" />
				<Button  forceVisible={true} route="/Installation" text={Strings.buttons.Installation} backgroundColor="#ff2626" shadowColor="#cc1e1e" />
				<Button  forceVisible={true} route="/Faq" text={Strings.buttons.Faq} backgroundColor="#0079bd" shadowColor="#00588a" />
				<Button  forceVisible={true} route="/About" text={Strings.buttons.About} backgroundColor="#17cc35" shadowColor="#0b6519" />
			</div>
			<div style={styles} className="navbar-mobile">
				<h1>Navigation</h1>
				<Button handleClick={() => openNavbar()} forceVisible={true} route="/Features" text={Strings.buttons.Features} backgroundColor="#ffb800" shadowColor="#cc9300" />
				<Button handleClick={() => openNavbar()} forceVisible={true} route="/Installation" text={Strings.buttons.Installation} backgroundColor="#ff2626" shadowColor="#cc1e1e" />
				<Button handleClick={() => openNavbar()} forceVisible={true} route="/Faq" text={Strings.buttons.Faq} backgroundColor="#0079bd" shadowColor="#00588a" />
				<Button handleClick={() => openNavbar()} forceVisible={true} route="/About" text={Strings.buttons.About} backgroundColor="#17cc35" shadowColor="#0b6519" />
			</div>
			<img onClick={() => openNavbar()} className="navbar-open-img" src={menuIcon} alt="Navigation" />
		</>
	)
}
