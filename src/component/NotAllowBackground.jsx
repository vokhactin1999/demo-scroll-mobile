import React from "react";
import Spinner from "./Spinner";
import "./NotAllowBackground.css";

function NotAllowBackground(props) {
	return (
		<div className='gago__not-allow-bg'>
			<Spinner text={"Please rotate the iPad screen horizontally"} />
		</div>
	);
}

export default NotAllowBackground;
