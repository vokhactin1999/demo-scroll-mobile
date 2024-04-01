import React, { useState } from "react";
import VnFlat from "./VnFlat";
import CnFlat from "./CnFlat";
import EnFlat from "./EnFlat";
import "./SelectLanguage.css";

import { useGetElementById, useClickSelection } from "../hook";
import { useTranslation } from "react-i18next";

function SelectLanguage(props) {
	const selectedElement = useGetElementById();
	const { t, i18n } = useTranslation();

	const {
		toggleSelectLanguage,
		handleToggleSelection,
		selectEn,
		selectVietNamese,
		selectedLanguage,
		selectChina,
	} = useClickSelection();

	const changeLanguage = (lng) => {
		if (lng === "en") selectEn();

		if (lng === "vi") selectVietNamese();

		if (lng === "zh") selectChina();

		i18n.changeLanguage(lng);
	};

	const renderTextSelectedLanguage = () => {
		const languageCode = {
			en: {
				title: "English",
				icon: <EnFlat />,
			},
			vi: {
				title: "Tiếng Việt",
				icon: <VnFlat />,
			},
			zh: {
				title: "中国人",
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
						onClick={() => changeLanguage("en")}>
						<EnFlat />
						<label htmlFor='currentchannel' className='m-0'>
							{t("en lng")}
						</label>
					</div>
					<div
						className='option d-flex align-items-center'
						id='viLanguage'
						value='vietnamese'
						onClick={() => changeLanguage("vi")}>
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
								{t("vi lng")}
							</label>
						</span>
					</div>
					<div
						className='option d-flex align-items-center'
						id='cnLanguage'
						value='chinese'
						onClick={() => changeLanguage("zh")}>
						<CnFlat />
						<label htmlFor='dm' className='m-0'>
							{t("zh lng")}
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
