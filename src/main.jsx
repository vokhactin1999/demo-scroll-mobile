import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScrollInfoProvider } from "./ScrollInfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ScrollInfoProvider>
			<App />
		</ScrollInfoProvider>
	</React.StrictMode>,
);
