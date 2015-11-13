NOTES ON SECURITY


**************************************
update:2015-11-13

//  -----------   SUBRESOURCE INTEGRITY (SRI)  -----------  //
https://w3c.github.io/webappsec-subresource-integrity/
     //----------- 
https://hacks.mozilla.org/2015/09/subresource-integrity-in-firefox-43/
    //----------- 
//----------- Browsers Supporting SRI: -----------  
The integrity attribute for script and link 
Chrome 45.0 // Firefox (Gecko) 43 // Opera 32 // Internet Explorer Not supported // Safari Not supported 
//  -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   ----------- 
//-----------EXAMPLE----------
&lt;script src="https://example.com/example-framework.js"
        integrity="sha256-C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg="
        crossorigin="anonymous"\&gt;&lt;/script\&gt;
//   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   ----------- 
1.When a browser encounters a&lt;script\&gt; or &lt;link\&gt; element with an integrity attribute, before executing the script or before applying any stylesheet specified by the &lt;link\&gt; element, the browser must first compare the script or stylesheet to the expected hash given in the integrity value.
2.If the script or stylesheet doesn’t match its associated integrity value, then the browser must refuse to execute the script or apply the stylesheet, and must instead return a network error indicating that fetching of that script or stylesheet failed.
//   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   -----------   ----------- 

**************************************
update:2015-11-07 //
Start A3xa JS Framework A3xaFW //
Start JS Security Ecmascript 5 //
avoid new & this //
"Crockford classless guidelines" and/or "Prototype inheritance" //

**************************************
