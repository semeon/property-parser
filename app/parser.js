"use strict";
let propParser = require("properties-parser")

class PropParser {

	constructor(props) {

	}

	parse(props) {
		console.log("Parsing file:", props.fileName)
		let propObj = propParser.read(props.fileName)
		// console.dir(propObj)

		let output = []

		for (let i in propObj) {
			let newRecord = {}
			newRecord.prop = i
			newRecord.value = propObj[i]
			output.push(newRecord)
		}


		return output
	}

}


module.exports = PropParser;


