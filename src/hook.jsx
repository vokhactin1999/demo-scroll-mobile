import {
	useContext,
	useEffect,
	useState,
	useLayoutEffect,
	useRef,
} from "react";
import { ScrollInfoContext } from "./ScrollInfoContext";
import { data_temoin } from "./assets/data-temoin";
import { content_temoin } from "./assets/content-temoin";
import { useTranslation } from "react-i18next";

export const useGetElementById = () => {
	const { selectedId } = useContext(ScrollInfoContext);

	const getSelectedElementById = () => {
		return data_temoin.find((item) => item.id === selectedId.gagoId);
	};

	const selectedElement = getSelectedElementById();

	return selectedElement;
};

export const useClickSelection = () => {
	const [toggleSelectLanguage, setToggleSelectLanguage] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const handleToggleSelection = () => {
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
		setSelectedLanguage("vi");
		closeSelection();
	};

	const selectChina = () => {
		setSelectedLanguage("zh");
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

export const useGetContentByTemoinId = () => {
	const { selectedId } = useContext(ScrollInfoContext);
	return content_temoin?.[selectedId.gagoId];
};

export const useGetCurrentLanguage = () => {
	const { i18n } = useTranslation();
	return i18n.language;
};

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	const handleSize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useLayoutEffect(() => {
		handleSize();

		window.addEventListener("resize", handleSize);

		return () => window.removeEventListener("resize", handleSize);
	}, []);

	return windowSize;
};

export const useLoadingSpinner = () => {
	const [loading, setLoading] = useState(true);
	const loadingRef = useRef();

	useEffect(() => {
		loadingRef.current = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => {
			clearTimeout(loadingRef.current);
		};
	}, []);
	return {
		loading,
		setLoading,
	};
};

export const useLockRoateHorizontallyOnMobile = () => {
	const windowSize = useWindowSize();
	const [showOverlay, setShowOverlay] = useState(false);
	const isMobile = windowSize.width < 450;

	useEffect(() => {
		const handleOrientationChange = () => {
			const isPortrait = window.innerHeight > window.innerWidth;

			if (!isPortrait) {
				// If the device is in landscape mode, force it back to portrait

				if (window.orientation === 90 || window.orientation === -90) {
					if (isMobile) setShowOverlay(true);
					// You can also display a message or use other means to inform the user
					// about the requirement to switch back to portrait mode.
					// Alternatively, you can programmatically rotate the device back to portrait mode,
					// but this is generally not recommended as it interferes with the user experience.
				}
			} else {
				setShowOverlay(false);
			}
		};

		window.addEventListener("orientationchange", handleOrientationChange);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener(
				"orientationchange",
				handleOrientationChange,
			);
		};
	}, []); // Run this effect only once on component mount

	return {
		showOverlay,
	};
};
