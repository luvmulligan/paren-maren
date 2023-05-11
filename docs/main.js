(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\velardem\Documents\Workspace\paren-maren\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Player, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.canRoll === false);
} }
function AppComponent_div_23_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function AppComponent_div_23_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function AppComponent_div_23_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} }
function AppComponent_div_23_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
} }
function AppComponent_div_23_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} }
function AppComponent_div_23_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} }
function AppComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_23_img_3_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_23_img_4_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_23_img_5_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_23_img_6_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_23_img_7_Template, 1, 0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_23_img_8_Template, 1, 0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dice_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dice_r9.rollResult === 6);
} }
function AppComponent_div_27_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} }
function AppComponent_div_27_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
} }
function AppComponent_div_27_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
} }
function AppComponent_div_27_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} }
function AppComponent_div_27_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} }
function AppComponent_div_27_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function AppComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_27_img_1_Template, 1, 0, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_27_img_2_Template, 1, 0, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_27_img_3_Template, 1, 0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_27_img_4_Template, 1, 0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_27_img_5_Template, 1, 0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_27_img_6_Template, 1, 0, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.blackDice === 6);
} }
function AppComponent_div_30_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.rollBlackDice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Paren Maren! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.rollDice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Roll! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_30_button_7_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.canRoll === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.canParenMaren === true);
} }
function AppComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.newPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "highlight-yellow": a0 }; };
function AppComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-progressbar", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r29 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r6.currentPlayer === player_r29.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", player_r29.score <= 300 ? "info" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", player_r29.score)("max", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.score);
} }
class Player {
}
class AppComponent {
    constructor() {
        this.isCollapsed = true;
        this.title = 'Paren Maren';
        this.canRoll = true;
        this.canParenMaren = false;
        this.blackDiceRolled = false;
        this.startGamePressed = false;
        this.gameBoard = {
            players: [],
            currentTurn: 0,
            lastTurn: 1
        };
        this.turnDices = [];
        this.blackDice = 1;
    }
    startGame() {
        this.startGamePressed = true;
        this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;
    }
    switchTurn() {
        this.canRoll = true;
        this.canParenMaren = false;
        this.currentPlayerScore = this.gameBoard.players[this.gameBoard.currentTurn].score;
        let total = 0;
        let currentScore = this.currentPlayerScore;
        this.turnDices.forEach((item) => {
            total += item.rollResult;
        });
        let multipliedScore = total * this.blackDice;
        if (currentScore === undefined) {
            this.gameBoard.players[this.gameBoard.currentTurn].score = multipliedScore;
        }
        else {
            this.gameBoard.players[this.gameBoard.currentTurn].score = currentScore + multipliedScore;
        }
        if (this.gameBoard.players[this.gameBoard.currentTurn].score >= 365) {
            console.log(this.currentPlayer + 'Ganador!');
            this.canRoll = false;
            this.winner = this.currentPlayer;
            alert(this.winner + ' is the winner!');
        }
        localStorage.setItem('Game', JSON.stringify(this.gameBoard));
        this.turnDices = [];
        this.blackDiceRolled = false;
        this.gameBoard.currentTurn = (this.gameBoard.currentTurn + 1) % this.gameBoard.players.length;
        this.gameBoard.lastTurn = (this.gameBoard.lastTurn + 1) % this.gameBoard.players.length;
        this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;
    }
    playSound() {
        this.diceAudio = document.getElementById('dice-audio');
        this.diceAudio.load();
        this.diceAudio.play();
    }
    rollDice() {
        this.blackDice = 1;
        this.blackDiceRolled = false;
        this.playSound();
        this.currentPlayer = this.gameBoard.players[this.gameBoard.currentTurn].name;
        if (this.turnDices.length === 4 || this.gameBoard.players.length === 0) {
            return;
        }
        else {
            let rollDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            this.turnDices.push({ rollResult: rollDice });
            if (rollDice >= 4) {
                this.canParenMaren = true;
                this.canRoll = true;
            }
            if (rollDice < 4 || this.turnDices.length === 4) {
                this.canParenMaren = false;
                this.canRoll = false;
                setTimeout(() => {
                    this.switchTurn();
                }, 2000);
            }
        }
    }
    rollBlackDice() {
        this.playSound();
        this.blackDiceRolled = true;
        this.blackDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        setTimeout(() => {
            this.switchTurn();
        }, 2000);
    }
    newPlayer() {
        let newPlayer = new Player();
        newPlayer.name = prompt();
        if (newPlayer.name === '' || newPlayer.name === null || newPlayer.name === 'null') {
            return;
        }
        else {
            this.gameBoard.players.push(newPlayer);
            newPlayer.id = this.gameBoard.players.length;
            localStorage.setItem('Game', JSON.stringify(this.gameBoard));
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 8, consts: [["id", "dice-audio"], ["src", "assets/dice.mp3", "type", "audio/mp3"], ["role", "main", 1, "container", "content"], [3, "click"], [1, "row", "justify-content-center"], [1, "col-4", 2, "width", "380px", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [2, "text-align", "center"], [1, "roll-height"], [1, "col", "text-center"], [1, "row", "pb-3", "pt-3", "mt-5", 2, "height", "160px"], [1, "col-12"], ["id", "roll", "class", "roll-button", 4, "ngIf"], ["class", "col text-center", 4, "ngFor", "ngForOf"], [1, "row", "pb-3", "pt-3", "text-center"], [1, "col-12", "text-center", 2, "height", "160px"], ["class", "dice", 4, "ngIf"], [1, "row"], [1, "col-12", "text-center"], ["class", "row", 4, "ngIf"], [1, "col-12", 2, "padding-bottom", "4rem"], ["id", "roll", "class", "col roll-button", 4, "ngIf"], ["class", "row text-center ml-1", 4, "ngFor", "ngForOf"], ["id", "roll", 1, "roll-button"], ["type", "button", 1, "btn", "btn-light", "button-71", 3, "disabled", "click"], [1, "dice"], ["src", "assets/dice1.png", 4, "ngIf"], ["src", "assets/dice2.png", 4, "ngIf"], ["src", "assets/dice3.png", 4, "ngIf"], ["src", "assets/dice4.png", 4, "ngIf"], ["src", "assets/dice5.png", 4, "ngIf"], ["src", "assets/dice6.png", 4, "ngIf"], ["src", "assets/dice1.png"], ["src", "assets/dice2.png"], ["src", "assets/dice3.png"], ["src", "assets/dice4.png"], ["src", "assets/dice5.png"], ["src", "assets/dice6.png"], ["src", "assets/black-dice-1.png", 4, "ngIf"], ["src", "assets/black-dice-2.png", 4, "ngIf"], ["src", "assets/black-dice-3.png", 4, "ngIf"], ["src", "assets/black-dice-4.png", 4, "ngIf"], ["src", "assets/black-dice-5.png", 4, "ngIf"], ["src", "assets/black-dice-6.png", 4, "ngIf"], ["src", "assets/black-dice-1.png"], ["src", "assets/black-dice-2.png"], ["src", "assets/black-dice-3.png"], ["src", "assets/black-dice-4.png"], ["src", "assets/black-dice-5.png"], ["src", "assets/black-dice-6.png"], [1, "col", "text-right", 2, "padding-left", "6.5rem"], ["type", "button", 1, "btn", "btn-light", "button-70", 3, "disabled", "click"], [1, "col"], ["type", "button", "class", "btn btn-light btn-circle btn-xl button-62", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", "btn-circle", "btn-xl", "button-62", 3, "click"], ["id", "roll", 1, "col", "roll-button"], ["type", "button", 1, "btn", "btn-light", "button-70", 3, "click"], [1, "row", "text-center", "ml-1"], [1, "col", 2, "margin-bottom", "10px"], [1, "col-2", 3, "ngClass"], [1, "col-10"], [3, "type", "value", "max"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h1_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paren Maren!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function AppComponent_Template_div_ngbCollapseChange_6_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reglas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "El primer jugador tira el dado con el bot\u00F3n Roll!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Si el resultado del dado es 1, 2 o 3, termina el turno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Si el resultado es 4, 5 o 6, el jugador contin\u00FAa su turno. Puede seguir tirando dados o hacer Paren Maren y tirar el dado multiplicador. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "El primer jugador en llegar a 365 puntos, gana.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_22_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 9, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_27_Template, 7, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 8, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_34_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_div_35_Template, 10, 8, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameBoard.players.length !== 0 && ctx.startGamePressed === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.turnDices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blackDiceRolled === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGamePressed === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startGamePressed === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameBoard.players);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',\r\n    'Segoe UI Emoji', 'Segoe UI Symbol';\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n.btn-circle.btn-xl[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100px;\r\n  height: 40px;\r\n  padding: 10px 16px;\r\n  font-size: 12px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.button-62[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);\r\n  border: 0;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  outline: transparent;\r\n  margin: 5px;\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: box-shadow 0.2s ease-in-out;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;\r\n}\r\n\r\n.button-62[_ngcontent-%COMP%]:not([disabled]):focus {\r\n  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),\r\n    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\r\n}\r\n\r\n.button-62[_ngcontent-%COMP%]:not([disabled]):hover {\r\n  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),\r\n    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\r\n}\r\n\r\n.font-title[_ngcontent-%COMP%] {\r\n  font-family: 'Rock Salt', cursive;\r\n}\r\n\r\n\r\n\r\n.button-70[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(#0dccea, #0d70ea);\r\n  border: 0;\r\n  border-radius: 4px;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: Montserrat, sans-serif;\r\n  font-size: 0.9em;\r\n  margin: 5px;\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.button-71[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(#fff09a, #fabb3de0);\r\n\r\n  border: 0;\r\n  border-radius: 4px;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: Montserrat, sans-serif;\r\n  font-size: 0.9em;\r\n  margin: 5px;\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.highlight-yellow[_ngcontent-%COMP%] {\r\n  border-radius: 1em 0 1em 0;\r\n  background-image: linear-gradient(\r\n    -100deg,\r\n    rgba(255, 224, 0, 0.2),\r\n    rgba(255, 224, 0, 0.7) 95%,\r\n    rgba(255, 224, 0, 0.1)\r\n  );\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n}\r\n\r\n.roll-height[_ngcontent-%COMP%] {\r\n  height: 420px;\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  img[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n  }\r\n  .roll-height[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTt1Q0FDcUM7RUFDckMsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7O0lBRUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLDhEQUE4RDtFQUM5RCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVGQUF1RjtFQUN2RixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtrREFDZ0Q7QUFDbEQ7O0FBRUE7RUFDRTtrREFDZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLG1EQUFtRDtFQUNuRCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscURBQXFEOztFQUVyRCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCOzs7OztHQUtDO0FBQ0g7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXHJcbiAgICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspLFxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICByaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIENTUyAqL1xyXG4uYnV0dG9uLTYyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZWY0NzY1LCAjZmY5YTVhKTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDAgNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5idXR0b24tNjI6bm90KFtkaXNhYmxlZF0pOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSksIC0wLjEyNXJlbSAtMC4xMjVyZW0gMXJlbSByZ2JhKDIzOSwgNzEsIDEwMSwgMC41KSxcclxuICAgIDAuMTI1cmVtIDAuMTI1cmVtIDFyZW0gcmdiYSgyNTUsIDE1NCwgOTAsIDAuNSk7XHJcbn1cclxuXHJcbi5idXR0b24tNjI6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSksIC0wLjEyNXJlbSAtMC4xMjVyZW0gMXJlbSByZ2JhKDIzOSwgNzEsIDEwMSwgMC41KSxcclxuICAgIDAuMTI1cmVtIDAuMTI1cmVtIDFyZW0gcmdiYSgyNTUsIDE1NCwgOTAsIDAuNSk7XHJcbn1cclxuXHJcbi5mb250LXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1JvY2sgU2FsdCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi8qIENTUyAqL1xyXG4uYnV0dG9uLTcwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzBkY2NlYSwgIzBkNzBlYSk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMCA1cHggMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxufVxyXG5cclxuLmJ1dHRvbi03MSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYwOWEsICNmYWJiM2RlMCk7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDAgNXB4IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbn1cclxuLmhpZ2hsaWdodC15ZWxsb3cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbSAwIDFlbSAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0xMDBkZWcsXHJcbiAgICByZ2JhKDI1NSwgMjI0LCAwLCAwLjIpLFxyXG4gICAgcmdiYSgyNTUsIDIyNCwgMCwgMC43KSA5NSUsXHJcbiAgICByZ2JhKDI1NSwgMjI0LCAwLCAwLjEpXHJcbiAgKTtcclxufVxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5yb2xsLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG4gIC5yb2xsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"]],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map