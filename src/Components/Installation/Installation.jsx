/* eslint-disable react/prop-types */
import Background from "../Background"
import Navbar from "../Navbar"
import Step from "./Step"
import "./Installation.css"
import BackgrounImage from "/src/assets/winter.png"
import unpack from "/src/assets/unpack.png"
import extensions from "/src/assets/extensions.png"
import developerMode from "/src/assets/developerMode.png"
import loadUnpacked from "/src/assets/loadUnpacked.png"
import hiddenFiles from "/src/assets/hiddenFiles.png"
import thumbsdb from "/src/assets/thumbsdb.png"

export default function Features(props) {

	return (
		<>
			<Navbar />
			<Background image={BackgrounImage} />
			<div className="installation-desktop">
				<h1 className="step-heading">{props.lang.step1.h1}</h1>
				<p className="step-desc">{props.lang.step1.desc}</p>
				<div className="features-steps-container">
					<Step stepTitle={props.lang.Step2.h1} stepDesc={props.lang.Step2.desc} stepImg={unpack} />
					<Step stepTitle={props.lang.Step3.h1} stepDesc={props.lang.Step3.desc} stepImg={extensions} />
					<Step stepTitle={props.lang.Step4.h1} stepDesc={props.lang.Step4.desc} stepImg={developerMode} />
					<Step stepTitle={props.lang.Step5.h1} stepDesc={props.lang.Step5.desc} stepImg={loadUnpacked} />
				</div>
				<h1 className="step-heading">{props.lang.finalStep.h1}</h1>
				<p className="step-desc">{props.lang.finalStep.desc}</p>
				<h1 className="step-heading" style={{ marginTop: "100px" }}>
					{props.lang.errors.heading}
				</h1>
				<div className="error-container">
					<h1>{props.lang.errors.thumbsdb.h1}</h1>
					<p>{props.lang.errors.thumbsdb.desc}</p>
					<div className="errors-images">
						<img src={hiddenFiles} alt="Hidden files check in explorer" />
						<img src={thumbsdb} alt="Highlighted thumbsdb file in mrmodpack folder" />
					</div>
				</div>
				<div style={{ marginBottom: "50px" }} className="error-container">
					<h1>{props.lang.errors.manifest.h1}</h1>
					<p>{props.lang.errors.manifest.desc}</p>
				</div>
			</div>
			<div className="installation-mobile">
				<h1>{props.lang.installError}</h1>
			</div>
		</>
	)
}
