/* eslint-disable react/prop-types */
import "./Feature.css"

export default function Feature(props) {
	return (
		<>
			<div className="feature-container">
				<img className="feature-img" src={props.img} alt={props.title} />
				<div className="feature-text">
					<h1 className="feature-title">{props.title}</h1>
					<p className="feature-desc">{props.desc}</p>
				</div>
			</div>
		</>
	)
}
