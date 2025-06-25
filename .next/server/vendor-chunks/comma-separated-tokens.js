"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(ssr)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.parse = parse\nexports.stringify = stringify\n\nvar comma = ','\nvar space = ' '\nvar empty = ''\n\n// Parse comma-separated tokens to an array.\nfunction parse(value) {\n  var values = []\n  var input = String(value || empty)\n  var index = input.indexOf(comma)\n  var lastIndex = 0\n  var end = false\n  var val\n\n  while (!end) {\n    if (index === -1) {\n      index = input.length\n      end = true\n    }\n\n    val = input.slice(lastIndex, index).trim()\n\n    if (val || !end) {\n      values.push(val)\n    }\n\n    lastIndex = index + 1\n    index = input.indexOf(comma, lastIndex)\n  }\n\n  return values\n}\n\n// Compile an array to comma-separated tokens.\n// `options.padLeft` (default: `true`) pads a space left of each token, and\n// `options.padRight` (default: `false`) pads a space to the right of each token.\nfunction stringify(values, options) {\n  var settings = options || {}\n  var left = settings.padLeft === false ? empty : space\n  var right = settings.padRight ? space : empty\n\n  // Ensure the last empty entry is seen.\n  if (values[values.length - 1] === empty) {\n    values = values.concat(empty)\n  }\n\n  return values.join(right + comma + left).trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixhQUFhO0FBQ2IsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4dGVjaC10ZWNobm9sb2dpZXMtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jb21tYS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzPzgwMzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxudmFyIGNvbW1hID0gJywnXG52YXIgc3BhY2UgPSAnICdcbnZhciBlbXB0eSA9ICcnXG5cbi8vIFBhcnNlIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMgdG8gYW4gYXJyYXkuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICB2YXIgdmFsdWVzID0gW11cbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KVxuICB2YXIgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hKVxuICB2YXIgbGFzdEluZGV4ID0gMFxuICB2YXIgZW5kID0gZmFsc2VcbiAgdmFyIHZhbFxuXG4gIHdoaWxlICghZW5kKSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBpbnB1dC5sZW5ndGhcbiAgICAgIGVuZCA9IHRydWVcbiAgICB9XG5cbiAgICB2YWwgPSBpbnB1dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KS50cmltKClcblxuICAgIGlmICh2YWwgfHwgIWVuZCkge1xuICAgICAgdmFsdWVzLnB1c2godmFsKVxuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMVxuICAgIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSwgbGFzdEluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuXG4vLyBDb21waWxlIGFuIGFycmF5IHRvIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMuXG4vLyBgb3B0aW9ucy5wYWRMZWZ0YCAoZGVmYXVsdDogYHRydWVgKSBwYWRzIGEgc3BhY2UgbGVmdCBvZiBlYWNoIHRva2VuLCBhbmRcbi8vIGBvcHRpb25zLnBhZFJpZ2h0YCAoZGVmYXVsdDogYGZhbHNlYCkgcGFkcyBhIHNwYWNlIHRvIHRoZSByaWdodCBvZiBlYWNoIHRva2VuLlxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcywgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBsZWZ0ID0gc2V0dGluZ3MucGFkTGVmdCA9PT0gZmFsc2UgPyBlbXB0eSA6IHNwYWNlXG4gIHZhciByaWdodCA9IHNldHRpbmdzLnBhZFJpZ2h0ID8gc3BhY2UgOiBlbXB0eVxuXG4gIC8vIEVuc3VyZSB0aGUgbGFzdCBlbXB0eSBlbnRyeSBpcyBzZWVuLlxuICBpZiAodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSA9PT0gZW1wdHkpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGVtcHR5KVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcy5qb2luKHJpZ2h0ICsgY29tbWEgKyBsZWZ0KS50cmltKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;