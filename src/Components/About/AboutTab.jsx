/* eslint-disable react/prop-types */
import "./AboutTab.css"
export default function AboutTab(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        outline: `4px solid ${props.outlineColor}`,
    }
    return <span className="about-tab" style={styles}>{props.text}</span>
}
