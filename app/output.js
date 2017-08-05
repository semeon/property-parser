"use strict";
let json2csv = require("json2csv")

class Output {

	constructor(props) {
		this.fields = ['prop', 'value'];
	}

	generate(props) {
		// console.log("Generating output for data:", props.data)
		let output = null

		try {
		  var result = json2csv({ data: props.data, fields: this.fields });
		  console.log(result);
			
			output = result

		} catch (err) {
		  // Errors are thrown for bad options, or if the data is empty and no fields are provided. 
		  // Be sure to provide fields if it is possible that your data array will be empty. 
		  console.error(err);

		}

		return output

	}

}


module.exports = Output;


