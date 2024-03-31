import React, { useState } from "react";
import VnFlat from "./VnFlat";
import CnFlat from "./CnFlat";
import EnFlat from "./EnFlat";
import "./SelectLanguage.css";

import { useGetElementById, useClickSelection } from "../hook";

function SelectLanguage(props) {
	const selectedElement = useGetElementById();

	const {
		toggleSelectLanguage,
		handleToggleSelection,
		selectEn,
		selectVietNamese,
		selectedLanguage,
		selectChina,
	} = useClickSelection();

	console.log(toggleSelectLanguage);

	const renderTextSelectedLanguage = () => {
		const languageCode = {
			en: {
				title: "English",
				icon: <EnFlat />,
			},
			vn: {
				title: "Vietnameese",
				icon: <VnFlat />,
			},
			cn: {
				title: "Chinese",
				icon: <CnFlat />,
			},
		};
		const info = languageCode[selectedLanguage];
		return (
			<>
				{info.icon}
				<span id='languageSelect' className='selected m-0 p-t-0 p-b-0'>
					{info.title}
				</span>
			</>
		);
	};
	return (
		<div className='select-box rounded-pill'>
			{toggleSelectLanguage && (
				<div className='options-container'>
					<div
						className='option d-flex align-items-center'
						id='engLanguage'
						value='english'
						onClick={selectEn}>
						<EnFlat />
						<label htmlFor='currentchannel' className='m-0'>
							English
						</label>
					</div>
					<div
						className='option d-flex align-items-center'
						id='viLanguage'
						value='vietnamese'
						onClick={selectVietNamese}>
						<input
							type='radio'
							className='radio'
							id='customChannel'
							name='category'
							defaultValue='customChannel'
						/>
						<span>
							<VnFlat />
						</span>
						<span>
							<label htmlFor='customChannel' className='m-0'>
								Vietnamese
							</label>
						</span>
					</div>
					<div
						className='option d-flex align-items-center'
						id='cnLanguage'
						value='chinese'
						onClick={selectChina}>
						<CnFlat />
						<label htmlFor='dm' className='m-0'>
							Chinese
						</label>
					</div>
				</div>
			)}

			<div
				className='selector-wrapper d-flex align-items-center'
				id='selectorWrapper'
				style={{
					background: `${selectedElement.itemColor}`,
					color: "white",
					height: "33px",
				}}
				onClick={handleToggleSelection}>
				{renderTextSelectedLanguage()}
			</div>
		</div>
	);
}

export default SelectLanguage;
