
var logjs = function(){
	var fs = require('fs');
	var moment = require('moment');

	return {
		append:function(dir, filename, contents, isNewline){
			var path = dir + filename;
			var newline = (isNewline==true)?'\n':'';
			var contentsInLine = 
				moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ' | ' +
				contents + 
				newline;

			// If file not exists, it will create the new one
			fs.appendFile(path, contentsInLine, function (err) {
				if(!err) {
					console.log("Saved " + contents + " to " + dir + filename);
				} else {
					console.log("Save file '" + filename + "' error : ", err);
				}
			});
		}
	};
};

module.exports = logjs();
