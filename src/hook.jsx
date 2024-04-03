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

	const isMobile = windowSize.width < 450;

	useEffect(() => {
		const lockOrientation = () => {
			if (screen.orientation && screen.orientation.lock && isMobile) {
				screen.orientation.lock("portrait"); // Lock the orientation to portrait mode
			}
		};

		lockOrientation(); // Call the function to lock the orientation when the component mounts

		// Optionally, you can add an event listener to re-lock the orientation if the user tries to change it
		const handleOrientationChange = () => {
			lockOrientation();
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
};
