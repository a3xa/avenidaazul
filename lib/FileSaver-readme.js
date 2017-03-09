2017-mar-09 Copy of the minified version v1.3.2 2016-oct-05 of eligrey FileSaver code

https://github.com/eligrey/FileSaver.js/blob/master/FileSaver.min.js

integrity-original="sha384-VgWGwiEJnh9P379lbU8DxPcfRuFkfLl0uPuL9tolOHtm2tx8Qy8d/KtvovfM0Udh"

integrity-of-the-copy="sha384-VgWGwiEJnh9P379lbU8DxPcfRuFkfLl0uPuL9tolOHtm2tx8Qy8d/KtvovfM0Udh"






___________________________
LIBS

https://github.com/eligrey/FileSaver.js
https://github.com/eligrey/FileSaver.js/blob/master/FileSaver.js
https://github.com/eligrey/FileSaver.js/blob/master/FileSaver.min.js
https://github.com/eligrey/FileSaver.js#supported-browsers

------------------------
https://github.com/eligrey/Blob.js
https://github.com/eligrey/Blob.js/blob/master/Blob.js
Blob.js implements the W3C Blob interface in browsers that do not natively support it.
Blob.js shares the same supported browsers as FileSaver.js.

------------------------
https://github.com/eligrey/canvas-toBlob.js
https://github.com/eligrey/canvas-toBlob.js/blob/master/canvas-toBlob.js
canvas-toBlob.js shares the same supported browsers as FileSaver.js.
------------------------



___________________________
EXAMPLES


Syntax
Pass true for disableAutoBOM if you don't want FileSaver.js
 to automatically provide Unicode text encoding hints (see: byte order mark).
https://en.wikipedia.org/wiki/Byte_order_mark
FileSaver saveAs(Blob/File data, optional DOMString filename, optional Boolean disableAutoBOM)

---------------
Saving text

var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
saveAs(blob, "hello world.txt");

-----------

Saving a canvas
Note: The standard HTML5 canvas.toBlob() method 
is not available in all browsers. 
canvas-toBlob.js is a cross-browser canvas.toBlob() that polyfills this.

var canvas = document.getElementById("my-canvas"), ctx = canvas.getContext("2d");
// draw to canvas...
canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});

-----------

Saving File
You can save a File constructor without specifying a filename. The File itself already contains a name, There is a hand full of ways to get a file instance (from storage, file input, new constructor) But if you still want to change the name, then you can change it in the 2nd argument

var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
saveAs(file);



____________________________
Articles
https://eligrey.com/blog/saving-generated-files-on-the-client-side/
https://developers.google.com/web/updates/2011/08/Saving-generated-files-on-the-client-side
http://stackoverflow.com/questions/15211742/html5-saveas-support-in-google-chrome
https://www.w3.org/TR/FileAPI/
https://www.w3.org/TR/file-writer-api/
https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
https://dev.w3.org/2009/dap/file-system/file-writer.html







