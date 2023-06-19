/* eslint-disable react/prop-types */
import Navbar from "../Navbar.jsx"
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import "./Faq.css"
import AccordionStyles from "./Accordion.css"
import chevronDown from "./ChevronDown.svg"
import Background from "../Background.jsx"
import BackgrounImage from "/src/assets/ocean.png"

export default function Faq(props) {
	const AccordionItem = ({ header, ...rest }) => (
		<Item
			{...rest}
			header={
				<>
					{header}
					<img className="chevron-down" src={chevronDown} alt="Chevron Down" />
				</>
			}
			className={AccordionStyles.item}
			buttonProps={{
				className: ({ isEnter }) => `${AccordionStyles.itemBtn} ${isEnter && AccordionStyles.itemBtnExpanded}`,
			}}
			contentProps={{ className: AccordionStyles.itemContent }}
			panelProps={{ className: AccordionStyles.itemPanel }}
		/>
	)
	return (
		<>
			<Background image={BackgrounImage} />

			<Navbar />
			<div className="faq">
				<h1 className="faq-heading">{props.lang.heading}</h1>
				<div className="faq-points">
					<Accordion transition transitionTimeout={250} allowMultiple>
						{props.lang.points.map(({ titleText, descText }, i) => (
							<AccordionItem header={titleText} key={i}>
								{descText}
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</>
	)
}
