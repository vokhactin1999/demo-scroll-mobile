import { useContext, useEffect, useState } from "react";
import { ScrollInfoContext } from "./ScrollInfoContext";
import { data_temoin } from "./assets/data-temoin";
export const useGetElementById = () => {
	const { selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementById = () => {
		return data_temoin.find((item) => item.id === selectedId);
	};

	const selectedElement = getSelectedElementById();

	return selectedElement;
};

export const useClickSelection = () => {
	const [toggleSelectLanguage, setToggleSelectLanguage] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const handleToggleSelection = () => {
		console.log("da vo day");
		setToggleSelectLanguage((prev) => !prev);
	};

	const closeSelection = () => {
		setToggleSelectLanguage(false);
	};

	const selectEn = () => {
		setSelectedLanguage("en");
		closeSelection();
	};
	const selectVietNamese = () => {
		setSelectedLanguage("vn");
		closeSelection();
	};

	const selectChina = () => {
		setSelectedLanguage("cn");
		closeSelection();
	};

	useEffect(() => {
		window.addEventListener("click", function (e) {
			if (e.target.closest(".select-box") === null) {
				closeSelection();
			}
		});
	}, []);

	useEffect(() => {});

	return {
		toggleSelectLanguage,
		handleToggleSelection,
		selectEn,
		selectVietNamese,
		selectedLanguage,
		selectChina,
	};
};
