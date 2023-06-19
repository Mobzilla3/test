/* eslint-disable react-hooks/rules-of-hooks */
import "./Hero.css"
import Button from "../Button.jsx"
import bgVid from "/src/assets/video.mp4"
import LanguagePick from "./LanguagePick.jsx"
import StringsData from "./HeroData.json"
import { useState, useEffect } from "react"

export default function hero() {
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

	if (language === null) {
		return (
			<>
				<LanguagePick />
				<video autoPlay muted loop className="hero-video">
					<source src={bgVid} type="video/mp4" />
				</video>
				<div className="hero">
					<div className="hero-content-container">
						<h1 id="hero-heading">{Strings.heading}</h1>
						<div className="hero-buttons">
							<Button forceVisible={true} route="/MRModPack/Features" text={Strings.buttons.Features} linkTo="#features" backgroundColor="#ffb800" shadowColor="#cc9300" />
							<Button forceVisible={true} route="/MRModPack/Installation" text={Strings.buttons.Installation} linkTo="#installation" backgroundColor="#ff2626" shadowColor="#cc1e1e" />
							<Button forceVisible={true} route="/MRModPack/Faq" text={Strings.buttons.Faq} linkTo="#faq" backgroundColor="#0079bd" shadowColor="#00588a" />
							<Button forceVisible={true} route="/MRModPack/About" text={Strings.buttons.About} backgroundColor="#17cc35" shadowColor="#0b6519" />
						</div>
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<video autoPlay muted loop className="hero-video">
				<source src={bgVid} type="video/mp4" />
			</video>
			<div className="hero">
				<div className="hero-content-container">
					<h1 id="hero-heading">{Strings.heading}</h1>
					<div className="hero-buttons">
							<Button forceVisible={true} route="Features" text={Strings.buttons.Features} linkTo="#features" backgroundColor="#ffb800" shadowColor="#cc9300" />
							<Button forceVisible={true} route="Installation" text={Strings.buttons.Installation} linkTo="#installation" backgroundColor="#ff2626" shadowColor="#cc1e1e" />
							<Button forceVisible={true} route="Faq" text={Strings.buttons.Faq} linkTo="#faq" backgroundColor="#0079bd" shadowColor="#00588a" />
							<Button forceVisible={true} route="About" text={Strings.buttons.About} backgroundColor="#17cc35" shadowColor="#0b6519" />
					</div>
				</div>
			</div>
		</>
	)
}
