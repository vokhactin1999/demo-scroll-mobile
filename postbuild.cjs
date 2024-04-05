const fs = require("fs-extra");
const path = require("path");

// Define the source and destination directories
const srcDir = path.join(__dirname, "dist", "img");
const destDir = path.join(__dirname, "public", "img-optimize");

// Ensure the destination directory exists and then copy the images
fs.ensureDir(destDir)
	.then(() => fs.copy(srcDir, destDir))
	.then(() => console.log(`Images have been copied to: ${destDir}`))
	.catch((err) => console.error(err));
