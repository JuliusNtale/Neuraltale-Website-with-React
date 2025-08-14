"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StarDrawer: () => (/* binding */ StarDrawer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUM1QztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQWE7QUFDdkM7QUFDQTtBQUNBLGlEQUFpRCxpRUFBYTtBQUM5RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXVyYWx0YWxlLWNvcnBvcmF0ZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXN0YXIvZXNtL1N0YXJEcmF3ZXIuanM/MDdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSYW5nZVZhbHVlIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGNsYXNzIFN0YXJEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBjb25zdCBzaWRlcyA9IHBhcnRpY2xlLnNpZGVzLCBpbnNldCA9IHBhcnRpY2xlLnN0YXJJbnNldCA/PyAyO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbygwLCAwIC0gcmFkaXVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlczsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJvdGF0ZShNYXRoLlBJIC8gc2lkZXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMCwgMCAtIHJhZGl1cyAqIGluc2V0KTtcbiAgICAgICAgICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyBzaWRlcyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygwLCAwIC0gcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHN0YXIgPSBwYXJ0aWNsZS5zaGFwZURhdGE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGdldFJhbmdlVmFsdWUoc3Rhcj8uc2lkZXMgPz8gc3Rhcj8ubmJfc2lkZXMgPz8gNSkpO1xuICAgIH1cbiAgICBwYXJ0aWNsZUluaXQoY29udGFpbmVyLCBwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzdGFyID0gcGFydGljbGUuc2hhcGVEYXRhLCBpbnNldCA9IGdldFJhbmdlVmFsdWUoc3Rhcj8uaW5zZXQgPz8gMik7XG4gICAgICAgIHBhcnRpY2xlLnN0YXJJbnNldCA9IGluc2V0O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStarShape: () => (/* binding */ loadStarShape)\n/* harmony export */ });\n/* harmony import */ var _StarDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\");\n\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new _StarDrawer__WEBPACK_IMPORTED_MODULE_0__.StarDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDbkM7QUFDUCxzQ0FBc0MsbURBQVU7QUFDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXVyYWx0YWxlLWNvcnBvcmF0ZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXN0YXIvZXNtL2luZGV4LmpzPzU4MjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhckRyYXdlciB9IGZyb20gXCIuL1N0YXJEcmF3ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3RhclNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoXCJzdGFyXCIsIG5ldyBTdGFyRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/index.js\n");

/***/ })

};
;