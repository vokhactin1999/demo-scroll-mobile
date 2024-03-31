import React from "react";
import ScrollGagoList from "./ScrollGagoList";
import SocialHeader from "./SocialHeader";
import "./SideRight.css";
import { useGetElementById } from "../hook";
function SideRight(props) {
	const selectedElement = useGetElementById();
	return (
		<div
			className='side droite'
			style={{ background: `${selectedElement.mainColor}` }}>
			<ScrollGagoList />
			<SocialHeader />
		</div>
	);
}

export default SideRight;
