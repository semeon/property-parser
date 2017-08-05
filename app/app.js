"use strict";

const fs = require('fs');
const settings = require("./settings.js")

let PropParser = require("./parser.js")
let Output = require("./output.js")

class Application {

	constructor() {
		this.settings = settings
		this.parser = new PropParser()
		this.output = new Output()
	}

	run() {
		console.log("Run!")
		console.dir(this.settings)
		
		let defaultLocale = settings.locales[settings.defaultLoc]
		
		let parsedFiles = {}
		
		for (let i in defaultLocale.files) {
			let fileName = this.settings.inputDir + "/" + defaultLocale.files[i]
			let outputFileName = this.settings.outputDir + "/" + defaultLocale.files[i] + ".csv"

			let jsonData = this.parser.parse({fileName: fileName})
			
			let csvData = this.output.generate({data: jsonData})

			fs.writeFile(outputFileName, csvData, function(err) {
			  if (err) throw err;
			  console.log('file saved');
			});
			
		}
		
	}

}

var app = new Application();

module.exports = app;


