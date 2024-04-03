import Picker from "react-mobile-picker";
import "./GagoScrollingMobile.css";
import { useContext, useState } from "react";
import { data_temoin } from "../assets/data-temoin";
import { ScrollInfoContext } from "../ScrollInfoContext";

function GagoScrollingMobile() {
	const { setSelectedId, selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementId = (value) => {
		setSelectedId(value);
	};

	return (
		<div className='scrollingdiv-mobile'>
			<Picker
				value={selectedId}
				onChange={getSelectedElementId}
				wheel='normal'
				height={200}
				itemHeight={40}
				className='picker-scroll'>
				<Picker.Column key={name} name='gagoId'>
					{data_temoin.map((option) => (
						<Picker.Item key={option.id} value={option.id}>
							{({ selected }) => (
								/* Use the `selected` state ti conditionally style the selected item */
								<div
									className='heading-2'
									style={{
										color: "#fff",
									}}>
									<p
										style={{
											fontSize: "18px",
											fontFamily: "Berlin Sans FB",
											fontWeight:"bold"
										}}>
										{option.title}
									</p>
								</div>
							)}
						</Picker.Item>
					))}
				</Picker.Column>
			</Picker>
		</div>
	);
}

export default GagoScrollingMobile;
