var console = require('./lib/consolelog.js');

module.exports = function chessboard(size) {
	var hashString = '# ';
	var hash_String = ' #';

	var rowString = '';
	var tempRowString = '';
	var colString = '';
	var finalString = '';
	for (var row = 0; row < size; row++) {
		for (var col = 0; col < size/2; col++) {
			//if(tempRowString.length < 8)
			if ((row % 2) === 0)
				tempRowString += hashString
			else
				tempRowString += hash_String
		}
		if (row > size-2)
			rowString += tempRowString
		else
			rowString += tempRowString + '\n'

		tempRowString = '';
	}

	console.log(rowString)
}
