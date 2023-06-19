/* eslint-disable react/prop-types */
import "./Background.css"

export default function Background(props) {
	const styles = {
		zIndex: props.zIndex,
	}
	return <img style={styles} className="background-image" src={props.image} />
}
