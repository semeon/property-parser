"use strict";

let settings = {}

settings.inputDir = "input"
settings.outputDir = "output"

settings.locales = {
	en_us: {
		name: "en-us",
		files: {
			general: "patient/generalMessages.properties",
			email: "api/emailMessages.properties"
		}
	},

	// es_us: {
	// 	name: "es-us",
	// 	files: {
	// 		general: "patient/generalMessages_es_US.properties",
	// 		email: "api/emailMessages_es_US.properties"
	// 	}
	// }


}

settings.defaultLoc = "en_us"

module.exports = settings;


