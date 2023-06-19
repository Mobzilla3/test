/* eslint-disable react/prop-types */
import "./Banner.css"
import logo from "/src/assets/logo.png"

export default function Banner(props) {
	const styles = {
        backgroundColor: props.trans? "transparent" : "#0faa29"
    }
    return (
		<div style={styles} className="banner">
			<img className="banner-img" src={logo} alt="MrModpack logo" />
		</div>
	)
}
