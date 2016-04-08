/*! p5.js v0.4.23 March 04, 2016 */ !function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.p5=a()}}(function(){var define,module,exports;return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){},{}],2:[function(a,b,c){"use strict";c.argument=function(a,b){if(!a)throw new Error(b)},c.assert=c.argument},{}],3:[function(a,b,c){"use strict";function d(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}c.line=d},{}],4:[function(a,b,c){"use strict";function d(a){this.font=a}function e(a){this.cmap=a}function f(a,b){this.encoding=a,this.charset=b}function g(a){var b;switch(a.version){case 1:this.names=c.standardNames.slice();break;case 2:for(this.names=new Array(a.numberOfGlyphs),b=0;b<a.numberOfGlyphs;b++)a.glyphNameIndex[b]<c.standardNames.length?this.names[b]=c.standardNames[a.glyphNameIndex[b]]:this.names[b]=a.names[a.glyphNameIndex[b]-c.standardNames.length];break;case 2.5:for(this.names=new Array(a.numberOfGlyphs),b=0;b<a.numberOfGlyphs;b++)this.names[b]=c.standardNames[b+a.glyphNameIndex[b]];break;case 3:this.names=[]}}function h(a){for(var b,c=a.tables.cmap.glyphIndexMap,d=Object.keys(c),e=0;e<d.length;e+=1){var f=d[e],g=c[f];b=a.glyphs.get(g),b.addUnicode(parseInt(f))}for(e=0;e<a.glyphs.length;e+=1)b=a.glyphs.get(e),a.cffEncoding?b.name=a.cffEncoding.charset[e]:b.name=a.glyphNames.glyphIndexToName(e)}var i=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],j=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],k=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],l=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];d.prototype.charToGlyphIndex=function(a){var b=a.charCodeAt(0),c=this.font.glyphs;if(!c)return null;for(var d=0;d<c.length;d+=1)for(var e=c.get(d),f=0;f<e.unicodes.length;f+=1)if(e.unicodes[f]===b)return d},e.prototype.charToGlyphIndex=function(a){return this.cmap.glyphIndexMap[a.charCodeAt(0)]||0},f.prototype.charToGlyphIndex=function(a){var b=a.charCodeAt(0),c=this.encoding[b];return this.charset.indexOf(c)},g.prototype.nameToGlyphIndex=function(a){return this.names.indexOf(a)},g.prototype.glyphIndexToName=function(a){return this.names[a]},c.cffStandardStrings=i,c.cffStandardEncoding=j,c.cffExpertEncoding=k,c.standardNames=l,c.DefaultEncoding=d,c.CmapEncoding=e,c.CffEncoding=f,c.GlyphNames=g,c.addGlyphNames=h},{}],5:[function(a,b,c){"use strict";function d(a){a=a||{},this.familyName=a.familyName||" ",this.styleName=a.styleName||" ",this.designer=a.designer||" ",this.designerURL=a.designerURL||" ",this.manufacturer=a.manufacturer||" ",this.manufacturerURL=a.manufacturerURL||" ",this.license=a.license||" ",this.licenseURL=a.licenseURL||" ",this.version=a.version||"Version 0.1",this.description=a.description||" ",this.copyright=a.copyright||" ",this.trademark=a.trademark||" ",this.unitsPerEm=a.unitsPerEm||1e3,this.ascender=a.ascender,this.descender=a.descender,this.supported=!0,this.glyphs=new h.GlyphSet(this,a.glyphs||[]),this.encoding=new g.DefaultEncoding(this),this.tables={}}var e=a("./path"),f=a("./tables/sfnt"),g=a("./encoding"),h=a("./glyphset");d.prototype.hasChar=function(a){return null!==this.encoding.charToGlyphIndex(a)},d.prototype.charToGlyphIndex=function(a){return this.encoding.charToGlyphIndex(a)},d.prototype.charToGlyph=function(a){var b=this.charToGlyphIndex(a),c=this.glyphs.get(b);return c||(c=this.glyphs.get(0)),c},d.prototype.stringToGlyphs=function(a){for(var b=[],c=0;c<a.length;c+=1){var d=a[c];b.push(this.charToGlyph(d))}return b},d.prototype.nameToGlyphIndex=function(a){return this.glyphNames.nameToGlyphIndex(a)},d.prototype.nameToGlyph=function(a){var b=this.nametoGlyphIndex(a),c=this.glyphs.get(b);return c||(c=this.glyphs.get(0)),c},d.prototype.glyphIndexToName=function(a){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(a):""},d.prototype.getKerningValue=function(a,b){a=a.index||a,b=b.index||b;var c=this.getGposKerningValue;return c?c(a,b):this.kerningPairs[a+","+b]||0},d.prototype.forEachGlyph=function(a,b,c,d,e,f){if(this.supported){b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:72,e=e||{};for(var g=void 0===e.kerning?!0:e.kerning,h=1/this.unitsPerEm*d,i=this.stringToGlyphs(a),j=0;j<i.length;j+=1){var k=i[j];if(f(k,b,c,d,e),k.advanceWidth&&(b+=k.advanceWidth*h),g&&j<i.length-1){var l=this.getKerningValue(k,i[j+1]);b+=l*h}}}},d.prototype.getPath=function(a,b,c,d,f){var g=new e.Path;return this.forEachGlyph(a,b,c,d,f,function(a,b,c,d){var e=a.getPath(b,c,d);g.extend(e)}),g},d.prototype.draw=function(a,b,c,d,e,f){this.getPath(b,c,d,e,f).draw(a)},d.prototype.drawPoints=function(a,b,c,d,e,f){this.forEachGlyph(b,c,d,e,f,function(b,c,d,e){b.drawPoints(a,c,d,e)})},d.prototype.drawMetrics=function(a,b,c,d,e,f){this.forEachGlyph(b,c,d,e,f,function(b,c,d,e){b.drawMetrics(a,c,d,e)})},d.prototype.validate=function(){function a(a,b){a||c.push(b)}function b(b){a(d[b]&&d[b].trim().length>0,"No "+b+" specified.")}var c=[],d=this;b("familyName"),b("weightName"),b("manufacturer"),b("copyright"),b("version"),a(this.unitsPerEm>0,"No unitsPerEm specified.")},d.prototype.toTables=function(){return f.fontToTable(this)},d.prototype.toBuffer=function(){for(var a=this.toTables(),b=a.encode(),c=new ArrayBuffer(b.length),d=new Uint8Array(c),e=0;e<b.length;e++)d[e]=b[e];return c},d.prototype.download=function(){var a=this.familyName.replace(/\s/g,"")+"-"+this.styleName+".otf",b=this.toBuffer();window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.requestFileSystem(window.TEMPORARY,b.byteLength,function(c){c.root.getFile(a,{create:!0},function(a){a.createWriter(function(c){var d=new DataView(b),e=new Blob([d],{type:"font/opentype"});c.write(e),c.addEventListener("writeend",function(){location.href=a.toURL()},!1)})})},function(a){throw a})},c.Font=d},{"./encoding":4,"./glyphset":7,"./path":10,"./tables/sfnt":25}],6:[function(a,b,c){"use strict";function d(a,b){var c=b||{commands:[]};return{configurable:!0,get:function(){return"function"==typeof c&&(c=c()),c},set:function(a){c=a}}}function e(a){this.bindConstructorValues(a)}var f=a("./check"),g=a("./draw"),h=a("./path");e.prototype.bindConstructorValues=function(a){this.index=a.index||0,this.name=a.name||null,this.unicode=a.unicode||void 0,this.unicodes=a.unicodes||void 0!==a.unicode?[a.unicode]:[],a.xMin&&(this.xMin=a.xMin),a.yMin&&(this.yMin=a.yMin),a.xMax&&(this.xMax=a.xMax),a.yMax&&(this.yMax=a.yMax),a.advanceWidth&&(this.advanceWidth=a.advanceWidth),Object.defineProperty(this,"path",d(this,a.path))},e.prototype.addUnicode=function(a){0===this.unicodes.length&&(this.unicode=a),this.unicodes.push(a)},e.prototype.getPath=function(a,b,c){a=void 0!==a?a:0,b=void 0!==b?b:0,c=void 0!==c?c:72;for(var d=1/this.path.unitsPerEm*c,e=new h.Path,f=this.path.commands,g=0;g<f.length;g+=1){var i=f[g];"M"===i.type?e.moveTo(a+i.x*d,b+-i.y*d):"L"===i.type?e.lineTo(a+i.x*d,b+-i.y*d):"Q"===i.type?e.quadraticCurveTo(a+i.x1*d,b+-i.y1*d,a+i.x*d,b+-i.y*d):"C"===i.type?e.curveTo(a+i.x1*d,b+-i.y1*d,a+i.x2*d,b+-i.y2*d,a+i.x*d,b+-i.y*d):"Z"===i.type&&e.closePath()}return e},e.prototype.getContours=function(){if(void 0===this.points)return[];for(var a=[],b=[],c=0;c<this.points.length;c+=1){var d=this.points[c];b.push(d),d.lastPointOfContour&&(a.push(b),b=[])}return f.argument(0===b.length,"There are still points left in the current contour."),a},e.prototype.getMetrics=function(){for(var a=this.path.commands,b=[],c=[],d=0;d<a.length;d+=1){var e=a[d];"Z"!==e.type&&(b.push(e.x),c.push(e.y)),("Q"===e.type||"C"===e.type)&&(b.push(e.x1),c.push(e.y1)),"C"===e.type&&(b.push(e.x2),c.push(e.y2))}var f={xMin:Math.min.apply(null,b),yMin:Math.min.apply(null,c),xMax:Math.max.apply(null,b),yMax:Math.max.apply(null,c),leftSideBearing:0};return f.rightSideBearing=this.advanceWidth-f.leftSideBearing-(f.xMax-f.xMin),f},e.prototype.draw=function(a,b,c,d){this.getPath(b,c,d).draw(a)},e.prototype.drawPoints=function(a,b,c,d){function e(b,c,d,e){var f=2*Math.PI;a.beginPath();for(var g=0;g<b.length;g+=1)a.moveTo(c+b[g].x*e,d+b[g].y*e),a.arc(c+b[g].x*e,d+b[g].y*e,2,0,f,!1);a.closePath(),a.fill()}b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:24;for(var f=1/this.path.unitsPerEm*d,g=[],h=[],i=this.path,j=0;j<i.commands.length;j+=1){var k=i.commands[j];void 0!==k.x&&g.push({x:k.x,y:-k.y}),void 0!==k.x1&&h.push({x:k.x1,y:-k.y1}),void 0!==k.x2&&h.push({x:k.x2,y:-k.y2})}a.fillStyle="blue",e(g,b,c,f),a.fillStyle="red",e(h,b,c,f)},e.prototype.drawMetrics=function(a,b,c,d){var e;b=void 0!==b?b:0,c=void 0!==c?c:0,d=void 0!==d?d:24,e=1/this.path.unitsPerEm*d,a.lineWidth=1,a.strokeStyle="black",g.line(a,b,-1e4,b,1e4),g.line(a,-1e4,c,1e4,c);var f=this.xMin||0,h=this.yMin||0,i=this.xMax||0,j=this.yMax||0,k=this.advanceWidth||0;a.strokeStyle="blue",g.line(a,b+f*e,-1e4,b+f*e,1e4),g.line(a,b+i*e,-1e4,b+i*e,1e4),g.line(a,-1e4,c+-h*e,1e4,c+-h*e),g.line(a,-1e4,c+-j*e,1e4,c+-j*e),a.strokeStyle="green",g.line(a,b+k*e,-1e4,b+k*e,1e4)},c.Glyph=e},{"./check":2,"./draw":3,"./path":10}],7:[function(a,b,c){"use strict";function d(a,b){if(this.font=a,this.glyphs={},Array.isArray(b))for(var c=0;c<b.length;c++)this.glyphs[c]=b[c];this.length=b&&b.length||0}function e(a,b){return new h.Glyph({index:b,font:a})}function f(a,b,c,d,e,f){return function(){var g=new h.Glyph({index:b,font:a});return g.path=function(){c(g,d,e);var b=f(a.glyphs,g);return b.unitsPerEm=a.unitsPerEm,b},g}}function g(a,b,c,d){return function(){var e=new h.Glyph({index:b,font:a});return e.path=function(){var b=c(a,e,d);return b.unitsPerEm=a.unitsPerEm,b},e}}var h=a("./glyph");d.prototype.get=function(a){return"function"==typeof this.glyphs[a]&&(this.glyphs[a]=this.glyphs[a]()),this.glyphs[a]},d.prototype.push=function(a,b){this.glyphs[a]=b,this.length++},c.GlyphSet=d,c.glyphLoader=e,c.ttfGlyphLoader=f,c.cffGlyphLoader=g},{"./glyph":6}],8:[function(a,b,c){"use strict";function d(a){for(var b=new ArrayBuffer(a.length),c=new Uint8Array(b),d=0;d<a.length;d+=1)c[d]=a[d];return b}function e(b,c){var e=a("fs");e.readFile(b,function(a,b){return a?c(a.message):void c(null,d(b))})}function f(a,b){var c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){return 200!==c.status?b("Font could not be loaded: "+c.statusText):b(null,c.response)},c.send()}function g(a){var b,c,d,e,f,g,h,k=new j.Font,m=new DataView(a,0),A=l.getFixed(m,0);if(1===A)k.outlinesFormat="truetype";else{if(A=l.getTag(m,0),"OTTO"!==A)throw new Error("Unsupported OpenType version "+A);k.outlinesFormat="cff"}for(var B=l.getUShort(m,4),C=12,D=0;B>D;D+=1){var E=l.getTag(m,C),F=l.getULong(m,C+8);switch(E){case"cmap":k.tables.cmap=n.parse(m,F),k.encoding=new i.CmapEncoding(k.tables.cmap),k.encoding||(k.supported=!1);break;case"head":k.tables.head=r.parse(m,F),k.unitsPerEm=k.tables.head.unitsPerEm,b=k.tables.head.indexToLocFormat;break;case"hhea":k.tables.hhea=s.parse(m,F),k.ascender=k.tables.hhea.ascender,k.descender=k.tables.hhea.descender,k.numberOfHMetrics=k.tables.hhea.numberOfHMetrics;break;case"hmtx":c=F;break;case"maxp":k.tables.maxp=w.parse(m,F),k.numGlyphs=k.tables.maxp.numGlyphs;break;case"name":k.tables.name=x.parse(m,F),k.familyName=k.tables.name.fontFamily,k.styleName=k.tables.name.fontSubfamily;break;case"OS/2":k.tables.os2=y.parse(m,F);break;case"post":k.tables.post=z.parse(m,F),k.glyphNames=new i.GlyphNames(k.tables.post);break;case"glyf":d=F;break;case"loca":e=F;break;case"CFF ":f=F;break;case"kern":g=F;break;case"GPOS":h=F}C+=16}if(d&&e){var G=0===b,H=v.parse(m,e,k.numGlyphs,G);k.glyphs=p.parse(m,d,H,k),t.parse(m,c,k.numberOfHMetrics,k.numGlyphs,k.glyphs),i.addGlyphNames(k)}else f?(o.parse(m,f,k),i.addGlyphNames(k)):k.supported=!1;return k.supported&&(g?k.kerningPairs=u.parse(m,g):k.kerningPairs={},h&&q.parse(m,h,k)),k}function h(a,b){var c="undefined"==typeof window,d=c?e:f;d(a,function(a,c){if(a)return b(a);var d=g(c);return d.supported?b(null,d):b("Font is not supported (is this a Postscript font?)")})}var i=a("./encoding"),j=a("./font"),k=a("./glyph"),l=a("./parse"),m=a("./path"),n=a("./tables/cmap"),o=a("./tables/cff"),p=a("./tables/glyf"),q=a("./tables/gpos"),r=a("./tables/head"),s=a("./tables/hhea"),t=a("./tables/hmtx"),u=a("./tables/kern"),v=a("./tables/loca"),w=a("./tables/maxp"),x=a("./tables/name"),y=a("./tables/os2"),z=a("./tables/post");c._parse=l,c.Font=j.Font,c.Glyph=k.Glyph,c.Path=m.Path,c.parse=g,c.load=h},{"./encoding":4,"./font":5,"./glyph":6,"./parse":9,"./path":10,"./tables/cff":12,"./tables/cmap":13,"./tables/glyf":14,"./tables/gpos":15,"./tables/head":16,"./tables/hhea":17,"./tables/hmtx":18,"./tables/kern":19,"./tables/loca":20,"./tables/maxp":21,"./tables/name":22,"./tables/os2":23,"./tables/post":24,fs:1}],9:[function(a,b,c){"use strict";function d(a,b){this.data=a,this.offset=b,this.relativeOffset=0}c.getByte=function(a,b){return a.getUint8(b)},c.getCard8=c.getByte,c.getUShort=function(a,b){return a.getUint16(b,!1)},c.getCard16=c.getUShort,c.getShort=function(a,b){return a.getInt16(b,!1)},c.getULong=function(a,b){return a.getUint32(b,!1)},c.getFixed=function(a,b){var c=a.getInt16(b,!1),d=a.getUint16(b+2,!1);return c+d/65535},c.getTag=function(a,b){for(var c="",d=b;b+4>d;d+=1)c+=String.fromCharCode(a.getInt8(d));return c},c.getOffset=function(a,b,c){for(var d=0,e=0;c>e;e+=1)d<<=8,d+=a.getUint8(b+e);return d},c.getBytes=function(a,b,c){for(var d=[],e=b;c>e;e+=1)d.push(a.getUint8(e));return d},c.bytesToString=function(a){for(var b="",c=0;c<a.length;c+=1)b+=String.fromCharCode(a[c]);return b};var e={"byte":1,uShort:2,"short":2,uLong:4,fixed:4,longDateTime:8,tag:4};d.prototype.parseByte=function(){var a=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,a},d.prototype.parseChar=function(){var a=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,a},d.prototype.parseCard8=d.prototype.parseByte,d.prototype.parseUShort=function(){var a=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,a},d.prototype.parseCard16=d.prototype.parseUShort,d.prototype.parseSID=d.prototype.parseUShort,d.prototype.parseOffset16=d.prototype.parseUShort,d.prototype.parseShort=function(){var a=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,a},d.prototype.parseF2Dot14=function(){var a=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,a},d.prototype.parseULong=function(){var a=c.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,a},d.prototype.parseFixed=function(){var a=c.getFixed(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,a},d.prototype.parseOffset16List=d.prototype.parseUShortList=function(a){for(var b=new Array(a),d=this.data,e=this.offset+this.relativeOffset,f=0;a>f;f++)b[f]=c.getUShort(d,e),e+=2;return this.relativeOffset+=2*a,b},d.prototype.parseString=function(a){var b=this.data,c=this.offset+this.relativeOffset,d="";this.relativeOffset+=a;for(var e=0;a>e;e++)d+=String.fromCharCode(b.getUint8(c+e));return d},d.prototype.parseTag=function(){return this.parseString(4)},d.prototype.parseLongDateTime=function(){var a=c.getULong(this.data,this.offset+this.relativeOffset+4);return this.relativeOffset+=8,a},d.prototype.parseFixed=function(){var a=c.getULong(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,a/65536},d.prototype.parseVersion=function(){var a=c.getUShort(this.data,this.offset+this.relativeOffset),b=c.getUShort(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,a+b/4096/10},d.prototype.skip=function(a,b){void 0===b&&(b=1),this.relativeOffset+=e[a]*b},c.Parser=d},{}],10:[function(a,b,c){"use strict";function d(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}d.prototype.moveTo=function(a,b){this.commands.push({type:"M",x:a,y:b})},d.prototype.lineTo=function(a,b){this.commands.push({type:"L",x:a,y:b})},d.prototype.curveTo=d.prototype.bezierCurveTo=function(a,b,c,d,e,f){this.commands.push({type:"C",x1:a,y1:b,x2:c,y2:d,x:e,y:f})},d.prototype.quadTo=d.prototype.quadraticCurveTo=function(a,b,c,d){this.commands.push({type:"Q",x1:a,y1:b,x:c,y:d})},d.prototype.close=d.prototype.closePath=function(){this.commands.push({type:"Z"})},d.prototype.extend=function(a){a.commands&&(a=a.commands),Array.prototype.push.apply(this.commands,a)},d.prototype.draw=function(a){a.beginPath();for(var b=0;b<this.commands.length;b+=1){var c=this.commands[b];"M"===c.type?a.moveTo(c.x,c.y):"L"===c.type?a.lineTo(c.x,c.y):"C"===c.type?a.bezierCurveTo(c.x1,c.y1,c.x2,c.y2,c.x,c.y):"Q"===c.type?a.quadraticCurveTo(c.x1,c.y1,c.x,c.y):"Z"===c.type&&a.closePath()}this.fill&&(a.fillStyle=this.fill,a.fill()),this.stroke&&(a.strokeStyle=this.stroke,a.lineWidth=this.strokeWidth,a.stroke())},d.prototype.toPathData=function(a){function b(b){return Math.round(b)===b?""+Math.round(b):b.toFixed(a)}function c(){for(var a="",c=0;c<arguments.length;c+=1){var d=arguments[c];d>=0&&c>0&&(a+=" "),a+=b(d)}return a}a=void 0!==a?a:2;for(var d="",e=0;e<this.commands.length;e+=1){var f=this.commands[e];"M"===f.type?d+="M"+c(f.x,f.y):"L"===f.type?d+="L"+c(f.x,f.y):"C"===f.type?d+="C"+c(f.x1,f.y1,f.x2,f.y2,f.x,f.y):"Q"===f.type?d+="Q"+c(f.x1,f.y1,f.x,f.y):"Z"===f.type&&(d+="Z")}return d},d.prototype.toSVG=function(a){var b='<path d="';return b+=this.toPathData(a),b+='"',this.fill&"black"!==this.fill&&(b+=null===this.fill?' fill="none"':' fill="'+this.fill+'"'),this.stroke&&(b+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),b+="/>"},c.Path=d},{}],11:[function(a,b,c){"use strict";function d(a,b,c){var d;for(d=0;d<b.length;d+=1){var e=b[d];this[e.name]=e.value}if(this.tableName=a,this.fields=b,c){var f=Object.keys(c);for(d=0;d<f.length;d+=1){var g=f[d],h=c[g];void 0!==this[g]&&(this[g]=h)}}}var e=a("./check"),f=a("./types").encode,g=a("./types").sizeOf;d.prototype.sizeOf=function(){for(var a=0,b=0;b<this.fields.length;b+=1){var c=this.fields[b],d=this[c.name];if(void 0===d&&(d=c.value),"function"==typeof d.sizeOf)a+=d.sizeOf();else{var f=g[c.type];e.assert("function"==typeof f,"Could not find sizeOf function for field"+c.name),a+=f(d)}}return a},d.prototype.encode=function(){return f.TABLE(this)},c.Table=d},{"./check":2,"./types":26}],12:[function(a,b,c){"use strict";function d(a,b){if(a===b)return!0;if(Array.isArray(a)&&Array.isArray(b)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c+=1)if(!d(a[c],b[c]))return!1;return!0}return!1}function e(a,b,c){var d,e,f,g=[],h=[],i=J.getCard16(a,b);if(0!==i){var j=J.getByte(a,b+2);e=b+(i+1)*j+2;var k=b+3;for(d=0;i+1>d;d+=1)g.push(J.getOffset(a,k,j)),k+=j;f=e+g[i]}else f=b+2;for(d=0;d<g.length-1;d+=1){var l=J.getBytes(a,e+g[d],e+g[d+1]);c&&(l=c(l)),h.push(l)}return{objects:h,startOffset:b,endOffset:f}}function f(a){for(var b="",c=15,d=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var e=a.parseByte(),f=e>>4,g=15&e;if(f===c)break;if(b+=d[f],g===c)break;b+=d[g]}return parseFloat(b)}function g(a,b){var c,d,e,g;if(28===b)return c=a.parseByte(),d=a.parseByte(),c<<8|d;if(29===b)return c=a.parseByte(),d=a.parseByte(),e=a.parseByte(),g=a.parseByte(),c<<24|d<<16|e<<8|g;if(30===b)return f(a);if(b>=32&&246>=b)return b-139;if(b>=247&&250>=b)return c=a.parseByte(),256*(b-247)+c+108;if(b>=251&&254>=b)return c=a.parseByte(),256*-(b-251)-c-108;throw new Error("Invalid b0 "+b)}function h(a){for(var b={},c=0;c<a.length;c+=1){var d,e=a[c][0],f=a[c][1];if(d=1===f.length?f[0]:f,b.hasOwnProperty(e))throw new Error("Object "+b+" already has key "+e);b[e]=d}return b}function i(a,b,c){b=void 0!==b?b:0;var d=new J.Parser(a,b),e=[],f=[];for(c=void 0!==c?c:a.length;d.relativeOffset<c;){var i=d.parseByte();21>=i?(12===i&&(i=1200+d.parseByte()),e.push([i,f]),f=[]):f.push(g(d,i))}return h(e)}function j(a,b){return b=390>=b?H.cffStandardStrings[b]:a[b-391]}function k(a,b,c){for(var d={},e=0;e<b.length;e+=1){var f=b[e],g=a[f.op];void 0===g&&(g=void 0!==f.value?f.value:null),"SID"===f.type&&(g=j(c,g)),d[f.name]=g}return d}function l(a,b){var c={};return c.formatMajor=J.getCard8(a,b),c.formatMinor=J.getCard8(a,b+1),c.size=J.getCard8(a,b+2),c.offsetSize=J.getCard8(a,b+3),c.startOffset=b,c.endOffset=b+4,c}function m(a,b){var c=i(a,0,a.byteLength);return k(c,M,b)}function n(a,b,c,d){var e=i(a,b,c);return k(e,N,d)}function o(a,b,c,d){var e,f,g,h=new J.Parser(a,b);c-=1;var i=[".notdef"],k=h.parseCard8();if(0===k)for(e=0;c>e;e+=1)f=h.parseSID(),i.push(j(d,f));else if(1===k)for(;i.length<=c;)for(f=h.parseSID(),g=h.parseCard8(),e=0;g>=e;e+=1)i.push(j(d,f)),f+=1;else{if(2!==k)throw new Error("Unknown charset format "+k);for(;i.length<=c;)for(f=h.parseSID(),g=h.parseCard16(),e=0;g>=e;e+=1)i.push(j(d,f)),f+=1}return i}function p(a,b,c){var d,e,f={},g=new J.Parser(a,b),h=g.parseCard8();if(0===h){var i=g.parseCard8();for(d=0;i>d;d+=1)e=g.parseCard8(),f[e]=d}else{if(1!==h)throw new Error("Unknown encoding format "+h);var j=g.parseCard8();for(e=1,d=0;j>d;d+=1)for(var k=g.parseCard8(),l=g.parseCard8(),m=k;k+l>=m;m+=1)f[m]=e,e+=1}return new H.CffEncoding(f,c)}function q(a,b,c){function d(a,b){p&&k.closePath(),k.moveTo(a,b),p=!0}function e(){
var b;b=l.length%2!==0,b&&!n&&(o=l.shift()+a.nominalWidthX),m+=l.length>>1,l.length=0,n=!0}function f(c){for(var s,t,u,v,w,x,y,z,A,B,C,D,E=0;E<c.length;){var F=c[E];switch(E+=1,F){case 1:e();break;case 3:e();break;case 4:l.length>1&&!n&&(o=l.shift()+a.nominalWidthX,n=!0),r+=l.pop(),d(q,r);break;case 5:for(;l.length>0;)q+=l.shift(),r+=l.shift(),k.lineTo(q,r);break;case 6:for(;l.length>0&&(q+=l.shift(),k.lineTo(q,r),0!==l.length);)r+=l.shift(),k.lineTo(q,r);break;case 7:for(;l.length>0&&(r+=l.shift(),k.lineTo(q,r),0!==l.length);)q+=l.shift(),k.lineTo(q,r);break;case 8:for(;l.length>0;)g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j+l.shift(),k.curveTo(g,h,i,j,q,r);break;case 10:w=l.pop()+a.subrsBias,x=a.subrs[w],x&&f(x);break;case 11:return;case 12:switch(F=c[E],E+=1,F){case 35:g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),y=i+l.shift(),z=j+l.shift(),A=y+l.shift(),B=z+l.shift(),C=A+l.shift(),D=B+l.shift(),q=C+l.shift(),r=D+l.shift(),l.shift(),k.curveTo(g,h,i,j,y,z),k.curveTo(A,B,C,D,q,r);break;case 34:g=q+l.shift(),h=r,i=g+l.shift(),j=h+l.shift(),y=i+l.shift(),z=j,A=y+l.shift(),B=j,C=A+l.shift(),D=r,q=C+l.shift(),k.curveTo(g,h,i,j,y,z),k.curveTo(A,B,C,D,q,r);break;case 36:g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),y=i+l.shift(),z=j,A=y+l.shift(),B=j,C=A+l.shift(),D=B+l.shift(),q=C+l.shift(),k.curveTo(g,h,i,j,y,z),k.curveTo(A,B,C,D,q,r);break;case 37:g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),y=i+l.shift(),z=j+l.shift(),A=y+l.shift(),B=z+l.shift(),C=A+l.shift(),D=B+l.shift(),Math.abs(C-q)>Math.abs(D-r)?q=C+l.shift():r=D+l.shift(),k.curveTo(g,h,i,j,y,z),k.curveTo(A,B,C,D,q,r);break;default:console.log("Glyph "+b.index+": unknown operator 1200"+F),l.length=0}break;case 14:l.length>0&&!n&&(o=l.shift()+a.nominalWidthX,n=!0),p&&(k.closePath(),p=!1);break;case 18:e();break;case 19:case 20:e(),E+=m+7>>3;break;case 21:l.length>2&&!n&&(o=l.shift()+a.nominalWidthX,n=!0),r+=l.pop(),q+=l.pop(),d(q,r);break;case 22:l.length>1&&!n&&(o=l.shift()+a.nominalWidthX,n=!0),q+=l.pop(),d(q,r);break;case 23:e();break;case 24:for(;l.length>2;)g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j+l.shift(),k.curveTo(g,h,i,j,q,r);q+=l.shift(),r+=l.shift(),k.lineTo(q,r);break;case 25:for(;l.length>6;)q+=l.shift(),r+=l.shift(),k.lineTo(q,r);g=q+l.shift(),h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j+l.shift(),k.curveTo(g,h,i,j,q,r);break;case 26:for(l.length%2&&(q+=l.shift());l.length>0;)g=q,h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i,r=j+l.shift(),k.curveTo(g,h,i,j,q,r);break;case 27:for(l.length%2&&(r+=l.shift());l.length>0;)g=q+l.shift(),h=r,i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j,k.curveTo(g,h,i,j,q,r);break;case 28:s=c[E],t=c[E+1],l.push((s<<24|t<<16)>>16),E+=2;break;case 29:w=l.pop()+a.gsubrsBias,x=a.gsubrs[w],x&&f(x);break;case 30:for(;l.length>0&&(g=q,h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j+(1===l.length?l.shift():0),k.curveTo(g,h,i,j,q,r),0!==l.length);)g=q+l.shift(),h=r,i=g+l.shift(),j=h+l.shift(),r=j+l.shift(),q=i+(1===l.length?l.shift():0),k.curveTo(g,h,i,j,q,r);break;case 31:for(;l.length>0&&(g=q+l.shift(),h=r,i=g+l.shift(),j=h+l.shift(),r=j+l.shift(),q=i+(1===l.length?l.shift():0),k.curveTo(g,h,i,j,q,r),0!==l.length);)g=q,h=r+l.shift(),i=g+l.shift(),j=h+l.shift(),q=i+l.shift(),r=j+(1===l.length?l.shift():0),k.curveTo(g,h,i,j,q,r);break;default:32>F?console.log("Glyph "+b.index+": unknown operator "+F):247>F?l.push(F-139):251>F?(s=c[E],E+=1,l.push(256*(F-247)+s+108)):255>F?(s=c[E],E+=1,l.push(256*-(F-251)-s-108)):(s=c[E],t=c[E+1],u=c[E+2],v=c[E+3],E+=4,l.push((s<<24|t<<16|u<<8|v)/65536))}}}var g,h,i,j,k=new K.Path,l=[],m=0,n=!1,o=a.defaultWidthX,p=!1,q=0,r=0;return f(c),b.advanceWidth=o,k}function r(a){var b;return b=a.length<1240?107:a.length<33900?1131:32768}function s(a,b,c){c.tables.cff={};var d=l(a,b),f=e(a,d.endOffset,J.bytesToString),g=e(a,f.endOffset),h=e(a,g.endOffset,J.bytesToString),i=e(a,h.endOffset);c.gsubrs=i.objects,c.gsubrsBias=r(c.gsubrs);var j=new DataView(new Uint8Array(g.objects[0]).buffer),k=m(j,h.objects);c.tables.cff.topDict=k;var s=b+k["private"][1],t=n(a,s,k["private"][0],h.objects);if(c.defaultWidthX=t.defaultWidthX,c.nominalWidthX=t.nominalWidthX,0!==t.subrs){var u=s+t.subrs,v=e(a,u);c.subrs=v.objects,c.subrsBias=r(c.subrs)}else c.subrs=[],c.subrsBias=0;var w=e(a,b+k.charStrings);c.nGlyphs=w.objects.length;var x=o(a,b+k.charset,c.nGlyphs,h.objects);0===k.encoding?c.cffEncoding=new H.CffEncoding(H.cffStandardEncoding,x):1===k.encoding?c.cffEncoding=new H.CffEncoding(H.cffExpertEncoding,x):c.cffEncoding=p(a,b+k.encoding,x),c.encoding=c.encoding||c.cffEncoding,c.glyphs=new I.GlyphSet(c);for(var y=0;y<c.nGlyphs;y+=1){var z=w.objects[y];c.glyphs.push(y,I.cffGlyphLoader(c,y,q,z))}}function t(a,b){var c,d=H.cffStandardStrings.indexOf(a);return d>=0&&(c=d),d=b.indexOf(a),d>=0?c=d+H.cffStandardStrings.length:(c=H.cffStandardStrings.length+b.length,b.push(a)),c}function u(){return new L.Table("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function v(a){var b=new L.Table("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);b.names=[];for(var c=0;c<a.length;c+=1)b.names.push({name:"name_"+c,type:"NAME",value:a[c]});return b}function w(a,b,c){for(var e={},f=0;f<a.length;f+=1){var g=a[f],h=b[g.name];void 0===h||d(h,g.value)||("SID"===g.type&&(h=t(h,c)),e[g.op]={name:g.name,type:g.type,value:h})}return e}function x(a,b){var c=new L.Table("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return c.dict=w(M,a,b),c}function y(a){var b=new L.Table("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return b.topDicts=[{name:"topDict_0",type:"TABLE",value:a}],b}function z(a){var b=new L.Table("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);b.strings=[];for(var c=0;c<a.length;c+=1)b.strings.push({name:"string_"+c,type:"STRING",value:a[c]});return b}function A(){return new L.Table("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function B(a,b){for(var c=new L.Table("Charsets",[{name:"format",type:"Card8",value:0}]),d=0;d<a.length;d+=1){var e=a[d],f=t(e,b);c.fields.push({name:"glyph_"+d,type:"SID",value:f})}return c}function C(a){var b=[],c=a.path;b.push({name:"width",type:"NUMBER",value:a.advanceWidth});for(var d=0,e=0,f=0;f<c.commands.length;f+=1){var g,h,i=c.commands[f];if("Q"===i.type){var j=1/3,k=2/3;i={type:"C",x:i.x,y:i.y,x1:j*d+k*i.x1,y1:j*e+k*i.y1,x2:j*i.x+k*i.x1,y2:j*i.y+k*i.y1}}if("M"===i.type)g=Math.round(i.x-d),h=Math.round(i.y-e),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rmoveto",type:"OP",value:21}),d=Math.round(i.x),e=Math.round(i.y);else if("L"===i.type)g=Math.round(i.x-d),h=Math.round(i.y-e),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rlineto",type:"OP",value:5}),d=Math.round(i.x),e=Math.round(i.y);else if("C"===i.type){var l=Math.round(i.x1-d),m=Math.round(i.y1-e),n=Math.round(i.x2-i.x1),o=Math.round(i.y2-i.y1);g=Math.round(i.x-i.x2),h=Math.round(i.y-i.y2),b.push({name:"dx1",type:"NUMBER",value:l}),b.push({name:"dy1",type:"NUMBER",value:m}),b.push({name:"dx2",type:"NUMBER",value:n}),b.push({name:"dy2",type:"NUMBER",value:o}),b.push({name:"dx",type:"NUMBER",value:g}),b.push({name:"dy",type:"NUMBER",value:h}),b.push({name:"rrcurveto",type:"OP",value:8}),d=Math.round(i.x),e=Math.round(i.y)}}return b.push({name:"endchar",type:"OP",value:14}),b}function D(a){for(var b=new L.Table("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),c=0;c<a.length;c+=1){var d=a.get(c),e=C(d);b.charStrings.push({name:d.name,type:"CHARSTRING",value:e})}return b}function E(a,b){var c=new L.Table("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return c.dict=w(N,a,b),c}function F(a){var b=new L.Table("Private DICT INDEX",[{name:"privateDicts",type:"INDEX",value:[]}]);return b.privateDicts=[{name:"privateDict_0",type:"TABLE",value:a}],b}function G(a,b){for(var c,d=new L.Table("CFF ",[{name:"header",type:"TABLE"},{name:"nameIndex",type:"TABLE"},{name:"topDictIndex",type:"TABLE"},{name:"stringIndex",type:"TABLE"},{name:"globalSubrIndex",type:"TABLE"},{name:"charsets",type:"TABLE"},{name:"charStringsIndex",type:"TABLE"},{name:"privateDictIndex",type:"TABLE"}]),e=1/b.unitsPerEm,f={version:b.version,fullName:b.fullName,familyName:b.familyName,weight:b.weightName,fontMatrix:[e,0,0,e,0,0],charset:999,encoding:0,charStrings:999,"private":[0,999]},g={},h=[],i=1;i<a.length;i+=1)c=a.get(i),h.push(c.name);var j=[];d.header=u(),d.nameIndex=v([b.postScriptName]);var k=x(f,j);d.topDictIndex=y(k),d.globalSubrIndex=A(),d.charsets=B(h,j),d.charStringsIndex=D(a);var l=E(g,j);d.privateDictIndex=F(l),d.stringIndex=z(j);var m=d.header.sizeOf()+d.nameIndex.sizeOf()+d.topDictIndex.sizeOf()+d.stringIndex.sizeOf()+d.globalSubrIndex.sizeOf();return f.charset=m,f.encoding=0,f.charStrings=f.charset+d.charsets.sizeOf(),f["private"][1]=f.charStrings+d.charStringsIndex.sizeOf(),k=x(f,j),d.topDictIndex=y(k),d}var H=a("../encoding"),I=a("../glyphset"),J=a("../parse"),K=a("../path"),L=a("../table"),M=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]}],N=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];c.parse=s,c.make=G},{"../encoding":4,"../glyphset":7,"../parse":9,"../path":10,"../table":11}],13:[function(a,b,c){"use strict";function d(a,b){var c,d={};d.version=i.getUShort(a,b),h.argument(0===d.version,"cmap table version should be 0."),d.numTables=i.getUShort(a,b+2);var e=-1;for(c=0;c<d.numTables;c+=1){var f=i.getUShort(a,b+4+8*c),g=i.getUShort(a,b+4+8*c+2);if(3===f&&(1===g||0===g)){e=i.getULong(a,b+4+8*c+4);break}}if(-1===e)return null;var j=new i.Parser(a,b+e);d.format=j.parseUShort(),h.argument(4===d.format,"Only format 4 cmap tables are supported."),d.length=j.parseUShort(),d.language=j.parseUShort();var k;d.segCount=k=j.parseUShort()>>1,j.skip("uShort",3),d.glyphIndexMap={};var l=new i.Parser(a,b+e+14),m=new i.Parser(a,b+e+16+2*k),n=new i.Parser(a,b+e+16+4*k),o=new i.Parser(a,b+e+16+6*k),p=b+e+16+8*k;for(c=0;k-1>c;c+=1)for(var q,r=l.parseUShort(),s=m.parseUShort(),t=n.parseShort(),u=o.parseUShort(),v=s;r>=v;v+=1)0!==u?(p=o.offset+o.relativeOffset-2,p+=u,p+=2*(v-s),q=i.getUShort(a,p),0!==q&&(q=q+t&65535)):q=v+t&65535,d.glyphIndexMap[v]=q;return d}function e(a,b,c){a.segments.push({end:b,start:b,delta:-(b-c),offset:0})}function f(a){a.segments.push({end:65535,start:65535,delta:1,offset:0})}function g(a){var b,c=new j.Table("cmap",[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:1},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:12},{name:"format",type:"USHORT",value:4},{name:"length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);for(c.segments=[],b=0;b<a.length;b+=1){for(var d=a.get(b),g=0;g<d.unicodes.length;g+=1)e(c,d.unicodes[g],b);c.segments=c.segments.sort(function(a,b){return a.start-b.start})}f(c);var h;h=c.segments.length,c.segCountX2=2*h,c.searchRange=2*Math.pow(2,Math.floor(Math.log(h)/Math.log(2))),c.entrySelector=Math.log(c.searchRange/2)/Math.log(2),c.rangeShift=c.segCountX2-c.searchRange;var i=[],k=[],l=[],m=[],n=[];for(b=0;h>b;b+=1){var o=c.segments[b];i=i.concat({name:"end_"+b,type:"USHORT",value:o.end}),k=k.concat({name:"start_"+b,type:"USHORT",value:o.start}),l=l.concat({name:"idDelta_"+b,type:"SHORT",value:o.delta}),m=m.concat({name:"idRangeOffset_"+b,type:"USHORT",value:o.offset}),void 0!==o.glyphId&&(n=n.concat({name:"glyph_"+b,type:"USHORT",value:o.glyphId}))}return c.fields=c.fields.concat(i),c.fields.push({name:"reservedPad",type:"USHORT",value:0}),c.fields=c.fields.concat(k),c.fields=c.fields.concat(l),c.fields=c.fields.concat(m),c.fields=c.fields.concat(n),c.length=14+2*i.length+2+2*k.length+2*l.length+2*m.length+2*n.length,c}var h=a("../check"),i=a("../parse"),j=a("../table");c.parse=d,c.make=g},{"../check":2,"../parse":9,"../table":11}],14:[function(a,b,c){"use strict";function d(a,b,c,d,e){var f;return(b&d)>0?(f=a.parseByte(),0===(b&e)&&(f=-f),f=c+f):f=(b&e)>0?c:c+a.parseShort(),f}function e(a,b,c){var e=new m.Parser(b,c);a.numberOfContours=e.parseShort(),a.xMin=e.parseShort(),a.yMin=e.parseShort(),a.xMax=e.parseShort(),a.yMax=e.parseShort();var f,g;if(a.numberOfContours>0){var h,i=a.endPointIndices=[];for(h=0;h<a.numberOfContours;h+=1)i.push(e.parseUShort());for(a.instructionLength=e.parseUShort(),a.instructions=[],h=0;h<a.instructionLength;h+=1)a.instructions.push(e.parseByte());var j=i[i.length-1]+1;for(f=[],h=0;j>h;h+=1)if(g=e.parseByte(),f.push(g),(8&g)>0)for(var l=e.parseByte(),n=0;l>n;n+=1)f.push(g),h+=1;if(k.argument(f.length===j,"Bad flags."),i.length>0){var o,p=[];if(j>0){for(h=0;j>h;h+=1)g=f[h],o={},o.onCurve=!!(1&g),o.lastPointOfContour=i.indexOf(h)>=0,p.push(o);var q=0;for(h=0;j>h;h+=1)g=f[h],o=p[h],o.x=d(e,g,q,2,16),q=o.x;var r=0;for(h=0;j>h;h+=1)g=f[h],o=p[h],o.y=d(e,g,r,4,32),r=o.y}a.points=p}else a.points=[]}else if(0===a.numberOfContours)a.points=[];else{a.isComposite=!0,a.points=[],a.components=[];for(var s=!0;s;){f=e.parseUShort();var t={glyphIndex:e.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(1&f)>0?(t.dx=e.parseShort(),t.dy=e.parseShort()):(t.dx=e.parseChar(),t.dy=e.parseChar()),(8&f)>0?t.xScale=t.yScale=e.parseF2Dot14():(64&f)>0?(t.xScale=e.parseF2Dot14(),t.yScale=e.parseF2Dot14()):(128&f)>0&&(t.xScale=e.parseF2Dot14(),t.scale01=e.parseF2Dot14(),t.scale10=e.parseF2Dot14(),t.yScale=e.parseF2Dot14()),a.components.push(t),s=!!(32&f)}}}function f(a,b){for(var c=[],d=0;d<a.length;d+=1){var e=a[d],f={x:b.xScale*e.x+b.scale01*e.y+b.dx,y:b.scale10*e.x+b.yScale*e.y+b.dy,onCurve:e.onCurve,lastPointOfContour:e.lastPointOfContour};c.push(f)}return c}function g(a){for(var b=[],c=[],d=0;d<a.length;d+=1){var e=a[d];c.push(e),e.lastPointOfContour&&(b.push(c),c=[])}return k.argument(0===c.length,"There are still points left in the current contour."),b}function h(a){var b=new n.Path;if(!a)return b;for(var c=g(a),d=0;d<c.length;d+=1){var e,f,h=c[d],i=h[0],j=h[h.length-1];i.onCurve?(e=null,f=!0):(i=j.onCurve?j:{x:(i.x+j.x)/2,y:(i.y+j.y)/2},e=i,f=!1),b.moveTo(i.x,i.y);for(var k=f?1:0;k<h.length;k+=1){var l=h[k],m=0===k?i:h[k-1];if(m.onCurve&&l.onCurve)b.lineTo(l.x,l.y);else if(m.onCurve&&!l.onCurve)e=l;else if(m.onCurve||l.onCurve){if(m.onCurve||!l.onCurve)throw new Error("Invalid state.");b.quadraticCurveTo(e.x,e.y,l.x,l.y),e=null}else{var o={x:(m.x+l.x)/2,y:(m.y+l.y)/2};b.quadraticCurveTo(m.x,m.y,o.x,o.y),e=l}}i!==j&&(e?b.quadraticCurveTo(e.x,e.y,i.x,i.y):b.lineTo(i.x,i.y))}return b.closePath(),b}function i(a,b){if(b.isComposite)for(var c=0;c<b.components.length;c+=1){var d=b.components[c],e=a.get(d.glyphIndex);if(e.points){var g=f(e.points,d);b.points=b.points.concat(g)}}return h(b.points)}function j(a,b,c,d){var f,g=new l.GlyphSet(d);for(f=0;f<c.length-1;f+=1){var h=c[f],j=c[f+1];h!==j?g.push(f,l.ttfGlyphLoader(d,f,e,a,b+h,i)):g.push(f,l.glyphLoader(d,f))}return g}var k=a("../check"),l=a("../glyphset"),m=a("../parse"),n=a("../path");c.parse=j},{"../check":2,"../glyphset":7,"../parse":9,"../path":10}],15:[function(a,b,c){"use strict";function d(a,b){for(var c=new k.Parser(a,b),d=c.parseUShort(),e=[],f=0;d>f;f++)e[c.parseTag()]={offset:c.parseUShort()};return e}function e(a,b){var c=new k.Parser(a,b),d=c.parseUShort(),e=c.parseUShort();if(1===d)return c.parseUShortList(e);if(2===d){for(var f=[];e--;)for(var g=c.parseUShort(),h=c.parseUShort(),i=c.parseUShort(),j=g;h>=j;j++)f[i++]=j;return f}}function f(a,b){var c=new k.Parser(a,b),d=c.parseUShort();if(1===d){var e=c.parseUShort(),f=c.parseUShort(),g=c.parseUShortList(f);return function(a){return g[a-e]||0}}if(2===d){for(var h=c.parseUShort(),i=[],j=[],l=[],m=0;h>m;m++)i[m]=c.parseUShort(),j[m]=c.parseUShort(),l[m]=c.parseUShort();return function(a){for(var b=0,c=i.length-1;c>b;){var d=b+c+1>>1;a<i[d]?c=d-1:b=d}return i[b]<=a&&a<=j[b]?l[b]||0:0}}}function g(a,b){var c,d,g=new k.Parser(a,b),h=g.parseUShort(),i=g.parseUShort(),j=e(a,b+i),l=g.parseUShort(),m=g.parseUShort();if(4===l&&0===m){var n={};if(1===h){for(var o=g.parseUShort(),p=[],q=g.parseOffset16List(o),r=0;o>r;r++){var s=q[r],t=n[s];if(!t){t={},g.relativeOffset=s;for(var u=g.parseUShort();u--;){var v=g.parseUShort();l&&(c=g.parseShort()),m&&(d=g.parseShort()),t[v]=c}}p[j[r]]=t}return function(a,b){var c=p[a];return c?c[b]:void 0}}if(2===h){for(var w=g.parseUShort(),x=g.parseUShort(),y=g.parseUShort(),z=g.parseUShort(),A=f(a,b+w),B=f(a,b+x),C=[],D=0;y>D;D++)for(var E=C[D]=[],F=0;z>F;F++)l&&(c=g.parseShort()),m&&(d=g.parseShort()),E[F]=c;var G={};for(D=0;D<j.length;D++)G[j[D]]=1;return function(a,b){if(G[a]){var c=A(a),d=B(b),e=C[c];return e?e[d]:void 0}}}}}function h(a,b){var c=new k.Parser(a,b),d=c.parseUShort(),e=c.parseUShort(),f=16&e,h=c.parseUShort(),i=c.parseOffset16List(h),j={lookupType:d,lookupFlag:e,markFilteringSet:f?c.parseUShort():-1};if(2===d){for(var l=[],m=0;h>m;m++)l.push(g(a,b+i[m]));j.getKerningValue=function(a,b){for(var c=l.length;c--;){var d=l[c](a,b);if(void 0!==d)return d}return 0}}return j}function i(a,b,c){var e=new k.Parser(a,b),f=e.parseFixed();j.argument(1===f,"Unsupported GPOS table version."),d(a,b+e.parseUShort()),d(a,b+e.parseUShort());var g=e.parseUShort();e.relativeOffset=g;for(var i=e.parseUShort(),l=e.parseOffset16List(i),m=b+g,n=0;i>n;n++){var o=h(a,m+l[n]);2!==o.lookupType||c.getGposKerningValue||(c.getGposKerningValue=o.getKerningValue)}}var j=a("../check"),k=a("../parse");c.parse=i},{"../check":2,"../parse":9}],16:[function(a,b,c){"use strict";function d(a,b){var c={},d=new g.Parser(a,b);return c.version=d.parseVersion(),c.fontRevision=Math.round(1e3*d.parseFixed())/1e3,c.checkSumAdjustment=d.parseULong(),c.magicNumber=d.parseULong(),f.argument(1594834165===c.magicNumber,"Font header has wrong magic number."),c.flags=d.parseUShort(),c.unitsPerEm=d.parseUShort(),c.created=d.parseLongDateTime(),c.modified=d.parseLongDateTime(),c.xMin=d.parseShort(),c.yMin=d.parseShort(),c.xMax=d.parseShort(),c.yMax=d.parseShort(),c.macStyle=d.parseUShort(),c.lowestRecPPEM=d.parseUShort(),c.fontDirectionHint=d.parseShort(),c.indexToLocFormat=d.parseShort(),c.glyphDataFormat=d.parseShort(),c}function e(a){return new h.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:0},{name:"modified",type:"LONGDATETIME",value:0},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],a)}var f=a("../check"),g=a("../parse"),h=a("../table");c.parse=d,c.make=e},{"../check":2,"../parse":9,"../table":11}],17:[function(a,b,c){"use strict";function d(a,b){var c={},d=new f.Parser(a,b);return c.version=d.parseVersion(),c.ascender=d.parseShort(),c.descender=d.parseShort(),c.lineGap=d.parseShort(),c.advanceWidthMax=d.parseUShort(),c.minLeftSideBearing=d.parseShort(),c.minRightSideBearing=d.parseShort(),c.xMaxExtent=d.parseShort(),c.caretSlopeRise=d.parseShort(),c.caretSlopeRun=d.parseShort(),c.caretOffset=d.parseShort(),d.relativeOffset+=8,c.metricDataFormat=d.parseShort(),c.numberOfHMetrics=d.parseUShort(),c}function e(a){return new g.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],a)}var f=a("../parse"),g=a("../table");c.parse=d,c.make=e},{"../parse":9,"../table":11}],18:[function(a,b,c){"use strict";function d(a,b,c,d,e){for(var g,h,i=new f.Parser(a,b),j=0;d>j;j+=1){c>j&&(g=i.parseUShort(),h=i.parseShort());var k=e.get(j);k.advanceWidth=g,k.leftSideBearing=h}}function e(a){for(var b=new g.Table("hmtx",[]),c=0;c<a.length;c+=1){var d=a.get(c),e=d.advanceWidth||0,f=d.leftSideBearing||0;b.fields.push({name:"advanceWidth_"+c,type:"USHORT",value:e}),b.fields.push({name:"leftSideBearing_"+c,type:"SHORT",value:f})}return b}var f=a("../parse"),g=a("../table");c.parse=d,c.make=e},{"../parse":9,"../table":11}],19:[function(a,b,c){"use strict";function d(a,b){var c={},d=new f.Parser(a,b),g=d.parseUShort();e.argument(0===g,"Unsupported kern table version."),d.skip("uShort",1);var h=d.parseUShort();e.argument(0===h,"Unsupported kern sub-table version."),d.skip("uShort",2);var i=d.parseUShort();d.skip("uShort",3);for(var j=0;i>j;j+=1){var k=d.parseUShort(),l=d.parseUShort(),m=d.parseShort();c[k+","+l]=m}return c}var e=a("../check"),f=a("../parse");c.parse=d},{"../check":2,"../parse":9}],20:[function(a,b,c){"use strict";function d(a,b,c,d){for(var f=new e.Parser(a,b),g=d?f.parseUShort:f.parseULong,h=[],i=0;c+1>i;i+=1){var j=g.call(f);d&&(j*=2),h.push(j)}return h}var e=a("../parse");c.parse=d},{"../parse":9}],21:[function(a,b,c){"use strict";function d(a,b){var c={},d=new f.Parser(a,b);return c.version=d.parseVersion(),c.numGlyphs=d.parseUShort(),1===c.version&&(c.maxPoints=d.parseUShort(),c.maxContours=d.parseUShort(),c.maxCompositePoints=d.parseUShort(),c.maxCompositeContours=d.parseUShort(),c.maxZones=d.parseUShort(),c.maxTwilightPoints=d.parseUShort(),c.maxStorage=d.parseUShort(),c.maxFunctionDefs=d.parseUShort(),c.maxInstructionDefs=d.parseUShort(),c.maxStackElements=d.parseUShort(),c.maxSizeOfInstructions=d.parseUShort(),c.maxComponentElements=d.parseUShort(),c.maxComponentDepth=d.parseUShort()),c}function e(a){return new g.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:a}])}var f=a("../parse"),g=a("../table");c.parse=d,c.make=e},{"../parse":9,"../table":11}],22:[function(a,b,c){"use strict";function d(a,b){var c={},d=new j.Parser(a,b);c.format=d.parseUShort();for(var e=d.parseUShort(),f=d.offset+d.parseUShort(),g=0,h=0;e>h;h++){var i=d.parseUShort(),k=d.parseUShort(),m=d.parseUShort(),n=d.parseUShort(),o=l[n],p=d.parseUShort(),q=d.parseUShort();if(3===i&&1===k&&1033===m){for(var r=[],s=p/2,t=0;s>t;t++,q+=2)r[t]=j.getShort(a,f+q);var u=String.fromCharCode.apply(null,r);o?c[o]=u:(g++,c["unknown"+g]=u)}}return 1===c.format&&(c.langTagCount=d.parseUShort()),c}function e(a,b,c,d,e,f){return new k.Table("NameRecord",[{name:"platformID",type:"USHORT",value:a},{name:"encodingID",type:"USHORT",value:b},{name:"languageID",type:"USHORT",value:c},{name:"nameID",type:"USHORT",value:d},{name:"length",type:"USHORT",value:e},{name:"offset",type:"USHORT",value:f}])}function f(a,b,c,d){var f=i.STRING(c);return a.records.push(e(1,0,0,b,f.length,d)),a.strings.push(f),d+=f.length}function g(a,b,c,d){var f=i.UTF16(c);return a.records.push(e(3,1,1033,b,f.length,d)),a.strings.push(f),d+=f.length}function h(a){var b=new k.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:0},{name:"stringOffset",type:"USHORT",value:0}]);b.records=[],b.strings=[];var c,d,e=0;for(c=0;c<l.length;c+=1)void 0!==a[l[c]]&&(d=a[l[c]],e=f(b,c,d,e));for(c=0;c<l.length;c+=1)void 0!==a[l[c]]&&(d=a[l[c]],e=g(b,c,d,e));for(b.count=b.records.length,b.stringOffset=6+12*b.count,c=0;c<b.records.length;c+=1)b.fields.push({name:"record_"+c,type:"TABLE",value:b.records[c]});for(c=0;c<b.strings.length;c+=1)b.fields.push({name:"string_"+c,type:"LITERAL",value:b.strings[c]});return b}var i=a("../types").encode,j=a("../parse"),k=a("../table"),l=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","licence","licenceURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"];c.parse=d,c.make=h},{"../parse":9,"../table":11,"../types":26}],23:[function(a,b,c){"use strict";function d(a){for(var b=0;b<i.length;b+=1){var c=i[b];if(a>=c.begin&&a<c.end)return b}return-1}function e(a,b){var c={},d=new g.Parser(a,b);c.version=d.parseUShort(),c.xAvgCharWidth=d.parseShort(),c.usWeightClass=d.parseUShort(),c.usWidthClass=d.parseUShort(),c.fsType=d.parseUShort(),c.ySubscriptXSize=d.parseShort(),c.ySubscriptYSize=d.parseShort(),c.ySubscriptXOffset=d.parseShort(),c.ySubscriptYOffset=d.parseShort(),c.ySuperscriptXSize=d.parseShort(),c.ySuperscriptYSize=d.parseShort(),c.ySuperscriptXOffset=d.parseShort(),c.ySuperscriptYOffset=d.parseShort(),c.yStrikeoutSize=d.parseShort(),c.yStrikeoutPosition=d.parseShort(),c.sFamilyClass=d.parseShort(),c.panose=[];for(var e=0;10>e;e++)c.panose[e]=d.parseByte();return c.ulUnicodeRange1=d.parseULong(),c.ulUnicodeRange2=d.parseULong(),c.ulUnicodeRange3=d.parseULong(),c.ulUnicodeRange4=d.parseULong(),c.achVendID=String.fromCharCode(d.parseByte(),d.parseByte(),d.parseByte(),d.parseByte()),c.fsSelection=d.parseUShort(),c.usFirstCharIndex=d.parseUShort(),c.usLastCharIndex=d.parseUShort(),c.sTypoAscender=d.parseShort(),c.sTypoDescender=d.parseShort(),c.sTypoLineGap=d.parseShort(),c.usWinAscent=d.parseUShort(),c.usWinDescent=d.parseUShort(),c.version>=1&&(c.ulCodePageRange1=d.parseULong(),c.ulCodePageRange2=d.parseULong()),c.version>=2&&(c.sxHeight=d.parseShort(),c.sCapHeight=d.parseShort(),c.usDefaultChar=d.parseUShort(),c.usBreakChar=d.parseUShort(),c.usMaxContent=d.parseUShort()),c}function f(a){return new h.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],a)}var g=a("../parse"),h=a("../table"),i=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,
end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];c.unicodeRanges=i,c.getUnicodeRange=d,c.parse=e,c.make=f},{"../parse":9,"../table":11}],24:[function(a,b,c){"use strict";function d(a,b){var c,d={},e=new g.Parser(a,b);switch(d.version=e.parseVersion(),d.italicAngle=e.parseFixed(),d.underlinePosition=e.parseShort(),d.underlineThickness=e.parseShort(),d.isFixedPitch=e.parseULong(),d.minMemType42=e.parseULong(),d.maxMemType42=e.parseULong(),d.minMemType1=e.parseULong(),d.maxMemType1=e.parseULong(),d.version){case 1:d.names=f.standardNames.slice();break;case 2:for(d.numberOfGlyphs=e.parseUShort(),d.glyphNameIndex=new Array(d.numberOfGlyphs),c=0;c<d.numberOfGlyphs;c++)d.glyphNameIndex[c]=e.parseUShort();for(d.names=[],c=0;c<d.numberOfGlyphs;c++)if(d.glyphNameIndex[c]>=f.standardNames.length){var h=e.parseChar();d.names.push(e.parseString(h))}break;case 2.5:for(d.numberOfGlyphs=e.parseUShort(),d.offset=new Array(d.numberOfGlyphs),c=0;c<d.numberOfGlyphs;c++)d.offset[c]=e.parseChar()}return d}function e(){return new h.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var f=a("../encoding"),g=a("../parse"),h=a("../table");c.parse=d,c.make=e},{"../encoding":4,"../parse":9,"../table":11}],25:[function(a,b,c){"use strict";function d(a){return Math.log(a)/Math.log(2)|0}function e(a){for(;a.length%4!==0;)a.push(0);for(var b=0,c=0;c<a.length;c+=4)b+=(a[c]<<24)+(a[c+1]<<16)+(a[c+2]<<8)+a[c+3];return b%=Math.pow(2,32)}function f(a,b,c,d){return new l.Table("Table Record",[{name:"tag",type:"TAG",value:void 0!==a?a:""},{name:"checkSum",type:"ULONG",value:void 0!==b?b:0},{name:"offset",type:"ULONG",value:void 0!==c?c:0},{name:"length",type:"ULONG",value:void 0!==d?d:0}])}function g(a){var b=new l.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);b.tables=a,b.numTables=a.length;var c=Math.pow(2,d(b.numTables));b.searchRange=16*c,b.entrySelector=d(c),b.rangeShift=16*b.numTables-b.searchRange;for(var g=[],h=[],i=b.sizeOf()+f().sizeOf()*b.numTables;i%4!==0;)i+=1,h.push({name:"padding",type:"BYTE",value:0});for(var j=0;j<a.length;j+=1){var m=a[j];k.argument(4===m.tableName.length,"Table name"+m.tableName+" is invalid.");var n=m.sizeOf(),o=f(m.tableName,e(m.encode()),i,n);for(g.push({name:o.tag+" Table Record",type:"TABLE",value:o}),h.push({name:m.tableName+" table",type:"TABLE",value:m}),i+=n,k.argument(!isNaN(i),"Something went wrong calculating the offset.");i%4!==0;)i+=1,h.push({name:"padding",type:"BYTE",value:0})}return g.sort(function(a,b){return a.value.tag>b.value.tag?1:-1}),b.fields=b.fields.concat(g),b.fields=b.fields.concat(h),b}function h(a,b,c){for(var d=0;d<b.length;d+=1){var e=a.charToGlyphIndex(b[d]);if(e>0){var f=a.glyphs.get(e);return f.getMetrics()}}return c}function i(a){for(var b=0,c=0;c<a.length;c+=1)b+=a[c];return b/a.length}function j(a){for(var b,c=[],d=[],f=[],j=[],k=[],l=[],v=[],w=0,x=0,y=0,z=0,A=0,B=0;B<a.glyphs.length;B+=1){var C=a.glyphs.get(B),D=0|C.unicode;(b>D||null===b)&&(b=D),D>w&&(w=D);var E=t.getUnicodeRange(D);if(32>E)x|=1<<E;else if(64>E)y|=1<<E-32;else if(96>E)z|=1<<E-64;else{if(!(123>E))throw new Error("Unicode ranges bits > 123 are reserved for internal usage");A|=1<<E-96}if(".notdef"!==C.name){var F=C.getMetrics();c.push(F.xMin),d.push(F.yMin),f.push(F.xMax),j.push(F.yMax),l.push(F.leftSideBearing),v.push(F.rightSideBearing),k.push(C.advanceWidth)}}var G={xMin:Math.min.apply(null,c),yMin:Math.min.apply(null,d),xMax:Math.max.apply(null,f),yMax:Math.max.apply(null,j),advanceWidthMax:Math.max.apply(null,k),advanceWidthAvg:i(k),minLeftSideBearing:Math.min.apply(null,l),maxLeftSideBearing:Math.max.apply(null,l),minRightSideBearing:Math.min.apply(null,v)};G.ascender=void 0!==a.ascender?a.ascender:G.yMax,G.descender=void 0!==a.descender?a.descender:G.yMin;var H=o.make({unitsPerEm:a.unitsPerEm,xMin:G.xMin,yMin:G.yMin,xMax:G.xMax,yMax:G.yMax}),I=p.make({ascender:G.ascender,descender:G.descender,advanceWidthMax:G.advanceWidthMax,minLeftSideBearing:G.minLeftSideBearing,minRightSideBearing:G.minRightSideBearing,xMaxExtent:G.maxLeftSideBearing+(G.xMax-G.xMin),numberOfHMetrics:a.glyphs.length}),J=r.make(a.glyphs.length),K=t.make({xAvgCharWidth:Math.round(G.advanceWidthAvg),usWeightClass:500,usWidthClass:5,usFirstCharIndex:b,usLastCharIndex:w,ulUnicodeRange1:x,ulUnicodeRange2:y,ulUnicodeRange3:z,ulUnicodeRange4:A,sTypoAscender:G.ascender,sTypoDescender:G.descender,sTypoLineGap:0,usWinAscent:G.ascender,usWinDescent:-G.descender,sxHeight:h(a,"xyvw",{yMax:0}).yMax,sCapHeight:h(a,"HIKLEFJMNTZBDPRAGOQSUVWXY",G).yMax,usBreakChar:a.hasChar(" ")?32:0}),L=q.make(a.glyphs),M=m.make(a.glyphs),N=a.familyName+" "+a.styleName,O=a.familyName.replace(/\s/g,"")+"-"+a.styleName,P=s.make({copyright:a.copyright,fontFamily:a.familyName,fontSubfamily:a.styleName,uniqueID:a.manufacturer+":"+N,fullName:N,version:a.version,postScriptName:O,trademark:a.trademark,manufacturer:a.manufacturer,designer:a.designer,description:a.description,manufacturerURL:a.manufacturerURL,designerURL:a.designerURL,license:a.license,licenseURL:a.licenseURL,preferredFamily:a.familyName,preferredSubfamily:a.styleName}),Q=u.make(),R=n.make(a.glyphs,{version:a.version,fullName:N,familyName:a.familyName,weightName:a.styleName,postScriptName:O,unitsPerEm:a.unitsPerEm}),S=[H,I,J,K,P,M,Q,R,L],T=g(S),U=T.encode(),V=e(U),W=T.fields,X=!1;for(B=0;B<W.length;B+=1)if("head table"===W[B].name){W[B].value.checkSumAdjustment=2981146554-V,X=!0;break}if(!X)throw new Error("Could not find head table with checkSum to adjust.");return T}var k=a("../check"),l=a("../table"),m=a("./cmap"),n=a("./cff"),o=a("./head"),p=a("./hhea"),q=a("./hmtx"),r=a("./maxp"),s=a("./name"),t=a("./os2"),u=a("./post");c.computeCheckSum=e,c.make=g,c.fontToTable=j},{"../check":2,"../table":11,"./cff":12,"./cmap":13,"./head":16,"./hhea":17,"./hmtx":18,"./maxp":21,"./name":22,"./os2":23,"./post":24}],26:[function(a,b,c){"use strict";function d(a){return function(){return a}}var e=a("./check"),f=32768,g=2147483648,h={},i={},j={};i.BYTE=function(a){return e.argument(a>=0&&255>=a,"Byte value should be between 0 and 255."),[a]},j.BYTE=d(1),i.CHAR=function(a){return[a.charCodeAt(0)]},j.BYTE=d(1),i.CHARARRAY=function(a){for(var b=[],c=0;c<a.length;c+=1)b.push(a.charCodeAt(c));return b},j.CHARARRAY=function(a){return a.length},i.USHORT=function(a){return[a>>8&255,255&a]},j.USHORT=d(2),i.SHORT=function(a){return a>=f&&(a=-(2*f-a)),[a>>8&255,255&a]},j.SHORT=d(2),i.UINT24=function(a){return[a>>16&255,a>>8&255,255&a]},j.UINT24=d(3),i.ULONG=function(a){return[a>>24&255,a>>16&255,a>>8&255,255&a]},j.ULONG=d(4),i.LONG=function(a){return a>=g&&(a=-(2*g-a)),[a>>24&255,a>>16&255,a>>8&255,255&a]},j.LONG=d(4),i.FIXED=i.ULONG,j.FIXED=j.ULONG,i.FWORD=i.SHORT,j.FWORD=j.SHORT,i.UFWORD=i.USHORT,j.UFWORD=j.USHORT,i.LONGDATETIME=function(){return[0,0,0,0,0,0,0,0]},j.LONGDATETIME=d(8),i.TAG=function(a){return e.argument(4===a.length,"Tag should be exactly 4 ASCII characters."),[a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2),a.charCodeAt(3)]},j.TAG=d(4),i.Card8=i.BYTE,j.Card8=j.BYTE,i.Card16=i.USHORT,j.Card16=j.USHORT,i.OffSize=i.BYTE,j.OffSize=j.BYTE,i.SID=i.USHORT,j.SID=j.USHORT,i.NUMBER=function(a){return a>=-107&&107>=a?[a+139]:a>=108&&1131>=a?(a-=108,[(a>>8)+247,255&a]):a>=-1131&&-108>=a?(a=-a-108,[(a>>8)+251,255&a]):a>=-32768&&32767>=a?i.NUMBER16(a):i.NUMBER32(a)},j.NUMBER=function(a){return i.NUMBER(a).length},i.NUMBER16=function(a){return[28,a>>8&255,255&a]},j.NUMBER16=d(2),i.NUMBER32=function(a){return[29,a>>24&255,a>>16&255,a>>8&255,255&a]},j.NUMBER32=d(4),i.REAL=function(a){var b=a.toString(),c=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(b);if(c){var d=parseFloat("1e"+((c[2]?+c[2]:0)+c[1].length));b=(Math.round(a*d)/d).toString()}var e,f,g="";for(e=0,f=b.length;f>e;e+=1){var h=b[e];g+="e"===h?"-"===b[++e]?"c":"b":"."===h?"a":"-"===h?"e":h}g+=1&g.length?"f":"ff";var i=[30];for(e=0,f=g.length;f>e;e+=2)i.push(parseInt(g.substr(e,2),16));return i},j.REAL=function(a){return i.REAL(a).length},i.NAME=i.CHARARRAY,j.NAME=j.CHARARRAY,i.STRING=i.CHARARRAY,j.STRING=j.CHARARRAY,i.UTF16=function(a){for(var b=[],c=0;c<a.length;c+=1)b.push(0),b.push(a.charCodeAt(c));return b},j.UTF16=function(a){return 2*a.length},i.INDEX=function(a){var b,c=1,d=[c],e=[],f=0;for(b=0;b<a.length;b+=1){var g=i.OBJECT(a[b]);Array.prototype.push.apply(e,g),f+=g.length,c+=g.length,d.push(c)}if(0===e.length)return[0,0];var h=[],j=1+Math.floor(Math.log(f)/Math.log(2))/8|0,k=[void 0,i.BYTE,i.USHORT,i.UINT24,i.ULONG][j];for(b=0;b<d.length;b+=1){var l=k(d[b]);Array.prototype.push.apply(h,l)}return Array.prototype.concat(i.Card16(a.length),i.OffSize(j),h,e)},j.INDEX=function(a){return i.INDEX(a).length},i.DICT=function(a){for(var b=[],c=Object.keys(a),d=c.length,e=0;d>e;e+=1){var f=parseInt(c[e],0),g=a[f];b=b.concat(i.OPERAND(g.value,g.type)),b=b.concat(i.OPERATOR(f))}return b},j.DICT=function(a){return i.DICT(a).length},i.OPERATOR=function(a){return 1200>a?[a]:[12,a-1200]},i.OPERAND=function(a,b){var c=[];if(Array.isArray(b))for(var d=0;d<b.length;d+=1)e.argument(a.length===b.length,"Not enough arguments given for type"+b),c=c.concat(i.OPERAND(a[d],b[d]));else if("SID"===b)c=c.concat(i.NUMBER(a));else if("offset"===b)c=c.concat(i.NUMBER32(a));else if("number"===b)c=c.concat(i.NUMBER(a));else{if("real"!==b)throw new Error("Unknown operand type "+b);c=c.concat(i.REAL(a))}return c},i.OP=i.BYTE,j.OP=j.BYTE;var k="function"==typeof WeakMap&&new WeakMap;i.CHARSTRING=function(a){if(k&&k.has(a))return k.get(a);for(var b=[],c=a.length,d=0;c>d;d+=1){var e=a[d];b=b.concat(i[e.type](e.value))}return k&&k.set(a,b),b},j.CHARSTRING=function(a){return i.CHARSTRING(a).length},i.OBJECT=function(a){var b=i[a.type];return e.argument(void 0!==b,"No encoding function for type "+a.type),b(a.value)},i.TABLE=function(a){for(var b=[],c=a.fields.length,d=0;c>d;d+=1){var f=a.fields[d],g=i[f.type];e.argument(void 0!==g,"No encoding function for field type "+f.type);var h=a[f.name];void 0===h&&(h=f.value);var j=g(h);b=b.concat(j)}return b},i.LITERAL=function(a){return a},j.LITERAL=function(a){return a.length},c.decode=h,c.encode=i,c.sizeOf=j},{"./check":2}],27:[function(_dereq_,module,exports){!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():"function"==typeof define&&define.amd?define(c):b[a]=c()}("reqwest",this,function(){function succeed(a){var b=protocolRe.exec(a.url);return b=b&&b[1]||window.location.protocol,httpsRe.test(b)?twoHundo.test(a.request.status):!!a.request.response}function handleReadyState(a,b,c){return function(){return a._aborted?c(a.request):a._timedOut?c(a.request,"Request is aborted: timeout"):void(a.request&&4==a.request[readyState]&&(a.request.onreadystatechange=noop,succeed(a)?b(a.request):c(a.request)))}}function setHeaders(a,b){var c,d=b.headers||{};d.Accept=d.Accept||defaultHeaders.accept[b.type]||defaultHeaders.accept["*"];var e="function"==typeof FormData&&b.data instanceof FormData;b.crossOrigin||d[requestedWith]||(d[requestedWith]=defaultHeaders.requestedWith),d[contentType]||e||(d[contentType]=b.contentType||defaultHeaders.contentType);for(c in d)d.hasOwnProperty(c)&&"setRequestHeader"in a&&a.setRequestHeader(c,d[c])}function setCredentials(a,b){"undefined"!=typeof b.withCredentials&&"undefined"!=typeof a.withCredentials&&(a.withCredentials=!!b.withCredentials)}function generalCallback(a){lastValue=a}function urlappend(a,b){return a+(/\?/.test(a)?"&":"?")+b}function handleJsonp(a,b,c,d){var e=uniqid++,f=a.jsonpCallback||"callback",g=a.jsonpCallbackName||reqwest.getcallbackPrefix(e),h=new RegExp("((^|\\?|&)"+f+")=([^&]+)"),i=d.match(h),j=doc.createElement("script"),k=0,l=-1!==navigator.userAgent.indexOf("MSIE 10.0");return i?"?"===i[3]?d=d.replace(h,"$1="+g):g=i[3]:d=urlappend(d,f+"="+g),win[g]=generalCallback,j.type="text/javascript",j.src=d,j.async=!0,"undefined"==typeof j.onreadystatechange||l||(j.htmlFor=j.id="_reqwest_"+e),j.onload=j.onreadystatechange=function(){return j[readyState]&&"complete"!==j[readyState]&&"loaded"!==j[readyState]||k?!1:(j.onload=j.onreadystatechange=null,j.onclick&&j.onclick(),b(lastValue),lastValue=void 0,head.removeChild(j),void(k=1))},head.appendChild(j),{abort:function(){j.onload=j.onreadystatechange=null,c({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(j),k=1}}}function getRequest(a,b){var c,d=this.o,e=(d.method||"GET").toUpperCase(),f="string"==typeof d?d:d.url,g=d.processData!==!1&&d.data&&"string"!=typeof d.data?reqwest.toQueryString(d.data):d.data||null,h=!1;return"jsonp"!=d.type&&"GET"!=e||!g||(f=urlappend(f,g),g=null),"jsonp"==d.type?handleJsonp(d,a,b,f):(c=d.xhr&&d.xhr(d)||xhr(d),c.open(e,f,d.async===!1?!1:!0),setHeaders(c,d),setCredentials(c,d),win[xDomainRequest]&&c instanceof win[xDomainRequest]?(c.onload=a,c.onerror=b,c.onprogress=function(){},h=!0):c.onreadystatechange=handleReadyState(this,a,b),d.before&&d.before(c),h?setTimeout(function(){c.send(g)},200):c.send(g),c)}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function setType(a){return a.match("json")?"json":a.match("javascript")?"js":a.match("text")?"html":a.match("xml")?"xml":void 0}function init(o,fn){function complete(a){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(a)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(a,b,c){for(a=self.request,self._responseArgs.resp=a,self._responseArgs.msg=b,self._responseArgs.t=c,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(a,b,c);complete(a)}this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(a,b){return new Reqwest(a,b)}function normalize(a){return a?a.replace(/\r?\n/g,"\r\n"):""}function serial(a,b){var c,d,e,f,g=a.name,h=a.tagName.toLowerCase(),i=function(a){a&&!a.disabled&&b(g,normalize(a.attributes.value&&a.attributes.value.specified?a.value:a.text))};if(!a.disabled&&g)switch(h){case"input":/reset|button|image|file/i.test(a.type)||(c=/checkbox/i.test(a.type),d=/radio/i.test(a.type),e=a.value,(!(c||d)||a.checked)&&b(g,normalize(c&&""===e?"on":e)));break;case"textarea":b(g,normalize(a.value));break;case"select":if("select-one"===a.type.toLowerCase())i(a.selectedIndex>=0?a.options[a.selectedIndex]:null);else for(f=0;a.length&&f<a.length;f++)a.options[f].selected&&i(a.options[f])}}function eachFormElement(){var a,b,c=this,d=function(a,b){var d,e,f;for(d=0;d<b.length;d++)for(f=a[byTag](b[d]),e=0;e<f.length;e++)serial(f[e],c)};for(b=0;b<arguments.length;b++)a=arguments[b],/input|select|textarea/i.test(a.tagName)&&serial(a,c),d(a,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var a={};return eachFormElement.apply(function(b,c){b in a?(a[b]&&!isArray(a[b])&&(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}function buildParams(a,b,c,d){var e,f,g,h=/\[\]$/;if(isArray(b))for(f=0;b&&f<b.length;f++)g=b[f],c||h.test(a)?d(a,g):buildParams(a+"["+("object"==typeof g?f:"")+"]",g,c,d);else if(b&&"[object Object]"===b.toString())for(e in b)buildParams(a+"["+e+"]",b[e],c,d);else d(a,b)}var win=window,doc=document,httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(a){return a instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(a){if(a.crossOrigin===!0){var b=win[xmlHttpRequest]?new XMLHttpRequest:null;if(b&&"withCredentials"in b)return b;if(win[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return win[xmlHttpRequest]?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(a){return a}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(a,b){return a=a||function(){},b=b||function(){},this._fulfilled?this._responseArgs.resp=a(this._responseArgs.resp):this._erred?b(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(a),this._errorHandlers.push(b)),this},always:function(a){return this._fulfilled||this._erred?a(this._responseArgs.resp):this._completeHandlers.push(a),this},fail:function(a){return this._erred?a(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(a),this},"catch":function(a){return this.fail(a)}},reqwest.serializeArray=function(){var a=[];return eachFormElement.apply(function(b,c){a.push({name:b,value:c})},arguments),a},reqwest.serialize=function(){if(0===arguments.length)return"";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a&&a.nodeType&&c.push(a)&&(a=null),a&&(a=a.type),b="map"==a?serializeHash:"array"==a?reqwest.serializeArray:serializeQueryString,b.apply(null,c)},reqwest.toQueryString=function(a,b){var c,d,e=b||!1,f=[],g=encodeURIComponent,h=function(a,b){b="function"==typeof b?b():null==b?"":b,f[f.length]=g(a)+"="+g(b)};if(isArray(a))for(d=0;a&&d<a.length;d++)h(a[d].name,a[d].value);else for(c in a)a.hasOwnProperty(c)&&buildParams(c,a[c],e,h);return f.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(a,b){return a&&(a.type&&(a.method=a.type)&&delete a.type,a.dataType&&(a.type=a.dataType),a.jsonpCallback&&(a.jsonpCallbackName=a.jsonpCallback)&&delete a.jsonpCallback,a.jsonp&&(a.jsonpCallback=a.jsonp)),new Reqwest(a,b)},reqwest.ajaxSetup=function(a){a=a||{};for(var b in a)globalSetupOptions[b]=a[b]},reqwest})},{}],28:[function(a,b,c){"use strict";var d=a("../core/core");a("./p5.Geometry3D"),d.prototype.plane=function(a,b){a=a||50,b=b||50;var c=typeof arguments[2]===Number?arguments[2]:1,e=typeof arguments[3]===Number?arguments[3]:1,f="plane|"+a+"|"+b+"|"+c+"|"+e;if(!this._renderer.geometryInHash(f)){var g=new d.Geometry3D,h=function(c,e){var f=2*a*c-a,g=2*b*e-b,h=0;return new d.Vector(f,g,h)};g.parametricGeometry(h,c,e);var i=g.generateObj();this._renderer.initBuffer(f,[i])}this._renderer.drawBuffer(f)},d.prototype.sphere=function(a,b){a=a||50;var c=b||24,e=b||16,f="sphere|"+a+"|"+c+"|"+e;if(!this._renderer.geometryInHash(f)){var g=new d.Geometry3D,h=function(b,c){var e=2*Math.PI*b,f=Math.PI*c-Math.PI/2,g=a*Math.cos(f)*Math.sin(e),h=a*Math.sin(f),i=a*Math.cos(f)*Math.cos(e);return new d.Vector(g,h,i)};g.parametricGeometry(h,c,e);var i=g.generateObj(!0,!0);this._renderer.initBuffer(f,[i])}return this._renderer.drawBuffer(f),this},d.prototype.ellipsoid=function(a,b,c,e){a=a||50,b=b||50,c=c||50;var f=e||24,g=e||24,h="ellipsoid|"+a+"|"+b+"|"+c+"|"+f+"|"+g;if(!this._renderer.geometryInHash(h)){var i=new d.Geometry3D,j=function(e,f){var g=2*Math.PI*e,h=Math.PI*f-Math.PI/2,i=a*Math.cos(h)*Math.sin(g),j=b*Math.sin(h),k=c*Math.cos(h)*Math.cos(g);return new d.Vector(i,j,k)};i.parametricGeometry(j,f,g);var k=i.generateObj(!0,!0);this._renderer.initBuffer(h,[k])}return this._renderer.drawBuffer(h),this},d.prototype.cylinder=function(a,b,c){a=a||50,b=b||50;var e=c||24,f=c||16,g="cylinder|"+a+"|"+b+"|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry3D,i=function(c,e){var f=2*Math.PI*c,g=a*Math.sin(f),h=2*b*e-b,i=a*Math.cos(f);return new d.Vector(g,h,i)};h.parametricGeometry(i,e,f);var j=h.generateObj(!0),k=function(c,e){var f=2*Math.PI*c,g=a*Math.sin(-f),h=b,i=a*Math.cos(f);return 0===e?new d.Vector(0,b,0):new d.Vector(g,h,i)},l=new d.Geometry3D;l.parametricGeometry(k,e,1);var m=l.generateObj(),n=function(c,e){var f=2*Math.PI*c,g=a*Math.sin(f),h=-b,i=a*Math.cos(f);return 0===e?new d.Vector(0,-b,0):new d.Vector(g,h,i)},o=new d.Geometry3D;o.parametricGeometry(n,e,1);var p=o.generateObj();this._renderer.initBuffer(g,[j,m,p])}return this._renderer.drawBuffer(g),this},d.prototype.cone=function(a,b,c){a=a||50,b=b||50;var e=c||24,f=c||16,g="cone|"+a+"|"+b+"|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry3D,i=function(c,e){var f=2*Math.PI*c,g=a*(1-e)*Math.sin(f),h=2*b*e-b,i=a*(1-e)*Math.cos(f);return new d.Vector(g,h,i)};h.parametricGeometry(i,e,f);var j=h.generateObj(!0),k=new d.Geometry3D,l=function(c,e){var f=2*Math.PI*c,g=a*(1-e)*Math.sin(-f),h=-b,i=a*(1-e)*Math.cos(f);return new d.Vector(g,h,i)};k.parametricGeometry(l,e,1);var m=k.generateObj();this._renderer.initBuffer(g,[j,m])}return this._renderer.drawBuffer(g),this},d.prototype.torus=function(a,b,c){a=a||50,b=b||10;var e=c||24,f=c||16,g="torus|"+a+"|"+b+"|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry3D,i=function(c,e){var f=2*Math.PI*c,g=2*Math.PI*e,h=(a+b*Math.cos(g))*Math.cos(f),i=(a+b*Math.cos(g))*Math.sin(f),j=b*Math.sin(g);return new d.Vector(h,i,j)};h.parametricGeometry(i,e,f);var j=h.generateObj(!0);this._renderer.initBuffer(g,[j])}return this._renderer.drawBuffer(g),this},d.prototype.box=function(a,b,c){a=a||50,b=b||a,c=c||a;var e=typeof arguments[3]===Number?arguments[3]:1,f=typeof arguments[4]===Number?arguments[4]:1,g="cube|"+a+"|"+b+"|"+c+"|"+e+"|"+f;if(!this._renderer.geometryInHash(g)){var h=new d.Geometry3D,i=function(e,f){var g=2*a*e-a,h=2*b*f-b,i=c;return new d.Vector(g,h,i)},j=function(e,f){var g=2*a*(1-e)-a,h=2*b*f-b,i=-c;return new d.Vector(g,h,i)},k=function(e,f){var g=2*a*(1-e)-a,h=b,i=2*c*f-c;return new d.Vector(g,h,i)},l=function(e,f){var g=2*a*e-a,h=-b,i=2*c*f-c;return new d.Vector(g,h,i)},m=function(e,f){var g=a,h=2*b*e-b,i=2*c*f-c;return new d.Vector(g,h,i)},n=function(e,f){var g=-a,h=2*b*(1-e)-b,i=2*c*f-c;return new d.Vector(g,h,i)};h.parametricGeometry(i,e,f,h.vertices.length),h.parametricGeometry(j,e,f,h.vertices.length),h.parametricGeometry(k,e,f,h.vertices.length),h.parametricGeometry(l,e,f,h.vertices.length),h.parametricGeometry(m,e,f,h.vertices.length),h.parametricGeometry(n,e,f,h.vertices.length);var o=h.generateObj();this._renderer.initBuffer(g,[o])}return this._renderer.drawBuffer(g),this},b.exports=d},{"../core/core":48,"./p5.Geometry3D":34}],29:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.camera=function(a,b,c){for(var d=new Array(arguments.length),e=0;e<d.length;++e)d[e]=arguments[e];this._validateParameters("camera",d,["Number","Number","Number"]),this._renderer.translate(-a,-b,-c)},d.prototype.perspective=function(a,b,c,e){for(var f=new Array(arguments.length),g=0;g<f.length;++g)f[g]=arguments[g];this._validateParameters("perspective",f,["Number","Number","Number","Number"]),this._renderer.uPMatrix=d.Matrix.identity(),this._renderer.uPMatrix.perspective(a,b,c,e),this._renderer._setCamera=!0},d.prototype.ortho=function(a,b,c,e,f,g){for(var h=new Array(arguments.length),i=0;i<h.length;++i)h[i]=arguments[i];this._validateParameters("ortho",h,["Number","Number","Number","Number","Number","Number"]),a/=this.width,b/=this.width,e/=this.height,c/=this.height,this._renderer.uPMatrix=d.Matrix.identity(),this._renderer.uPMatrix.ortho(a,b,c,e,f,g),this._renderer._setCamera=!0},b.exports=d},{"../core/core":48}],30:[function(a,b,c){"use strict";var d=a("../core/core");d.Renderer3D.prototype._primitives2D=function(a){this._setDefaultCamera();var b=this.GL,c=this._getColorVertexShader(),d=this.verticeBuffer;b.bindBuffer(b.ARRAY_BUFFER,d),b.bufferData(b.ARRAY_BUFFER,new Float32Array(a),b.STATIC_DRAW),b.vertexAttribPointer(c.vertexPositionAttribute,3,b.FLOAT,!1,0,0);var e=this.colorBuffer;b.bindBuffer(b.ARRAY_BUFFER,e);for(var f=this._getCurColor(),g=[],h=0;h<a.length/3;h++)g=g.concat(f);b.bufferData(b.ARRAY_BUFFER,new Float32Array(g),b.STATIC_DRAW),b.vertexAttribPointer(c.vertexColorAttribute,4,b.FLOAT,!1,0,0);var i="vertexColorVert|vertexColorFrag";this.setMatrixUniforms(i)},d.Renderer3D.prototype.point=function(a,b,c){var d=this.GL;return this._primitives2D([a,b,c]),d.drawArrays(d.POINTS,0,1),this},d.Renderer3D.prototype.line=function(a,b,c,d,e,f){var g=this.GL;return this._primitives2D([a,b,c,d,e,f]),g.drawArrays(g.LINES,0,2),this},d.Renderer3D.prototype.triangle=function(a,b,c,d,e,f,g,h,i){var j=this.GL;return this._primitives2D([a,b,c,d,e,f,g,h,i]),this._strokeCheck(),j.drawArrays(j.TRIANGLES,0,3),this},d.Renderer3D.prototype.quad=function(a,b,c,d,e,f,g,h,i,j,k,l){var m=this.GL;return this._primitives2D([a,b,c,d,e,f,g,h,i,j,k,l]),this._strokeCheck(),m.drawArrays(m.TRIANGLE_STRIP,0,4),this},d.Renderer3D.prototype.beginShape=function(a){return this.shapeMode=a,this.verticeStack=[],this},d.Renderer3D.prototype.vertex=function(a,b,c){return this.verticeStack.push(a,b,c),this},d.Renderer3D.prototype.endShape=function(){var a=this.GL;switch(this._primitives2D(this.verticeStack),this.verticeStack=[],this.shapeMode){case"POINTS":a.drawArrays(a.POINTS,0,1);break;case"LINES":a.drawArrays(a.LINES,0,2);break;case"TRIANGLES":this._strokeCheck(),a.drawArrays(a.TRIANGLES,0,3);break;case"TRIANGLE_STRIP":this._strokeCheck(),a.drawArrays(a.TRIANGLE_STRIP,0,4);break;default:this._strokeCheck(),a.drawArrays(a.TRIANGLES,0,3)}return this},d.Renderer3D.prototype._strokeCheck=function(){if("stroke"===this.drawMode)throw new Error("stroke for shapes in 3D not yet implemented, use fill for now :(")},d.Renderer3D.prototype.strokeWeight=function(){throw new Error("strokeWeight for 3d not yet implemented")},d.Renderer3D.prototype.fill=function(a,b,c,d){var e=this._pInst.color.apply(this,arguments),f=e._array;return this.curColor=f,this.drawMode="fill",this},d.Renderer3D.prototype.stroke=function(a,b,c,d){var e=this._pInst.color.apply(this,arguments),f=e._array;return this.curColor=f,this.drawMode="stroke",this},d.Renderer3D.prototype._getColorVertexShader=function(){var a,b=this.GL,c="vertexColorVert|vertexColorFrag";return this.materialInHash(c)?a=this.mHash[c]:(a=this.initShaders("vertexColorVert","vertexColorFrag",!0),this.mHash[c]=a,a.vertexColorAttribute=b.getAttribLocation(a,"aVertexColor"),b.enableVertexAttribArray(a.vertexColorAttribute)),a},b.exports=d.Renderer3D},{"../core/core":48}],31:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.orbitControl=function(){return this.mouseIsPressed&&(this.rotateY((this.mouseX-this.width/2)/(this.width/2)),this.rotateX((this.mouseY-this.height/2)/(this.width/2))),this},b.exports=d},{"../core/core":48}],32:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.ambientLight=function(a,b,c,d){var e=this._renderer.GL,f=this._renderer._getShader("lightVert","lightTextureFrag");e.useProgram(f),f.uAmbientColor=e.getUniformLocation(f,"uAmbientColor["+this._renderer.ambientLightCount+"]");var g=this._renderer._pInst.color.apply(this._renderer._pInst,arguments),h=g._array;return e.uniform3f(f.uAmbientColor,h[0],h[1],h[2]),f.uMaterialColor=e.getUniformLocation(f,"uMaterialColor"),e.uniform4f(f.uMaterialColor,1,1,1,1),this._renderer.ambientLightCount++,f.uAmbientLightCount=e.getUniformLocation(f,"uAmbientLightCount"),e.uniform1i(f.uAmbientLightCount,this._renderer.ambientLightCount),this},d.prototype.directionalLight=function(a,b,c,d,e,f,g){var h=this._renderer.GL,i=this._renderer._getShader("lightVert","lightTextureFrag");h.useProgram(i),i.uDirectionalColor=h.getUniformLocation(i,"uDirectionalColor["+this._renderer.directionalLightCount+"]");var j=this._renderer._pInst.color.apply(this._renderer._pInst,[a,b,c]),k=j._array;h.uniform3f(i.uDirectionalColor,k[0],k[1],k[2]);var l,m,n;if("number"==typeof arguments[arguments.length-1])l=arguments[arguments.length-3],m=arguments[arguments.length-2],n=arguments[arguments.length-1];else try{l=arguments[arguments.length-1].x,m=arguments[arguments.length-1].y,n=arguments[arguments.length-1].z}catch(o){throw o}return i.uLightingDirection=h.getUniformLocation(i,"uLightingDirection["+this._renderer.directionalLightCount+"]"),h.uniform3f(i.uLightingDirection,l,m,n),i.uMaterialColor=h.getUniformLocation(i,"uMaterialColor"),h.uniform4f(i.uMaterialColor,1,1,1,1),this._renderer.directionalLightCount++,i.uDirectionalLightCount=h.getUniformLocation(i,"uDirectionalLightCount"),h.uniform1i(i.uDirectionalLightCount,this._renderer.directionalLightCount),this},d.prototype.pointLight=function(a,b,c,d,e,f,g){var h=this._renderer.GL,i=this._renderer._getShader("lightVert","lightTextureFrag");h.useProgram(i),i.uPointLightColor=h.getUniformLocation(i,"uPointLightColor["+this._renderer.pointLightCount+"]");var j=this._renderer._pInst.color.apply(this._renderer._pInst,[a,b,c]),k=j._array;h.uniform3f(i.uPointLightColor,k[0],k[1],k[2]);var l,m,n;if("number"==typeof arguments[arguments.length-1])l=arguments[arguments.length-3],m=arguments[arguments.length-2],n=arguments[arguments.length-1];else try{l=arguments[arguments.length-1].x,m=arguments[arguments.length-1].y,n=arguments[arguments.length-1].z}catch(o){throw o}return i.uPointLightLocation=h.getUniformLocation(i,"uPointLightLocation["+this._renderer.pointLightCount+"]"),h.uniform3f(i.uPointLightLocation,l,m,n),i.uMaterialColor=h.getUniformLocation(i,"uMaterialColor"),h.uniform4f(i.uMaterialColor,1,1,1,1),this._renderer.pointLightCount++,i.uPointLightCount=h.getUniformLocation(i,"uPointLightCount"),h.uniform1i(i.uPointLightCount,this._renderer.pointLightCount),this},b.exports=d},{"../core/core":48}],33:[function(a,b,c){"use strict";function d(a){return 0===(a&a-1)}var e=a("../core/core");e.prototype.normalMaterial=function(){return this._renderer._getShader("normalVert","normalFrag"),this},e.prototype.texture=function(a){
var b=this._renderer.GL,c=this._renderer._getShader("lightVert","lightTextureFrag");if(b.useProgram(c),a instanceof e.Image){if(!a.isTexture){var f=b.createTexture();a.createTexture(f),b.bindTexture(b.TEXTURE_2D,f),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,1),a._setProperty("isTexture",!0)}a.loadPixels();var g=new Uint8Array(a.pixels);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,a.width,a.height,0,b.RGBA,b.UNSIGNED_BYTE,g)}else if(a instanceof e.MediaElement){if(!a.loadedmetadata)return;b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.elt)}return d(a.width)&&d(a.height)?b.generateMipmap(b.TEXTURE_2D):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.uniform1i(b.getUniformLocation(c,"uSampler"),0),b.uniform1i(b.getUniformLocation(c,"isTexture"),!0),this},e.prototype.basicMaterial=function(a,b,c,d){var e=this._renderer.GL,f=this._renderer._getShader("normalVert","basicFrag");e.useProgram(f),f.uMaterialColor=e.getUniformLocation(f,"uMaterialColor");var g=this._renderer._pInst.color.apply(this._renderer._pInst,arguments),h=g._array;return e.uniform4f(f.uMaterialColor,h[0],h[1],h[2],h[3]),this},e.prototype.ambientMaterial=function(a,b,c,d){var e=this._renderer.GL,f=this._renderer._getShader("lightVert","lightTextureFrag");e.useProgram(f),f.uMaterialColor=e.getUniformLocation(f,"uMaterialColor");var g=this._renderer._pInst.color.apply(this._renderer._pInst,arguments),h=g._array;return e.uniform4f(f.uMaterialColor,h[0],h[1],h[2],h[3]),f.uSpecular=e.getUniformLocation(f,"uSpecular"),e.uniform1i(f.uSpecular,!1),e.uniform1i(e.getUniformLocation(f,"isTexture"),!1),this},e.prototype.specularMaterial=function(a,b,c,d){var e=this._renderer.GL,f=this._renderer._getShader("lightVert","lightTextureFrag");e.uniform1i(e.getUniformLocation(f,"isTexture"),!1),e.useProgram(f),f.uMaterialColor=e.getUniformLocation(f,"uMaterialColor");var g=this._renderer._pInst.color.apply(this._renderer._pInst,arguments),h=g._array;return e.uniform4f(f.uMaterialColor,h[0],h[1],h[2],h[3]),f.uSpecular=e.getUniformLocation(f,"uSpecular"),e.uniform1i(f.uSpecular,!0),this},b.exports=e},{"../core/core":48}],34:[function(a,b,c){"use strict";function d(a){return a.reduce(function(a,b){return a.concat(b)})}function e(a){return d(a.map(function(a){return[a.x,a.y,a.z]}))}var f=a("../core/core");f.Geometry3D=function(){this.vertices=[],this.vertexNormals=[],this.faces=[],this.faceNormals=[],this.uvs=[]},f.Geometry3D.prototype.parametricGeometry=function(a,b,c,d){var e,f,g,h,i;d=d||0,this.detailX=b,this.detailY=c;var j=b+1;for(e=0;c>=e;e++)for(i=e/c,f=0;b>=f;f++)h=f/b,g=a(h,i),this.vertices.push(g);var k,l,m,n,o,p,q,r;for(e=0;c>e;e++)for(f=0;b>f;f++)k=e*j+f+d,l=e*j+f+1+d,m=(e+1)*j+f+1+d,n=(e+1)*j+f+d,o=[f/b,e/c],p=[(f+1)/b,e/c],q=[(f+1)/b,(e+1)/c],r=[f/b,(e+1)/c],this.faces.push([k,l,n]),this.uvs.push([o,p,r]),this.faces.push([l,m,n]),this.uvs.push([p,q,r])},f.Geometry3D.prototype.computeFaceNormals=function(){for(var a=new f.Vector,b=new f.Vector,c=0;c<this.faces.length;c++){var d=this.faces[c],e=this.vertices[d[0]],g=this.vertices[d[1]],h=this.vertices[d[2]];f.Vector.sub(h,g,a),f.Vector.sub(e,g,b);var i=f.Vector.cross(b,a);i.normalize(),i.mult(-1),this.faceNormals[c]=i}},f.Geometry3D.prototype.computeVertexNormals=function(){var a,b,c,d,e,g=[];for(e=new Array(this.vertices.length),a=0;a<this.vertices.length;a++)e[a]=new f.Vector;for(b=0;b<this.faces.length;b++)c=this.faces[b],d=this.faceNormals[b],e[c[0]].add(d),e[c[1]].add(d),e[c[2]].add(d);for(a=0;a<this.vertices.length;a++)e[a].normalize();for(b=0;b<this.faces.length;b++)c=this.faces[b],g[b]=[],g[b][0]=e[c[0]].copy(),g[b][1]=e[c[1]].copy(),g[b][2]=e[c[2]].copy();for(b=0;b<this.faces.length;b++)c=this.faces[b],d=this.faceNormals[b],this.vertexNormals[c[0]]=g[b][0],this.vertexNormals[c[1]]=g[b][1],this.vertexNormals[c[2]]=g[b][2]},f.Geometry3D.prototype.averageNormals=function(){for(var a=0;a<=this.detailY;a++){var b=this.detailX+1,c=f.Vector.add(this.vertexNormals[a*b],this.vertexNormals[a*b+this.detailX]);c=f.Vector.div(c,2),this.vertexNormals[a*b]=c,this.vertexNormals[a*b+this.detailX]=c}},f.Geometry3D.prototype.averagePoleNormals=function(){for(var a=new f.Vector(0,0,0),b=0;b<this.detailX;b++)a.add(this.vertexNormals[b]);for(a=f.Vector.div(a,this.detailX),b=0;b<this.detailX;b++)this.vertexNormals[b]=a;for(a=new f.Vector(0,0,0),b=this.vertices.length-1;b>this.vertices.length-1-this.detailX;b--)a.add(this.vertexNormals[b]);for(a=f.Vector.div(a,this.detailX),b=this.vertices.length-1;b>this.vertices.length-1-this.detailX;b--)this.vertexNormals[b]=a},f.Geometry3D.prototype.generateUV=function(a,b){a=d(a),b=d(b);var c=[];return a.forEach(function(a,d){c[a]=b[d]}),d(c)},f.Geometry3D.prototype.generateObj=function(a,b){this.computeFaceNormals(),this.computeVertexNormals(),a&&this.averageNormals(),b&&this.averagePoleNormals();var c={vertices:e(this.vertices),vertexNormals:e(this.vertexNormals),uvs:this.generateUV(this.faces,this.uvs),faces:d(this.faces),len:3*this.faces.length};return c},b.exports=f.Geometry3D},{"../core/core":48}],35:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../math/polargeometry"),f=a("../core/constants"),g="undefined"!=typeof Float32Array?Float32Array:Array;d.Matrix=function(){return arguments[0]instanceof d?(this.p5=arguments[0],this.mat4=arguments[1]||new g([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])):this.mat4=arguments[0]||new g([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this},d.Matrix.prototype.set=function(a){return a instanceof d.Matrix?(this.mat4=a.mat4,this):a instanceof g?(this.mat4=a,this):this},d.Matrix.prototype.get=function(){return new d.Matrix(this.mat4)},d.Matrix.prototype.copy=function(){var a=new d.Matrix;return a.mat4[0]=this.mat4[0],a.mat4[1]=this.mat4[1],a.mat4[2]=this.mat4[2],a.mat4[3]=this.mat4[3],a.mat4[4]=this.mat4[4],a.mat4[5]=this.mat4[5],a.mat4[6]=this.mat4[6],a.mat4[7]=this.mat4[7],a.mat4[8]=this.mat4[8],a.mat4[9]=this.mat4[9],a.mat4[10]=this.mat4[10],a.mat4[11]=this.mat4[11],a.mat4[12]=this.mat4[12],a.mat4[13]=this.mat4[13],a.mat4[14]=this.mat4[14],a.mat4[15]=this.mat4[15],a},d.Matrix.identity=function(){return new d.Matrix},d.Matrix.prototype.transpose=function(a){var b,c,e,f,h,i;return a instanceof d.Matrix?(b=a.mat4[1],c=a.mat4[2],e=a.mat4[3],f=a.mat4[6],h=a.mat4[7],i=a.mat4[11],this.mat4[0]=a.mat4[0],this.mat4[1]=a.mat4[4],this.mat4[2]=a.mat4[8],this.mat4[3]=a.mat4[12],this.mat4[4]=b,this.mat4[5]=a.mat4[5],this.mat4[6]=a.mat4[9],this.mat4[7]=a.mat4[13],this.mat4[8]=c,this.mat4[9]=f,this.mat4[10]=a.mat4[10],this.mat4[11]=a.mat4[14],this.mat4[12]=e,this.mat4[13]=h,this.mat4[14]=i,this.mat4[15]=a.mat4[15]):a instanceof g&&(b=a[1],c=a[2],e=a[3],f=a[6],h=a[7],i=a[11],this.mat4[0]=a[0],this.mat4[1]=a[4],this.mat4[2]=a[8],this.mat4[3]=a[12],this.mat4[4]=b,this.mat4[5]=a[5],this.mat4[6]=a[9],this.mat4[7]=a[13],this.mat4[8]=c,this.mat4[9]=f,this.mat4[10]=a[10],this.mat4[11]=a[14],this.mat4[12]=e,this.mat4[13]=h,this.mat4[14]=i,this.mat4[15]=a[15]),this},d.Matrix.prototype.invert=function(a){var b,c,e,f,h,i,j,k,l,m,n,o,p,q,r,s;a instanceof d.Matrix?(b=a.mat4[0],c=a.mat4[1],e=a.mat4[2],f=a.mat4[3],h=a.mat4[4],i=a.mat4[5],j=a.mat4[6],k=a.mat4[7],l=a.mat4[8],m=a.mat4[9],n=a.mat4[10],o=a.mat4[11],p=a.mat4[12],q=a.mat4[13],r=a.mat4[14],s=a.mat4[15]):a instanceof g&&(b=a[0],c=a[1],e=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15]);var t=b*i-c*h,u=b*j-e*h,v=b*k-f*h,w=c*j-e*i,x=c*k-f*i,y=e*k-f*j,z=l*q-m*p,A=l*r-n*p,B=l*s-o*p,C=m*r-n*q,D=m*s-o*q,E=n*s-o*r,F=t*E-u*D+v*C+w*B-x*A+y*z;return F?(F=1/F,this.mat4[0]=(i*E-j*D+k*C)*F,this.mat4[1]=(e*D-c*E-f*C)*F,this.mat4[2]=(q*y-r*x+s*w)*F,this.mat4[3]=(n*x-m*y-o*w)*F,this.mat4[4]=(j*B-h*E-k*A)*F,this.mat4[5]=(b*E-e*B+f*A)*F,this.mat4[6]=(r*v-p*y-s*u)*F,this.mat4[7]=(l*y-n*v+o*u)*F,this.mat4[8]=(h*D-i*B+k*z)*F,this.mat4[9]=(c*B-b*D-f*z)*F,this.mat4[10]=(p*x-q*v+s*t)*F,this.mat4[11]=(m*v-l*x-o*t)*F,this.mat4[12]=(i*A-h*C-j*z)*F,this.mat4[13]=(b*C-c*A+e*z)*F,this.mat4[14]=(q*u-p*w-r*t)*F,this.mat4[15]=(l*w-m*u+n*t)*F,this):null},d.Matrix.prototype.determinant=function(){var a=this.mat4[0]*this.mat4[5]-this.mat4[1]*this.mat4[4],b=this.mat4[0]*this.mat4[6]-this.mat4[2]*this.mat4[4],c=this.mat4[0]*this.mat4[7]-this.mat4[3]*this.mat4[4],d=this.mat4[1]*this.mat4[6]-this.mat4[2]*this.mat4[5],e=this.mat4[1]*this.mat4[7]-this.mat4[3]*this.mat4[5],f=this.mat4[2]*this.mat4[7]-this.mat4[3]*this.mat4[6],g=this.mat4[8]*this.mat4[13]-this.mat4[9]*this.mat4[12],h=this.mat4[8]*this.mat4[14]-this.mat4[10]*this.mat4[12],i=this.mat4[8]*this.mat4[15]-this.mat4[11]*this.mat4[12],j=this.mat4[9]*this.mat4[14]-this.mat4[10]*this.mat4[13],k=this.mat4[9]*this.mat4[15]-this.mat4[11]*this.mat4[13],l=this.mat4[10]*this.mat4[15]-this.mat4[11]*this.mat4[14];return a*l-b*k+c*j+d*i-e*h+f*g},d.Matrix.prototype.mult=function(a){var b=new g(16),c=new g(16);a instanceof d.Matrix?c=a.mat4:a instanceof g&&(c=a);var e=this.mat4[0],f=this.mat4[1],h=this.mat4[2],i=this.mat4[3];return b[0]=e*c[0]+f*c[4]+h*c[8]+i*c[12],b[1]=e*c[1]+f*c[5]+h*c[9]+i*c[13],b[2]=e*c[2]+f*c[6]+h*c[10]+i*c[14],b[3]=e*c[3]+f*c[7]+h*c[11]+i*c[15],e=this.mat4[4],f=this.mat4[5],h=this.mat4[6],i=this.mat4[7],b[4]=e*c[0]+f*c[4]+h*c[8]+i*c[12],b[5]=e*c[1]+f*c[5]+h*c[9]+i*c[13],b[6]=e*c[2]+f*c[6]+h*c[10]+i*c[14],b[7]=e*c[3]+f*c[7]+h*c[11]+i*c[15],e=this.mat4[8],f=this.mat4[9],h=this.mat4[10],i=this.mat4[11],b[8]=e*c[0]+f*c[4]+h*c[8]+i*c[12],b[9]=e*c[1]+f*c[5]+h*c[9]+i*c[13],b[10]=e*c[2]+f*c[6]+h*c[10]+i*c[14],b[11]=e*c[3]+f*c[7]+h*c[11]+i*c[15],e=this.mat4[12],f=this.mat4[13],h=this.mat4[14],i=this.mat4[15],b[12]=e*c[0]+f*c[4]+h*c[8]+i*c[12],b[13]=e*c[1]+f*c[5]+h*c[9]+i*c[13],b[14]=e*c[2]+f*c[6]+h*c[10]+i*c[14],b[15]=e*c[3]+f*c[7]+h*c[11]+i*c[15],this.mat4=b,this},d.Matrix.prototype.scale=function(){for(var a,b,c,e=new Array(arguments.length),f=0;f<e.length;f++)e[f]=arguments[f];e[0]instanceof d.Vector?(a=e[0].x,b=e[0].y,c=e[0].z):e[0]instanceof Array&&(a=e[0][0],b=e[0][1],c=e[0][2]);var h=new g(16);return h[0]=this.mat4[0]*a,h[1]=this.mat4[1]*a,h[2]=this.mat4[2]*a,h[3]=this.mat4[3]*a,h[4]=this.mat4[4]*b,h[5]=this.mat4[5]*b,h[6]=this.mat4[6]*b,h[7]=this.mat4[7]*b,h[8]=this.mat4[8]*c,h[9]=this.mat4[9]*c,h[10]=this.mat4[10]*c,h[11]=this.mat4[11]*c,h[12]=this.mat4[12],h[13]=this.mat4[13],h[14]=this.mat4[14],h[15]=this.mat4[15],this.mat4=h,this},d.Matrix.prototype.rotate=function(a,b){var c,g,h,i,j;this.p5?this.p5._angleMode===f.DEGREES&&(i=e.degreesToRadians(a)):i=a,b instanceof d.Vector?(c=b.x,g=b.y,h=b.z):b instanceof Array&&(c=b[0],g=b[1],h=b[2]),j=Math.sqrt(c*c+g*g+h*h),c*=1/j,g*=1/j,h*=1/j;var k=this.mat4[0],l=this.mat4[1],m=this.mat4[2],n=this.mat4[3],o=this.mat4[4],p=this.mat4[5],q=this.mat4[6],r=this.mat4[7],s=this.mat4[8],t=this.mat4[9],u=this.mat4[10],v=this.mat4[11],w=Math.sin(i),x=Math.cos(i),y=1-x,z=c*c*y+x,A=g*c*y+h*w,B=h*c*y-g*w,C=c*g*y-h*w,D=g*g*y+x,E=h*g*y+c*w,F=c*h*y+g*w,G=g*h*y-c*w,H=h*h*y+x;return this.mat4[0]=k*z+o*A+s*B,this.mat4[1]=l*z+p*A+t*B,this.mat4[2]=m*z+q*A+u*B,this.mat4[3]=n*z+r*A+v*B,this.mat4[4]=k*C+o*D+s*E,this.mat4[5]=l*C+p*D+t*E,this.mat4[6]=m*C+q*D+u*E,this.mat4[7]=n*C+r*D+v*E,this.mat4[8]=k*F+o*G+s*H,this.mat4[9]=l*F+p*G+t*H,this.mat4[10]=m*F+q*G+u*H,this.mat4[11]=n*F+r*G+v*H,this},d.Matrix.prototype.translate=function(a){var b=a[0],c=a[1],d=a[2]||0;this.mat4[12]=this.mat4[0]*b+this.mat4[4]*c+this.mat4[8]*d+this.mat4[12],this.mat4[13]=this.mat4[1]*b+this.mat4[5]*c+this.mat4[9]*d+this.mat4[13],this.mat4[14]=this.mat4[2]*b+this.mat4[6]*c+this.mat4[10]*d+this.mat4[14],this.mat4[15]=this.mat4[3]*b+this.mat4[7]*c+this.mat4[11]*d+this.mat4[15]},d.Matrix.prototype.rotateX=function(a){this.rotate(a,[1,0,0])},d.Matrix.prototype.rotateY=function(a){this.rotate(a,[0,1,0])},d.Matrix.prototype.rotateZ=function(a){this.rotate(a,[0,0,1])},d.Matrix.prototype.perspective=function(a,b,c,d){var e=1/Math.tan(a/2),f=1/(c-d);return this.mat4[0]=e/b,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=e,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=(d+c)*f,this.mat4[11]=-1,this.mat4[12]=0,this.mat4[13]=0,this.mat4[14]=2*d*c*f,this.mat4[15]=0,this},d.Matrix.prototype.ortho=function(a,b,c,d,e,f){var g=1/(a-b),h=1/(c-d),i=1/(e-f);return this.mat4[0]=-2*g,this.mat4[1]=0,this.mat4[2]=0,this.mat4[3]=0,this.mat4[4]=0,this.mat4[5]=-2*h,this.mat4[6]=0,this.mat4[7]=0,this.mat4[8]=0,this.mat4[9]=0,this.mat4[10]=2*i,this.mat4[11]=0,this.mat4[12]=(a+b)*g,this.mat4[13]=(d+c)*h,this.mat4[14]=(f+e)*i,this.mat4[15]=1,this},b.exports=d.Matrix},{"../core/constants":47,"../core/core":48,"../math/polargeometry":77}],36:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./shader");a("../core/p5.Renderer"),a("./p5.Matrix");var f=[],g=1e3,h={alpha:!0,depth:!0,stencil:!0,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1};d.Renderer3D=function(a,b,c){d.Renderer.call(this,a,b,c);try{if(this.drawingContext=this.canvas.getContext("webgl",h)||this.canvas.getContext("experimental-webgl",h),null===this.drawingContext)throw new Error("Error creating webgl context");console.log("p5.Renderer3D: enabled webgl context")}catch(e){throw new Error(e)}this.isP3D=!0,this.GL=this.drawingContext;var f=this.GL;return f.clearColor(1,1,1,1),f.clearDepth(1),f.enable(f.DEPTH_TEST),f.depthFunc(f.LEQUAL),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.viewport(0,0,f.drawingBufferWidth,f.drawingBufferHeight),this._init(),this},d.Renderer3D.prototype=Object.create(d.Renderer.prototype),d.Renderer3D.prototype._applyDefaults=function(){return this},d.Renderer3D.prototype._init=function(a){var b=this.GL;this.initMatrix(),this.initHash(),this.verticeStack=[],this.verticeBuffer=b.createBuffer(),this.colorBuffer=b.createBuffer(),this._setCamera=!1,this.ambientLightCount=0,this.directionalLightCount=0,this.pointLightCount=0},d.Renderer3D.prototype._update=function(){this.resetMatrix(),this.translate(0,0,-800),this.ambientLightCount=0,this.directionalLightCount=0,this.pointLightCount=0,this.verticeStack=[]},d.Renderer3D.prototype.resize=function(a,b){var c=this.GL;d.Renderer.prototype.resize.call(this,a,b),c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight)},d.Renderer3D.prototype.background=function(){var a=this.GL,b=this._pInst.color.apply(this._pInst,arguments),c=b.levels[0]/255,d=b.levels[1]/255,e=b.levels[2]/255,f=b.levels[3]/255;a.clearColor(c,d,e,f),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)},d.Renderer3D.prototype.initShaders=function(a,b,c){var d=this.GL,f=d.createShader(d.VERTEX_SHADER);if(d.shaderSource(f,e[a]),d.compileShader(f),!d.getShaderParameter(f,d.COMPILE_STATUS))return alert("Yikes! An error occurred compiling the shaders:"+d.getShaderInfoLog(f)),null;var g=d.createShader(d.FRAGMENT_SHADER);if(d.shaderSource(g,e[b]),d.compileShader(g),!d.getShaderParameter(g,d.COMPILE_STATUS))return alert("Darn! An error occurred compiling the shaders:"+d.getShaderInfoLog(g)),null;var h=d.createProgram();return d.attachShader(h,f),d.attachShader(h,g),d.linkProgram(h),d.getProgramParameter(h,d.LINK_STATUS)||alert("Snap! Error linking shader program"),this._getLocation(h,c),h},d.Renderer3D.prototype._getLocation=function(a,b){var c=this.GL;c.useProgram(a),a.uResolution=c.getUniformLocation(a,"uResolution"),c.uniform1f(a.uResolution,g),a.vertexPositionAttribute=c.getAttribLocation(a,"aPosition"),c.enableVertexAttribArray(a.vertexPositionAttribute),a.uPMatrixUniform=c.getUniformLocation(a,"uProjectionMatrix"),a.uMVMatrixUniform=c.getUniformLocation(a,"uModelViewMatrix"),void 0===b&&(a.vertexNormalAttribute=c.getAttribLocation(a,"aNormal"),c.enableVertexAttribArray(a.vertexNormalAttribute),a.uNMatrixUniform=c.getUniformLocation(a,"uNormalMatrix"),a.textureCoordAttribute=c.getAttribLocation(a,"aTexCoord"),c.enableVertexAttribArray(a.textureCoordAttribute),a.samplerUniform=c.getUniformLocation(a,"uSampler"))},d.Renderer3D.prototype.setMatrixUniforms=function(a){var b=this.GL,c=this.mHash[a];b.useProgram(c),b.uniformMatrix4fv(c.uPMatrixUniform,!1,this.uPMatrix.mat4),b.uniformMatrix4fv(c.uMVMatrixUniform,!1,this.uMVMatrix.mat4),this.uNMatrix=new d.Matrix,this.uNMatrix.invert(this.uMVMatrix),this.uNMatrix.transpose(this.uNMatrix),b.uniformMatrix4fv(c.uNMatrixUniform,!1,this.uNMatrix.mat4)},d.Renderer3D.prototype._getShader=function(a,b,c){var d=a+"|"+b;if(!this.materialInHash(d)){var e=this.initShaders(a,b,c);this.mHash[d]=e}return this.curShaderId=d,this.mHash[this.curShaderId]},d.Renderer3D.prototype._getCurShaderId=function(){if(void 0===this.curShaderId){var a="normalVert|normalFrag",b=this.initShaders("normalVert","normalFrag");this.mHash[a]=b,this.curShaderId=a}return this.curShaderId},d.Renderer3D.prototype._getCurColor=function(){return void 0===this.curColor&&(this.curColor=[.5,.5,.5,1]),this.curColor},d.Renderer3D.prototype.initHash=function(){this.gHash={},this.mHash={}},d.Renderer3D.prototype.geometryInHash=function(a){return void 0!==this.gHash[a]},d.Renderer3D.prototype.materialInHash=function(a){return void 0!==this.mHash[a]},d.Renderer3D.prototype.initMatrix=function(){this.uMVMatrix=new d.Matrix,this.uPMatrix=new d.Matrix,this.uNMatrix=new d.Matrix},d.Renderer3D.prototype.resetMatrix=function(){this.uMVMatrix=d.Matrix.identity()},d.Renderer3D.prototype._setDefaultCamera=function(){if(!this._setCamera){var a=this.width,b=this.height;this.uPMatrix=d.Matrix.identity(),this.uPMatrix.perspective(60/180*Math.PI,a/b,.1,100),this._setCamera=!0}},d.Renderer3D.prototype.translate=function(a,b,c){return a/=g,b=-b/g,c/=g,this.uMVMatrix.translate([a,b,c]),this},d.Renderer3D.prototype.scale=function(a,b,c){return this.uMVMatrix.scale([a,b,c]),this},d.Renderer3D.prototype.rotate=function(a,b){return this.uMVMatrix.rotate(a,b),this},d.Renderer3D.prototype.rotateX=function(a){return this.uMVMatrix.rotateX(a),this},d.Renderer3D.prototype.rotateY=function(a){return this.uMVMatrix.rotateY(a),this},d.Renderer3D.prototype.rotateZ=function(a){return this.uMVMatrix.rotateZ(a),this},d.Renderer3D.prototype.push=function(){f.push(this.uMVMatrix.copy())},d.Renderer3D.prototype.pop=function(){if(0===f.length)throw new Error("Invalid popMatrix!");this.uMVMatrix=f.pop()},b.exports=d.Renderer3D},{"../core/core":48,"../core/p5.Renderer":54,"./p5.Matrix":35,"./shader":38}],37:[function(a,b,c){"use strict";var d=a("../core/core"),e=0;d.Renderer3D.prototype.createBuffer=function(a,b){if(e++,e>1e3){var c=Object.keys(this.gHash)[0];delete this.gHash[c],e--}var d=this.GL;this.gHash[a]={},this.gHash[a].len=[],this.gHash[a].vertexBuffer=[],this.gHash[a].normalBuffer=[],this.gHash[a].uvBuffer=[],this.gHash[a].indexBuffer=[],b.forEach(function(b){this.gHash[a].len.push(b.len),this.gHash[a].vertexBuffer.push(d.createBuffer()),this.gHash[a].normalBuffer.push(d.createBuffer()),this.gHash[a].uvBuffer.push(d.createBuffer()),this.gHash[a].indexBuffer.push(d.createBuffer())}.bind(this))},d.Renderer3D.prototype.initBuffer=function(a,b){this._setDefaultCamera();var c=this.GL;this.createBuffer(a,b);var d=this.mHash[this._getCurShaderId()];b.forEach(function(b,e){c.bindBuffer(c.ARRAY_BUFFER,this.gHash[a].vertexBuffer[e]),c.bufferData(c.ARRAY_BUFFER,new Float32Array(b.vertices),c.STATIC_DRAW),c.vertexAttribPointer(d.vertexPositionAttribute,3,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this.gHash[a].normalBuffer[e]),c.bufferData(c.ARRAY_BUFFER,new Float32Array(b.vertexNormals),c.STATIC_DRAW),c.vertexAttribPointer(d.vertexNormalAttribute,3,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,this.gHash[a].uvBuffer[e]),c.bufferData(c.ARRAY_BUFFER,new Float32Array(b.uvs),c.STATIC_DRAW),c.vertexAttribPointer(d.textureCoordAttribute,2,c.FLOAT,!1,0,0),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this.gHash[a].indexBuffer[e]),c.bufferData(c.ELEMENT_ARRAY_BUFFER,new Uint16Array(b.faces),c.STATIC_DRAW)}.bind(this))},d.Renderer3D.prototype.drawBuffer=function(a){this._setDefaultCamera();var b=this.GL,c=this._getCurShaderId(),d=this.mHash[c];this.gHash[a].len.forEach(function(e,f){b.bindBuffer(b.ARRAY_BUFFER,this.gHash[a].vertexBuffer[f]),b.vertexAttribPointer(d.vertexPositionAttribute,3,b.FLOAT,!1,0,0),b.bindBuffer(b.ARRAY_BUFFER,this.gHash[a].normalBuffer[f]),b.vertexAttribPointer(d.vertexNormalAttribute,3,b.FLOAT,!1,0,0),b.bindBuffer(b.ARRAY_BUFFER,this.gHash[a].uvBuffer[f]),b.vertexAttribPointer(d.textureCoordAttribute,2,b.FLOAT,!1,0,0),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.gHash[a].indexBuffer[f]),this.setMatrixUniforms(c),b.drawElements(b.TRIANGLES,this.gHash[a].len[f],b.UNSIGNED_SHORT,0)}.bind(this))},b.exports=d.Renderer3D},{"../core/core":48}],38:[function(a,b,c){b.exports={vertexColorVert:"attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}",vertexColorFrag:"precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",normalVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uNormalMatrix;\nuniform float uResolution;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * vec4( aNormal, 1.0 ) );\n  vVertTexCoord = aTexCoord;\n}",normalFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",basicFrag:"precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",lightVert:"attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uNormalMatrix;\nuniform float uResolution;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * vec4( aNormal, 1.0 ) );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition / uResolution, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    //loc = loc / uResolution;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n  \n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}",lightTextureFrag:"precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a); \n    }\n  }\n}"}},{}],39:[function(a,b,c){"use strict";var d=a("./core/core");a("./color/p5.Color"),a("./core/p5.Element"),a("./typography/p5.Font"),a("./core/p5.Graphics"),a("./core/p5.Renderer2D"),a("./image/p5.Image"),a("./math/p5.Vector"),a("./io/p5.TableRow"),a("./io/p5.Table"),a("./color/creating_reading"),a("./color/setting"),a("./core/constants"),a("./utilities/conversion"),a("./utilities/array_functions"),a("./utilities/string_functions"),a("./core/environment"),a("./image/image"),a("./image/loading_displaying"),a("./image/pixels"),a("./io/files"),a("./events/keyboard"),a("./events/acceleration"),a("./events/mouse"),a("./utilities/time_date"),a("./events/touch"),a("./math/math"),a("./math/calculation"),a("./math/random"),a("./math/noise"),a("./math/trigonometry"),a("./core/rendering"),a("./core/2d_primitives"),a("./core/attributes"),a("./core/curves"),a("./core/vertex"),a("./core/structure"),a("./core/transform"),a("./typography/attributes"),a("./typography/loading_displaying"),a("./3d/p5.Renderer3D"),a("./3d/p5.Geometry3D"),a("./3d/retainedMode3D"),a("./3d/immediateMode3D"),a("./3d/3d_primitives"),a("./3d/p5.Matrix"),a("./3d/material"),a("./3d/light"),a("./3d/shader"),a("./3d/camera"),a("./3d/interaction");var e=function(){window.PHANTOMJS||window.mocha||(window.setup&&"function"==typeof window.setup||window.draw&&"function"==typeof window.draw)&&new d};"complete"===document.readyState?e():window.addEventListener("load",e,!1),b.exports=d},{"./3d/3d_primitives":28,"./3d/camera":29,"./3d/immediateMode3D":30,"./3d/interaction":31,"./3d/light":32,"./3d/material":33,"./3d/p5.Geometry3D":34,"./3d/p5.Matrix":35,"./3d/p5.Renderer3D":36,"./3d/retainedMode3D":37,"./3d/shader":38,"./color/creating_reading":41,"./color/p5.Color":42,"./color/setting":43,"./core/2d_primitives":44,"./core/attributes":45,"./core/constants":47,"./core/core":48,"./core/curves":49,"./core/environment":50,"./core/p5.Element":52,"./core/p5.Graphics":53,"./core/p5.Renderer2D":55,"./core/rendering":56,"./core/structure":58,"./core/transform":59,"./core/vertex":60,"./events/acceleration":61,"./events/keyboard":62,"./events/mouse":63,"./events/touch":64,"./image/image":66,"./image/loading_displaying":67,"./image/p5.Image":68,"./image/pixels":69,"./io/files":70,"./io/p5.Table":71,"./io/p5.TableRow":72,"./math/calculation":73,"./math/math":74,"./math/noise":75,"./math/p5.Vector":76,"./math/random":78,"./math/trigonometry":79,"./typography/attributes":80,"./typography/loading_displaying":81,"./typography/p5.Font":82,"./utilities/array_functions":83,"./utilities/conversion":84,"./utilities/string_functions":85,"./utilities/time_date":86}],40:[function(a,b,c){"use strict";var d=a("../core/core");d.ColorConversion={},d.ColorConversion._hsbaToHSLA=function(a){var b=a[0],c=a[1],d=a[2],e=(2-c)*d/2;return 0!==e&&(1===e?c=0:.5>e?c/=2-c:c=c*d/(2-2*e)),[b,c,e,a[3]]},d.ColorConversion._hsbaToRGBA=function(a){var b=6*a[0],c=a[1],d=a[2],e=[];if(0===c)e=[d,d,d,a[3]];else{var f,g,h,i=Math.floor(b),j=d*(1-c),k=d*(1-c*(b-i)),l=d*(1-c*(1+i-b));0===i?(f=d,g=l,h=j):1===i?(f=k,g=d,h=j):2===i?(f=j,g=d,h=l):3===i?(f=j,g=k,h=d):4===i?(f=l,g=j,h=d):(f=d,g=j,h=k),e=[f,g,h,a[3]]}return e},d.ColorConversion._hslaToHSBA=function(a){var b,c=a[0],d=a[1],e=a[2];return b=.5>e?(1+d)*e:e+d-e*d,d=2*(b-e)/b,[c,d,b,a[3]]},d.ColorConversion._hslaToRGBA=function(a){var b=6*a[0],c=a[1],d=a[2],e=[];if(0===c)e=[d,d,d,a[3]];else{var f;f=.5>d?(1+c)*d:d+c-d*c;var g=2*d-f,h=function(a,b,c){return 0>a?a+=6:a>=6&&(a-=6),1>a?b+(c-b)*a:3>a?c:4>a?b+(c-b)*(4-a):b};e=[h(b+2,g,f),h(b,g,f),h(b-2,g,f),a[3]]}return e},d.ColorConversion._rgbaToHSBA=function(a){var b,c,d=a[0],e=a[1],f=a[2],g=Math.max(d,e,f),h=g-Math.min(d,e,f);return 0===h?(b=0,c=0):(c=h/g,d===g?b=(e-f)/h:e===g?b=2+(f-d)/h:f===g&&(b=4+(d-e)/h),0>b?b+=6:b>=6&&(b-=6)),[b/6,c,g,a[3]]},d.ColorConversion._rgbaToHSLA=function(a){var b,c,d=a[0],e=a[1],f=a[2],g=Math.max(d,e,f),h=Math.min(d,e,f),i=g+h,j=g-h;return 0===j?(b=0,c=0):(c=1>i?j/i:j/(2-j),d===g?b=(e-f)/j:e===g?b=2+(f-d)/j:f===g&&(b=4+(d-e)/j),0>b?b+=6:b>=6&&(b-=6)),[b/6,c,i/2,a[3]]},b.exports=d.ColorConversion},{"../core/core":48}],41:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Color"),d.prototype.alpha=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getAlpha();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.blue=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getBlue();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.brightness=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getBrightness();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.color=function(){return arguments[0]instanceof d.Color?arguments[0]:arguments[0]instanceof Array?this instanceof d.Renderer?new d.Color(this,arguments[0]):new d.Color(this._renderer,arguments[0]):this instanceof d.Renderer?new d.Color(this,arguments):new d.Color(this._renderer,arguments)},d.prototype.green=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getGreen();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.hue=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getHue();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.lerpColor=function(a,b,c){var d,f,g,h,i,j,k=this._renderer._colorMode,l=this._renderer._colorMaxes;if(k===e.RGB)i=a.levels.map(function(a){return a/255}),j=b.levels.map(function(a){return a/255});else if(k===e.HSB)a._getBrightness(),b._getBrightness(),i=a.hsba,j=b.hsba;else{if(k!==e.HSL)throw new Error(k+"cannot be used for interpolation.");a._getLightness(),b._getLightness(),i=a.hsla,j=b.hsla}return c=Math.max(Math.min(c,1),0),d=this.lerp(i[0],j[0],c),f=this.lerp(i[1],j[1],c),g=this.lerp(i[2],j[2],c),h=this.lerp(i[3],j[3],c),d*=l[k][0],f*=l[k][1],g*=l[k][2],h*=l[k][3],this.color(d,f,g,h)},d.prototype.lightness=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getLightness();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.red=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getRed();throw new Error("Needs p5.Color or pixel array as argument.")},d.prototype.saturation=function(a){if(a instanceof d.Color||a instanceof Array)return this.color(a)._getSaturation();throw new Error("Needs p5.Color or pixel array as argument.")},b.exports=d},{"../core/constants":47,"../core/core":48,"./p5.Color":42}],42:[function(a,b,c){var d=a("../core/core"),e=a("../core/constants"),f=a("./color_conversion");d.Color=function(a,b){if(this.mode=a._colorMode,this.maxes=a._colorMaxes,this.mode!==e.RGB&&this.mode!==e.HSL&&this.mode!==e.HSB)throw new Error(this.mode+" is an invalid colorMode.");
return this._array=d.Color._parseInputs.apply(a,b),this.levels=this._array.map(function(a){return Math.round(255*a)}),this},d.Color.prototype.toString=function(){var a=this.levels;return a[3]=this._array[3],"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")"},d.Color.prototype._getAlpha=function(){return this._array[3]*this.maxes[this.mode][3]},d.Color.prototype._getBlue=function(){return this._array[2]*this.maxes[e.RGB][2]},d.Color.prototype._getBrightness=function(){return this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[2]*this.maxes[e.HSB][2]},d.Color.prototype._getGreen=function(){return this._array[1]*this.maxes[e.RGB][1]},d.Color.prototype._getHue=function(){return this.mode===e.HSB?(this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[0]*this.maxes[e.HSB][0]):(this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[0]*this.maxes[e.HSL][0])},d.Color.prototype._getLightness=function(){return this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[2]*this.maxes[e.HSL][2]},d.Color.prototype._getRed=function(){return this._array[0]*this.maxes[e.RGB][0]},d.Color.prototype._getSaturation=function(){return this.mode===e.HSB?(this.hsba||(this.hsba=f._rgbaToHSBA(this._array)),this.hsba[1]*this.maxes[e.HSB][1]):(this.hsla||(this.hsla=f._rgbaToHSLA(this._array)),this.hsla[1]*this.maxes[e.HSL][1])};var g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},h=/\s*/,i=/(\d{1,3})/,j=/((?:\d+(?:\.\d+)?)|(?:\.\d+))/,k=new RegExp(j.source+"%"),l={HEX3:/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,HEX6:/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,RGB:new RegExp(["^rgb\\(",i.source,",",i.source,",",i.source,"\\)$"].join(h.source),"i"),RGB_PERCENT:new RegExp(["^rgb\\(",k.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),RGBA:new RegExp(["^rgba\\(",i.source,",",i.source,",",i.source,",",j.source,"\\)$"].join(h.source),"i"),RGBA_PERCENT:new RegExp(["^rgba\\(",k.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i"),HSL:new RegExp(["^hsl\\(",i.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),HSLA:new RegExp(["^hsla\\(",i.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i"),HSB:new RegExp(["^hsb\\(",i.source,",",k.source,",",k.source,"\\)$"].join(h.source),"i"),HSBA:new RegExp(["^hsba\\(",i.source,",",k.source,",",k.source,",",j.source,"\\)$"].join(h.source),"i")};d.Color._parseInputs=function(){var a=arguments.length,b=this._colorMode,c=this._colorMaxes,h=[];if(a>=3)return h[0]=arguments[0]/c[b][0],h[1]=arguments[1]/c[b][1],h[2]=arguments[2]/c[b][2],"number"==typeof arguments[3]?h[3]=arguments[3]/c[b][3]:h[3]=1,h=h.map(function(a){return Math.max(Math.min(a,1),0)}),b===e.HSL?f._hslaToRGBA(h):b===e.HSB?f._hsbaToRGBA(h):h;if(1===a&&"string"==typeof arguments[0]){var i=arguments[0].trim().toLowerCase();if(g[i])return d.Color._parseInputs.apply(this,[g[i]]);if(l.HEX3.test(i))return h=l.HEX3.exec(i).slice(1).map(function(a){return parseInt(a+a,16)/255}),h[3]=1,h;if(l.HEX6.test(i))return h=l.HEX6.exec(i).slice(1).map(function(a){return parseInt(a,16)/255}),h[3]=1,h;if(l.RGB.test(i))return h=l.RGB.exec(i).slice(1).map(function(a){return a/255}),h[3]=1,h;if(l.RGB_PERCENT.test(i))return h=l.RGB_PERCENT.exec(i).slice(1).map(function(a){return parseFloat(a)/100}),h[3]=1,h;if(l.RGBA.test(i))return h=l.RGBA.exec(i).slice(1).map(function(a,b){return 3===b?parseFloat(a):a/255});if(l.RGBA_PERCENT.test(i))return h=l.RGBA_PERCENT.exec(i).slice(1).map(function(a,b){return 3===b?parseFloat(a):parseFloat(a)/100});if(l.HSL.test(i)?(h=l.HSL.exec(i).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:parseInt(a,10)/100}),h[3]=1):l.HSLA.test(i)&&(h=l.HSLA.exec(i).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:3===b?parseFloat(a):parseInt(a,10)/100})),h.length)return f._hslaToRGBA(h);if(l.HSB.test(i)?(h=l.HSB.exec(i).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:parseInt(a,10)/100}),h[3]=1):l.HSBA.test(i)&&(h=l.HSBA.exec(i).slice(1).map(function(a,b){return 0===b?parseInt(a,10)/360:3===b?parseFloat(a):parseInt(a,10)/100})),h.length)return f._hsbaToRGBA(h);h=[1,1,1,1]}else{if(1!==a&&2!==a||"number"!=typeof arguments[0])throw new Error(arguments+"is not a valid color representation.");h[0]=arguments[0]/c[b][2],h[1]=arguments[0]/c[b][2],h[2]=arguments[0]/c[b][2],"number"==typeof arguments[1]?h[3]=arguments[1]/c[b][3]:h[3]=1,h=h.map(function(a){return Math.max(Math.min(a,1),0)})}return h},b.exports=d.Color},{"../core/constants":47,"../core/core":48,"./color_conversion":40}],43:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("./p5.Color"),d.prototype.background=function(){return arguments[0]instanceof d.Image?this.image(arguments[0],0,0,this.width,this.height):this._renderer.background.apply(this._renderer,arguments),this},d.prototype.clear=function(){return this._renderer.clear(),this},d.prototype.colorMode=function(){if(arguments[0]===e.RGB||arguments[0]===e.HSB||arguments[0]===e.HSL){this._renderer._colorMode=arguments[0];var a=this._renderer._colorMaxes[this._renderer._colorMode];2===arguments.length?(a[0]=arguments[1],a[1]=arguments[1],a[2]=arguments[1],a[3]=arguments[1]):4===arguments.length?(a[0]=arguments[1],a[1]=arguments[2],a[2]=arguments[3]):5===arguments.length&&(a[0]=arguments[1],a[1]=arguments[2],a[2]=arguments[3],a[3]=arguments[4])}return this},d.prototype.fill=function(){return this._renderer._setProperty("_fillSet",!0),this._renderer._setProperty("_doFill",!0),this._renderer.fill.apply(this._renderer,arguments),this},d.prototype.noFill=function(){return this._renderer._setProperty("_doFill",!1),this},d.prototype.noStroke=function(){return this._renderer._setProperty("_doStroke",!1),this},d.prototype.stroke=function(){return this._renderer._setProperty("_strokeSet",!0),this._renderer._setProperty("_doStroke",!0),this._renderer.stroke.apply(this._renderer,arguments),this},b.exports=d},{"../core/constants":47,"../core/core":48,"./p5.Color":42}],44:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");a("./error_helpers"),d.prototype.arc=function(a,b,c,d,f,g,h){for(var i=new Array(arguments.length),j=0;j<i.length;++j)i[j]=arguments[j];if(this._validateParameters("arc",i,[["Number","Number","Number","Number","Number","Number"],["Number","Number","Number","Number","Number","Number","String"]]),!this._renderer._doStroke&&!this._renderer._doFill)return this;for(this._angleMode===e.DEGREES&&(f=this.radians(f),g=this.radians(g));0>f;)f+=e.TWO_PI;for(;0>g;)g+=e.TWO_PI;return f%=e.TWO_PI,g%=e.TWO_PI,f=f<=e.HALF_PI?Math.atan(c/d*Math.tan(f)):f>e.HALF_PI&&f<=3*e.HALF_PI?Math.atan(c/d*Math.tan(f))+e.PI:Math.atan(c/d*Math.tan(f))+e.TWO_PI,g=g<=e.HALF_PI?Math.atan(c/d*Math.tan(g)):g>e.HALF_PI&&g<=3*e.HALF_PI?Math.atan(c/d*Math.tan(g))+e.PI:Math.atan(c/d*Math.tan(g))+e.TWO_PI,f>g&&(g+=e.TWO_PI),c=Math.abs(c),d=Math.abs(d),this._renderer.arc(a,b,c,d,f,g,h),this},d.prototype.ellipse=function(a,b,c,d){for(var e=new Array(arguments.length),f=0;f<e.length;++f)e[f]=arguments[f];return this._validateParameters("ellipse",e,["Number","Number","Number","Number"]),this._renderer._doStroke||this._renderer._doFill?(c=Math.abs(c),d=Math.abs(d),this._renderer.ellipse(a,b,c,d),this):this},d.prototype.line=function(){if(!this._renderer._doStroke)return this;for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];return this._renderer.isP3D?(this._validateParameters("line",a,[["Number","Number","Number","Number","Number","Number"]]),this._renderer.line(a[0],a[1],a[2],a[3],a[4],a[5])):(this._validateParameters("line",a,[["Number","Number","Number","Number"]]),this._renderer.line(a[0],a[1],a[2],a[3])),this},d.prototype.point=function(){if(!this._renderer._doStroke)return this;for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];return this._renderer.isP3D?(this._validateParameters("point",a,[["Number","Number","Number"]]),this._renderer.point(a[0],a[1],a[2])):(this._validateParameters("point",a,[["Number","Number"]]),this._renderer.point(a[0],a[1])),this},d.prototype.quad=function(){if(!this._renderer._doStroke&&!this._renderer._doFill)return this;for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];return this._renderer.isP3D?(this._validateParameters("quad",a,[["Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number","Number"]]),this._renderer.quad(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11])):(this._validateParameters("quad",a,[["Number","Number","Number","Number","Number","Number","Number","Number"]]),this._renderer.quad(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7])),this},d.prototype.rect=function(a,b,c,d,e,f,g,h){for(var i=new Array(arguments.length),j=0;j<i.length;++j)i[j]=arguments[j];return this._validateParameters("rect",i,[["Number","Number","Number","Number"],["Number","Number","Number","Number","Number"],["Number","Number","Number","Number","Number","Number","Number","Number"]]),this._renderer._doStroke||this._renderer._doFill?(this._renderer.rect(a,b,c,d,e,f,g,h),this):void 0},d.prototype.triangle=function(){if(!this._renderer._doStroke&&!this._renderer._doFill)return this;for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];return this._renderer.isP3D?(this._validateParameters("triangle",a,[["Number","Number","Number","Number","Number","Number","Number","Number","Number"]]),this._renderer.triangle(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8])):(this._validateParameters("triangle",a,[["Number","Number","Number","Number","Number","Number"]]),this._renderer.triangle(a[0],a[1],a[2],a[3],a[4],a[5])),this},b.exports=d},{"./constants":47,"./core":48,"./error_helpers":51}],45:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");d.prototype.ellipseMode=function(a){return(a===e.CORNER||a===e.CORNERS||a===e.RADIUS||a===e.CENTER)&&(this._renderer._ellipseMode=a),this},d.prototype.noSmooth=function(){return this._renderer.noSmooth(),this},d.prototype.rectMode=function(a){return(a===e.CORNER||a===e.CORNERS||a===e.RADIUS||a===e.CENTER)&&(this._renderer._rectMode=a),this},d.prototype.smooth=function(){return this._renderer.smooth(),this},d.prototype.strokeCap=function(a){return(a===e.ROUND||a===e.SQUARE||a===e.PROJECT)&&this._renderer.strokeCap(a),this},d.prototype.strokeJoin=function(a){return(a===e.ROUND||a===e.BEVEL||a===e.MITER)&&this._renderer.strokeJoin(a),this},d.prototype.strokeWeight=function(a){return this._renderer.strokeWeight(a),this},b.exports=d},{"./constants":47,"./core":48}],46:[function(a,b,c){var d=a("./constants");b.exports={modeAdjust:function(a,b,c,e,f){return f===d.CORNER?{x:a,y:b,w:c,h:e}:f===d.CORNERS?{x:a,y:b,w:c-a,h:e-b}:f===d.RADIUS?{x:a-c,y:b-e,w:2*c,h:2*e}:f===d.CENTER?{x:a-.5*c,y:b-.5*e,w:c,h:e}:void 0},arcModeAdjust:function(a,b,c,e,f){return f===d.CORNER?{x:a+.5*c,y:b+.5*e,w:c,h:e}:f===d.CORNERS?{x:a,y:b,w:c+a,h:e+b}:f===d.RADIUS?{x:a,y:b,w:2*c,h:2*e}:f===d.CENTER?{x:a,y:b,w:c,h:e}:void 0}}},{"./constants":47}],47:[function(a,b,c){var d=Math.PI;b.exports={P2D:"p2d",WEBGL:"webgl",ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",HALF_PI:d/2,PI:d,QUARTER_PI:d/4,TAU:2*d,TWO_PI:2*d,DEGREES:"degrees",RADIANS:"radians",CORNER:"corner",CORNERS:"corners",RADIUS:"radius",RIGHT:"right",LEFT:"left",CENTER:"center",TOP:"top",BOTTOM:"bottom",BASELINE:"alphabetic",POINTS:"points",LINES:"lines",TRIANGLES:"triangles",TRIANGLE_FAN:"triangles_fan",TRIANGLE_STRIP:"triangles_strip",QUADS:"quads",QUAD_STRIP:"quad_strip",CLOSE:"close",OPEN:"open",CHORD:"chord",PIE:"pie",PROJECT:"square",SQUARE:"butt",ROUND:"round",BEVEL:"bevel",MITER:"miter",RGB:"rgb",HSB:"hsb",HSL:"hsl",AUTO:"auto",ALT:18,BACKSPACE:8,CONTROL:17,DELETE:46,DOWN_ARROW:40,ENTER:13,ESCAPE:27,LEFT_ARROW:37,OPTION:18,RETURN:13,RIGHT_ARROW:39,SHIFT:16,TAB:9,UP_ARROW:38,BLEND:"normal",ADD:"lighter",DARKEST:"darken",LIGHTEST:"lighten",DIFFERENCE:"difference",EXCLUSION:"exclusion",MULTIPLY:"multiply",SCREEN:"screen",REPLACE:"source-over",OVERLAY:"overlay",HARD_LIGHT:"hard-light",SOFT_LIGHT:"soft-light",DODGE:"color-dodge",BURN:"color-burn",THRESHOLD:"threshold",GRAY:"gray",OPAQUE:"opaque",INVERT:"invert",POSTERIZE:"posterize",DILATE:"dilate",ERODE:"erode",BLUR:"blur",NORMAL:"normal",ITALIC:"italic",BOLD:"bold",_DEFAULT_TEXT_FILL:"#000000",_DEFAULT_LEADMULT:1.25,_CTX_MIDDLE:"middle",LINEAR:"linear",QUADRATIC:"quadratic",BEZIER:"bezier",CURVE:"curve",_DEFAULT_STROKE:"#000000",_DEFAULT_FILL:"#FFFFFF"}},{}],48:[function(a,b,c){"use strict";a("./shim");var d=a("./constants"),e=function(a,b,c){2===arguments.length&&"boolean"==typeof b&&(c=b,b=void 0),this._setupDone=!1,this._pixelDensity=Math.ceil(window.devicePixelRatio)||1,this._userNode=b,this._curElement=null,this._elements=[],this._requestAnimId=0,this._preloadCount=0,this._isGlobal=!1,this._loop=!0,this._styles=[],this._defaultCanvasSize={width:100,height:100},this._events={mousemove:null,mousedown:null,mouseup:null,dragend:null,dragover:null,click:null,mouseover:null,mouseout:null,keydown:null,keyup:null,keypress:null,touchstart:null,touchmove:null,touchend:null,resize:null,blur:null},window.DeviceOrientationEvent&&(this._events.deviceorientation=null),window.DeviceMotionEvent&&!window._isNodeWebkit&&(this._events.devicemotion=null),this._events.wheel=null,this._loadingScreenId="p5_loading",this._start=function(){this._userNode&&"string"==typeof this._userNode&&(this._userNode=document.getElementById(this._userNode)),this.createCanvas(this._defaultCanvasSize.width,this._defaultCanvasSize.height,"p2d",!0);var a=this.preload||window.preload;if(a){var b=document.getElementById(this._loadingScreenId);if(!b){b=document.createElement("div"),b.innerHTML="Loading...",b.style.position="absolute",b.id=this._loadingScreenId;var c=this._userNode||document.body;c.appendChild(b)}for(var d in this._preloadMethods){this._preloadMethods[d]=this._preloadMethods[d]||e;var f=this._preloadMethods[d];(f===e.prototype||f===e)&&(f=this._isGlobal?window:this),this._registeredPreloadMethods[d]=f[d],f[d]=this._wrapPreload(f,d)}a(),this._runIfPreloadsAreDone()}else this._setup(),this._runFrames(),this._draw()}.bind(this),this._runIfPreloadsAreDone=function(){var a=this._isGlobal?window:this;if(0===a._preloadCount){var b=document.getElementById(a._loadingScreenId);b&&b.parentNode.removeChild(b),a._setup(),a._runFrames(),a._draw()}},this._decrementPreload=function(){var a=this._isGlobal?window:this;a._setProperty("_preloadCount",a._preloadCount-1),a._runIfPreloadsAreDone()},this._wrapPreload=function(a,b){return function(){this._incrementPreload();var c=Array.prototype.slice.call(arguments);return c.push(this._decrementPreload.bind(this)),this._registeredPreloadMethods[b].apply(a,c)}.bind(this)},this._incrementPreload=function(){var a=this._isGlobal?window:this;a._setProperty("_preloadCount",a._preloadCount+1)},this._setup=function(){var a=this._isGlobal?window:this;if("function"==typeof a.preload)for(var b in this._preloadMethods)a[b]=this._preloadMethods[b][b],a[b]&&this&&(a[b]=a[b].bind(this));"function"==typeof a.setup&&a.setup();for(var c=new RegExp(/(^|\s)p5_hidden(?!\S)/g),d=document.getElementsByClassName("p5_hidden"),e=0;e<d.length;e++){var f=d[e];f.style.visibility="",f.className=f.className.replace(c,"")}this._setupDone=!0}.bind(this),this._draw=function(){var a=window.performance.now(),b=a-this._lastFrameTime,c=1e3/this._targetFrameRate,d=5;(!this._loop||b>=c-d)&&(this._renderer.isP3D&&this._renderer._update(),this._setProperty("frameCount",this.frameCount+1),this._updateMouseCoords(),this._updateTouchCoords(),this.redraw(),this._frameRate=1e3/(a-this._lastFrameTime),this._lastFrameTime=a),this._loop&&(this._requestAnimId=window.requestAnimationFrame(this._draw))}.bind(this),this._runFrames=function(){this._updateInterval&&clearInterval(this._updateInterval)}.bind(this),this._setProperty=function(a,b){this[a]=b,this._isGlobal&&(window[a]=b)}.bind(this),this.remove=function(){if(this._curElement){this._loop=!1,this._requestAnimId&&window.cancelAnimationFrame(this._requestAnimId);for(var a in this._events)window.removeEventListener(a,this._events[a]);for(var b=0;b<this._elements.length;b++){var c=this._elements[b];c.elt.parentNode&&c.elt.parentNode.removeChild(c.elt);for(var d in c._events)c.elt.removeEventListener(d,c._events[d])}var f=this;if(this._registeredMethods.remove.forEach(function(a){"undefined"!=typeof a&&a.call(f)}),this._isGlobal){for(var g in e.prototype)try{delete window[g]}catch(h){window[g]=void 0}for(var i in this)if(this.hasOwnProperty(i))try{delete window[i]}catch(h){window[i]=void 0}}}}.bind(this);for(var f in d)e.prototype[f]=d[f];if(a)a(this);else{this._isGlobal=!0;for(var g in e.prototype)if("function"==typeof e.prototype[g]){var h=g.substring(2);this._events.hasOwnProperty(h)||(window[g]=e.prototype[g].bind(this))}else window[g]=e.prototype[g];for(var i in this)this.hasOwnProperty(i)&&(window[i]=this[i])}for(var j in this._events){var k=this["_on"+j];if(k){var l=k.bind(this);window.addEventListener(j,l),this._events[j]=l}}var m=function(){this._setProperty("focused",!0)}.bind(this),n=function(){this._setProperty("focused",!1)}.bind(this);window.addEventListener("focus",m),window.addEventListener("blur",n),this.registerMethod("remove",function(){window.removeEventListener("focus",m),window.removeEventListener("blur",n)}),c?this._start():"complete"===document.readyState?this._start():window.addEventListener("load",this._start.bind(this),!1)};e.prototype._preloadMethods={loadJSON:e.prototype,loadImage:e.prototype,loadStrings:e.prototype,loadXML:e.prototype,loadShape:e.prototype,loadTable:e.prototype,loadFont:e.prototype},e.prototype._registeredMethods={pre:[],post:[],remove:[]},e.prototype._registeredPreloadMethods={},e.prototype.registerPreloadMethod=function(a,b){e.prototype._preloadMethods.hasOwnProperty(a)||(e.prototype._preloadMethods[a]=b)},e.prototype.registerMethod=function(a,b){e.prototype._registeredMethods.hasOwnProperty(a)||(e.prototype._registeredMethods[a]=[]),e.prototype._registeredMethods[a].push(b)},b.exports=e},{"./constants":47,"./shim":57}],49:[function(a,b,c){"use strict";var d=a("./core");a("./error_helpers");var e=20,f=20;d.prototype.bezier=function(a,b,c,d,e,f,g,h){for(var i=new Array(arguments.length),j=0;j<i.length;++j)i[j]=arguments[j];return this._validateParameters("bezier",i,["Number","Number","Number","Number","Number","Number","Number","Number"]),this._renderer._doStroke?(this._renderer.bezier(a,b,c,d,e,f,g,h),this):this},d.prototype.bezierDetail=function(a){return e=a,this},d.prototype.bezierPoint=function(a,b,c,d,e){var f=1-e;return Math.pow(f,3)*a+3*Math.pow(f,2)*e*b+3*f*Math.pow(e,2)*c+Math.pow(e,3)*d},d.prototype.bezierTangent=function(a,b,c,d,e){var f=1-e;return 3*d*Math.pow(e,2)-3*c*Math.pow(e,2)+6*c*f*e-6*b*f*e+3*b*Math.pow(f,2)-3*a*Math.pow(f,2)},d.prototype.curve=function(a,b,c,d,e,f,g,h){for(var i=new Array(arguments.length),j=0;j<i.length;++j)i[j]=arguments[j];return this._validateParameters("curve",i,["Number","Number","Number","Number","Number","Number","Number","Number"]),this._renderer._doStroke?(this._renderer.curve(a,b,c,d,e,f,g,h),this):void 0},d.prototype.curveDetail=function(a){return f=a,this},d.prototype.curveTightness=function(a){this._renderer._curveTightness=a},d.prototype.curvePoint=function(a,b,c,d,e){var f=e*e*e,g=e*e,h=-.5*f+g-.5*e,i=1.5*f-2.5*g+1,j=-1.5*f+2*g+.5*e,k=.5*f-.5*g;return a*h+b*i+c*j+d*k},d.prototype.curveTangent=function(a,b,c,d,e){var f=e*e,g=-3*f/2+2*e-.5,h=9*f/2-5*e,i=-9*f/2+4*e+.5,j=3*f/2-e;return a*g+b*h+c*i+d*j},b.exports=d},{"./core":48,"./error_helpers":51}],50:[function(a,b,c){"use strict";function d(a){var b=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;if(!b)throw new Error("Fullscreen not enabled in this browser.");a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()}function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}var f=a("./core"),g=a("./constants"),h=[g.ARROW,g.CROSS,g.HAND,g.MOVE,g.TEXT,g.WAIT];f.prototype._frameRate=0,f.prototype._lastFrameTime=window.performance.now(),f.prototype._targetFrameRate=60,window.console&&console.log?f.prototype.print=function(a){try{var b=JSON.parse(JSON.stringify(a));console.log(b)}catch(c){console.log(a)}}:f.prototype.print=function(){},f.prototype.println=f.prototype.print,f.prototype.frameCount=0,f.prototype.focused=document.hasFocus(),f.prototype.cursor=function(a,b,c){var d="auto",e=this._curElement.elt;if(h.indexOf(a)>-1)d=a;else if("string"==typeof a){var f="";b&&c&&"number"==typeof b&&"number"==typeof c&&(f=b+" "+c),d="http://"!==a.substring(0,6)?"url("+a+") "+f+", auto":/\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(a)?"url("+a+") "+f+", auto":a}e.style.cursor=d},f.prototype.frameRate=function(a){return"number"!=typeof a||0>=a?this._frameRate:(this._setProperty("_targetFrameRate",a),this._runFrames(),this)},f.prototype.getFrameRate=function(){return this.frameRate()},f.prototype.setFrameRate=function(a){return this.frameRate(a)},f.prototype.noCursor=function(){this._curElement.elt.style.cursor="none"},f.prototype.displayWidth=screen.width,f.prototype.displayHeight=screen.height,f.prototype.windowWidth=window.innerWidth,f.prototype.windowHeight=window.innerHeight,f.prototype._onresize=function(a){this._setProperty("windowWidth",window.innerWidth),this._setProperty("windowHeight",window.innerHeight);var b,c=this._isGlobal?window:this;"function"==typeof c.windowResized&&(b=c.windowResized(a),void 0===b||b||a.preventDefault())},f.prototype.width=0,f.prototype.height=0,f.prototype.fullscreen=function(a){return"undefined"==typeof a?document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement:void(a?d(document.documentElement):e())},f.prototype.pixelDensity=function(a){return"number"!=typeof a?this._pixelDensity:(this._pixelDensity=a,void this.resizeCanvas(this.width,this.height,!0))},f.prototype.displayDensity=function(){return window.devicePixelRatio},f.prototype.getURL=function(){return location.href},f.prototype.getURLPath=function(){return location.pathname.split("/").filter(function(a){return""!==a})},f.prototype.getURLParams=function(){for(var a,b=/[?&]([^&=]+)(?:[&=])([^&=]+)/gim,c={};null!=(a=b.exec(location.search));)a.index===b.lastIndex&&b.lastIndex++,c[a[1]]=a[2];return c},b.exports=f},{"./constants":47,"./core":48}],51:[function(a,b,c){"use strict";function d(a,b,c){if(a.match(/^p5\./)){var d=a.split(".");return c instanceof i[d[1]]}return"Boolean"===a||a.toLowerCase()===b||r.indexOf(a)>-1&&q(c)}function e(a,b,c){j&&(f(),j=!1),"undefined"===o(c)?c="#B40033":"number"===o(c)&&(c=w[c])}function f(){var a="transparent",b="#ED225D",c="#ED225D",d="white";console.log("%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.","background-color:"+a+";color:"+b+";","background-color:"+c+";color:"+d+";")}function g(){var b={},c=function(a){return Object.getOwnPropertyNames(a).filter(function(a){return"_"===a[0]?!1:a in b?!1:(b[a]=!0,!0)}).map(function(b){var c;return c="function"==typeof a[b]?"function":b===b.toUpperCase()?"constant":"variable",{name:b,type:c}})};y=[].concat(c(i.prototype),c(a("./constants"))),y.sort(function(a,b){return b.name.length-a.name.length})}function h(a,b){b||(b=console.log.bind(console)),y||g(),y.some(function(c){return a.message&&-1!==a.message.indexOf(c.name)?(b("%cDid you just try to use p5.js's "+c.name+("function"===c.type?"() ":" ")+c.type+"? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: "+z,"color: #B40033"),!0):void 0})}for(var i=a("./core"),j=!1,k={},l=k.toString,m=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],n=0;n<m.length;n++)k["[object "+m[n]+"]"]=m[n].toLowerCase();var o=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?k[l.call(a)]||"object":typeof a},p=Array.isArray||function(a){return"array"===o(a)},q=function(a){return!p(a)&&a-parseFloat(a)+1>=0},r=["Number","Integer","Number/Constant"],s=0,t=1,u=2,v=3,w=["#2D7BB6","#EE9900","#4DB200","#C83C00"];i.prototype._validateParameters=function(a,b,c){p(c[0])||(c=[c]);for(var f,g=Math.abs(b.length-c[0].length),h=0,i=1,j=c.length;j>i;i++){var k=Math.abs(b.length-c[i].length);g>=k&&(h=i,g=k)}var l="X";g>0&&(f="You wrote "+a+"(",b.length>0&&(f+=l+Array(b.length).join(","+l)),f+="). "+a+" was expecting "+c[h].length+" parameters. Try "+a+"(",c[h].length>0&&(f+=l+Array(c[h].length).join(","+l)),f+=").",c.length>1&&(f+=" "+a+" takes different numbers of parameters depending on what you want to do. Click this link to learn more: "),e(f,a,s));for(var m=0;m<c.length;m++)for(var n=0;n<c[m].length&&n<b.length;n++){var q=c[m][n],r=o(b[n]);"undefined"===r||null===r?e("It looks like "+a+" received an empty variable in spot #"+(n+1)+". If not intentional, this is often a problem with scope: [link to scope].",a,t):"*"===q||d(q,r,b[n])||(f=a+" was expecting a "+q.toLowerCase()+" for parameter #"+(n+1)+", received ",f+="string"===r?'"'+b[n]+'"':b[n],f+=" instead.",c.length>1&&(f+=" "+a+" takes different numbers of parameters depending on what you want to do. Click this link to learn more:"),e(f,a,u))}},i.prototype._validateParameters=function(){return!0};var x={0:{fileType:"image",method:"loadImage",message:" hosting the image online,"},1:{fileType:"XML file",method:"loadXML"},2:{fileType:"table file",method:"loadTable"},3:{fileType:"text file",method:"loadStrings"}};i._friendlyFileLoadError=function(a,b){var c=x[a],d="It looks like there was a problem loading your "+c.fileType+". Try checking if the file path%c ["+b+"] %cis correct,"+(c.message||"")+" or running a local server.";e(d,c.method,v)};var y=null,z="https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";i.prototype._helpForMisusedAtTopLevelCode=h,"complete"!==document.readyState&&(window.addEventListener("error",h,!1),window.addEventListener("load",function(){window.removeEventListener("error",h,!1)})),b.exports=i},{"./constants":47,"./core":48}],52:[function(a,b,c){function d(a,b,c){var d=b.bind(c);c.elt.addEventListener(a,d,!1),c._events[a]=d}var e=a("./core");e.Element=function(a,b){this.elt=a,this._pInst=b,this._events={},this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight},e.Element.prototype.parent=function(a){return 0===arguments.length?this.elt.parentNode:("string"==typeof a?("#"===a[0]&&(a=a.substring(1)),a=document.getElementById(a)):a instanceof e.Element&&(a=a.elt),a.appendChild(this.elt),this)},e.Element.prototype.id=function(a){return 0===arguments.length?this.elt.id:(this.elt.id=a,this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this)},e.Element.prototype["class"]=function(a){return 0===arguments.length?this.elt.className:(this.elt.className=a,this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this)},e.Element.prototype.mousePressed=function(a){return d("mousedown",a,this),d("touchstart",a,this),this},e.Element.prototype.mouseWheel=function(a){return d("wheel",a,this),this},e.Element.prototype.mouseReleased=function(a){return d("mouseup",a,this),d("touchend",a,this),this},e.Element.prototype.mouseClicked=function(a){return d("click",a,this),this},e.Element.prototype.mouseMoved=function(a){return d("mousemove",a,this),d("touchmove",a,this),this},e.Element.prototype.mouseOver=function(a){return d("mouseover",a,this),this},e.Element.prototype.changed=function(a){return d("change",a,this),this},e.Element.prototype.input=function(a){return d("input",a,this),this},e.Element.prototype.mouseOut=function(a){return d("mouseout",a,this),this},e.Element.prototype.touchStarted=function(a){return d("touchstart",a,this),d("mousedown",a,this),this},e.Element.prototype.touchMoved=function(a){return d("touchmove",a,this),d("mousemove",a,this),this},e.Element.prototype.touchEnded=function(a){return d("touchend",a,this),d("mouseup",a,this),this},e.Element.prototype.dragOver=function(a){return d("dragover",a,this),this},e.Element.prototype.dragLeave=function(a){return d("dragleave",a,this),this},e.Element.prototype.drop=function(a,b){function c(b){var c=new e.File(b);return function(b){c.data=b.target.result,a(c)}}return window.File&&window.FileReader&&window.FileList&&window.Blob?(d("dragover",function(a){a.stopPropagation(),a.preventDefault()},this),d("dragleave",function(a){a.stopPropagation(),a.preventDefault()},this),arguments.length>1&&d("drop",b,this),d("drop",function(a){a.stopPropagation(),a.preventDefault();for(var b=a.dataTransfer.files,d=0;d<b.length;d++){var e=b[d],f=new FileReader;f.onload=c(e),e.type.indexOf("text")>-1?f.readAsText(e):f.readAsDataURL(e);
}},this)):console.log("The File APIs are not fully supported in this browser."),this},e.Element.prototype._setProperty=function(a,b){this[a]=b},b.exports=e.Element},{"./core":48}],53:[function(a,b,c){var d=a("./core"),e=a("./constants");d.Graphics=function(a,b,c,f){var g=c||e.P2D,h=document.createElement("canvas"),i=this._userNode||document.body;i.appendChild(h),d.Element.call(this,h,f,!1),this._styles=[],this.width=a,this.height=b,this._pixelDensity=f._pixelDensity,g===e.WEBGL?this._renderer=new d.Renderer3D(h,f,!1):this._renderer=new d.Renderer2D(h,f,!1),this._renderer.resize(a,b),this._renderer._applyDefaults(),f._elements.push(this);for(var j in d.prototype)this[j]||("function"==typeof d.prototype[j]?this[j]=d.prototype[j].bind(this):this[j]=d.prototype[j]);return this},d.Graphics.prototype=Object.create(d.Element.prototype),b.exports=d.Graphics},{"./constants":47,"./core":48}],54:[function(a,b,c){function d(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}else b+=a.offsetLeft,c+=a.offsetTop;return[b,c]}var e=a("./core"),f=a("../core/constants");e.Renderer=function(a,b,c){e.Element.call(this,a,b),this.canvas=a,this._pInst=b,c?(this._isMainCanvas=!0,this._pInst._setProperty("_curElement",this),this._pInst._setProperty("canvas",this.canvas),this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height)):(this.canvas.style.display="none",this._styles=[]),this._textSize=12,this._textLeading=15,this._textFont="sans-serif",this._textStyle=f.NORMAL,this._textAscent=null,this._textDescent=null,this._rectMode=f.CORNER,this._ellipseMode=f.CENTER,this._curveTightness=0,this._imageMode=f.CORNER,this._tint=null,this._doStroke=!0,this._doFill=!0,this._strokeSet=!1,this._fillSet=!1,this._colorMode=f.RGB,this._colorMaxes={rgb:[255,255,255,255],hsb:[360,100,100,1],hsl:[360,100,100,1]}},e.Renderer.prototype=Object.create(e.Element.prototype),e.Renderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.elt.width=a*this._pInst._pixelDensity,this.elt.height=b*this._pInst._pixelDensity,this.elt.style.width=a+"px",this.elt.style.height=b+"px",this._isMainCanvas&&(this._pInst._setProperty("width",this.width),this._pInst._setProperty("height",this.height))},e.Renderer.prototype.textLeading=function(a){return arguments.length&&arguments[0]?(this._setProperty("_textLeading",a),this):this._textLeading},e.Renderer.prototype.textSize=function(a){return arguments.length&&arguments[0]?(this._setProperty("_textSize",a),this._setProperty("_textLeading",a*f._DEFAULT_LEADMULT),this._applyTextProperties()):this._textSize},e.Renderer.prototype.textStyle=function(a){return arguments.length&&arguments[0]?((a===f.NORMAL||a===f.ITALIC||a===f.BOLD)&&this._setProperty("_textStyle",a),this._applyTextProperties()):this._textStyle},e.Renderer.prototype.textAscent=function(){return null===this._textAscent&&this._updateTextMetrics(),this._textAscent},e.Renderer.prototype.textDescent=function(){return null===this._textDescent&&this._updateTextMetrics(),this._textDescent},e.Renderer.prototype._isOpenType=function(a){return a=a||this._textFont,"object"==typeof a&&a.font&&a.font.supported},e.Renderer.prototype._updateTextMetrics=function(){if(this._isOpenType())return this._setProperty("_textAscent",this._textFont._textAscent()),this._setProperty("_textDescent",this._textFont._textDescent()),this;var a=document.createElement("span");a.style.fontFamily=this._textFont,a.style.fontSize=this._textSize+"px",a.innerHTML="ABCjgq|";var b=document.createElement("div");b.style.display="inline-block",b.style.width="1px",b.style.height="0px";var c=document.createElement("div");c.appendChild(a),c.appendChild(b),c.style.height="0px",c.style.overflow="hidden",document.body.appendChild(c),b.style.verticalAlign="baseline";var e=d(b),f=d(a),g=e[1]-f[1];b.style.verticalAlign="bottom",e=d(b),f=d(a);var h=e[1]-f[1],i=h-g;return document.body.removeChild(c),this._setProperty("_textAscent",g),this._setProperty("_textDescent",i),this},b.exports=e.Renderer},{"../core/constants":47,"./core":48}],55:[function(a,b,c){var d=a("./core"),e=a("./canvas"),f=a("./constants"),g=a("../image/filters");a("./p5.Renderer");var h="rgba(0,0,0,0)";d.Renderer2D=function(a,b,c){return d.Renderer.call(this,a,b,c),this.drawingContext=this.canvas.getContext("2d"),this._pInst._setProperty("drawingContext",this.drawingContext),this},d.Renderer2D.prototype=Object.create(d.Renderer.prototype),d.Renderer2D.prototype._applyDefaults=function(){this.drawingContext.fillStyle=f._DEFAULT_FILL,this.drawingContext.strokeStyle=f._DEFAULT_STROKE,this.drawingContext.lineCap=f.ROUND,this.drawingContext.font="normal 12px sans-serif"},d.Renderer2D.prototype.resize=function(a,b){d.Renderer.prototype.resize.call(this,a,b),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity)},d.Renderer2D.prototype.background=function(){if(this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),arguments[0]instanceof d.Image)this._pInst.image(arguments[0],0,0,this.width,this.height);else{var a=this.drawingContext.fillStyle,b=this._pInst.color.apply(this,arguments),c=b.toString();this.drawingContext.fillStyle=c,this.drawingContext.fillRect(0,0,this.width,this.height),this.drawingContext.fillStyle=a}this.drawingContext.restore()},d.Renderer2D.prototype.clear=function(){this.drawingContext.clearRect(0,0,this.width,this.height)},d.Renderer2D.prototype.fill=function(){var a=this.drawingContext,b=this._pInst.color.apply(this,arguments);a.fillStyle=b.toString()},d.Renderer2D.prototype.stroke=function(){var a=this.drawingContext,b=this._pInst.color.apply(this,arguments);a.strokeStyle=b.toString()},d.Renderer2D.prototype.image=function(a,b,c,e,f,g,h,i,j){var k;try{this._tint&&(d.MediaElement&&a instanceof d.MediaElement&&a.loadPixels(),a.canvas&&(k=this._getTintedImageCanvas(a))),k||(k=a.canvas||a.elt),this.drawingContext.drawImage(k,b,c,e,f,g,h,i,j)}catch(l){if("NS_ERROR_NOT_AVAILABLE"!==l.name)throw l}},d.Renderer2D.prototype._getTintedImageCanvas=function(a){if(!a.canvas)return a;var b=g._toPixels(a.canvas),c=document.createElement("canvas");c.width=a.canvas.width,c.height=a.canvas.height;for(var d=c.getContext("2d"),e=d.createImageData(a.canvas.width,a.canvas.height),f=e.data,h=0;h<b.length;h+=4){var i=b[h],j=b[h+1],k=b[h+2],l=b[h+3];f[h]=i*this._tint[0]/255,f[h+1]=j*this._tint[1]/255,f[h+2]=k*this._tint[2]/255,f[h+3]=l*this._tint[3]/255}return d.putImageData(e,0,0),c},d.Renderer2D.prototype.blendMode=function(a){this.drawingContext.globalCompositeOperation=a},d.Renderer2D.prototype.blend=function(){var a=this.drawingContext.globalCompositeOperation,b=arguments[arguments.length-1],c=Array.prototype.slice.call(arguments,0,arguments.length-1);this.drawingContext.globalCompositeOperation=b,this._pInst.copy.apply(this._pInst,c),this.drawingContext.globalCompositeOperation=a},d.Renderer2D.prototype.copy=function(){var a,b,c,e,f,g,h,i,j;if(9===arguments.length)a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],f=arguments[4],g=arguments[5],h=arguments[6],i=arguments[7],j=arguments[8];else{if(8!==arguments.length)throw new Error("Signature not supported");a=this._pInst,b=arguments[0],c=arguments[1],e=arguments[2],f=arguments[3],g=arguments[4],h=arguments[5],i=arguments[6],j=arguments[7]}d.Renderer2D._copyHelper(a,b,c,e,f,g,h,i,j)},d.Renderer2D._copyHelper=function(a,b,c,d,e,f,g,h,i){var j=a.canvas.width/a.width;this.drawingContext.drawImage(a.canvas,j*b,j*c,j*d,j*e,f,g,h,i)},d.Renderer2D.prototype.get=function(a,b,c,e){if(void 0===a&&void 0===b&&void 0===c&&void 0===e?(a=0,b=0,c=this.width,e=this.height):void 0===c&&void 0===e&&(c=1,e=1),0>a+c||0>b+e||a>this.width||b>this.height)return[0,0,0,255];var f=this._pInst||this,g=f._pixelDensity;if(this.loadPixels.call(f),a=Math.floor(a),b=Math.floor(b),1===c&&1===e)return[f.pixels[4*g*(b*this.width+a)],f.pixels[g*(4*(b*this.width+a)+1)],f.pixels[g*(4*(b*this.width+a)+2)],f.pixels[g*(4*(b*this.width+a)+3)]];var h=a*g,i=b*g,j=Math.min(c,f.width),k=Math.min(e,f.height),l=j*g,m=k*g,n=new d.Image(j,k);return n.canvas.getContext("2d").drawImage(this.canvas,h,i,l,m,0,0,j,k),n},d.Renderer2D.prototype.loadPixels=function(){var a=this._pixelDensity||this._pInst._pixelDensity,b=this.width*a,c=this.height*a,d=this.drawingContext.getImageData(0,0,b,c);this._pInst?(this._pInst._setProperty("imageData",d),this._pInst._setProperty("pixels",d.data)):(this._setProperty("imageData",d),this._setProperty("pixels",d.data))},d.Renderer2D.prototype.set=function(a,b,c){if(a=Math.floor(a),b=Math.floor(b),c instanceof d.Image)this.drawingContext.save(),this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this.drawingContext.drawImage(c.canvas,a,b),this.loadPixels.call(this._pInst),this.drawingContext.restore();else{var e=this._pInst||this,f=0,g=0,h=0,i=0,j=4*(b*e._pixelDensity*this.width*e._pixelDensity+a*e._pixelDensity);if(e.imageData||e.loadPixels.call(e),"number"==typeof c)j<e.pixels.length&&(f=c,g=c,h=c,i=255);else if(c instanceof Array){if(c.length<4)throw new Error("pixel array must be of the form [R, G, B, A]");j<e.pixels.length&&(f=c[0],g=c[1],h=c[2],i=c[3])}else c instanceof d.Color&&j<e.pixels.length&&(f=c.levels[0],g=c.levels[1],h=c.levels[2],i=c.levels[3]);for(var k=0;k<e._pixelDensity;k++)for(var l=0;l<e._pixelDensity;l++)j=4*((b*e._pixelDensity+l)*this.width*e._pixelDensity+(a*e._pixelDensity+k)),e.pixels[j]=f,e.pixels[j+1]=g,e.pixels[j+2]=h,e.pixels[j+3]=i}},d.Renderer2D.prototype.updatePixels=function(a,b,c,d){var e=this._pixelDensity||this._pInst._pixelDensity;void 0===a&&void 0===b&&void 0===c&&void 0===d&&(a=0,b=0,c=this.width,d=this.height),c*=e,d*=e,this._pInst?this.drawingContext.putImageData(this._pInst.imageData,a,b,0,0,c,d):this.drawingContext.putImageData(this.imageData,a,b,0,0,c,d)},d.Renderer2D.prototype._acuteArcToBezier=function(a,b){var c=b/2,d=Math.cos(c),e=Math.sin(c),f=1/Math.tan(c),g=a+c,h=Math.cos(g),i=Math.sin(g),j=(4-d)/3,k=e+(d-j)*f;return{ax:Math.cos(a),ay:Math.sin(a),bx:j*h+k*i,by:j*i-k*h,cx:j*h-k*i,cy:j*i+k*h,dx:Math.cos(a+b),dy:Math.sin(a+b)}},d.Renderer2D.prototype.arc=function(a,b,c,d,g,h,i){for(var j=this.drawingContext,k=e.arcModeAdjust(a,b,c,d,this._ellipseMode),l=k.w/2,m=k.h/2,n=1e-5,o=0,p=[];h-g>n;)o=Math.min(h-g,f.HALF_PI),p.push(this._acuteArcToBezier(g,o)),g+=o;return this._doFill&&(j.beginPath(),p.forEach(function(a,b){0===b&&j.moveTo(k.x+a.ax*l,k.y+a.ay*m),j.bezierCurveTo(k.x+a.bx*l,k.y+a.by*m,k.x+a.cx*l,k.y+a.cy*m,k.x+a.dx*l,k.y+a.dy*m)}),(i===f.PIE||null==i)&&j.lineTo(k.x,k.y),j.closePath(),j.fill()),this._doStroke&&(j.beginPath(),p.forEach(function(a,b){0===b&&j.moveTo(k.x+a.ax*l,k.y+a.ay*m),j.bezierCurveTo(k.x+a.bx*l,k.y+a.by*m,k.x+a.cx*l,k.y+a.cy*m,k.x+a.dx*l,k.y+a.dy*m)}),i===f.PIE?(j.lineTo(k.x,k.y),j.closePath()):i===f.CHORD&&j.closePath(),j.stroke()),this},d.Renderer2D.prototype.ellipse=function(a,b,c,d){var f=this.drawingContext,g=this._doFill,i=this._doStroke;if(g&&!i){if(f.fillStyle===h)return this}else if(!g&&i&&f.strokeStyle===h)return this;var j=e.modeAdjust(a,b,c,d,this._ellipseMode),k=.5522847498,l=j.w/2*k,m=j.h/2*k,n=j.x+j.w,o=j.y+j.h,p=j.x+j.w/2,q=j.y+j.h/2;f.beginPath(),f.moveTo(j.x,q),f.bezierCurveTo(j.x,q-m,p-l,j.y,p,j.y),f.bezierCurveTo(p+l,j.y,n,q-m,n,q),f.bezierCurveTo(n,q+m,p+l,o,p,o),f.bezierCurveTo(p-l,o,j.x,q+m,j.x,q),f.closePath(),g&&f.fill(),i&&f.stroke()},d.Renderer2D.prototype.line=function(a,b,c,d){var e=this.drawingContext;return this._doStroke?e.strokeStyle===h?this:(e.lineWidth%2===1&&e.translate(.5,.5),e.beginPath(),e.moveTo(a,b),e.lineTo(c,d),e.stroke(),e.lineWidth%2===1&&e.translate(-.5,-.5),this):this},d.Renderer2D.prototype.point=function(a,b){var c=this.drawingContext,d=c.strokeStyle,e=c.fillStyle;return this._doStroke?c.strokeStyle===h?this:(a=Math.round(a),b=Math.round(b),c.fillStyle=d,c.lineWidth>1?(c.beginPath(),c.arc(a,b,c.lineWidth/2,0,f.TWO_PI,!1),c.fill()):c.fillRect(a,b,1,1),void(c.fillStyle=e)):this},d.Renderer2D.prototype.quad=function(a,b,c,d,e,f,g,i){var j=this.drawingContext,k=this._doFill,l=this._doStroke;if(k&&!l){if(j.fillStyle===h)return this}else if(!k&&l&&j.strokeStyle===h)return this;return j.beginPath(),j.moveTo(a,b),j.lineTo(c,d),j.lineTo(e,f),j.lineTo(g,i),j.closePath(),k&&j.fill(),l&&j.stroke(),this},d.Renderer2D.prototype.rect=function(a,b,c,d,f,g,i,j){var k=this.drawingContext,l=this._doFill,m=this._doStroke;if(l&&!m){if(k.fillStyle===h)return this}else if(!l&&m&&k.strokeStyle===h)return this;var n=e.modeAdjust(a,b,c,d,this._rectMode);if(this._doStroke&&k.lineWidth%2===1&&k.translate(.5,.5),k.beginPath(),"undefined"==typeof f)k.rect(n.x,n.y,n.w,n.h);else{"undefined"==typeof g&&(g=f),"undefined"==typeof i&&(i=g),"undefined"==typeof j&&(j=i);var o=n.x,p=n.y,q=n.w,r=n.h,s=q/2,t=r/2;2*f>q&&(f=s),2*f>r&&(f=t),2*g>q&&(g=s),2*g>r&&(g=t),2*i>q&&(i=s),2*i>r&&(i=t),2*j>q&&(j=s),2*j>r&&(j=t),k.beginPath(),k.moveTo(o+f,p),k.arcTo(o+q,p,o+q,p+r,g),k.arcTo(o+q,p+r,o,p+r,i),k.arcTo(o,p+r,o,p,j),k.arcTo(o,p,o+q,p,f),k.closePath()}return this._doFill&&k.fill(),this._doStroke&&k.stroke(),this._doStroke&&k.lineWidth%2===1&&k.translate(-.5,-.5),this},d.Renderer2D.prototype.triangle=function(a,b,c,d,e,f){var g=this.drawingContext,i=this._doFill,j=this._doStroke;if(i&&!j){if(g.fillStyle===h)return this}else if(!i&&j&&g.strokeStyle===h)return this;g.beginPath(),g.moveTo(a,b),g.lineTo(c,d),g.lineTo(e,f),g.closePath(),i&&g.fill(),j&&g.stroke()},d.Renderer2D.prototype.endShape=function(a,b,c,d,e,g,h){if(0===b.length)return this;if(!this._doStroke&&!this._doFill)return this;var i,j=a===f.CLOSE;j&&!g&&b.push(b[0]);var k,l,m=b.length;if(!c||h!==f.POLYGON&&null!==h)if(!d||h!==f.POLYGON&&null!==h)if(!e||h!==f.POLYGON&&null!==h)if(h===f.POINTS)for(k=0;m>k;k++)i=b[k],this._doStroke&&this._pInst.stroke(i[6]),this._pInst.point(i[0],i[1]);else if(h===f.LINES)for(k=0;m>k+1;k+=2)i=b[k],this._doStroke&&this._pInst.stroke(b[k+1][6]),this._pInst.line(i[0],i[1],b[k+1][0],b[k+1][1]);else if(h===f.TRIANGLES)for(k=0;m>k+2;k+=3)i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(b[k+2][0],b[k+2][1]),this.drawingContext.lineTo(i[0],i[1]),this._doFill&&(this._pInst.fill(b[k+2][5]),this.drawingContext.fill()),this._doStroke&&(this._pInst.stroke(b[k+2][6]),this.drawingContext.stroke()),this.drawingContext.closePath();else if(h===f.TRIANGLE_STRIP)for(k=0;m>k+1;k++)i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(i[0],i[1]),this._doStroke&&this._pInst.stroke(b[k+1][6]),this._doFill&&this._pInst.fill(b[k+1][5]),m>k+2&&(this.drawingContext.lineTo(b[k+2][0],b[k+2][1]),this._doStroke&&this._pInst.stroke(b[k+2][6]),this._doFill&&this._pInst.fill(b[k+2][5])),this._doFillStrokeClose();else if(h===f.TRIANGLE_FAN){if(m>2)for(this.drawingContext.beginPath(),this.drawingContext.moveTo(b[0][0],b[0][1]),this.drawingContext.lineTo(b[1][0],b[1][1]),this.drawingContext.lineTo(b[2][0],b[2][1]),this._doFill&&this._pInst.fill(b[2][5]),this._doStroke&&this._pInst.stroke(b[2][6]),this._doFillStrokeClose(),k=3;m>k;k++)i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(b[0][0],b[0][1]),this.drawingContext.lineTo(b[k-1][0],b[k-1][1]),this.drawingContext.lineTo(i[0],i[1]),this._doFill&&this._pInst.fill(i[5]),this._doStroke&&this._pInst.stroke(i[6]),this._doFillStrokeClose()}else if(h===f.QUADS)for(k=0;m>k+3;k+=4){for(i=b[k],this.drawingContext.beginPath(),this.drawingContext.moveTo(i[0],i[1]),l=1;4>l;l++)this.drawingContext.lineTo(b[k+l][0],b[k+l][1]);this.drawingContext.lineTo(i[0],i[1]),this._doFill&&this._pInst.fill(b[k+3][5]),this._doStroke&&this._pInst.stroke(b[k+3][6]),this._doFillStrokeClose()}else if(h===f.QUAD_STRIP){if(m>3)for(k=0;m>k+1;k+=2)i=b[k],this.drawingContext.beginPath(),m>k+3?(this.drawingContext.moveTo(b[k+2][0],b[k+2][1]),this.drawingContext.lineTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this.drawingContext.lineTo(b[k+3][0],b[k+3][1]),this._doFill&&this._pInst.fill(b[k+3][5]),this._doStroke&&this._pInst.stroke(b[k+3][6])):(this.drawingContext.moveTo(i[0],i[1]),this.drawingContext.lineTo(b[k+1][0],b[k+1][1])),this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),this.drawingContext.moveTo(b[0][0],b[0][1]),k=1;m>k;k++)i=b[k],i.isVert&&(i.moveTo?this.drawingContext.moveTo(i[0],i[1]):this.drawingContext.lineTo(i[0],i[1]));this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),k=0;m>k;k++)b[k].isVert?b[k].moveTo?this.drawingContext.moveTo([0],b[k][1]):this.drawingContext.lineTo(b[k][0],b[k][1]):this.drawingContext.quadraticCurveTo(b[k][0],b[k][1],b[k][2],b[k][3]);this._doFillStrokeClose()}else{for(this.drawingContext.beginPath(),k=0;m>k;k++)b[k].isVert?b[k].moveTo?this.drawingContext.moveTo(b[k][0],b[k][1]):this.drawingContext.lineTo(b[k][0],b[k][1]):this.drawingContext.bezierCurveTo(b[k][0],b[k][1],b[k][2],b[k][3],b[k][4],b[k][5]);this._doFillStrokeClose()}else if(m>3){var n=[],o=1-this._curveTightness;for(this.drawingContext.beginPath(),this.drawingContext.moveTo(b[1][0],b[1][1]),k=1;m>k+2;k++)i=b[k],n[0]=[i[0],i[1]],n[1]=[i[0]+(o*b[k+1][0]-o*b[k-1][0])/6,i[1]+(o*b[k+1][1]-o*b[k-1][1])/6],n[2]=[b[k+1][0]+(o*b[k][0]-o*b[k+2][0])/6,b[k+1][1]+(o*b[k][1]-o*b[k+2][1])/6],n[3]=[b[k+1][0],b[k+1][1]],this.drawingContext.bezierCurveTo(n[1][0],n[1][1],n[2][0],n[2][1],n[3][0],n[3][1]);j&&this.drawingContext.lineTo(b[k+1][0],b[k+1][1]),this._doFillStrokeClose()}return c=!1,d=!1,e=!1,g=!1,j&&b.pop(),this},d.Renderer2D.prototype.noSmooth=function(){return"imageSmoothingEnabled"in this.drawingContext?this.drawingContext.imageSmoothingEnabled=!1:"mozImageSmoothingEnabled"in this.drawingContext?this.drawingContext.mozImageSmoothingEnabled=!1:"webkitImageSmoothingEnabled"in this.drawingContext?this.drawingContext.webkitImageSmoothingEnabled=!1:"msImageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.msImageSmoothingEnabled=!1),this},d.Renderer2D.prototype.smooth=function(){return"imageSmoothingEnabled"in this.drawingContext?this.drawingContext.imageSmoothingEnabled=!0:"mozImageSmoothingEnabled"in this.drawingContext?this.drawingContext.mozImageSmoothingEnabled=!0:"webkitImageSmoothingEnabled"in this.drawingContext?this.drawingContext.webkitImageSmoothingEnabled=!0:"msImageSmoothingEnabled"in this.drawingContext&&(this.drawingContext.msImageSmoothingEnabled=!0),this},d.Renderer2D.prototype.strokeCap=function(a){return(a===f.ROUND||a===f.SQUARE||a===f.PROJECT)&&(this.drawingContext.lineCap=a),this},d.Renderer2D.prototype.strokeJoin=function(a){return(a===f.ROUND||a===f.BEVEL||a===f.MITER)&&(this.drawingContext.lineJoin=a),this},d.Renderer2D.prototype.strokeWeight=function(a){return"undefined"==typeof a||0===a?this.drawingContext.lineWidth=1e-4:this.drawingContext.lineWidth=a,this},d.Renderer2D.prototype._getFill=function(){return this.drawingContext.fillStyle},d.Renderer2D.prototype._getStroke=function(){return this.drawingContext.strokeStyle},d.Renderer2D.prototype.bezier=function(a,b,c,d,e,f,g,h){return this._pInst.beginShape(),this._pInst.vertex(a,b),this._pInst.bezierVertex(c,d,e,f,g,h),this._pInst.endShape(),this},d.Renderer2D.prototype.curve=function(a,b,c,d,e,f,g,h){return this._pInst.beginShape(),this._pInst.curveVertex(a,b),this._pInst.curveVertex(c,d),this._pInst.curveVertex(e,f),this._pInst.curveVertex(g,h),this._pInst.endShape(),this},d.Renderer2D.prototype._doFillStrokeClose=function(){this._doFill&&this.drawingContext.fill(),this._doStroke&&this.drawingContext.stroke(),this.drawingContext.closePath()},d.Renderer2D.prototype.applyMatrix=function(a,b,c,d,e,f){this.drawingContext.transform(a,b,c,d,e,f)},d.Renderer2D.prototype.resetMatrix=function(){return this.drawingContext.setTransform(1,0,0,1,0,0),this.drawingContext.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),this},d.Renderer2D.prototype.rotate=function(a){this.drawingContext.rotate(a)},d.Renderer2D.prototype.scale=function(a,b){return this.drawingContext.scale(a,b),this},d.Renderer2D.prototype.shearX=function(a){return this._pInst._angleMode===f.DEGREES&&(a=this._pInst.radians(a)),this.drawingContext.transform(1,0,this._pInst.tan(a),1,0,0),this},d.Renderer2D.prototype.shearY=function(a){return this._pInst._angleMode===f.DEGREES&&(a=this._pInst.radians(a)),this.drawingContext.transform(1,this._pInst.tan(a),0,1,0,0),this},d.Renderer2D.prototype.translate=function(a,b){return this.drawingContext.translate(a,b),this},d.Renderer2D.prototype.text=function(a,b,c,d,e){var g,h,i,j,k,l,m,n,o,p,q=this._pInst,r=Number.MAX_VALUE;if(this._doFill||this._doStroke){if("string"!=typeof a&&(a=a.toString()),a=a.replace(/(\t)/g,"  "),g=a.split("\n"),"undefined"!=typeof d){for(o=0,i=0;i<g.length;i++)for(k="",n=g[i].split(" "),h=0;h<n.length;h++)l=k+n[h]+" ",m=this.textWidth(l),m>d?(k=n[h]+" ",o+=q.textLeading()):k=l;switch(this._rectMode===f.CENTER&&(b-=d/2,c-=e/2),this.drawingContext.textAlign){case f.CENTER:b+=d/2;break;case f.RIGHT:b+=d}if("undefined"!=typeof e){switch(this.drawingContext.textBaseline){case f.BOTTOM:c+=e-o;break;case f._CTX_MIDDLE:c+=(e-o)/2;break;case f.BASELINE:p=!0,this.drawingContext.textBaseline=f.TOP}r=c+e-q.textAscent()}for(i=0;i<g.length;i++){for(k="",n=g[i].split(" "),h=0;h<n.length;h++)l=k+n[h]+" ",m=this.textWidth(l),m>d&&k.length>0?(this._renderText(q,k,b,c,r),k=n[h]+" ",c+=q.textLeading()):k=l;this._renderText(q,k,b,c,r),c+=q.textLeading()}}else for(j=0;j<g.length;j++)this._renderText(q,g[j],b,c,r),c+=q.textLeading();return p&&(this.drawingContext.textBaseline=f.BASELINE),q}},d.Renderer2D.prototype._renderText=function(a,b,c,d,e){return d>=e?void 0:(a.push(),this._isOpenType()?this._textFont._renderPath(b,c,d,{renderer:this}):(this._doStroke&&this._strokeSet&&this.drawingContext.strokeText(b,c,d),this._doFill&&(this.drawingContext.fillStyle=this._fillSet?this.drawingContext.fillStyle:f._DEFAULT_TEXT_FILL,this.drawingContext.fillText(b,c,d))),a.pop(),a)},d.Renderer2D.prototype.textWidth=function(a){return this._isOpenType()?this._textFont._textWidth(a):this.drawingContext.measureText(a).width},d.Renderer2D.prototype.textAlign=function(a,b){if(arguments.length)return(a===f.LEFT||a===f.RIGHT||a===f.CENTER)&&(this.drawingContext.textAlign=a),(b===f.TOP||b===f.BOTTOM||b===f.CENTER||b===f.BASELINE)&&(b===f.CENTER?this.drawingContext.textBaseline=f._CTX_MIDDLE:this.drawingContext.textBaseline=b),this._pInst;var c=this.drawingContext.textBaseline;return c===f._CTX_MIDDLE&&(c=f.CENTER),{horizontal:this.drawingContext.textAlign,vertical:c}},d.Renderer2D.prototype._applyTextProperties=function(){var a,b=this._pInst;return this._setProperty("_textAscent",null),this._setProperty("_textDescent",null),a=this._textFont,this._isOpenType()&&(a=this._textFont.font.familyName,this._setProperty("_textStyle",this._textFont.font.styleName)),this.drawingContext.font=this._textStyle+" "+this._textSize+"px "+a,b},d.Renderer2D.prototype.push=function(){this.drawingContext.save()},d.Renderer2D.prototype.pop=function(){this.drawingContext.restore()},b.exports=d.Renderer2D},{"../image/filters":65,"./canvas":46,"./constants":47,"./core":48,"./p5.Renderer":54}],56:[function(a,b,c){var d=a("./core"),e=a("./constants");a("./p5.Graphics"),a("./p5.Renderer2D"),a("../3d/p5.Renderer3D");var f="defaultCanvas0";d.prototype.createCanvas=function(a,b,c){var g,h,i=c||e.P2D;if(arguments[3]&&(g="boolean"==typeof arguments[3]?arguments[3]:!1),i===e.WEBGL)h=document.getElementById(f),h&&h.parentNode.removeChild(h),h=document.createElement("canvas"),h.id=f;else if(g){h=document.createElement("canvas");for(var j=0;document.getElementById("defaultCanvas"+j);)j++;f="defaultCanvas"+j,h.id=f}else h=this.canvas;return this._setupDone||(h.className+=" p5_hidden",h.style.visibility="hidden"),this._userNode?this._userNode.appendChild(h):document.body.appendChild(h),i===e.WEBGL?(this._setProperty("_renderer",new d.Renderer3D(h,this,!0)),this._isdefaultGraphics=!0):this._isdefaultGraphics||(this._setProperty("_renderer",new d.Renderer2D(h,this,!0)),this._isdefaultGraphics=!0),this._renderer.resize(a,b),this._renderer._applyDefaults(),g&&this._elements.push(this._renderer),this._renderer},d.prototype.resizeCanvas=function(a,b,c){if(this._renderer){var d={};for(var e in this.drawingContext){var f=this.drawingContext[e];"object"!=typeof f&&"function"!=typeof f&&(d[e]=f)}this._renderer.resize(a,b);for(var g in d)this.drawingContext[g]=d[g];c||this.redraw()}},d.prototype.noCanvas=function(){this.canvas&&this.canvas.parentNode.removeChild(this.canvas)},d.prototype.createGraphics=function(a,b,c){return new d.Graphics(a,b,c,this)},d.prototype.blendMode=function(a){if(a!==e.BLEND&&a!==e.DARKEST&&a!==e.LIGHTEST&&a!==e.DIFFERENCE&&a!==e.MULTIPLY&&a!==e.EXCLUSION&&a!==e.SCREEN&&a!==e.REPLACE&&a!==e.OVERLAY&&a!==e.HARD_LIGHT&&a!==e.SOFT_LIGHT&&a!==e.DODGE&&a!==e.BURN&&a!==e.ADD&&a!==e.NORMAL)throw new Error("Mode "+a+" not recognized.");this._renderer.blendMode(a)},b.exports=d},{"../3d/p5.Renderer3D":36,"./constants":47,"./core":48,"./p5.Graphics":53,"./p5.Renderer2D":55}],57:[function(a,b,c){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,1e3/60)}}(),window.performance=window.performance||{},window.performance.now=function(){var a=Date.now();return window.performance.now||window.performance.mozNow||window.performance.msNow||window.performance.oNow||window.performance.webkitNow||function(){return Date.now()-a}}(),function(){"use strict";"undefined"==typeof Uint8ClampedArray||Uint8ClampedArray.prototype.slice||Object.defineProperty(Uint8ClampedArray.prototype,"slice",{value:Array.prototype.slice,writable:!0,configurable:!0,enumerable:!1})}()},{}],58:[function(a,b,c){"use strict";var d=a("./core");d.prototype.exit=function(){throw"exit() not implemented, see remove()"},d.prototype.noLoop=function(){this._loop=!1},d.prototype.loop=function(){this._loop=!0,this._draw()},d.prototype.push=function(){this._renderer.push(),this._styles.push({_doStroke:this._renderer._doStroke,_doFill:this._renderer._doFill,_tint:this._renderer._tint,_imageMode:this._renderer._imageMode,_rectMode:this._renderer._rectMode,_ellipseMode:this._renderer._ellipseMode,_colorMode:this._renderer._colorMode,_textFont:this._renderer._textFont,_textLeading:this._renderer._textLeading,_textSize:this._renderer._textSize,_textStyle:this._renderer._textStyle})},d.prototype.pop=function(){this._renderer.pop();var a=this._styles.pop();for(var b in a)this._renderer[b]=a[b]},d.prototype.pushStyle=function(){throw new Error("pushStyle() not used, see push()")},d.prototype.popStyle=function(){throw new Error("popStyle() not used, see pop()")},d.prototype.redraw=function(){var a=this.setup||window.setup,b=this.draw||window.draw;if("function"==typeof b){this.push(),"undefined"==typeof a&&this.scale(this._pixelDensity,this._pixelDensity);var c=this;this._registeredMethods.pre.forEach(function(a){a.call(c)}),b(),this._registeredMethods.post.forEach(function(a){a.call(c)}),this.pop()}},d.prototype.size=function(){var a="size() is not a valid p5 function, to set the size of the ";throw a+="drawing canvas, please use createCanvas() instead"},b.exports=d},{"./core":48}],59:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants");d.prototype.applyMatrix=function(a,b,c,d,e,f){return this._renderer.applyMatrix(a,b,c,d,e,f),this},d.prototype.popMatrix=function(){throw new Error("popMatrix() not used, see pop()")},d.prototype.printMatrix=function(){throw new Error("printMatrix() not implemented")},d.prototype.pushMatrix=function(){throw new Error("pushMatrix() not used, see push()")},d.prototype.resetMatrix=function(){return this._renderer.resetMatrix(),this},d.prototype.rotate=function(){var a=arguments[0];return this._angleMode===e.DEGREES&&(a=this.radians(a)),arguments.length>1?this._renderer.rotate(a,arguments[1]):this._renderer.rotate(a),this},d.prototype.rotateX=function(a){for(var b=new Array(arguments.length),c=0;c<b.length;++c)b[c]=arguments[c];if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";return this._validateParameters("rotateX",b,[["Number"]]),this._renderer.rotateX(a),this},d.prototype.rotateY=function(a){if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";for(var b=new Array(arguments.length),c=0;c<b.length;++c)b[c]=arguments[c];return this._validateParameters("rotateY",b,[["Number"]]),this._renderer.rotateY(a),this},d.prototype.rotateZ=function(a){if(!this._renderer.isP3D)throw"not supported in p2d. Please use webgl mode";for(var b=new Array(arguments.length),c=0;c<b.length;++c)b[c]=arguments[c];return this._validateParameters("rotateZ",b,[["Number"]]),this._renderer.rotateZ(a),this},d.prototype.scale=function(){for(var a,b,c,e=new Array(arguments.length),f=0;f<e.length;f++)e[f]=arguments[f];return e[0]instanceof d.Vector?(a=e[0].x,b=e[0].y,c=e[0].z):e[0]instanceof Array?(a=e[0][0],b=e[0][1],c=e[0][2]||1):1===e.length?a=b=c=e[0]:(a=e[0],b=e[1],c=e[2]||1),this._renderer.isP3D?this._renderer.scale.call(this._renderer,a,b,c):this._renderer.scale.call(this._renderer,a,b),this},d.prototype.shearX=function(a){return this._angleMode===e.DEGREES&&(a=this.radians(a)),this._renderer.shearX(a),this},d.prototype.shearY=function(a){return this._angleMode===e.DEGREES&&(a=this.radians(a)),this._renderer.shearY(a),this},d.prototype.translate=function(a,b,c){for(var d=new Array(arguments.length),e=0;e<d.length;++e)d[e]=arguments[e];return this._renderer.isP3D?(this._validateParameters("translate",d,[["Number","Number","Number"]]),this._renderer.translate(a,b,c)):(this._validateParameters("translate",d,[["Number","Number"]]),this._renderer.translate(a,b)),this},b.exports=d},{"./constants":47,"./core":48}],60:[function(a,b,c){"use strict";var d=a("./core"),e=a("./constants"),f=null,g=[],h=[],i=!1,j=!1,k=!1,l=!1;d.prototype.beginContour=function(){return h=[],l=!0,this},d.prototype.beginShape=function(a){return f=a===e.POINTS||a===e.LINES||a===e.TRIANGLES||a===e.TRIANGLE_FAN||a===e.TRIANGLE_STRIP||a===e.QUADS||a===e.QUAD_STRIP?a:null,this._renderer.isP3D?this._renderer.beginShape(a):(g=[],h=[]),this},d.prototype.bezierVertex=function(a,b,c,d,e,f){if(0===g.length)throw"vertex() must be used once before calling bezierVertex()";i=!0;for(var j=[],k=0;k<arguments.length;k++)j[k]=arguments[k];return j.isVert=!1,l?h.push(j):g.push(j),this},d.prototype.curveVertex=function(a,b){return j=!0,this.vertex(a,b),this},d.prototype.endContour=function(){var a=h[0].slice();a.isVert=h[0].isVert,a.moveTo=!1,h.push(a),g.push(g[0]);for(var b=0;b<h.length;b++)g.push(h[b]);return this},d.prototype.endShape=function(a){if(this._renderer.isP3D)this._renderer.endShape();else{if(0===g.length)return this;if(!this._renderer._doStroke&&!this._renderer._doFill)return this;var b=a===e.CLOSE;b&&!l&&g.push(g[0]),this._renderer.endShape(a,g,j,i,k,l,f),j=!1,i=!1,k=!1,l=!1,b&&g.pop()}return this},d.prototype.quadraticVertex=function(a,b,c,d){if(this._contourInited){var f={};return f.x=a,f.y=b,f.x3=c,f.y3=d,f.type=e.QUADRATIC,this._contourVertices.push(f),this}if(!(g.length>0))throw"vertex() must be used once before calling quadraticVertex()";k=!0;for(var i=[],j=0;j<arguments.length;j++)i[j]=arguments[j];return i.isVert=!1,l?h.push(i):g.push(i),this},d.prototype.vertex=function(a,b,c){for(var d=new Array(arguments.length),e=0;e<d.length;++e)d[e]=arguments[e];if(this._renderer.isP3D)this._validateParameters("vertex",d,[["Number","Number","Number"]]),this._renderer.vertex(arguments[0],arguments[1],arguments[2]);else{this._validateParameters("vertex",d,[["Number","Number"],["Number","Number","Number"]]);var f=[];f.isVert=!0,f[0]=a,f[1]=b,f[2]=0,f[3]=0,f[4]=0,f[5]=this._renderer._getFill(),
f[6]=this._renderer._getStroke(),c&&(f.moveTo=c),l?(0===h.length&&(f.moveTo=!0),h.push(f)):g.push(f)}return this},b.exports=d},{"./constants":47,"./core":48}],61:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.deviceOrientation=void 0,d.prototype.accelerationX=0,d.prototype.accelerationY=0,d.prototype.accelerationZ=0,d.prototype.pAccelerationX=0,d.prototype.pAccelerationY=0,d.prototype.pAccelerationZ=0,d.prototype._updatePAccelerations=function(){this._setProperty("pAccelerationX",this.accelerationX),this._setProperty("pAccelerationY",this.accelerationY),this._setProperty("pAccelerationZ",this.accelerationZ)},d.prototype.rotationX=0,d.prototype.rotationY=0,d.prototype.rotationZ=0,d.prototype.pRotationX=0,d.prototype.pRotationY=0,d.prototype.pRotationZ=0;var e,f,g,h=0,i=0,j=0,k="clockwise",l="clockwise",m="clockwise";d.prototype._updatePRotations=function(){this._setProperty("pRotationX",this.rotationX),this._setProperty("pRotationY",this.rotationY),this._setProperty("pRotationZ",this.rotationZ)},d.prototype.turnAxis=void 0;var n=.5,o=30;d.prototype.setMoveThreshold=function(a){"number"==typeof a&&(n=a)},d.prototype.setShakeThreshold=function(a){"number"==typeof a&&(o=a)},d.prototype._ondeviceorientation=function(a){this._updatePRotations(),this._setProperty("rotationX",a.beta),this._setProperty("rotationY",a.gamma),this._setProperty("rotationZ",a.alpha),this._handleMotion()},d.prototype._ondevicemotion=function(a){this._updatePAccelerations(),this._setProperty("accelerationX",2*a.acceleration.x),this._setProperty("accelerationY",2*a.acceleration.y),this._setProperty("accelerationZ",2*a.acceleration.z),this._handleMotion()},d.prototype._handleMotion=function(){90===window.orientation||-90===window.orientation?this._setProperty("deviceOrientation","landscape"):0===window.orientation?this._setProperty("deviceOrientation","portrait"):void 0===window.orientation&&this._setProperty("deviceOrientation","undefined");var a=this.deviceMoved||window.deviceMoved;"function"==typeof a&&(Math.abs(this.accelerationX-this.pAccelerationX)>n||Math.abs(this.accelerationY-this.pAccelerationY)>n||Math.abs(this.accelerationZ-this.pAccelerationZ)>n)&&a();var b=this.deviceTurned||window.deviceTurned;if("function"==typeof b){var c=this.rotationX+180,d=this.pRotationX+180,p=h+180;c-d>0&&270>c-d||-270>c-d?k="clockwise":(0>c-d||c-d>270)&&(k="counter-clockwise"),k!==e&&(p=c),Math.abs(c-p)>90&&Math.abs(c-p)<270&&(p=c,this._setProperty("turnAxis","X"),b()),e=k,h=p-180;var q=this.rotationY+180,r=this.pRotationY+180,s=i+180;q-r>0&&270>q-r||-270>q-r?l="clockwise":(0>q-r||q-this.pRotationY>270)&&(l="counter-clockwise"),l!==f&&(s=q),Math.abs(q-s)>90&&Math.abs(q-s)<270&&(s=q,this._setProperty("turnAxis","Y"),b()),f=l,i=s-180,this.rotationZ-this.pRotationZ>0&&this.rotationZ-this.pRotationZ<270||this.rotationZ-this.pRotationZ<-270?m="clockwise":(this.rotationZ-this.pRotationZ<0||this.rotationZ-this.pRotationZ>270)&&(m="counter-clockwise"),m!==g&&(j=this.rotationZ),Math.abs(this.rotationZ-j)>90&&Math.abs(this.rotationZ-j)<270&&(j=this.rotationZ,this._setProperty("turnAxis","Z"),b()),g=m,this._setProperty("turnAxis",void 0)}var t=this.deviceShaken||window.deviceShaken;if("function"==typeof t){var u,v;null!==this.pAccelerationX&&(u=Math.abs(this.accelerationX-this.pAccelerationX),v=Math.abs(this.accelerationY-this.pAccelerationY)),u+v>o&&t()}},b.exports=d},{"../core/core":48}],62:[function(a,b,c){"use strict";var d=a("../core/core"),e={};d.prototype.isKeyPressed=!1,d.prototype.keyIsPressed=!1,d.prototype.key="",d.prototype.keyCode=0,d.prototype._onkeydown=function(a){if(!e[a.which]){this._setProperty("isKeyPressed",!0),this._setProperty("keyIsPressed",!0),this._setProperty("keyCode",a.which),e[a.which]=!0;var b=String.fromCharCode(a.which);b||(b=a.which),this._setProperty("key",b);var c=this.keyPressed||window.keyPressed;if("function"==typeof c&&!a.charCode){var d=c(a);d===!1&&a.preventDefault()}}},d.prototype._onkeyup=function(a){var b=this.keyReleased||window.keyReleased;this._setProperty("isKeyPressed",!1),this._setProperty("keyIsPressed",!1),this._setProperty("_lastKeyCodeTyped",null),e[a.which]=!1;var c=String.fromCharCode(a.which);if(c||(c=a.which),this._setProperty("key",c),this._setProperty("keyCode",a.which),"function"==typeof b){var d=b(a);d===!1&&a.preventDefault()}},d.prototype._onkeypress=function(a){if(a.which!==this._lastKeyCodeTyped){this._setProperty("keyCode",a.which),this._setProperty("_lastKeyCodeTyped",a.which),this._setProperty("key",String.fromCharCode(a.which));var b=this.keyTyped||window.keyTyped;if("function"==typeof b){var c=b(a);c===!1&&a.preventDefault()}}},d.prototype._onblur=function(a){e={}},d.prototype.keyIsDown=function(a){return e[a]},b.exports=d},{"../core/core":48}],63:[function(a,b,c){"use strict";function d(a,b){var c=a.getBoundingClientRect();return{x:b.clientX-c.left,y:b.clientY-c.top}}var e=a("../core/core"),f=a("../core/constants");e.prototype._nextMouseX=0,e.prototype._nextMouseY=0,e.prototype.mouseX=0,e.prototype.mouseY=0,e.prototype.pmouseX=0,e.prototype.pmouseY=0,e.prototype.winMouseX=0,e.prototype.winMouseY=0,e.prototype.pwinMouseX=0,e.prototype.pwinMouseY=0,e.prototype.mouseButton=0,e.prototype.mouseIsPressed=!1,e.prototype.isMousePressed=!1,e.prototype._updateNextMouseCoords=function(a){if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type)this._setProperty("_nextMouseX",this._nextTouchX),this._setProperty("_nextMouseY",this._nextTouchY);else if(null!==this._curElement){var b=d(this._curElement.elt,a);this._setProperty("_nextMouseX",b.x),this._setProperty("_nextMouseY",b.y)}this._setProperty("winMouseX",a.pageX),this._setProperty("winMouseY",a.pageY)},e.prototype._updateMouseCoords=function(){this._setProperty("pmouseX",this.mouseX),this._setProperty("pmouseY",this.mouseY),this._setProperty("mouseX",this._nextMouseX),this._setProperty("mouseY",this._nextMouseY),this._setProperty("pwinMouseX",this.winMouseX),this._setProperty("pwinMouseY",this.winMouseY)},e.prototype._setMouseButton=function(a){1===a.button?this._setProperty("mouseButton",f.CENTER):2===a.button?this._setProperty("mouseButton",f.RIGHT):this._setProperty("mouseButton",f.LEFT)},e.prototype._onmousemove=function(a){var b,c=this._isGlobal?window:this;this._updateNextMouseCoords(a),this._updateNextTouchCoords(a),this.isMousePressed?"function"==typeof c.mouseDragged?(b=c.mouseDragged(a),b===!1&&a.preventDefault()):"function"==typeof c.touchMoved&&(b=c.touchMoved(a),b===!1&&a.preventDefault()):"function"==typeof c.mouseMoved&&(b=c.mouseMoved(a),b===!1&&a.preventDefault())},e.prototype._onmousedown=function(a){var b,c=this._isGlobal?window:this;this._setProperty("isMousePressed",!0),this._setProperty("mouseIsPressed",!0),this._setMouseButton(a),this._updateNextMouseCoords(a),this._updateNextTouchCoords(a),"function"==typeof c.mousePressed?(b=c.mousePressed(a),b===!1&&a.preventDefault()):"function"==typeof c.touchStarted&&(b=c.touchStarted(a),b===!1&&a.preventDefault())},e.prototype._onmouseup=function(a){var b,c=this._isGlobal?window:this;this._setProperty("isMousePressed",!1),this._setProperty("mouseIsPressed",!1),"function"==typeof c.mouseReleased?(b=c.mouseReleased(a),b===!1&&a.preventDefault()):"function"==typeof c.touchEnded&&(b=c.touchEnded(a),b===!1&&a.preventDefault())},e.prototype._ondragend=e.prototype._onmouseup,e.prototype._ondragover=e.prototype._onmousemove,e.prototype._onclick=function(a){var b=this._isGlobal?window:this;if("function"==typeof b.mouseClicked){var c=b.mouseClicked(a);c===!1&&a.preventDefault()}},e.prototype._onwheel=function(a){var b=this._isGlobal?window:this;if("function"==typeof b.mouseWheel){a.delta=a.deltaY;var c=b.mouseWheel(a);c===!1&&a.preventDefault()}},b.exports=e},{"../core/constants":47,"../core/core":48}],64:[function(a,b,c){"use strict";function d(a,b,c){c=c||0;var d=a.getBoundingClientRect(),e=b.touches[c]||b.changedTouches[c];return{x:e.clientX-d.left,y:e.clientY-d.top,id:e.identifier}}var e=a("../core/core");e.prototype._nextTouchX=0,e.prototype._nextTouchY=0,e.prototype.touchX=0,e.prototype.touchY=0,e.prototype.ptouchX=0,e.prototype.ptouchY=0,e.prototype.touches=[],e.prototype.touchIsDown=!1,e.prototype._updateNextTouchCoords=function(a){if("mousedown"===a.type||"mousemove"===a.type||"mouseup"===a.type)this._setProperty("_nextTouchX",this._nextMouseX),this._setProperty("_nextTouchY",this._nextMouseY);else if(null!==this._curElement){var b=d(this._curElement.elt,a,0);this._setProperty("_nextTouchX",b.x),this._setProperty("_nextTouchY",b.y);for(var c=[],e=0;e<a.touches.length;e++)c[e]=d(this._curElement.elt,a,e);this._setProperty("touches",c)}},e.prototype._updateTouchCoords=function(){this._setProperty("ptouchX",this.touchX),this._setProperty("ptouchY",this.touchY),this._setProperty("touchX",this._nextTouchX),this._setProperty("touchY",this._nextTouchY)},e.prototype._ontouchstart=function(a){var b,c=this._isGlobal?window:this;this._updateNextTouchCoords(a),this._updateNextMouseCoords(a),this._setProperty("touchIsDown",!0),"function"==typeof c.touchStarted?(b=c.touchStarted(a),b===!1&&a.preventDefault()):"function"==typeof c.mousePressed&&(b=c.mousePressed(a),b===!1&&a.preventDefault())},e.prototype._ontouchmove=function(a){var b,c=this._isGlobal?window:this;this._updateNextTouchCoords(a),this._updateNextMouseCoords(a),"function"==typeof c.touchMoved?(b=c.touchMoved(a),b===!1&&a.preventDefault()):"function"==typeof c.mouseDragged&&(b=c.mouseDragged(a),b===!1&&a.preventDefault())},e.prototype._ontouchend=function(a){this._updateNextTouchCoords(a),this._updateNextMouseCoords(a),0===this.touches.length&&this._setProperty("touchIsDown",!1);var b,c=this._isGlobal?window:this;"function"==typeof c.touchEnded?(b=c.touchEnded(a),b===!1&&a.preventDefault()):"function"==typeof c.mouseReleased&&(b=c.mouseReleased(a),b===!1&&a.preventDefault())},b.exports=e},{"../core/core":48}],65:[function(a,b,c){"use strict";function d(a){var b=3.5*a|0;if(b=1>b?1:248>b?b:248,g!==b){g=b,h=1+g<<1,i=new Int32Array(h),j=new Array(h);for(var c=0;h>c;c++)j[c]=new Int32Array(256);for(var d,e,f,k,l=1,m=b-1;b>l;l++){i[b+l]=i[m]=e=m*m,f=j[b+l],k=j[m--];for(var n=0;256>n;n++)f[n]=k[n]=e*n}d=i[b]=b*b,f=j[b];for(var o=0;256>o;o++)f[o]=d*o}}function e(a,b){for(var c=f._toPixels(a),e=a.width,k=a.height,l=e*k,m=new Int32Array(l),n=0;l>n;n++)m[n]=f._getARGB(c,n);var o,p,q,r,s,t,u,v,w,x,y=new Int32Array(l),z=new Int32Array(l),A=new Int32Array(l),B=new Int32Array(l),C=0;d(b);var D,E,F,G;for(E=0;k>E;E++){for(D=0;e>D;D++){if(r=q=p=s=o=0,t=D-g,0>t)x=-t,t=0;else{if(t>=e)break;x=0}for(F=x;h>F&&!(t>=e);F++){var H=m[t+C];G=j[F],s+=G[(-16777216&H)>>>24],p+=G[(16711680&H)>>16],q+=G[(65280&H)>>8],r+=G[255&H],o+=i[F],t++}u=C+D,y[u]=s/o,z[u]=p/o,A[u]=q/o,B[u]=r/o}C+=e}for(C=0,v=-g,w=v*e,E=0;k>E;E++){for(D=0;e>D;D++){if(r=q=p=s=o=0,0>v)x=u=-v,t=D;else{if(v>=k)break;x=0,u=v,t=D+w}for(F=x;h>F&&!(u>=k);F++)G=j[F],s+=G[y[t]],p+=G[z[t]],q+=G[A[t]],r+=G[B[t]],o+=i[F],u++,t+=e;m[D+C]=s/o<<24|p/o<<16|q/o<<8|r/o}C+=e,w+=e,v++}f._setPixels(c,m)}var f={};f._toPixels=function(a){return a instanceof ImageData?a.data:a.getContext("2d").getImageData(0,0,a.width,a.height).data},f._getARGB=function(a,b){var c=4*b;return a[c+3]<<24&4278190080|a[c]<<16&16711680|a[c+1]<<8&65280|255&a[c+2]},f._setPixels=function(a,b){for(var c=0,d=0,e=a.length;e>d;d++)c=4*d,a[c+0]=(16711680&b[d])>>>16,a[c+1]=(65280&b[d])>>>8,a[c+2]=255&b[d],a[c+3]=(4278190080&b[d])>>>24},f._toImageData=function(a){return a instanceof ImageData?a:a.getContext("2d").getImageData(0,0,a.width,a.height)},f._createImageData=function(a,b){return f._tmpCanvas=document.createElement("canvas"),f._tmpCtx=f._tmpCanvas.getContext("2d"),this._tmpCtx.createImageData(a,b)},f.apply=function(a,b,c){var d=a.getContext("2d"),e=d.getImageData(0,0,a.width,a.height),f=b(e,c);f instanceof ImageData?d.putImageData(f,0,0,0,0,a.width,a.height):d.putImageData(e,0,0,0,0,a.width,a.height)},f.threshold=function(a,b){var c=f._toPixels(a);void 0===b&&(b=.5);for(var d=Math.floor(255*b),e=0;e<c.length;e+=4){var g,h=c[e],i=c[e+1],j=c[e+2],k=.2126*h+.7152*i+.0722*j;g=k>=d?255:0,c[e]=c[e+1]=c[e+2]=g}},f.gray=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4){var d=b[c],e=b[c+1],g=b[c+2],h=.2126*d+.7152*e+.0722*g;b[c]=b[c+1]=b[c+2]=h}},f.opaque=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4)b[c+3]=255;return b},f.invert=function(a){for(var b=f._toPixels(a),c=0;c<b.length;c+=4)b[c]=255-b[c],b[c+1]=255-b[c+1],b[c+2]=255-b[c+2]},f.posterize=function(a,b){var c=f._toPixels(a);if(2>b||b>255)throw new Error("Level must be greater than 2 and less than 255 for posterize");for(var d=b-1,e=0;e<c.length;e+=4){var g=c[e],h=c[e+1],i=c[e+2];c[e]=255*(g*b>>8)/d,c[e+1]=255*(h*b>>8)/d,c[e+2]=255*(i*b>>8)/d}},f.dilate=function(a){for(var b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t=f._toPixels(a),u=0,v=t.length?t.length/4:0,w=new Int32Array(v);v>u;)for(b=u,c=u+a.width;c>u;)d=e=f._getARGB(t,u),i=u-1,h=u+1,j=u-a.width,k=u+a.width,b>i&&(i=u),h>=c&&(h=u),0>j&&(j=0),k>=v&&(k=u),n=f._getARGB(t,j),m=f._getARGB(t,i),o=f._getARGB(t,k),l=f._getARGB(t,h),g=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),q=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),p=77*(l>>16&255)+151*(l>>8&255)+28*(255&l),r=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),s=77*(o>>16&255)+151*(o>>8&255)+28*(255&o),q>g&&(e=m,g=q),p>g&&(e=l,g=p),r>g&&(e=n,g=r),s>g&&(e=o,g=s),w[u++]=e;f._setPixels(t,w)},f.erode=function(a){for(var b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t=f._toPixels(a),u=0,v=t.length?t.length/4:0,w=new Int32Array(v);v>u;)for(b=u,c=u+a.width;c>u;)d=e=f._getARGB(t,u),i=u-1,h=u+1,j=u-a.width,k=u+a.width,b>i&&(i=u),h>=c&&(h=u),0>j&&(j=0),k>=v&&(k=u),n=f._getARGB(t,j),m=f._getARGB(t,i),o=f._getARGB(t,k),l=f._getARGB(t,h),g=77*(d>>16&255)+151*(d>>8&255)+28*(255&d),q=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),p=77*(l>>16&255)+151*(l>>8&255)+28*(255&l),r=77*(n>>16&255)+151*(n>>8&255)+28*(255&n),s=77*(o>>16&255)+151*(o>>8&255)+28*(255&o),g>q&&(e=m,g=q),g>p&&(e=l,g=p),g>r&&(e=n,g=r),g>s&&(e=o,g=s),w[u++]=e;f._setPixels(t,w)};var g,h,i,j;f.blur=function(a,b){e(a,b)},b.exports=f},{}],66:[function(a,b,c){"use strict";var d=a("../core/core"),e=[];d.prototype.createImage=function(a,b){return new d.Image(a,b)},d.prototype.saveCanvas=function(){var a,b,c;if(3===arguments.length?(a=arguments[0],b=arguments[1],c=arguments[2]):2===arguments.length?"object"==typeof arguments[0]?(a=arguments[0],b=arguments[1]):(b=arguments[0],c=arguments[1]):1===arguments.length&&("object"==typeof arguments[0]?a=arguments[0]:b=arguments[0]),a instanceof d.Element&&(a=a.elt),a instanceof HTMLCanvasElement||(a=null),c||(c=d.prototype._checkFileExtension(b,c)[1],""===c&&(c="png")),a||this._curElement&&this._curElement.elt&&(a=this._curElement.elt),d.prototype._isSafari()){var e="Hello, Safari user!\n";e+="Now capturing a screenshot...\n",e+="To save this image,\n",e+="go to File --> Save As.\n",alert(e),window.location.href=a.toDataURL()}else{var f;if("undefined"==typeof c)c="png",f="image/png";else switch(c){case"png":f="image/png";break;case"jpeg":f="image/jpeg";break;case"jpg":f="image/jpeg";break;default:f="image/png"}var g="image/octet-stream",h=a.toDataURL(f);h=h.replace(f,g),d.prototype.downloadFile(h,b,c)}},d.prototype.saveFrames=function(a,b,c,f,g){var h=c||3;h=d.prototype.constrain(h,0,15),h=1e3*h;var i=f||15;i=d.prototype.constrain(i,0,22);var j=0,k=d.prototype._makeFrame,l=this._curElement.elt,m=setInterval(function(){k(a+j,b,l),j++},1e3/i);setTimeout(function(){if(clearInterval(m),g)g(e);else for(var a=0;a<e.length;a++){var b=e[a];d.prototype.downloadFile(b.imageData,b.filename,b.ext)}e=[]},h+.01)},d.prototype._makeFrame=function(a,b,c){var d;d=this?this._curElement.elt:c;var f;if(b)switch(b.toLowerCase()){case"png":f="image/png";break;case"jpeg":f="image/jpeg";break;case"jpg":f="image/jpeg";break;default:f="image/png"}else b="png",f="image/png";var g="image/octet-stream",h=d.toDataURL(f);h=h.replace(f,g);var i={};i.imageData=h,i.filename=a,i.ext=b,e.push(i)},b.exports=d},{"../core/core":48}],67:[function(a,b,c){"use strict";function d(a,b){return a>0&&b>a?a:b}var e=a("../core/core"),f=a("./filters"),g=a("../core/canvas"),h=a("../core/constants");a("../core/error_helpers"),e.prototype.loadImage=function(a,b,c){var d=new Image,f=new e.Image(1,1,this),g=e._getDecrementPreload.apply(this,arguments);return d.onload=function(){f.width=f.canvas.width=d.width,f.height=f.canvas.height=d.height,f.drawingContext.drawImage(d,0,0),"function"==typeof b&&b(f),g&&b!==g&&g()},d.onerror=function(a){e._friendlyFileLoadError(0,d.src),"function"==typeof c&&c!==g&&c(a)},0!==a.indexOf("data:image/")&&(d.crossOrigin="Anonymous"),d.src=a,f},e.prototype.image=function(a,b,c,e,f,h,i,j,k){if(arguments.length<=5)if(h=b||0,i=c||0,b=0,c=0,a.elt&&a.elt.videoWidth&&!a.canvas){var l=a.elt.videoWidth,m=a.elt.videoHeight;j=e||a.elt.width,k=f||a.elt.width*m/l,e=l,f=m}else j=e||a.width,k=f||a.height,e=a.width,f=a.height;else{if(9!==arguments.length)throw"Wrong number of arguments to image()";b=b||0,c=c||0,e=d(e,a.width),f=d(f,a.height),h=h||0,i=i||0,j=j||a.width,k=k||a.height}var n=g.modeAdjust(h,i,j,k,this._renderer._imageMode);this._renderer.image(a,b,c,e,f,n.x,n.y,n.w,n.h)},e.prototype.tint=function(){var a=this.color.apply(this,arguments);this._renderer._tint=a.levels},e.prototype.noTint=function(){this._renderer._tint=null},e.prototype._getTintedImageCanvas=function(a){if(!a.canvas)return a;var b=f._toPixels(a.canvas),c=document.createElement("canvas");c.width=a.canvas.width,c.height=a.canvas.height;for(var d=c.getContext("2d"),e=d.createImageData(a.canvas.width,a.canvas.height),g=e.data,h=0;h<b.length;h+=4){var i=b[h],j=b[h+1],k=b[h+2],l=b[h+3];g[h]=i*this._renderer._tint[0]/255,g[h+1]=j*this._renderer._tint[1]/255,g[h+2]=k*this._renderer._tint[2]/255,g[h+3]=l*this._renderer._tint[3]/255}return d.putImageData(e,0,0),c},e.prototype.imageMode=function(a){(a===h.CORNER||a===h.CORNERS||a===h.CENTER)&&(this._renderer._imageMode=a)},b.exports=e},{"../core/canvas":46,"../core/constants":47,"../core/core":48,"../core/error_helpers":51,"./filters":65}],68:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./filters");d.Image=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.drawingContext=this.canvas.getContext("2d"),this._pixelDensity=1,this.isTexture=!1,this.pixels=[]},d.Image.prototype._setProperty=function(a,b){this[a]=b},d.Image.prototype.loadPixels=function(){d.Renderer2D.prototype.loadPixels.call(this)},d.Image.prototype.updatePixels=function(a,b,c,e){d.Renderer2D.prototype.updatePixels.call(this,a,b,c,e)},d.Image.prototype.get=function(a,b,c,e){return d.Renderer2D.prototype.get.call(this,a,b,c,e)},d.Image.prototype.set=function(a,b,c){d.Renderer2D.prototype.set.call(this,a,b,c)},d.Image.prototype.resize=function(a,b){0===a&&0===b?(a=this.canvas.width,b=this.canvas.height):0===a?a=this.canvas.width*b/this.canvas.height:0===b&&(b=this.canvas.height*a/this.canvas.width);var c=document.createElement("canvas");c.width=a,c.height=b,c.getContext("2d").drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height,0,0,c.width,c.height),this.canvas.width=this.width=a,this.canvas.height=this.height=b,this.drawingContext.drawImage(c,0,0,a,b,0,0,a,b),this.pixels.length>0&&this.loadPixels()},d.Image.prototype.copy=function(){d.prototype.copy.apply(this,arguments)},d.Image.prototype.mask=function(a){void 0===a&&(a=this);var b=this.drawingContext.globalCompositeOperation,c=1;a instanceof d.Renderer&&(c=a._pInst._pixelDensity);var e=[a,0,0,c*a.width,c*a.height,0,0,this.width,this.height];this.drawingContext.globalCompositeOperation="destination-in",this.copy.apply(this,e),this.drawingContext.globalCompositeOperation=b},d.Image.prototype.filter=function(a,b){e.apply(this.canvas,e[a.toLowerCase()],b)},d.Image.prototype.blend=function(){d.prototype.blend.apply(this,arguments)},d.Image.prototype.save=function(a,b){var c;if(b)switch(b.toLowerCase()){case"png":c="image/png";break;case"jpeg":c="image/jpeg";break;case"jpg":c="image/jpeg";break;default:c="image/png"}else b="png",c="image/png";var e="image/octet-stream",f=this.canvas.toDataURL(c);f=f.replace(c,e),d.prototype.downloadFile(f,a,b)},d.Image.prototype.createTexture=function(a){return this},b.exports=d.Image},{"../core/core":48,"./filters":65}],69:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./filters");a("../color/p5.Color"),d.prototype.pixels=[],d.prototype.blend=function(){this._renderer.blend.apply(this._renderer,arguments)},d.prototype.copy=function(){d.Renderer2D._copyHelper.apply(this,arguments)},d.prototype.filter=function(a,b){e.apply(this.canvas,e[a.toLowerCase()],b)},d.prototype.get=function(a,b,c,d){return this._renderer.get(a,b,c,d)},d.prototype.loadPixels=function(){this._renderer.loadPixels()},d.prototype.set=function(a,b,c){this._renderer.set(a,b,c)},d.prototype.updatePixels=function(a,b,c,d){0!==this.pixels.length&&this._renderer.updatePixels(a,b,c,d)},b.exports=d},{"../color/p5.Color":42,"../core/core":48,"./filters":65}],70:[function(a,b,c){"use strict";function d(a,b){var c={};if(b=b||[],"undefined"==typeof b)for(var d=0;d<a.length;d++)b[d.toString()]=d;for(var e=0;e<b.length;e++){var f=b[e],g=a[e];c[f]=g}return c}function e(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(a,b){b&&b!==!0&&"true"!==b||(b=""),a||(a="untitled");var c="";return a&&a.indexOf(".")>-1&&(c=a.split(".").pop()),b&&c!==b&&(c=b,a=a+"."+c),[a,c]}function g(a){document.body.removeChild(a.target)}var h=a("../core/core"),i=a("reqwest"),j=a("opentype.js");a("../core/error_helpers"),h._getDecrementPreload=function(){var a=arguments[arguments.length-1];return(window.preload||this&&this.preload)&&"function"==typeof a?a:null},h.prototype.loadFont=function(a,b,c){var d=new h.Font(this),e=h._getDecrementPreload.apply(this,arguments);return j.load(a,function(f,g){if(f){if("undefined"!=typeof c&&c!==e)return c(f);throw f}d.font=g,"undefined"!=typeof b&&b(d),e&&b!==e&&e();var h,i,j=["ttf","otf","woff","woff2"],k=a.split("\\").pop().split("/").pop(),l=k.lastIndexOf("."),m=1>l?null:k.substr(l+1);j.indexOf(m)>-1&&(h=k.substr(0,l),i=document.createElement("style"),i.appendChild(document.createTextNode("\n@font-face {\nfont-family: "+h+";\nsrc: url("+a+");\n}\n")),document.head.appendChild(i))}),d},h.prototype.createInput=function(){throw"not yet implemented"},h.prototype.createReader=function(){throw"not yet implemented"},h.prototype.loadBytes=function(){throw"not yet implemented"},h.prototype.loadJSON=function(){for(var a,b=arguments[0],c=arguments[1],d=h._getDecrementPreload.apply(this,arguments),e=[],f="json",g=2;g<arguments.length;g++){var j=arguments[g];"string"==typeof j?("jsonp"===j||"json"===j)&&(f=j):"function"==typeof j&&(a=j)}return i({url:b,type:f,crossOrigin:!0,error:function(b){a?a(b):console.log(b.statusText)},success:function(a){for(var b in a)e[b]=a[b];"undefined"!=typeof c&&c(a),d&&c!==d&&d()}}),e},h.prototype.loadStrings=function(a,b,c){var d=[],e=new XMLHttpRequest,f=h._getDecrementPreload.apply(this,arguments);return e.addEventListener("error",function(a){c?c(a):console.log(a.responseText)}),e.open("GET",a,!0),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status){var a=e.responseText.match(/[^\r\n]+/g);for(var g in a)d[g]=a[g];"undefined"!=typeof b&&b(d),f&&b!==f&&f()}else c?c(e):console.log(e.statusText)},e.send(null),d},h.prototype.loadTable=function(a){for(var b=null,c=[],e=!1,f=",",g=!1,j=h._getDecrementPreload.apply(this,arguments),k=1;k<arguments.length;k++)if("function"==typeof arguments[k]&&arguments[k]!==j)b=arguments[k];else if("string"==typeof arguments[k])if(c.push(arguments[k]),"header"===arguments[k]&&(e=!0),"csv"===arguments[k]){if(g)throw new Error("Cannot set multiple separator types.");f=",",g=!0}else if("tsv"===arguments[k]){if(g)throw new Error("Cannot set multiple separator types.");f="	",g=!0}var l=new h.Table;return i({url:a,crossOrigin:!0,type:"csv"}).then(function(a){a=a.responseText;for(var c,g={},i=0,m=1,n=2,o=4,p='"',q="\r",r="\n",s=[],t=0,u=null,v=function(){g.escaped=!1,u=[],x()},w=function(){g.currentState=o,s.push(u),u=null},x=function(){g.currentState=i,g.token=""},y=function(){u.push(g.token),x()};;){if(c=a[t++],null==c){if(g.escaped)throw new Error("Unclosed quote in file.");if(u){y(),w();break}}if(null===u&&v(),g.currentState===i){if(c===p){g.escaped=!0,g.currentState=m;continue}g.currentState=m}g.currentState===m&&g.escaped?c===p?a[t]===p?(g.token+=p,t++):(g.escaped=!1,g.currentState=n):g.token+=c:c===q?(a[t]===r&&t++,y(),w()):c===r?(y(),w()):c===f?y():g.currentState===m&&(g.token+=c)}if(e)l.columns=s.shift();else for(k=0;k<s[0].length;k++)l.columns[k]="null";var z;for(k=0;k<s.length&&(k!==s.length-1||1!==s[k].length||"undefined"!==s[k][0]);k++)z=new h.TableRow,z.arr=s[k],z.obj=d(s[k],l.columns),l.addRow(z);null!==b&&b(l),j&&b!==j&&j()}).fail(function(c,d){h._friendlyFileLoadError(2,a),"undefined"!=typeof b&&b!==j&&b(!1)}),l},h.prototype.loadXML=function(a,b,c){var d=document.implementation.createDocument(null,null),e=h._getDecrementPreload.apply(this,arguments);return i({url:a,type:"xml",crossOrigin:!0,error:function(a){c?c(a):console.log(a.statusText)}}).then(function(a){var c=a.documentElement;d.appendChild(c),"undefined"!=typeof b&&b(d),e&&b!==e&&e()}),d},h.prototype.parseXML=function(){throw"not yet implemented"},h.prototype.selectFolder=function(){throw"not yet implemented"},h.prototype.selectInput=function(){throw"not yet implemented"},h.prototype.httpGet=function(){var a=Array.prototype.slice.call(arguments);a.push("GET"),h.prototype.httpDo.apply(this,a)},h.prototype.httpPost=function(){var a=Array.prototype.slice.call(arguments);a.push("POST"),h.prototype.httpDo.apply(this,a)},h.prototype.httpDo=function(){if("object"==typeof arguments[0])i(arguments[0]);else{for(var a,b,c="GET",d=arguments[0],e={},f="",g=1;g<arguments.length;g++){var h=arguments[g];"string"==typeof h?"GET"===h||"POST"===h||"PUT"===h?c=h:f=h:"object"==typeof h?e=h:"function"==typeof h&&(a?b=h:a=h)}""===f&&(f=-1!==d.indexOf("json")?"json":-1!==d.indexOf("xml")?"xml":"text"),i({url:d,method:c,data:e,type:f,crossOrigin:!0,success:function(b){"undefined"!=typeof a&&a("text"===f?b.response:b)},error:function(a){b?b(a):console.log(a.statusText)}})}},window.URL=window.URL||window.webkitURL,h.prototype._pWriters=[],h.prototype.beginRaw=function(){throw"not yet implemented"},h.prototype.beginRecord=function(){throw"not yet implemented"},h.prototype.createOutput=function(){throw"not yet implemented"},h.prototype.createWriter=function(a,b){var c;for(var d in h.prototype._pWriters)if(h.prototype._pWriters[d].name===a)return c=new h.PrintWriter(a+window.millis(),b),h.prototype._pWriters.push(c),c;return c=new h.PrintWriter(a,b),h.prototype._pWriters.push(c),c},h.prototype.endRaw=function(){throw"not yet implemented"},h.prototype.endRecord=function(){throw"not yet implemented"},h.PrintWriter=function(a,b){var c=this;this.name=a,this.content="",this.print=function(a){this.content+=a},this.println=function(a){this.content+=a+"\n"},this.flush=function(){this.content=""},this.close=function(){var d=[];d.push(this.content),h.prototype.writeFile(d,a,b);for(var e in h.prototype._pWriters)h.prototype._pWriters[e].name===this.name&&h.prototype._pWriters.splice(e,1);c.flush(),c={}}},h.prototype.saveBytes=function(){throw"not yet implemented"},h.prototype.save=function(a,b,c){var d=arguments,e=this._curElement.elt;if(0===d.length)return void h.prototype.saveCanvas(e);if(d[0]instanceof h.Renderer||d[0]instanceof h.Graphics)return void h.prototype.saveCanvas(d[0].elt,d[1],d[2]);if(1===d.length&&"string"==typeof d[0])h.prototype.saveCanvas(e,d[0]);else{var g=f(d[1],d[2])[1];switch(g){case"json":return void h.prototype.saveJSON(d[0],d[1],d[2]);case"txt":return void h.prototype.saveStrings(d[0],d[1],d[2]);default:d[0]instanceof Array?h.prototype.saveStrings(d[0],d[1],d[2]):d[0]instanceof h.Table?h.prototype.saveTable(d[0],d[1],d[2],d[3]):d[0]instanceof h.Image?h.prototype.saveCanvas(d[0].canvas,d[1]):d[0]instanceof h.SoundFile&&h.prototype.saveSound(d[0],d[1],d[2],d[3])}}},h.prototype.saveJSON=function(a,b,c){var d;d=c?JSON.stringify(a):JSON.stringify(a,void 0,2),console.log(d),this.saveStrings(d.split("\n"),b,"json")},h.prototype.saveJSONObject=h.prototype.saveJSON,h.prototype.saveJSONArray=h.prototype.saveJSON,h.prototype.saveStream=function(){throw"not yet implemented"},h.prototype.saveStrings=function(a,b,c){for(var d=c||"txt",e=this.createWriter(b,d),f=0;f<a.length;f++)f<a.length-1?e.println(a[f]):e.print(a[f]);e.close(),e.flush()},h.prototype.saveXML=function(){throw"not yet implemented"},h.prototype.selectOutput=function(){throw"not yet implemented"},h.prototype.saveTable=function(a,b,c){var d=this.createWriter(b,c),f=a.columns,g=",";if("tsv"===c&&(g="	"),"html"!==c){if("0"!==f[0])for(var h=0;h<f.length;h++)h<f.length-1?d.print(f[h]+g):d.println(f[h]);for(var i=0;i<a.rows.length;i++){var j;for(j=0;j<a.rows[i].arr.length;j++)j<a.rows[i].arr.length-1?d.print(a.rows[i].arr[j]+g):i<a.rows.length-1?d.println(a.rows[i].arr[j]):d.print(a.rows[i].arr[j])}}else{d.println("<html>"),d.println("<head>");var k='  <meta http-equiv="content-type" content';if(k+='="text/html;charset=utf-8" />',d.println(k),d.println("</head>"),d.println("<body>"),d.println("  <table>"),"0"!==f[0]){d.println("    <tr>");for(var l=0;l<f.length;l++){var m=e(f[l]);d.println("      <td>"+m),d.println("      </td>")}d.println("    </tr>")}for(var n=0;n<a.rows.length;n++){d.println("    <tr>");for(var o=0;o<a.columns.length;o++){var p=a.rows[n].getString(o),q=e(p);d.println("      <td>"+q),d.println("      </td>")}d.println("    </tr>")}d.println("  </table>"),d.println("</body>"),d.print("</html>")}d.close(),d.flush()},h.prototype.writeFile=function(a,b,c){var d="application/octet-stream";h.prototype._isSafari()&&(d="text/plain");var e=new Blob(a,{type:d}),f=window.URL.createObjectURL(e);h.prototype.downloadFile(f,b,c)},h.prototype.downloadFile=function(a,b,c){var d=f(b,c),e=d[0],i=d[1],j=document.createElement("a");if(j.href=a,j.download=e,j.onclick=g,j.style.display="none",document.body.appendChild(j),h.prototype._isSafari()){var k="Hello, Safari user! To download this file...\n";k+="1. Go to File --> Save As.\n",k+='2. Choose "Page Source" as the Format.\n',k+='3. Name it with this extension: ."'+i+'"',alert(k)}j.click(),a=null},h.prototype._checkFileExtension=f,h.prototype._isSafari=function(){var a=Object.prototype.toString.call(window.HTMLElement);return a.indexOf("Constructor")>0},b.exports=h},{"../core/core":48,"../core/error_helpers":51,"opentype.js":8,reqwest:27}],71:[function(a,b,c){"use strict";var d=a("../core/core");d.Table=function(a){this.columns=[],this.rows=[]},d.Table.prototype.addRow=function(a){var b=a||new d.TableRow;if("undefined"==typeof b.arr||"undefined"==typeof b.obj)throw"invalid TableRow: "+b;return b.table=this,this.rows.push(b),b},d.Table.prototype.removeRow=function(a){this.rows[a].table=null;var b=this.rows.splice(a+1,this.rows.length);this.rows.pop(),this.rows=this.rows.concat(b)},d.Table.prototype.getRow=function(a){return this.rows[a]},d.Table.prototype.getRows=function(){return this.rows},d.Table.prototype.findRow=function(a,b){if("string"==typeof b){for(var c=0;c<this.rows.length;c++)if(this.rows[c].obj[b]===a)return this.rows[c]}else for(var d=0;d<this.rows.length;d++)if(this.rows[d].arr[b]===a)return this.rows[d];return null},d.Table.prototype.findRows=function(a,b){var c=[];if("string"==typeof b)for(var d=0;d<this.rows.length;d++)this.rows[d].obj[b]===a&&c.push(this.rows[d]);else for(var e=0;e<this.rows.length;e++)this.rows[e].arr[b]===a&&c.push(this.rows[e]);return c},d.Table.prototype.matchRow=function(a,b){if("number"==typeof b){for(var c=0;c<this.rows.length;c++)if(this.rows[c].arr[b].match(a))return this.rows[c]}else for(var d=0;d<this.rows.length;d++)if(this.rows[d].obj[b].match(a))return this.rows[d];
return null},d.Table.prototype.matchRows=function(a,b){var c=[];if("number"==typeof b)for(var d=0;d<this.rows.length;d++)this.rows[d].arr[b].match(a)&&c.push(this.rows[d]);else for(var e=0;e<this.rows.length;e++)this.rows[e].obj[b].match(a)&&c.push(this.rows[e]);return c},d.Table.prototype.getColumn=function(a){var b=[];if("string"==typeof a)for(var c=0;c<this.rows.length;c++)b.push(this.rows[c].obj[a]);else for(var d=0;d<this.rows.length;d++)b.push(this.rows[d].arr[a]);return b},d.Table.prototype.clearRows=function(){delete this.rows,this.rows=[]},d.Table.prototype.addColumn=function(a){var b=a||null;this.columns.push(b)},d.Table.prototype.getColumnCount=function(){return this.columns.length},d.Table.prototype.getRowCount=function(){return this.rows.length},d.Table.prototype.removeTokens=function(a,b){for(var c=function(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},d=[],e=0;e<a.length;e++)d.push(c(a.charAt(e)));var f=new RegExp(d.join("|"),"g");if("undefined"==typeof b)for(var g=0;g<this.columns.length;g++)for(var h=0;h<this.rows.length;h++){var i=this.rows[h].arr[g];i=i.replace(f,""),this.rows[h].arr[g]=i,this.rows[h].obj[this.columns[g]]=i}else if("string"==typeof b)for(var j=0;j<this.rows.length;j++){var k=this.rows[j].obj[b];k=k.replace(f,""),this.rows[j].obj[b]=k;var l=this.columns.indexOf(b);this.rows[j].arr[l]=k}else for(var m=0;m<this.rows.length;m++){var n=this.rows[m].arr[b];n=n.replace(f,""),this.rows[m].arr[b]=n,this.rows[m].obj[this.columns[b]]=n}},d.Table.prototype.trim=function(a){var b=new RegExp(" ","g");if("undefined"==typeof a)for(var c=0;c<this.columns.length;c++)for(var d=0;d<this.rows.length;d++){var e=this.rows[d].arr[c];e=e.replace(b,""),this.rows[d].arr[c]=e,this.rows[d].obj[this.columns[c]]=e}else if("string"==typeof a)for(var f=0;f<this.rows.length;f++){var g=this.rows[f].obj[a];g=g.replace(b,""),this.rows[f].obj[a]=g;var h=this.columns.indexOf(a);this.rows[f].arr[h]=g}else for(var i=0;i<this.rows.length;i++){var j=this.rows[i].arr[a];j=j.replace(b,""),this.rows[i].arr[a]=j,this.rows[i].obj[this.columns[a]]=j}},d.Table.prototype.removeColumn=function(a){var b,c;"string"==typeof a?(b=a,c=this.columns.indexOf(a),console.log("string")):(c=a,b=this.columns[a]);var d=this.columns.splice(c+1,this.columns.length);this.columns.pop(),this.columns=this.columns.concat(d);for(var e=0;e<this.rows.length;e++){var f=this.rows[e].arr,g=f.splice(c+1,f.length);f.pop(),this.rows[e].arr=f.concat(g),delete this.rows[e].obj[b]}},d.Table.prototype.set=function(a,b,c){this.rows[a].set(b,c)},d.Table.prototype.setNum=function(a,b,c){this.rows[a].setNum(b,c)},d.Table.prototype.setString=function(a,b,c){this.rows[a].setString(b,c)},d.Table.prototype.get=function(a,b){return this.rows[a].get(b)},d.Table.prototype.getNum=function(a,b){return this.rows[a].getNum(b)},d.Table.prototype.getString=function(a,b){return this.rows[a].getString(b)},d.Table.prototype.getObject=function(a){for(var b,c,d,e={},f=0;f<this.rows.length;f++)if(b=this.rows[f].obj,"string"==typeof a){if(c=this.columns.indexOf(a),!(c>=0))throw'This table has no column named "'+a+'"';d=b[a],e[d]=b}else e[f]=this.rows[f].obj;return e},d.Table.prototype.getArray=function(){for(var a=[],b=0;b<this.rows.length;b++)a.push(this.rows[b].arr);return a},b.exports=d.Table},{"../core/core":48}],72:[function(a,b,c){"use strict";var d=a("../core/core");d.TableRow=function(a,b){var c=[],d={};a&&(b=b||",",c=a.split(b));for(var e=0;e<c.length;e++){var f=e,g=c[e];d[f]=g}this.arr=c,this.obj=d,this.table=null},d.TableRow.prototype.set=function(a,b){if("string"==typeof a){var c=this.table.columns.indexOf(a);if(!(c>=0))throw'This table has no column named "'+a+'"';this.obj[a]=b,this.arr[c]=b}else{if(!(a<this.table.columns.length))throw"Column #"+a+" is out of the range of this table";this.arr[a]=b;var d=this.table.columns[a];this.obj[d]=b}},d.TableRow.prototype.setNum=function(a,b){var c=parseFloat(b,10);this.set(a,c)},d.TableRow.prototype.setString=function(a,b){var c=b.toString();this.set(a,c)},d.TableRow.prototype.get=function(a){return"string"==typeof a?this.obj[a]:this.arr[a]},d.TableRow.prototype.getNum=function(a){var b;if(b="string"==typeof a?parseFloat(this.obj[a],10):parseFloat(this.arr[a],10),"NaN"===b.toString())throw"Error: "+this.obj[a]+" is NaN (Not a Number)";return b},d.TableRow.prototype.getString=function(a){return"string"==typeof a?this.obj[a].toString():this.arr[a].toString()},b.exports=d.TableRow},{"../core/core":48}],73:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.abs=Math.abs,d.prototype.ceil=Math.ceil,d.prototype.constrain=function(a,b,c){return Math.max(Math.min(a,c),b)},d.prototype.dist=function(a,b,c,d,e,f){return 4===arguments.length?Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)):6===arguments.length?Math.sqrt((d-a)*(d-a)+(e-b)*(e-b)+(f-c)*(f-c)):void 0},d.prototype.exp=Math.exp,d.prototype.floor=Math.floor,d.prototype.lerp=function(a,b,c){return c*(b-a)+a},d.prototype.log=Math.log,d.prototype.mag=function(a,b){return Math.sqrt(a*a+b*b)},d.prototype.map=function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},d.prototype.max=function(){return arguments[0]instanceof Array?Math.max.apply(null,arguments[0]):Math.max.apply(null,arguments)},d.prototype.min=function(){return arguments[0]instanceof Array?Math.min.apply(null,arguments[0]):Math.min.apply(null,arguments)},d.prototype.norm=function(a,b,c){return this.map(a,b,c,0,1)},d.prototype.pow=Math.pow,d.prototype.round=Math.round,d.prototype.sq=function(a){return a*a},d.prototype.sqrt=Math.sqrt,b.exports=d},{"../core/core":48}],74:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.createVector=function(a,b,c){return this instanceof d?new d.Vector(this,arguments):new d.Vector(a,b,c)},b.exports=d},{"../core/core":48}],75:[function(a,b,c){"use strict";var d,e=a("../core/core"),f=4,g=1<<f,h=8,i=1<<h,j=4095,k=4,l=.5,m=function(a){return.5*(1-Math.cos(a*Math.PI))};e.prototype.noise=function(a,b,c){if(b=b||0,c=c||0,null==d){d=new Array(j+1);for(var e=0;j+1>e;e++)d[e]=Math.random()}0>a&&(a=-a),0>b&&(b=-b),0>c&&(c=-c);for(var n,o,p,q,r,s=Math.floor(a),t=Math.floor(b),u=Math.floor(c),v=a-s,w=b-t,x=c-u,y=0,z=.5,A=0;k>A;A++){var B=s+(t<<f)+(u<<h);n=m(v),o=m(w),p=d[B&j],p+=n*(d[B+1&j]-p),q=d[B+g&j],q+=n*(d[B+g+1&j]-q),p+=o*(q-p),B+=i,q=d[B&j],q+=n*(d[B+1&j]-q),r=d[B+g&j],r+=n*(d[B+g+1&j]-r),q+=o*(r-q),p+=m(x)*(q-p),y+=p*z,z*=l,s<<=1,v*=2,t<<=1,w*=2,u<<=1,x*=2,v>=1&&(s++,v--),w>=1&&(t++,w--),x>=1&&(u++,x--)}return y},e.prototype.noiseDetail=function(a,b){a>0&&(k=a),b>0&&(l=b)},e.prototype.noiseSeed=function(a){var b=function(){var a,b,c=4294967296,d=1664525,e=1013904223;return{setSeed:function(d){b=a=(null==d?Math.random()*c:d)>>>0},getSeed:function(){return a},rand:function(){return b=(d*b+e)%c,b/c}}}();b.setSeed(a),d=new Array(j+1);for(var c=0;j+1>c;c++)d[c]=b.rand()},b.exports=e},{"../core/core":48}],76:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./polargeometry"),f=a("../core/constants");d.Vector=function(){var a,b,c;arguments[0]instanceof d?(this.p5=arguments[0],a=arguments[1][0]||0,b=arguments[1][1]||0,c=arguments[1][2]||0):(a=arguments[0]||0,b=arguments[1]||0,c=arguments[2]||0),this.x=a,this.y=b,this.z=c},d.Vector.prototype.toString=function(){return"p5.Vector Object : ["+this.x+", "+this.y+", "+this.z+"]"},d.Vector.prototype.set=function(a,b,c){return a instanceof d.Vector?(this.x=a.x||0,this.y=a.y||0,this.z=a.z||0,this):a instanceof Array?(this.x=a[0]||0,this.y=a[1]||0,this.z=a[2]||0,this):(this.x=a||0,this.y=b||0,this.z=c||0,this)},d.Vector.prototype.copy=function(){return this.p5?new d.Vector(this.p5,[this.x,this.y,this.z]):new d.Vector(this.x,this.y,this.z)},d.Vector.prototype.add=function(a,b,c){return a instanceof d.Vector?(this.x+=a.x||0,this.y+=a.y||0,this.z+=a.z||0,this):a instanceof Array?(this.x+=a[0]||0,this.y+=a[1]||0,this.z+=a[2]||0,this):(this.x+=a||0,this.y+=b||0,this.z+=c||0,this)},d.Vector.prototype.sub=function(a,b,c){return a instanceof d.Vector?(this.x-=a.x||0,this.y-=a.y||0,this.z-=a.z||0,this):a instanceof Array?(this.x-=a[0]||0,this.y-=a[1]||0,this.z-=a[2]||0,this):(this.x-=a||0,this.y-=b||0,this.z-=c||0,this)},d.Vector.prototype.mult=function(a){return this.x*=a||0,this.y*=a||0,this.z*=a||0,this},d.Vector.prototype.div=function(a){return this.x/=a,this.y/=a,this.z/=a,this},d.Vector.prototype.mag=function(){return Math.sqrt(this.magSq())},d.Vector.prototype.magSq=function(){var a=this.x,b=this.y,c=this.z;return a*a+b*b+c*c},d.Vector.prototype.dot=function(a,b,c){return a instanceof d.Vector?this.dot(a.x,a.y,a.z):this.x*(a||0)+this.y*(b||0)+this.z*(c||0)},d.Vector.prototype.cross=function(a){var b=this.y*a.z-this.z*a.y,c=this.z*a.x-this.x*a.z,e=this.x*a.y-this.y*a.x;return this.p5?new d.Vector(this.p5,[b,c,e]):new d.Vector(b,c,e)},d.Vector.prototype.dist=function(a){var b=a.copy().sub(this);return b.mag()},d.Vector.prototype.normalize=function(){return this.div(this.mag())},d.Vector.prototype.limit=function(a){var b=this.magSq();return b>a*a&&(this.div(Math.sqrt(b)),this.mult(a)),this},d.Vector.prototype.setMag=function(a){return this.normalize().mult(a)},d.Vector.prototype.heading=function(){var a=Math.atan2(this.y,this.x);return this.p5?this.p5._angleMode===f.RADIANS?a:e.radiansToDegrees(a):a},d.Vector.prototype.rotate=function(a){this.p5&&this.p5._angleMode===f.DEGREES&&(a=e.degreesToRadians(a));var b=this.heading()+a,c=this.mag();return this.x=Math.cos(b)*c,this.y=Math.sin(b)*c,this},d.Vector.prototype.lerp=function(a,b,c,e){return a instanceof d.Vector?this.lerp(a.x,a.y,a.z,b):(this.x+=(a-this.x)*e||0,this.y+=(b-this.y)*e||0,this.z+=(c-this.z)*e||0,this)},d.Vector.prototype.array=function(){return[this.x||0,this.y||0,this.z||0]},d.Vector.prototype.equals=function(a,b,c){var e,f,g;return a instanceof d.Vector?(e=a.x||0,f=a.y||0,g=a.z||0):a instanceof Array?(e=a[0]||0,f=a[1]||0,g=a[2]||0):(e=a||0,f=b||0,g=c||0),this.x===e&&this.y===f&&this.z===g},d.Vector.fromAngle=function(a){return this.p5&&this.p5._angleMode===f.DEGREES&&(a=e.degreesToRadians(a)),this.p5?new d.Vector(this.p5,[Math.cos(a),Math.sin(a),0]):new d.Vector(Math.cos(a),Math.sin(a),0)},d.Vector.random2D=function(){var a;return a=this.p5?this.p5._angleMode===f.DEGREES?this.p5.random(360):this.p5.random(f.TWO_PI):Math.random()*Math.PI*2,this.fromAngle(a)},d.Vector.random3D=function(){var a,b;this.p5?(a=this.p5.random(0,f.TWO_PI),b=this.p5.random(-1,1)):(a=Math.random()*Math.PI*2,b=2*Math.random()-1);var c=Math.sqrt(1-b*b)*Math.cos(a),e=Math.sqrt(1-b*b)*Math.sin(a);return this.p5?new d.Vector(this.p5,[c,e,b]):new d.Vector(c,e,b)},d.Vector.add=function(a,b,c){return c?c.set(a):c=a.copy(),c.add(b),c},d.Vector.sub=function(a,b,c){return c?c.set(a):c=a.copy(),c.sub(b),c},d.Vector.mult=function(a,b,c){return c?c.set(a):c=a.copy(),c.mult(b),c},d.Vector.div=function(a,b,c){return c?c.set(a):c=a.copy(),c.div(b),c},d.Vector.dot=function(a,b){return a.dot(b)},d.Vector.cross=function(a,b){return a.cross(b)},d.Vector.dist=function(a,b){return a.dist(b)},d.Vector.lerp=function(a,b,c,d){return d?d.set(a):d=a.copy(),d.lerp(b,c),d},d.Vector.angleBetween=function(a,b){var c=Math.acos(a.dot(b)/(a.mag()*b.mag()));return this.p5&&this.p5._angleMode===f.DEGREES&&(c=e.radiansToDegrees(c)),c},b.exports=d.Vector},{"../core/constants":47,"../core/core":48,"./polargeometry":77}],77:[function(a,b,c){b.exports={degreesToRadians:function(a){return 2*Math.PI*a/360},radiansToDegrees:function(a){return 360*a/(2*Math.PI)}}},{}],78:[function(a,b,c){"use strict";var d=a("../core/core"),e=!1,f=function(){var a,b,c=4294967296,d=1664525,e=1013904223;return{setSeed:function(d){b=a=(null==d?Math.random()*c:d)>>>0},getSeed:function(){return a},rand:function(){return b=(d*b+e)%c,b/c}}}();d.prototype.randomSeed=function(a){f.setSeed(a),e=!0},d.prototype.random=function(a,b){var c;if(c=e?f.rand():Math.random(),0===arguments.length)return c;if(1===arguments.length)return c*a;if(a>b){var d=a;a=b,b=d}return c*(b-a)+a};var g,h=!1;d.prototype.randomGaussian=function(a,b){var c,d,e,f;if(h)c=g,h=!1;else{do d=this.random(2)-1,e=this.random(2)-1,f=d*d+e*e;while(f>=1);f=Math.sqrt(-2*Math.log(f)/f),c=d*f,g=e*f,h=!0}var i=a||0,j=b||1;return c*j+i},b.exports=d},{"../core/core":48}],79:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("./polargeometry"),f=a("../core/constants");d.prototype._angleMode=f.RADIANS,d.prototype.acos=function(a){return this._angleMode===f.RADIANS?Math.acos(a):e.radiansToDegrees(Math.acos(a))},d.prototype.asin=function(a){return this._angleMode===f.RADIANS?Math.asin(a):e.radiansToDegrees(Math.asin(a))},d.prototype.atan=function(a){return this._angleMode===f.RADIANS?Math.atan(a):e.radiansToDegrees(Math.atan(a))},d.prototype.atan2=function(a,b){return this._angleMode===f.RADIANS?Math.atan2(a,b):e.radiansToDegrees(Math.atan2(a,b))},d.prototype.cos=function(a){return this._angleMode===f.RADIANS?Math.cos(a):Math.cos(this.radians(a))},d.prototype.sin=function(a){return this._angleMode===f.RADIANS?Math.sin(a):Math.sin(this.radians(a))},d.prototype.tan=function(a){return this._angleMode===f.RADIANS?Math.tan(a):Math.tan(this.radians(a))},d.prototype.degrees=function(a){return e.radiansToDegrees(a)},d.prototype.radians=function(a){return e.degreesToRadians(a)},d.prototype.angleMode=function(a){(a===f.DEGREES||a===f.RADIANS)&&(this._angleMode=a)},b.exports=d},{"../core/constants":47,"../core/core":48,"./polargeometry":77}],80:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.textAlign=function(a,b){return this._renderer.textAlign.apply(this._renderer,arguments)},d.prototype.textLeading=function(a){return this._renderer.textLeading.apply(this._renderer,arguments)},d.prototype.textSize=function(a){return this._renderer.textSize.apply(this._renderer,arguments)},d.prototype.textStyle=function(a){return this._renderer.textStyle.apply(this._renderer,arguments)},d.prototype.textWidth=function(a){return this._renderer.textWidth.apply(this._renderer,arguments)},d.prototype.textAscent=function(){return this._renderer.textAscent()},d.prototype.textDescent=function(){return this._renderer.textDescent()},d.prototype._updateTextMetrics=function(){return this._renderer._updateTextMetrics()},b.exports=d},{"../core/core":48}],81:[function(a,b,c){"use strict";var d=a("../core/core"),e=a("../core/constants");a("../core/error_helpers"),d.prototype.text=function(a,b,c,d,e){for(var f=new Array(arguments.length),g=0;g<f.length;++g)f[g]=arguments[g];return this._validateParameters("text",f,[["*","Number","Number"],["*","Number","Number","Number","Number"]]),this._renderer._doFill||this._renderer._doStroke?this._renderer.text.apply(this._renderer,arguments):this},d.prototype.textFont=function(a,b){if(arguments.length){if(!a)throw Error("null font passed to textFont");return this._renderer._setProperty("_textFont",a),b&&(this._renderer._setProperty("_textSize",b),this._renderer._setProperty("_textLeading",b*e._DEFAULT_LEADMULT)),this._renderer._applyTextProperties()}return this},b.exports=d},{"../core/constants":47,"../core/core":48,"../core/error_helpers":51}],82:[function(a,b,c){"use strict";function d(a,b){for(var c=h(b,{sampleFactor:.1,simplifyThreshold:0}),d=n(a,0,1),f=d/(d*c.sampleFactor),g=[],i=0;d>i;i+=f)g.push(n(a,i));return c.simplifyThreshold&&e(g,c.simplifyThreshold),g}function e(a,b){b="undefined"==typeof b?0:b;for(var c=0,d=a.length-1;a.length>3&&d>=0;--d)j(i(a,d-1),i(a,d),i(a,d+1),b)&&(a.splice(d%a.length,1),c++);return c}function f(a){for(var b,c=[],d=0;d<a.length;d++)"M"===a[d].type&&(b&&c.push(b),b=[]),b.push(g(a[d]));return c.push(b),c}function g(a){var b=[a.type];return"M"===a.type||"L"===a.type?b.push(a.x,a.y):"C"===a.type?b.push(a.x1,a.y1,a.x2,a.y2,a.x,a.y):"Q"===a.type&&b.push(a.x1,a.y1,a.x,a.y),b}function h(a,b){if("object"!=typeof a)a=b;else for(var c in b)"undefined"==typeof a[c]&&(a[c]=b[c]);return a}function i(a,b){var c=a.length;return a[0>b?b%c+c:b%c]}function j(a,b,c,d){if(!d)return 0===k(a,b,c);"undefined"==typeof j.tmpPoint1&&(j.tmpPoint1=[],j.tmpPoint2=[]);var e=j.tmpPoint1,f=j.tmpPoint2;e.x=b.x-a.x,e.y=b.y-a.y,f.x=c.x-b.x,f.y=c.y-b.y;var g=e.x*f.x+e.y*f.y,h=Math.sqrt(e.x*e.x+e.y*e.y),i=Math.sqrt(f.x*f.x+f.y*f.y),l=Math.acos(g/(h*i));return d>l}function k(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])}function l(a,b,c,d,e,f,g,h,i){var j=1-i,k=Math.pow(j,3),l=Math.pow(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*Math.atan2(q-s,r-t)/Math.PI;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function m(a,b,c,d,e,f,g,h,i){return null==i?u(a,b,c,d,e,f,g,h):l(a,b,c,d,e,f,g,h,v(a,b,c,d,e,f,g,h,i))}function n(a,b,c){a=p(a);for(var d,e,f,g,h,i="",j={},k=0,n=0,o=a.length;o>n;n++){if(f=a[n],"M"===f[0])d=+f[1],e=+f[2];else{if(g=m(d,e,f[1],f[2],f[3],f[4],f[5],f[6]),k+g>b&&!c)return h=m(d,e,f[1],f[2],f[3],f[4],f[5],f[6],b-k),{x:h.x,y:h.y,alpha:h.alpha};k+=g,d=+f[5],e=+f[6]}i+=f.shift()+f}return j.end=i,h=c?k:l(d,e,f[0],f[1],f[2],f[3],f[4],f[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}function o(a){var b=[],c=0,d=0,e=0,f=0,g=0;"M"===a[0][0]&&(c=+a[0][1],d=+a[0][2],e=c,f=d,g++,b[0]=["M",c,d]);for(var h,i,j,k=3===a.length&&"M"===a[0][0]&&"R"===a[1][0].toUpperCase()&&"Z"===a[2][0].toUpperCase(),l=g,m=a.length;m>l;l++){if(b.push(i=[]),j=a[l],j[0]!==String.prototype.toUpperCase.call(j[0]))switch(i[0]=String.prototype.toUpperCase.call(j[0]),i[0]){case"A":i[1]=j[1],i[2]=j[2],i[3]=j[3],i[4]=j[4],i[5]=j[5],i[6]=+(j[6]+c),i[7]=+(j[7]+d);break;case"V":i[1]=+j[1]+d;break;case"H":i[1]=+j[1]+c;break;case"R":h=[c,d].concat(j.slice(1));for(var n=2,o=h.length;o>n;n++)h[n]=+h[n]+c,h[++n]=+h[n]+d;b.pop(),b=b.concat(r(h,k));break;case"M":e=+j[1]+c,f=+j[2]+d;break;default:for(n=1,o=j.length;o>n;n++)i[n]=+j[n]+(n%2?c:d)}else if("R"===j[0])h=[c,d].concat(j.slice(1)),b.pop(),b=b.concat(r(h,k)),i=["R"].concat(j.slice(-2));else for(var p=0,q=j.length;q>p;p++)i[p]=j[p];switch(i[0]){case"Z":c=e,d=f;break;case"H":c=i[1];break;case"V":d=i[1];break;case"M":e=i[i.length-2],f=i[i.length-1];break;default:c=i[i.length-2],d=i[i.length-1]}}return b}function p(a,b){for(var c=o(a),d=b&&o(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(a[0]in f||(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(q.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":"C"===c||"S"===c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e].concat(a.slice(1));break;case"T":"Q"===c||"T"===c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"].concat(t(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(t(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(s(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(s(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(s(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(s(b.x,b.y,b.X,b.Y))}return a}),h=function(a,b){if(a[b].length>7){a[b].shift();for(var e=a[b];e.length;)j[b]="A",d&&(k[b]="A"),a.splice(b++,0,["C"].concat(e.splice(0,6)));a.splice(b,1),p=Math.max(c.length,d&&d.length||0)}},i=function(a,b,e,f,g){a&&b&&"M"===a[g][0]&&"M"!==b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),e.bx=0,e.by=0,e.x=a[g][1],e.y=a[g][2],p=Math.max(c.length,d&&d.length||0))},j=[],k=[],l="",m="",n=0,p=Math.max(c.length,d&&d.length||0);p>n;n++){c[n]&&(l=c[n][0]),"C"!==l&&(j[n]=l,n&&(m=j[n-1])),c[n]=g(c[n],e,m),"A"!==j[n]&&"C"===l&&(j[n]="C"),h(c,n),d&&(d[n]&&(l=d[n][0]),"C"!==l&&(k[n]=l,n&&(m=k[n-1])),d[n]=g(d[n],f,m),"A"!==k[n]&&"C"===l&&(k[n]="C"),h(d,n)),i(c,d,e,f,n),i(d,c,f,e,n);var r=c[n],u=d&&d[n],v=r.length,w=d&&u.length;e.x=r[v-2],e.y=r[v-1],e.bx=parseFloat(r[v-4])||e.x,e.by=parseFloat(r[v-3])||e.y,f.bx=d&&(parseFloat(u[w-4])||f.x),f.by=d&&(parseFloat(u[w-3])||f.y),f.x=d&&u[w-2],f.y=d&&u[w-1]}return d?[c,d]:c}function q(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p=Math.PI,r=120*p/180,s=p/180*(+e||0),t=[],u=function(a,b,c){var d=a*Math.cos(c)-b*Math.sin(c),e=a*Math.sin(c)+b*Math.cos(c);return{x:d,y:e}};if(j)k=j[0],l=j[1],m=j[2],n=j[3];else{o=u(a,b,-s),a=o.x,b=o.y,o=u(h,i,-s),h=o.x,i=o.y;var v=(a-h)/2,w=(b-i)/2,x=v*v/(c*c)+w*w/(d*d);x>1&&(x=Math.sqrt(x),c=x*c,d=x*d);var y=c*c,z=d*d,A=(f===g?-1:1)*Math.sqrt(Math.abs((y*z-y*w*w-z*v*v)/(y*w*w+z*v*v)));m=A*c*w/d+(a+h)/2,n=A*-d*v/c+(b+i)/2,k=Math.asin(((b-n)/d).toFixed(9)),l=Math.asin(((i-n)/d).toFixed(9)),k=m>a?p-k:k,l=m>h?p-l:l,0>k&&(k=2*p+k),0>l&&(l=2*p+l),g&&k>l&&(k-=2*p),!g&&l>k&&(l-=2*p)}var B=l-k;if(Math.abs(B)>r){var C=l,D=h,E=i;l=k+r*(g&&l>k?1:-1),h=m+c*Math.cos(l),i=n+d*Math.sin(l),t=q(h,i,c,d,e,0,g,D,E,[l,C,m,n])}B=l-k;var F=Math.cos(k),G=Math.sin(k),H=Math.cos(l),I=Math.sin(l),J=Math.tan(B/4),K=4/3*c*J,L=4/3*d*J,M=[a,b],N=[a+K*G,b-L*F],O=[h+K*I,i-L*H],P=[h,i];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],j)return[N,O,P].concat(t);t=[N,O,P].concat(t).join().split(",");for(var Q=[],R=0,S=t.length;S>R;R++)Q[R]=R%2?u(t[R-1],t[R],s).y:u(t[R],t[R+1],s).x;return Q}function r(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4===d?f[3]={x:+a[0],y:+a[1]}:e-2===d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4===d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function s(a,b,c,d){return[a,b,c,d,c,d]}function t(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function u(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:0>i?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],m=0,n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0;k>o;o++){var p=j*l[o]+j,q=w(p,a,c,e,g),r=w(p,b,d,f,h),s=q*q+r*r;m+=n[o]*Math.sqrt(s)}return j*m}function v(a,b,c,d,e,f,g,h,i){if(!(0>i||u(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,n=.01;for(j=u(a,b,c,d,e,f,g,h,m);Math.abs(j-i)>n;)l/=2,m+=(i>j?1:-1)*l,j=u(a,b,c,d,e,f,g,h,m);return m}}function w(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function x(){for(var a=new Array(arguments.length),b=0;b<a.length;++b)a[b]=arguments[b];b=a.length;for(var c="";b--;)c+=a[b]===Object(a[b])?JSON.stringify(a[b]):a[b];return c}var y=a("../core/core"),z=a("../core/constants");y.Font=function(a){this.parent=a,this.cache={},this.font=void 0},y.Font.prototype.list=function(){throw"not yet implemented"},y.Font.prototype.textBounds=function(a,b,c,d,e){b=void 0!==b?b:0,c=void 0!==c?c:0,d=d||this.parent._renderer._textSize;var f=this.cache[x("textBounds",a,b,c,d)];if(!f){var g,h,i,j,k=[],l=[],m=this,n=this._scale(d);this.font.forEachGlyph(a,b,c,d,e,function(a,b,c,e){k.push(b),l.push(c);var f=a.getMetrics();"space"!==a.name?(k.push(b+f.xMax*n),l.push(c+-f.yMin*n),l.push(c+-f.yMax*n)):k.push(b+m.font.charToGlyph(" ").advanceWidth*m._scale(d))}),g=Math.max(0,Math.min.apply(null,k)),h=Math.max(0,Math.min.apply(null,l)),i=Math.max(0,Math.max.apply(null,k)),j=Math.max(0,Math.max.apply(null,l)),f={x:g,y:h,h:j-h,w:i-g,advance:g-b},this.cache[x("textBounds",a,b,c,d)]=f}return f},y.Font.prototype.textToPoints=function(a,b,c,e,g){var h=0,i=[],j=this._getGlyphs(a);e=e||this.parent._renderer._textSize;for(var k=0;k<j.length;k++){for(var l=j[k].getPath(b,c,e),m=f(l.commands),n=0;n<m.length;n++)for(var o=d(m[n],g),p=0;p<o.length;p++)o[p].x+=h,i.push(o[p]);h+=j[k].advanceWidth*this._scale(e)}return i},y.Font.prototype._getGlyphs=function(a){return this.font.stringToGlyphs(a)},y.Font.prototype._getPath=function(a,b,c,d){var e=this.parent,f=e._renderer.drawingContext,g=this._handleAlignment(e,f,a,b,c);return this.font.getPath(a,g.x,g.y,e._renderer._textSize,d)},y.Font.prototype._getPathData=function(a,b,c,d){var e=3;return"string"==typeof a&&arguments.length>2?a=this._getPath(a,b,c,d):"object"==typeof b&&(d=b),d&&"number"==typeof d.decimals&&(e=d.decimals),a.toPathData(e)},y.Font.prototype._getSVG=function(a,b,c,d){var e=3;return"string"==typeof a&&arguments.length>2?a=this._getPath(a,b,c,d):"object"==typeof b&&(d=b),d&&("number"==typeof d.decimals&&(e=d.decimals),"number"==typeof d.strokeWidth&&(a.strokeWidth=d.strokeWidth),"undefined"!=typeof d.fill&&(a.fill=d.fill),"undefined"!=typeof d.stroke&&(a.stroke=d.stroke)),a.toSVG(e)},y.Font.prototype._renderPath=function(a,b,c,d){var e,f=d&&d.renderer||this.parent._renderer,g=f.drawingContext;e="object"==typeof a&&a.commands?a.commands:this._getPath(a,b,c,f._textSize,d).commands,g.beginPath();for(var h=0;h<e.length;h+=1){var i=e[h];"M"===i.type?g.moveTo(i.x,i.y):"L"===i.type?g.lineTo(i.x,i.y):"C"===i.type?g.bezierCurveTo(i.x1,i.y1,i.x2,i.y2,i.x,i.y):"Q"===i.type?g.quadraticCurveTo(i.x1,i.y1,i.x,i.y):"Z"===i.type&&g.closePath()}return f._doStroke&&f._strokeSet&&g.stroke(),f._doFill&&(g.fillStyle=f._fillSet?g.fillStyle:z._DEFAULT_TEXT_FILL,g.fill()),this},y.Font.prototype._textWidth=function(a,b){if(" "===a)return this.font.charToGlyph(" ").advanceWidth*this._scale(b);var c=this.textBounds(a,0,0,b);return c.w+c.advance},y.Font.prototype._textAscent=function(a){return this.font.ascender*this._scale(a)},y.Font.prototype._textDescent=function(a){return-this.font.descender*this._scale(a)},y.Font.prototype._scale=function(a){return 1/this.font.unitsPerEm*(a||this.parent._renderer._textSize)},y.Font.prototype._handleAlignment=function(a,b,c,d,e){var f=this._textWidth(c),g=this._textAscent(),h=this._textDescent(),i=g+h;return b.textAlign===z.CENTER?d-=f/2:b.textAlign===z.RIGHT&&(d-=f),b.textBaseline===z.TOP?e+=i:b.textBaseline===z._CTX_MIDDLE?e+=i/2-h:b.textBaseline===z.BOTTOM&&(e-=h),{x:d,y:e}},b.exports=y.Font},{"../core/constants":47,"../core/core":48}],83:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.append=function(a,b){return a.push(b),a},d.prototype.arrayCopy=function(a,b,c,d,e){var f,g;"undefined"!=typeof e?(g=Math.min(e,a.length),f=d,a=a.slice(b,g+b)):("undefined"!=typeof c?(g=c,g=Math.min(g,a.length)):g=a.length,f=0,c=b,a=a.slice(0,g)),Array.prototype.splice.apply(c,[f,g].concat(a))},d.prototype.concat=function(a,b){return a.concat(b)},d.prototype.reverse=function(a){return a.reverse()},d.prototype.shorten=function(a){return a.pop(),a},d.prototype.shuffle=function(a,b){var c=ArrayBuffer&&ArrayBuffer.isView&&ArrayBuffer.isView(a);a=b||c?a:a.slice();for(var d,e,f=a.length;f>1;)d=Math.random()*f|0,e=a[--f],a[f]=a[d],a[d]=e;return a},d.prototype.sort=function(a,b){var c=b?a.slice(0,Math.min(b,a.length)):a,d=b?a.slice(Math.min(b,a.length)):[];return c="string"==typeof c[0]?c.sort():c.sort(function(a,b){return a-b}),c.concat(d)},d.prototype.splice=function(a,b,c){return Array.prototype.splice.apply(a,[c,0].concat(b)),a},d.prototype.subset=function(a,b,c){return"undefined"!=typeof c?a.slice(b,b+c):a.slice(b,a.length)},b.exports=d},{"../core/core":48}],84:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype["float"]=function(a){return parseFloat(a)},d.prototype["int"]=function(a,b){return"string"==typeof a?(b=b||10,parseInt(a,b)):"number"==typeof a?0|a:"boolean"==typeof a?a?1:0:a instanceof Array?a.map(function(a){return d.prototype["int"](a,b)}):void 0},d.prototype.str=function(a){return a instanceof Array?a.map(d.prototype.str):String(a)},d.prototype["boolean"]=function(a){return"number"==typeof a?0!==a:"string"==typeof a?"true"===a.toLowerCase():"boolean"==typeof a?a:a instanceof Array?a.map(d.prototype["boolean"]):void 0},d.prototype["byte"]=function(a){var b=d.prototype["int"](a,10);return"number"==typeof b?(b+128)%256-128:b instanceof Array?b.map(d.prototype["byte"]):void 0},d.prototype["char"]=function(a){return"number"!=typeof a||isNaN(a)?a instanceof Array?a.map(d.prototype["char"]):"string"==typeof a?d.prototype["char"](parseInt(a,10)):void 0:String.fromCharCode(a)},d.prototype.unchar=function(a){return"string"==typeof a&&1===a.length?a.charCodeAt(0):a instanceof Array?a.map(d.prototype.unchar):void 0},d.prototype.hex=function(a,b){if(b=void 0===b||null===b?b=8:b,a instanceof Array)return a.map(function(a){return d.prototype.hex(a,b)});if("number"==typeof a){0>a&&(a=4294967295+a+1);for(var c=Number(a).toString(16).toUpperCase();c.length<b;)c="0"+c;return c.length>=b&&(c=c.substring(c.length-b,c.length)),c}},d.prototype.unhex=function(a){return a instanceof Array?a.map(d.prototype.unhex):parseInt("0x"+a,16)},b.exports=d},{"../core/core":48}],85:[function(a,b,c){"use strict";function d(){var a=arguments[0],b=0>a,c=b?a.toString().substring(1):a.toString(),d=c.indexOf("."),e=-1!==d?c.substring(0,d):c,f=-1!==d?c.substring(d+1):"",g=b?"-":"";if(3===arguments.length){var h="";(-1!==d||arguments[2]-f.length>0)&&(h="."),f.length>arguments[2]&&(f=f.substring(0,arguments[2]));for(var i=0;i<arguments[1]-e.length;i++)g+="0";g+=e,g+=h,g+=f;for(var j=0;j<arguments[2]-f.length;j++)g+="0";return g}for(var k=0;k<Math.max(arguments[1]-e.length,0);k++)g+="0";return g+=c}function e(){var a=arguments[0].toString(),b=a.indexOf("."),c=-1!==b?a.substring(b):"",d=-1!==b?a.substring(0,b):a;if(d=d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),0===arguments[1])c="";else if(void 0!==arguments[1])if(arguments[1]>c.length){c+=-1===b?".":"";for(var e=arguments[1]-c.length+1,f=0;e>f;f++)c+="0"}else c=c.substring(0,arguments[1]+1);return d+c}function f(){return parseFloat(arguments[0])>0?"+"+arguments[0].toString():arguments[0].toString()}function g(){return parseFloat(arguments[0])>0?" "+arguments[0].toString():arguments[0].toString()}var h=a("../core/core");h.prototype.join=function(a,b){return a.join(b)},h.prototype.match=function(a,b){return a.match(b)},h.prototype.matchAll=function(a,b){for(var c=new RegExp(b,"g"),d=c.exec(a),e=[];null!==d;)e.push(d),d=c.exec(a);return e},h.prototype.nf=function(){if(arguments[0]instanceof Array){var a=arguments[1],b=arguments[2];return arguments[0].map(function(c){return d(c,a,b)})}var c=Object.prototype.toString.call(arguments[0]);return"[object Arguments]"===c?3===arguments[0].length?this.nf(arguments[0][0],arguments[0][1],arguments[0][2]):2===arguments[0].length?this.nf(arguments[0][0],arguments[0][1]):this.nf(arguments[0][0]):d.apply(this,arguments)},h.prototype.nfc=function(){if(arguments[0]instanceof Array){var a=arguments[1];return arguments[0].map(function(b){return e(b,a)})}return e.apply(this,arguments)},h.prototype.nfp=function(){var a=this.nf.apply(this,arguments);return a instanceof Array?a.map(f):f(a)},h.prototype.nfs=function(){var a=this.nf.apply(this,arguments);return a instanceof Array?a.map(g):g(a)},h.prototype.split=function(a,b){return a.split(b)},h.prototype.splitTokens=function(){var a,b,c,d;return d=arguments[1],arguments.length>1?(c=/\]/g.exec(d),b=/\[/g.exec(d),b&&c?(d=d.slice(0,c.index)+d.slice(c.index+1),b=/\[/g.exec(d),d=d.slice(0,b.index)+d.slice(b.index+1),a=new RegExp("[\\["+d+"\\]]","g")):c?(d=d.slice(0,c.index)+d.slice(c.index+1),a=new RegExp("["+d+"\\]]","g")):b?(d=d.slice(0,b.index)+d.slice(b.index+1),a=new RegExp("["+d+"\\[]","g")):a=new RegExp("["+d+"]","g")):a=/\s/g,arguments[0].split(a).filter(function(a){return a})},h.prototype.trim=function(a){return a instanceof Array?a.map(this.trim):a.trim()},b.exports=h},{"../core/core":48}],86:[function(a,b,c){"use strict";var d=a("../core/core");d.prototype.day=function(){return(new Date).getDate()},d.prototype.hour=function(){return(new Date).getHours()},d.prototype.minute=function(){return(new Date).getMinutes()},d.prototype.millis=function(){return window.performance.now()},d.prototype.month=function(){return(new Date).getMonth()+1},d.prototype.second=function(){return(new Date).getSeconds()},d.prototype.year=function(){return(new Date).getFullYear()},b.exports=d},{"../core/core":48}]},{},[39])(39)});p5.prototype._validateParameters = function() {};p5.prototype._friendlyFileLoadError = function() {};
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Recorder = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = require("./recorder").Recorder;

},{"./recorder":2}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Recorder = undefined;

var _inlineWorker = require('inline-worker');

var _inlineWorker2 = _interopRequireDefault(_inlineWorker);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Recorder = exports.Recorder = (function () {
    function Recorder(source, cfg) {
        var _this = this;

        _classCallCheck(this, Recorder);

        this.config = {
            bufferLen: 4096,
            numChannels: 2,
            mimeType: 'audio/wav'
        };
        this.recording = false;
        this.callbacks = {
            getBuffer: [],
            exportWAV: []
        };

        Object.assign(this.config, cfg);
        this.context = source.context;
        this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels);

        this.node.onaudioprocess = function (e) {
            if (!_this.recording) return;

            var buffer = [];
            for (var channel = 0; channel < _this.config.numChannels; channel++) {
                buffer.push(e.inputBuffer.getChannelData(channel));
            }
            _this.worker.postMessage({
                command: 'record',
                buffer: buffer
            });
        };

        source.connect(this.node);
        this.node.connect(this.context.destination); //this should not be necessary

        var self = {};
        this.worker = new _inlineWorker2.default(function () {
            var recLength = 0,
                recBuffers = [],
                sampleRate = undefined,
                numChannels = undefined;

            self.onmessage = function (e) {
                switch (e.data.command) {
                    case 'init':
                        init(e.data.config);
                        break;
                    case 'record':
                        record(e.data.buffer);
                        break;
                    case 'exportWAV':
                        exportWAV(e.data.type);
                        break;
                    case 'getBuffer':
                        getBuffer();
                        break;
                    case 'clear':
                        clear();
                        break;
                }
            };

            function init(config) {
                sampleRate = config.sampleRate;
                numChannels = config.numChannels;
                initBuffers();
            }

            function record(inputBuffer) {
                for (var channel = 0; channel < numChannels; channel++) {
                    recBuffers[channel].push(inputBuffer[channel]);
                }
                recLength += inputBuffer[0].length;
            }

            function exportWAV(type) {
                var buffers = [];
                for (var channel = 0; channel < numChannels; channel++) {
                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
                }
                var interleaved = undefined;
                if (numChannels === 2) {
                    interleaved = interleave(buffers[0], buffers[1]);
                } else {
                    interleaved = buffers[0];
                }
                var dataview = encodeWAV(interleaved);
                var audioBlob = new Blob([dataview], { type: type });

                self.postMessage({ command: 'exportWAV', data: audioBlob });
            }

            function getBuffer() {
                var buffers = [];
                for (var channel = 0; channel < numChannels; channel++) {
                    buffers.push(mergeBuffers(recBuffers[channel], recLength));
                }
                self.postMessage({ command: 'getBuffer', data: buffers });
            }

            function clear() {
                recLength = 0;
                recBuffers = [];
                initBuffers();
            }

            function initBuffers() {
                for (var channel = 0; channel < numChannels; channel++) {
                    recBuffers[channel] = [];
                }
            }

            function mergeBuffers(recBuffers, recLength) {
                var result = new Float32Array(recLength);
                var offset = 0;
                for (var i = 0; i < recBuffers.length; i++) {
                    result.set(recBuffers[i], offset);
                    offset += recBuffers[i].length;
                }
                return result;
            }

            function interleave(inputL, inputR) {
                var length = inputL.length + inputR.length;
                var result = new Float32Array(length);

                var index = 0,
                    inputIndex = 0;

                while (index < length) {
                    result[index++] = inputL[inputIndex];
                    result[index++] = inputR[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function floatTo16BitPCM(output, offset, input) {
                for (var i = 0; i < input.length; i++, offset += 2) {
                    var s = Math.max(-1, Math.min(1, input[i]));
                    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                }
            }

            function writeString(view, offset, string) {
                for (var i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            function encodeWAV(samples) {
                var buffer = new ArrayBuffer(44 + samples.length * 2);
                var view = new DataView(buffer);

                /* RIFF identifier */
                writeString(view, 0, 'RIFF');
                /* RIFF chunk length */
                view.setUint32(4, 36 + samples.length * 2, true);
                /* RIFF type */
                writeString(view, 8, 'WAVE');
                /* format chunk identifier */
                writeString(view, 12, 'fmt ');
                /* format chunk length */
                view.setUint32(16, 16, true);
                /* sample format (raw) */
                view.setUint16(20, 1, true);
                /* channel count */
                view.setUint16(22, numChannels, true);
                /* sample rate */
                view.setUint32(24, sampleRate, true);
                /* byte rate (sample rate * block align) */
                view.setUint32(28, sampleRate * 4, true);
                /* block align (channel count * bytes per sample) */
                view.setUint16(32, numChannels * 2, true);
                /* bits per sample */
                view.setUint16(34, 16, true);
                /* data chunk identifier */
                writeString(view, 36, 'data');
                /* data chunk length */
                view.setUint32(40, samples.length * 2, true);

                floatTo16BitPCM(view, 44, samples);

                return view;
            }
        }, self);

        this.worker.postMessage({
            command: 'init',
            config: {
                sampleRate: this.context.sampleRate,
                numChannels: this.config.numChannels
            }
        });

        this.worker.onmessage = function (e) {
            var cb = _this.callbacks[e.data.command].pop();
            if (typeof cb == 'function') {
                cb(e.data.data);
            }
        };
    }

    _createClass(Recorder, [{
        key: 'record',
        value: function record() {
            this.recording = true;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.recording = false;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.worker.postMessage({ command: 'clear' });
        }
    }, {
        key: 'getBuffer',
        value: function getBuffer(cb) {
            cb = cb || this.config.callback;
            if (!cb) throw new Error('Callback not set');

            this.callbacks.getBuffer.push(cb);

            this.worker.postMessage({ command: 'getBuffer' });
        }
    }, {
        key: 'exportWAV',
        value: function exportWAV(cb, mimeType) {
            mimeType = mimeType || this.config.mimeType;
            cb = cb || this.config.callback;
            if (!cb) throw new Error('Callback not set');

            this.callbacks.exportWAV.push(cb);

            this.worker.postMessage({
                command: 'exportWAV',
                type: mimeType
            });
        }
    }], [{
        key: 'forceDownload',
        value: function forceDownload(blob, filename) {
            var url = (window.URL || window.webkitURL).createObjectURL(blob);
            var link = window.document.createElement('a');
            link.href = url;
            link.download = filename || 'output.wav';
            var click = document.createEvent("Event");
            click.initEvent("click", true, true);
            link.dispatchEvent(click);
        }
    }]);

    return Recorder;
})();

exports.default = Recorder;

},{"inline-worker":3}],3:[function(require,module,exports){
"use strict";

module.exports = require("./inline-worker");
},{"./inline-worker":4}],4:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

var InlineWorker = (function () {
  function InlineWorker(func, self) {
    var _this = this;

    _classCallCheck(this, InlineWorker);

    if (WORKER_ENABLED) {
      var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
      var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));

      return new global.Worker(url);
    }

    this.self = self;
    this.self.postMessage = function (data) {
      setTimeout(function () {
        _this.onmessage({ data: data });
      }, 0);
    };

    setTimeout(function () {
      func.call(self);
    }, 0);
  }

  _createClass(InlineWorker, {
    postMessage: {
      value: function postMessage(data) {
        var _this = this;

        setTimeout(function () {
          _this.self.onmessage({ data: data });
        }, 0);
      }
    }
  });

  return InlineWorker;
})();

module.exports = InlineWorker;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
// Snap.svg 0.4.1
//
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2015-04-13

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function () {};
        }
        var names = name.split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = name.split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = name.split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = name.split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define === "function" && define.amd ? (define("eve", [], function() { return eve; })) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (typeof define == "function" && define.amd) {
        // Define as an anonymous module
        define(["eve"], function (eve) {
            return factory(glob, eve);
        });
    } else if (typeof exports != 'undefined') {
        // Next for Node.js or CommonJS
        var eve = require('eve');
        module.exports = factory(glob, eve);
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(window || this, function (window, eve) {

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16);
                       },
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function () {
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        len && requestAnimFrame(frame);
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in gereal case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && requestAnimFrame(frame);
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < (1 / p)) {
            l = s * n * n;
        } else {
            if (n < (2 / p)) {
                n -= (1.5 / p);
                l = s * n * n + .75;
            } else {
                if (n < (2.5 / p)) {
                    n -= (2.25 / p);
                    l = s * n * n + .9375;
                } else {
                    n -= (2.625 / p);
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);
// Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.4.0";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            w = glob.doc.querySelector(String(w));
            return wrap(w);
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    reURLValue = /^url\(#?([^)]+)\)$/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  (type == "null" && o === null) ||
            (type == typeof o && o !== null) ||
            (type == "object" && o === Object(o)) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 > Parameters
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan, bestLength = scanLength, bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before, bestLength = beforeLength, bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after, bestLength = afterLength, bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }
    
    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = (C == 0 ? null :
         V == r ? (g - b) / C :
         V == g ? (b - r) / C + 2 :
                  (r - g) / C + 4
        );
    H = ((H + 360) % 6) * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = (C == 0 ? null :
         M == r ? (g - b) / C :
         M == g ? (b - r) / C + 2 :
                  (r - g) / C + 4);
    H = ((H + 360) % 6) * 60 / 360;
    L = (M + m) / 2;
    S = (C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L));
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }
    
    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) ||
            (el.node.parentNode && wrap(el.node.parentNode)) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open((postData ? "POST" : "GET"), url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = URL(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    // animation
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            delete el.anims[anim.id];
        });
        return el;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            var out = [[], [], []],
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                x, y, z, res;

            if (a && a instanceof Matrix) {
                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }

            for (x = 0; x < 3; x++) {
                for (y = 0; y < 3; y++) {
                    res = 0;
                    for (z = 0; z < 3; z++) {
                        res += m[x][z] * matrix[z][y];
                    }
                    out[x][y] = res;
                }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            return this.add(1, 0, 0, 1, x, y);
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = -row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + 
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\(#?([^)]+)\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value.type == "clipPath") {
                var clip = value;
            } else {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while ((clazz = classes[j++])) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while ((clazz = classes[j++])) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while ((clazz = classes[j++])) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        function Gstops() {
            return this.selectAll("stop");
        }
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            this.node.appendChild(stop);
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length,
                start = 0,
                j = 0;
            function seed(i, end) {
                var step = (end - start) / (i - j);
                for (var k = j; k < i; k++) {
                    stops[k].offset = +(+start + step * (k - j)).toFixed(2);
                }
                j = i;
                start = end;
            }
            len--;
            for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
                seed(i, stops[i].offset);
            }
            stops[len].offset = stops[len].offset || 100;
            seed(len, stops[len].offset);
            for (i = 0; i <= len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0, 
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + (+r), y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + ((j % 2) ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }
    
    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
            bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    Snap.Set = Set;
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
        t1 = Snap.parseTransformString(t1) || [];
        t2 = Snap.parseTransformString(t2) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if ((tt1[0] != tt2[0]) ||
                (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
                (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + (k++) + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(parseFloat(obj));
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (b instanceof Snap.Matrix) {
                b = b.toTransformString();
            }
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.svgTransform2string(b);
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };
    
    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (typeof blur == "string") {
            color = blur;
            opacity = color;
            blur = 4;
        }
        if (typeof color != "string") {
            opacity = color;
            color = "#000";
        }
        color = color || "#000";
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

return Snap;
}));
