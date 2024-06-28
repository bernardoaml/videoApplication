/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Header_1 = __importDefault(__webpack_require__(/*! ./Header */ "./src/components/Header.ts"));
const Navigation_1 = __importDefault(__webpack_require__(/*! ./Navigation */ "./src/components/Navigation.ts"));
class App {
    constructor() {
        this.header = new Header_1.default();
        this.navigation = new Navigation_1.default();
    }
    render() {
        const appElement = document.getElementById('app');
        if (appElement) {
            appElement.innerHTML = `
        ${this.header.render()}
        ${this.navigation.render()}
      `;
            this.navigation.addEventListeners();
        }
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Header {
    render() {
        return `<header><h1>Micro Frontend Drawer</h1></header>`;
    }
}
exports["default"] = Header;


/***/ }),

/***/ "./src/components/Navigation.ts":
/*!**************************************!*\
  !*** ./src/components/Navigation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Navigation {
    render() {
        return `
        <nav>
          <a href="#videos" class="drawer-link">Vídeos</a>
          <a href="#favorites" class="drawer-link">Favoritos</a>
        </nav>
      `;
    }
    addEventListeners() {
        const links = document.querySelectorAll('.drawer-link');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = event.target.getAttribute('href');
                if (target) {
                    window.location.hash = target;
                }
            });
        });
    }
}
exports["default"] = Navigation;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// const drawerLinks = document.querySelectorAll('.drawer-link');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// drawerLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     // Lógica de navegação entre vídeos e favoritos
//   });
// });
const App_1 = __importDefault(__webpack_require__(/*! ./components/App */ "./src/components/App.ts"));
const app = new App_1.default();
app.render();
window.addEventListener('hashchange', () => {
    app.render();
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map