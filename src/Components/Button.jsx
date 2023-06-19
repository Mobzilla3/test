/* eslint-disable react/prop-types */
import "./Button.css"
import { Link } from "react-router-dom";

export default function Button(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        boxShadow: `0 5px 0 ${props.shadowColor}`
    }
    const classes = props.forceVisible? "button-anchor hero-button" : "button-anchor"
	return <Link onClick={props.handleClick} style={styles} className={classes} to={props.route} relative="route">{props.text}</Link>
}    
