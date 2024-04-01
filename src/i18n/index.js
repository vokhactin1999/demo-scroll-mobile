import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"view more": "View more",
			"download proposal": "Download Proposal",
			"en version": "English Version",
			"vn version": "Vietnamese Version",
			"vi lng": "Vietnamese",
			"en lng": "English",
			"zh lng": "Chinese",
		},
	},
	vi: {
		translation: {
			"view more": "Xem thêm",
			"download proposal": "Tải Xuống Portfolio",
			"en version": "Phiên Bản Tiếng Anh",
			"vn version": "Phiên Bản Tiếng Việt",
			"vi lng": "Tiếng Việt",
			"en lng": "Tiếng Anh",
			"zh lng": "Tiếng Trung",
		},
	},
	zh: {
		translation: {
			"view more": "看更多",
			"download proposal": "下載提案",
			"en version": "英文版",
			"vn version": "越南語版",
			"vi lng": "越南语",
			"en lng": "英语",
			"zh lng": "中国人",
		},
	},
};
i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

export default i18n;
