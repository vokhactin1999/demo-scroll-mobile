import { defineConfig } from "vite";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";

// The minifiers you want to use:
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from "imagemin-webp";

export default defineConfig({
	plugins: [
		viteImagemin({
			plugins: {
				jpg: imageminMozjpeg({ quality: 75 }),
				png: imageminPngquant({ quality: [0.6, 0.8] }),
			},
			makeWebp: {
				plugins: {
					jpg: imageminWebp(),
				},
			},
		}),
	],
	include: /\.(png|jpg|jpeg|gif|svg)$/i, // Adjust as needed
});
