/* eslint-disable react/prop-types */
import Navbar from "../Navbar.jsx"
import Feature from "./Feature.jsx"
import Background from "../Background.jsx"
import "./Features.css"
import BackgrounImage from "/src/assets/desert.png"

// Rollup doesnt like loops
import SessionSave from "/src/assets/Features/sessionSave.png"
import AccHp from "/src/assets/Features/AccurateHp.png"
import ChatKey from "/src/assets/Features/ChatHotkeys.png"
import ColorHp from "/src/assets/Features/ColoredHealth.png"
import Debug from "/src/assets/Features/Debug.png"
import ShowLava from "/src/assets/Features/ShowLava.png"
import ShowWins from "/src/assets/Features/ShowWins.png"
import TrackObj from "/src/assets/Features/TrackObjects.png"
import TrackPl from "/src/assets/Features/TrackPlayers.png"
import TransTree from "/src/assets/Features/TransparentTrees.png"
import Zoom from "/src/assets/Features/Zoom.png"
import DrawHats from "/src/assets/Features/DrawHats.png"
import CustomStyles from "/src/assets/Features/styles.png"
import CustomNames from "/src/assets/Features/namesCopy.png"

// still managed to make a loop B)

export default function Features(props) {
    const images = [SessionSave, ShowWins, AccHp, TrackObj, TrackPl, ChatKey, Zoom, TransTree, Debug, ColorHp, DrawHats, ShowLava, CustomStyles, CustomNames]
    const features =  props.lang.map(({ title, desc }, i) => <Feature title={title} desc={desc} img={images[i]} key={i} />)
    return (
		<>
        <Background image={BackgrounImage} />
			<div className="feature-wrapper">
				<Navbar />
				<div className="feature-points-container">
                    {features}
                </div>
			</div>
		</>
	)
}
