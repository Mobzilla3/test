/* eslint-disable react/prop-types */
import "./Step.css"

export default function Step(props) {
	return (
		<div className="step-container">
			<div className="step-text">
				<h1>{props.stepTitle}</h1>
				<p>{props.stepDesc}</p>
			</div>
			<img src={props.stepImg} className="step-image" />
		</div>
	)
}
