/* eslint-disable react/prop-types */
import Navbar from "../Navbar.jsx"
import Background from "../Background.jsx"
import "./About.css"
import Tab from "./AboutTab.jsx"
import BackgroundImage from "/src/assets/jungle.png"
import Cursors from "/src/assets/hotkeysCursors.png"
import settings from "/src/assets/settings.png"
import skinsMenu from "/src/assets/skinsMenu.png"
import hotkeys from "/src/assets/hotkeys.png"
import logo from "/src/assets/logo.png"

export default function About(props) {
const tabs = props.lang.tabsDesc

	return (
		<>
			<Background image={BackgroundImage} />
			<Navbar />
			<div className="about-wrapper">
				<h1 className="about-heading">{props.lang.heading}</h1>
				<p className="about-paragraph">{props.lang.desc}</p>

				<p className="about-paragraph">
                    {}
                </p>
				<div className="about-menu-images">
					<img className="about-menu-img" src={Cursors} alt="The MRModPack cursors and hotkeys menu" />
					<img className="about-menu-img" src={settings} alt="The MRModPack settings menu" />
					<img className="about-menu-img" src={skinsMenu} alt="The MRModPack skins menu" />
					<img className="about-menu-img" src={hotkeys} alt="The MRModPack chat hotkeys menu" />
				</div>
				<div className="about-logo-wrapper">
					<img className="about-logo" src={logo} alt="MRModPack logo" />
					<h1>{props.lang.devs.CreatedBy}</h1>
				</div>
				<div className="about-devs">
					<div className="about-dev">
						<p>{props.lang.devs.MainDev}</p>
						<h2 style={{ color: "#9933CC" }}>Mobzilla_3</h2>
					</div>
					<div className="about-dev">
						<p>{props.lang.devs.OriginalDev}</p>
						<h2 className="about-dev-gradient" style={{ background: "linear-gradient(255deg, #FFD600 32%, #005BBD 71%)" }}>
							Maxim_Moper
						</h2>
					</div>
				</div>
                <h1>{props.lang.devs.thanks}</h1>
				<div className="about-thanks">
					<span style={{ color: "#f82055" }}>RussianMope, </span>
					<span style={{ color: "#00FFFF" }}>Agusha, </span>
					<span style={{ color: "#b5a11b" }}>Yesd, </span>
					<span style={{ color: "#5865F2" }}>PashaGames</span>
				</div>
				<div style={{ marginTop: "50px" }} className="about-dev">
					<p>{props.lang.devs.websiteDev}</p>
					<h2 style={{ color: "#ff3dab" }}>wojtas</h2>
				</div>
			</div>
		</>
	)
}
