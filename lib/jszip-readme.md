Copy of the minified version v3.1.3 2016-oct-05 of stuk JSZIP code
https://rawgit.com/Stuk/jszip/master/dist/jszip.min.js
integrity-original="sha384-v9EFJbsxLXyYar8TvBV8zu5USBoaOC+ZB57GzCmQiWfgDIjS+wANZMP5gjwMLwGv"
integrity-of-the-copy="sha384-qktO7evuAguBgri3rfmU6xHhGSLmgEabS/akmZgvNy/uoq8lB1UzkzOZAF0bJ7QH"


___________________________
LIBS

https://stuk.github.io/jszip/
http://github.com/Stuk/jszip/zipball/master
https://github.com/Stuk/jszip




https://github.com/Stuk/jszip/blob/master/dist/jszip.js
https://github.com/Stuk/jszip/blob/master/dist/jszip.min.js
https://rawgit.com/Stuk/jszip/master/dist/jszip.min.js
https://rawgit.com/Stuk/jszip/master/dist/jszip.js



___________________________
ISSUES

Stuk/jszip#368
	issue:	UTF-8 files' encoding not preserved after zip generation
	solution:	add at the beginning of the string the BOM code = '\uFEFF'




___________________________
EXAMPLES

/*
Create a zip containing
/Hello.txt
/images/smile.gif
*/

var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});
zip.generateAsync({type:"blob"})
.then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});


____________________________
Articles
http://stackoverflow.com/questions/38135522/put-multiple-files-in-a-zip-file-and-download-it-using-javascript
