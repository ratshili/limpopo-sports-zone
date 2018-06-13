webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\" *ngIf=\"currentUser?.uid\">\r\n        <mat-toolbar-row>\r\n            <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n            <span class=\"example-spacer\"></span>\r\n            <mat-icon class=\"example-icon\">account_circle</mat-icon>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\">Admin</button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item>Settings</button>\r\n                <button mat-menu-item (click)=\"logout()\">Logout</button>\r\n            </mat-menu>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  \r\n    <mat-sidenav-container\r\n        class=\"example-sidenav-container\"\r\n        [style.marginTop.px]=\"mobileQuery.matches ? (currentUser?.uid ? 56 : 0) : 0\">\r\n      <mat-sidenav\r\n        [hidden]=\"!currentUser?.uid\"\r\n        #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\"fixtures\">Fixtures</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\"standings\">Standings</a>\r\n        </mat-nav-list>\r\n        \r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\"clubs\">Clubs</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\"competitions\">Competitions</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\"campaigns\">Campaigns</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list (click)=\"mobileQuery.matches ? snav.toggle() : null\">\r\n            <a mat-list-item routerLink=\".\">News</a>\r\n        </mat-nav-list>\r\n      </mat-sidenav>\r\n  \r\n      <mat-sidenav-content class=\"uk-padding bg-transparent\" uk-height-viewport>\r\n        <router-outlet></router-outlet>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".uk-text-break {\n  white-space: normal !important; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.side-menu {\n  min-height: calc(100vh);\n  height: calc(100vh);\n  background-color: #3F4A59; }\n\n.uk-modal-footer .uk-button {\n  min-width: 100px !important; }\n\n.mat-menu-panel {\n  min-width: 160px !important; }\n\n.mat-form-field {\n  width: 100%; }\n\n.mat-sidenav-fixed, .mat-drawer {\n  width: 320px; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__ = __webpack_require__("./src/app/providers/auth-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authData, router, changeDetectorRef, media) {
        var _this = this;
        this.authData = authData;
        this.router = router;
        this.title = 'app';
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 767px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        authData.currentUser().subscribe(function (data) {
            _this.currentUser = data;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                _this.checkIfAuthPages();
            }
        });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AppComponent.prototype.checkIfAuthPages = function () {
        return window.location.href.indexOf("login") > -1 || window.location.href.indexOf("register") > -1;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__["a" /* AuthProvidersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu_component__ = __webpack_require__("./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_login_login_component__ = __webpack_require__("./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_providers_service__ = __webpack_require__("./src/app/providers/auth-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_competitions_competition_listings_competition_listings_component__ = __webpack_require__("./src/app/pages/competitions/competition-listings/competition-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_clubs_clubs_listing_clubs_listing_component__ = __webpack_require__("./src/app/pages/clubs/clubs-listing/clubs-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_dialogs_confirm_dialog_service__ = __webpack_require__("./src/app/providers/dialogs/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_competitions_add_competition_add_competitions_component__ = __webpack_require__("./src/app/pages/competitions/add-competition/add-competitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_clubs_add_club_add_club_component__ = __webpack_require__("./src/app/pages/clubs/add-club/add-club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_matches_standings_standings_component__ = __webpack_require__("./src/app/pages/matches/standings/standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_news_news_listing_news_listing_component__ = __webpack_require__("./src/app/pages/news/news-listing/news-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_matches_fixtures_add_fixture_add_fixture_component__ = __webpack_require__("./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_matches_fixtures_fixtures_listing_fixtures_component__ = __webpack_require__("./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_fixtures_fixtures_providers_service__ = __webpack_require__("./src/app/providers/fixtures/fixtures-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_matches_fixtures_update_fixture_update_fixture_component__ = __webpack_require__("./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_campaigns_campaigns_component__ = __webpack_require__("./src/app/pages/campaigns/campaigns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_campaigns_add_campaign_add_campaign_component__ = __webpack_require__("./src/app/pages/campaigns/add-campaign/add-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_32__pages_matches_fixtures_fixtures_listing_fixtures_component__["a" /* FixturesComponent */] },
            { path: 'competitions', component: __WEBPACK_IMPORTED_MODULE_21__pages_competitions_competition_listings_competition_listings_component__["a" /* CompetitionListingsComponent */] },
            { path: 'clubs', component: __WEBPACK_IMPORTED_MODULE_22__pages_clubs_clubs_listing_clubs_listing_component__["a" /* ClubsListingComponent */] },
            { path: 'fixtures', component: __WEBPACK_IMPORTED_MODULE_32__pages_matches_fixtures_fixtures_listing_fixtures_component__["a" /* FixturesComponent */] },
            { path: 'campaigns', component: __WEBPACK_IMPORTED_MODULE_35__pages_campaigns_campaigns_component__["a" /* CampaignsComponent */] },
            { path: 'standings', component: __WEBPACK_IMPORTED_MODULE_29__pages_matches_standings_standings_component__["a" /* StandingsComponent */] }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__pages_auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_competitions_competition_listings_competition_listings_component__["a" /* CompetitionListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_matches_fixtures_fixtures_listing_fixtures_component__["a" /* FixturesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_clubs_clubs_listing_clubs_listing_component__["a" /* ClubsListingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_competitions_add_competition_add_competitions_component__["a" /* AddCompetitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_clubs_add_club_add_club_component__["a" /* AddClubComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_matches_standings_standings_component__["a" /* StandingsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_news_news_listing_news_listing_component__["a" /* NewsListingComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_matches_fixtures_add_fixture_add_fixture_component__["a" /* AddFixtureComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_matches_fixtures_update_fixture_update_fixture_component__["a" /* UpdateFixtureComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_campaigns_campaigns_component__["a" /* CampaignsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_campaigns_add_campaign_add_campaign_component__["a" /* AddCampaignComponent */]
            ],
            imports: [
                // Imports
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["G" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["H" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["J" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["K" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["L" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["M" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MatNativeDateModule */]
            ],
            // Exports
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["G" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["H" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["J" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["K" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["L" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["M" /* MatTooltipModule */]
            ],
            // Providers
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_providers_service__["a" /* AuthProvidersService */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_23__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
                __WEBPACK_IMPORTED_MODULE_25__providers_dialogs_confirm_dialog_service__["a" /* ConfirmDialogService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_fixtures_fixtures_providers_service__["a" /* FixturesProvidersService */],
                __WEBPACK_IMPORTED_MODULE_37__providers_campains_campaigns_service__["a" /* CampaignsService */]
            ],
            // Entry components
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__pages_competitions_competition_listings_competition_listings_component__["a" /* CompetitionListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_competitions_add_competition_add_competitions_component__["a" /* AddCompetitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_clubs_add_club_add_club_component__["a" /* AddClubComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_matches_fixtures_add_fixture_add_fixture_component__["a" /* AddFixtureComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_matches_fixtures_update_fixture_update_fixture_component__["a" /* UpdateFixtureComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_campaigns_add_campaign_add_campaign_component__["a" /* AddCampaignComponent */]
            ],
            // Bootstrap
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title>Confirm</h1>\n<div mat-dialog-content>\n  <p>Are you sure you want to delete <strong>{{ data.name }}</strong> {{ data.type }}</p>\n</div>\n\n\n<div mat-dialog-actions class=\"uk-align-right\">\n  <button mat-button (click)=\"onCancel()\">NO</button>\n  <button mat-button (click)=\"onConfirm()\" color=\"primary\" cdkFocusInitial>YES</button>\n</div>"

/***/ }),

/***/ "./src/app/components/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"example-toolbar\" *ngIf=\"currentUser?.uid\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n        <span class=\"example-spacer\"></span>\n        <mat-icon class=\"example-icon\">account_circle</mat-icon>\n        <button mat-button [matMenuTriggerFor]=\"menu\">Eric Ratshili</button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>Item 1</button>\n            <button mat-menu-item (click)=\"logout()\">Logout</button>\n        </mat-menu>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__ = __webpack_require__("./src/app/providers/auth-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authData, router) {
        var _this = this;
        this.authData = authData;
        this.router = router;
        authData.currentUser().subscribe(function (data) {
            _this.currentUser = data;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__["a" /* AuthProvidersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav\n[hidden]=\"!currentUser?.uid\"\n#snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n[fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n    <mat-nav-list>\n        <a (click)=\"snav.toggle()\" mat-list-item routerLink=\"fixtures\">Fixtures</a>\n    </mat-nav-list>\n\n    <mat-nav-list>\n        <a (click)=\"snav.toggle()\" mat-list-item routerLink=\"standings\">Standings</a>\n    </mat-nav-list>\n\n    <mat-nav-list>\n        <a (click)=\"snav.toggle()\" mat-list-item routerLink=\"clubs\">Clubs</a>\n    </mat-nav-list>\n\n    <mat-nav-list>\n        <a (click)=\"snav.toggle()\" mat-list-item routerLink=\"competitions\">Competitions</a>\n    </mat-nav-list>\n\n    <mat-nav-list>\n        <a (click)=\"snav.toggle()\" mat-list-item routerLink=\".\">Menu item</a>\n    </mat-nav-list>\n</mat-sidenav>"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-menu',
            template: __webpack_require__("./src/app/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("./src/app/components/side-menu/side-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n  <div class=\"uk-section-large login-container\" style=\"display: block;\">\n    <div class=\"uk-container uk-container-large\">\n        <div uk-grid class=\"uk-child-width-1-1@s uk-child-width-2-3@l\">\n            <div class=\"uk-width-1-1@s uk-width-1-5@m uk-width-1-3@xl\"></div>\n            <div class=\"uk-width-1-1@s uk-width-3-5@m uk-width-1-3@xl\">\n                <div class=\"uk-card uk-card-secondary\">\n                    <div class=\"uk-card-body\">\n                        <h2 class=\"uk-text-center\">Admin login</h2>\n                        <form>\n                            <fieldset class=\"uk-fieldset\">\n\n                                <div class=\"uk-margin\">\n                                    <div class=\"uk-position-relative\">\n                                      <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n                                      <input class=\"uk-input\" name=\"email\" [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"uk-margin\">\n                                    <div class=\"uk-position-relative\">\n                                          <span class=\"uk-form-icon\" uk-icon=\"icon: lock\"></span>\n                                          <input class=\"uk-input\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" required>\n                                    </div>\n                                </div>\n\n                                <div class=\"uk-margin\">\n                                    <a href=\"#\">Forgot your password?</a>\n                                </div>\n\n                                <div class=\"uk-margin\">\n                                    <button (click)=\"loginUser()\" [disabled]=\"loading\" type=\"button\" class=\"uk-button uk-button-primary uk-button-large uk-width-1-1\">\n                                        <span class=\"ion-forward\"></span>&nbsp;  {{ loading ? 'Please wait...' : 'Login' }}\n                                    </button>\n                                </div>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"uk-width-1-1@s uk-width-1-5@l uk-width-1-3@xl\"></div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"has-background\">\n    <mat-card class=\"login-card uk-position-center\">\n        <h4 class=\"uk-text-center\">ADMIN LOGIN</h4>\n            <mat-form-field class=\"uk-width-1-1@s\">\n                <input matInput name=\"email\" [(ngModel)]=\"email\" type=\"email\" placeholder=\"Username\">\n            </mat-form-field>\n            <mat-form-field class=\"uk-width-1-1@s\">\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" matInput placeholder=\"Password\">\n            </mat-form-field>\n\n            <button class=\"uk-width-1-1@s\" mat-raised-button (click)=\"loginUser()\" [disabled]=\"loading\" color=\"primary\">\n                <i class=\"fa fa-circle-o-notch fa-spin\" *ngIf=\"loading\"></i> &nbsp;\n                {{ loading ? 'Please wait...' : 'Login' }}\n            </button>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 380px;\n  margin: auto;\n  width: 90%; }\n  .login-card .mat-raised-button {\n    height: 45px; }\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_providers_service__ = __webpack_require__("./src/app/providers/auth-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authData, router, snackBar) {
        var _this = this;
        this.authData = authData;
        this.router = router;
        this.snackBar = snackBar;
        this.loading = false;
        authData.currentUser().subscribe(function (data) {
            _this.currentUser = data;
            if (_this.currentUser) {
                _this.router.navigate(['/']);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.loading = true;
        this.authData.loginUser(this.email, this.password)
            .then(function (authData) {
            _this.loading = false;
            _this.router.navigate(['/']);
            _this.snackBar.open('Welcome', 'CLOSE', {
                duration: 2000,
            });
        }, function (error) {
            _this.snackBar.open(error.message, 'CLOSE', {
                duration: 2000,
            });
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_providers_service__["a" /* AuthProvidersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/campaigns/add-campaign/add-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data?.id ? 'Edit Campaign' : 'Add Campaign' }}</h1>\n<form [formGroup]=\"form\" class=\"add-competition-form\">\n  <div mat-dialog-content>\n    <div uk-grid class=\"uk-child-width-1-2@m\">\n      <div>\n        <mat-form-field style=\"width: 100%\">\n            <mat-select #startYear formControlName=\"startYear\"\n              placeholder=\"Start year\"\n              (change)=\"onYearChange(startYear.value, endYear.value);endYear.value = ''\"\n              required>\n              <mat-option *ngFor=\"let item of yearsData\" [value]=\"item\">\n                {{ item }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n      </div>\n      <div>\n          <mat-form-field style=\"width: 100%\">\n              <mat-select #endYear formControlName=\"endYear\"\n                placeholder=\"End year\"\n                (change)=\"onYearChange(startYear.value, endYear.value)\"\n                required>\n                <mat-option *ngFor=\"let item of yearsData\" [value]=\"item\" [disabled]=\"item < startYear.value\">\n                  {{ item }}\n                </mat-option>\n              </mat-select>\n          </mat-form-field>\n      </div>\n    </div>\n    \n    <mat-form-field style=\"width: 100%\">\n        <input matInput formControlName=\"campaign\" placeholder=\"Campaign\" required>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions class=\"uk-align-right\">\n      <button mat-button (click)=\"onCancel()\">Cancel</button>\n      <button mat-button (click)=\"addCampaign()\" [disabled]=\"!form.valid\" mat-raised-button color=\"primary\" cdkFocusInitial>Save</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/campaigns/add-campaign/add-campaign.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/campaigns/add-campaign/add-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddCampaignComponent = /** @class */ (function () {
    function AddCampaignComponent(campaignsService, dialogRef, data, competitionServices, formBuilder) {
        this.campaignsService = campaignsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.competitionServices = competitionServices;
        this.formBuilder = formBuilder;
        this.currentYear = new Date().getFullYear();
        this.years = [];
        this.form = this.formBuilder.group({
            campaign: [this.data ? this.data.campaign : null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            startYear: [this.data ? this.data.startYear : null],
            endYear: [this.data ? this.data.endYear : null],
        });
    }
    AddCampaignComponent.prototype.ngOnInit = function () {
        this.generateListOfYears(2017);
        this.yearsData = this.generateListOfYears(2017).filter(function (v, i, a) { return a.indexOf(v) === i; });
    };
    AddCampaignComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddCampaignComponent.prototype.onYearChange = function (start, end) {
        var startYearStr = start ? start.toString() : this.data.startYear.toString();
        var endYearStr = end ? end.toString() : this.data.endYear.toString();
        if (startYearStr && endYearStr) {
            this.form = this.formBuilder.group({
                campaign: startYearStr + '/' + endYearStr.substr(endYearStr.length - 2),
                startYear: [startYearStr ? start : null],
                endYear: [endYearStr ? end : null],
            });
        }
    };
    AddCampaignComponent.prototype.generateListOfYears = function (startYear) {
        startYear = startYear;
        while (startYear <= this.currentYear + 5) {
            this.years.push(startYear++);
        }
        return this.years;
    };
    AddCampaignComponent.prototype.addCampaign = function () {
        this.clubData = this.form.value;
        this.clubData.id = this.data ? this.data.id : null;
        if (this.clubData.id) {
            this.campaignsService.updateCampaign(this.clubData);
        }
        else {
            this.campaignsService.addCampaign(this.clubData);
        }
        this.dialogRef.close();
    };
    AddCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-campaign',
            template: __webpack_require__("./src/app/pages/campaigns/add-campaign/add-campaign.component.html"),
            styles: [__webpack_require__("./src/app/pages/campaigns/add-campaign/add-campaign.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_campains_campaigns_service__["a" /* CampaignsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddCampaignComponent);
    return AddCampaignComponent;
}());



/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section uk-section-muted uk-padding\">\n    <div uk-grid class=\"uk-flex-middle\">\n        <div class=\"uk-width-expand@m uk-width-1-1@s\">\n            <h1 class=\"uk-margin-remove\">Campaigns</h1>\n            <p class=\"uk-margin-remove\">Manage your campaigns</p>\n        </div>\n    </div>\n</div>\n\n\n<hr class=\"uk-margin-remove\">\n<mat-card *ngIf=\"!loading\" class=\"listing-container\">\n    <mat-card-content>\n      <mat-table #table [dataSource]=\"dataSource\" class=\"grid-listing-table\" [hidden]=\"loading\" style=\"margin-bottom: 100px;\">\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"campaign\">\n            <mat-header-cell *matHeaderCellDef> Campaign </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-list>\n                  <mat-list-item>\n                    <mat-icon mat-list-icon>date_range</mat-icon>\n                    <h5 mat-line>{{ element.campaign }} </h5>\n                    <span [hidden]=\"!mobileQuery.matches\" class=\"uk-text-break uk-text-muted\" mat-line>{{ element.startYear }} - {{ element.endYear }}</span>\n                  </mat-list-item>\n                </mat-list>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"startYear\">\n              <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef> Start year </mat-header-cell>\n              <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\">\n                {{ element.startYear }}\n              </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"endYear\">\n              <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef> End year </mat-header-cell>\n              <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\">\n                {{ element.endYear }}\n              </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"uk-text-right\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\n              <mat-menu #menu=\"matMenu\">\n                <!-- <button mat-menu-item (click)=\"editCampaing(element)\">\n                  <mat-icon>check_circle</mat-icon>\n                  <span>Make as default</span>\n                </button> -->\n                <button mat-menu-item (click)=\"editCampaing(element)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n                <button mat-menu-item (click)=\"deleteCompaign(element)\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </mat-card-content>\n  </mat-card>\n\n<button class=\"floating-add-button\" (click)=\"openAddCampaign()\" mat-fab color=\"primary\"  matTooltip=\"Add new fixture\"[matTooltipPosition]=\"'left'\">\n    <mat-icon aria-label=\"Add new fixture\">add</mat-icon>\n</button>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n\n"

/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/campaigns/campaigns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_campaign_add_campaign_component__ = __webpack_require__("./src/app/pages/campaigns/add-campaign/add-campaign.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CampaignsComponent = /** @class */ (function () {
    function CampaignsComponent(dialog, afs, af, changeDetectorRef, campaignsService, media) {
        var _this = this;
        this.dialog = dialog;
        this.afs = afs;
        this.af = af;
        this.campaignsService = campaignsService;
        this.displayedColumns = ['campaign', 'startYear', 'endYear', 'actions'];
        this.type = 'campaign';
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */](this.campaignsData);
        this.mobileQuery = media.matchMedia('(max-width: 767px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.loading = true;
        campaignsService.getCampaigns().valueChanges().subscribe(function (data) {
            _this.campaignsData = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */](_this.campaignsData);
            _this.loading = false;
        });
    }
    CampaignsComponent.prototype.ngOnInit = function () {
    };
    CampaignsComponent.prototype.openAddCampaign = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__add_campaign_add_campaign_component__["a" /* AddCampaignComponent */], {
            width: '500px',
            data: null
        });
    };
    CampaignsComponent.prototype.editCampaing = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__add_campaign_add_campaign_component__["a" /* AddCampaignComponent */], {
            width: '500px',
            data: item
        });
    };
    CampaignsComponent.prototype.deleteCompaign = function (item) {
        console.log(item);
        this.campaignsService.deleteCampaign(this.type, item);
    };
    CampaignsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-campaigns',
            template: __webpack_require__("./src/app/pages/campaigns/campaigns.component.html"),
            styles: [__webpack_require__("./src/app/pages/campaigns/campaigns.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__["a" /* CampaignsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], CampaignsComponent);
    return CampaignsComponent;
}());



/***/ }),

/***/ "./src/app/pages/clubs/add-club/add-club.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data ? 'Edit Club' : 'Add Club' }}</h1>\n<form [formGroup]=\"form\" class=\"add-club-form\">\n  <div mat-dialog-content>\n\n      <mat-form-field style=\"width: 100%\">\n        <i matPrefix class=\"fas fa-shield-alt\"></i>\n        <input matInput formControlName=\"name\" placeholder=\"Club name\" required>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n        <i matPrefix class=\"fas fa-trophy\"></i>\n        <mat-select placeholder=\"Competition\" [formControl]=\"competitionInput\" multiple required>\n          <mat-select-trigger>\n            {{ competitionInput?.value ? getCompetitonName(competitionInput.value[0]) : '' }}\n            <span *ngIf=\"competitionInput.value?.length > 1\" class=\"uk-text-muted\">\n              (+{{ competitionInput.value.length - 1 }} others)\n            </span>\n          </mat-select-trigger>\n          <mat-option *ngFor=\"let item of competitionsData\" [value]=\"item.id\">{{ item.description }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n      <mat-form-field style=\"width: 100%\">\n        <i matPrefix class=\"fas fa-futbol\"></i>\n        <input matInput formControlName=\"homeGround\" placeholder=\"Home ground\">\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fas fa-envelope\"></i>\n        <input matInput formControlName=\"emailAddress\" placeholder=\"Email address\">\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fas fa-phone\"></i>\n        <input matInput formControlName=\"contactNumber\" placeholder=\"Contact number\">\n      </mat-form-field>\n      \n      <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fas fa-map-marker\"></i>\n        <input matInput formControlName=\"physicalAddress\" placeholder=\"Physical address\">\n      </mat-form-field>\n\n      <!-- SOCIAL -->\n      <div *ngIf=\"toggleMoreFields\">\n        <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fas fa-globe\"></i>\n          <input matInput formControlName=\"website\" placeholder=\"Website\">\n        </mat-form-field>\n        \n        <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fab fa-facebook\"></i>\n          <input matInput formControlName=\"facebookUrl\" placeholder=\"Facebook link\">\n        </mat-form-field>\n        \n        <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fab fa-twitter\"></i>\n          <input matInput formControlName=\"twitterUrl\" placeholder=\"Twitter link\">\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fab fa-instagram\"></i>\n          <input matInput formControlName=\"instagramUrl\" placeholder=\"Instagram link\">\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 100%\">\n          <i matPrefix class=\"fab fa-youtube\"></i>\n          <input matInput formControlName=\"youtubeUrl\" placeholder=\"Youtube link\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"uk-text-center uk-margin-bottom\">\n          <a mat-button (click)=\"toggleMoreFields = !toggleMoreFields\" mat-button>{{ toggleMoreFields ? 'Less fields' : 'More fields' }}</a>\n      </div>\n  </div>\n\n  <div mat-dialog-actions class=\"uk-align-right\">\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\n    <button mat-raised-button color=\"primary\" (click)=\"addCompetition()\" [disabled]=\"!form.valid || !competitionInput.valid\" cdkFocusInitial>Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/clubs/add-club/add-club.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/clubs/add-club/add-club.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddClubComponent = /** @class */ (function () {
    function AddClubComponent(dialogRef, data, competitionServices, clubService, formBuilder) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.competitionServices = competitionServices;
        this.clubService = clubService;
        this.formBuilder = formBuilder;
        this.competitionTypeData = [];
        this.competitionInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.loading = true;
        this.competitionServices.getCompetitions().valueChanges().subscribe(function (res) {
            _this.loading = false;
            _this.competitionsData = res;
        });
        this.competitionInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.data ? this.data.competitions : [], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required);
        this.form = this.formBuilder.group({
            name: [this.data ? this.data.name : null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            homeGround: [this.data ? this.data.homeGround : null],
            emailAddress: [this.data ? this.data.emailAddress : null],
            physicalAddress: [this.data ? this.data.physicalAddress : null],
            contactNumber: [this.data ? this.data.contactNumber : null],
            website: [this.data ? this.data.website : null],
            facebookUrl: [this.data ? this.data.facebookUrl : null],
            twitterUrl: [this.data ? this.data.twitterUrl : null],
            instagramUrl: [this.data ? this.data.instagramUrl : null],
            youtubeUrl: [this.data ? this.data.youtubeUrl : null]
        });
    }
    AddClubComponent.prototype.ngOnInit = function () {
    };
    AddClubComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    // Returns name of competition using id
    AddClubComponent.prototype.getCompetitonName = function (id) {
        if (id && this.competitionsData) {
            var competitionName = this.competitionsData.find(function (competition) { return competition.id === id; });
            return competitionName.description;
        }
    };
    AddClubComponent.prototype.addCompetition = function () {
        this.clubData = this.form.value;
        this.clubData.id = this.data ? this.data.id : null;
        this.clubData.competitions = this.competitionInput.value;
        this.clubData.logoUrl = '';
        if (this.clubData.id) {
            this.clubService.updateClub(this.clubData);
        }
        else {
            this.clubService.addClub(this.clubData);
        }
        this.dialogRef.close();
    };
    AddClubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-club',
            template: __webpack_require__("./src/app/pages/clubs/add-club/add-club.component.html"),
            styles: [__webpack_require__("./src/app/pages/clubs/add-club/add-club.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_4__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddClubComponent);
    return AddClubComponent;
}());



/***/ }),

/***/ "./src/app/pages/clubs/clubs-listing/clubs-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section uk-section-muted uk-padding\">\n    <div uk-grid class=\"uk-flex-middle\">\n        <div class=\"uk-width-expand@m uk-width-1-1@s\">\n            <h1 class=\"uk-margin-remove\">Clubs</h1>\n            <p class=\"uk-margin-remove\">Manage your Clubs</p>\n        </div>\n    </div>\n</div>\n<div class=\"uk-section uk-section-default uk-padding-small\">\n  <div class=\"uk-grid-small\" uk-grid>\n    <div class=\"uk-width-1-4@m uk-width-1-1@s\">\n      <div class=\"uk-inline uk-width-1-1\">\n        <mat-form-field class=\"uk-width-1-1\">\n            <mat-select placeholder=\"Filter by competition\" (change)=\"onCompetitionChange($event.value)\">\n              <mat-option value=\"\">All</mat-option>\n              <mat-option *ngFor=\"let item of competitionsData\" [value]=\"item.id\">\n                {{ item.description }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n      </div>\n    </div>\n    <div class=\"uk-width-1-4@m uk-width-1-1@s\">\n      <div class=\"uk-inline uk-width-1-1\">\n        <mat-form-field class=\"uk-width-1-1\">\n            <input matInput type=\"text\" placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"searchClub\"/>\n            <button mat-button *ngIf=\"searchClub\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"applyFilter(''); searchClub =''\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n      </div>\n    </div>\n    <!-- <div class=\"uk-width-expand@m uk-width-1-1@s uk-text-right\">\n      <button mat-raised-button color=\"primary\" (click)=\"openAddClub()\">Add New</button>\n    </div> -->\n  </div>\n</div>\n\n\n<hr class=\"uk-margin-remove\">\n\n<mat-table #table [dataSource]=\"dataSource\" class=\"grid-listing-table\" [hidden]=\"loading\" style=\"margin-bottom: 100px;\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Club name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n         <mat-list>\n            <mat-list-item>\n              <i matPrefix mat-list-icon class=\"fas fa-shield-alt\"></i>\n              <h5 mat-line>{{ element.name }} </h5>\n              <span class=\"uk-text-break uk-text-muted\" mat-line *ngFor=\"let item of element.competitions\">{{ getCompetition(item)?.description }}</span>\n            </mat-list-item>\n          </mat-list>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"homeGround\">\n        <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef> Home ground </mat-header-cell>\n        <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\">\n          <span [ngClass]=\"{'uk-text-muted': !element.homeGround }\">{{ element.homeGround ? element.homeGround : 'Not provided' }}</span>\n        </mat-cell>\n    </ng-container>\n    \n    <!-- <ng-container matColumnDef=\"competitions\">\n      <mat-header-cell *matHeaderCellDef> Competitions </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n          <ul class=\"uk-list uk-margin-remove comp-list\">\n              <li *ngFor=\"let item of element.competitions\" matTooltip=\"{{ getCompetitionTypeName(getCompetition(item)?.type) }}\">{{ getCompetition(item)?.description }}</li>\n          </ul>\n      </mat-cell>\n    </ng-container> -->\n\n    <!-- contacts Column -->\n    <ng-container matColumnDef=\"contacts\">\n      <mat-header-cell style=\"max-width: 50px\" *matHeaderCellDef> More </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"max-width: 50px\"> \n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">info</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\" xPosition=\"after\">\n\n            <mat-list role=\"list\">\n              <mat-list-item role=\"listitem\">\n                  <mat-icon style=\"margin-right: 12px\">email</mat-icon>\n                  <span [ngClass]=\"{'uk-text-muted': !element.emailAddress}\">{{ element.emailAddress ? element.emailAddress : 'Not provided' }}</span>\n              </mat-list-item>\n              <mat-list-item role=\"listitem\">\n                  <mat-icon style=\"margin-right: 12px\">phone</mat-icon>\n                  <span [ngClass]=\"{'uk-text-muted': !element.contactNumber }\">{{ element.contactNumber ? element.contactNumber : 'Not provided' }}</span>\n              </mat-list-item>\n              <mat-list-item role=\"listitem\">\n                  <mat-icon style=\"margin-right: 12px\">location_on</mat-icon>\n                  <span [ngClass]=\"{'uk-text-muted': !element.physicalAddress}\">{{ element.physicalAddress ? element.physicalAddress : 'Not provided' }}</span>\n              </mat-list-item>\n\n              <mat-divider></mat-divider>\n              \n              <mat-list-item role=\"listitem\">\n                <span class=\"mat-icon\" style=\"margin-right: 12px;text-align: center;\"><i class=\"fas fa-globe\"></i></span>\n                  <a *ngIf=\"element.website\" href=\"{{ element.website }}\" target=\"_blank\">Official Website</a>\n                  <span class=\"uk-text-muted\" *ngIf=\"!element.website\">Not provided</span>\n              </mat-list-item>\n              \n              <mat-list-item role=\"listitem\">\n                <span class=\"mat-icon\" style=\"margin-right: 12px;text-align: center;\"><i class=\"fab fa-facebook\"></i></span>\n                  <a *ngIf=\"element.facebookUrl\" href=\"{{ element.facebookUrl }}\" target=\"_blank\">Official Facebook</a>\n                  <span class=\"uk-text-muted\" *ngIf=\"!element.facebookUrl\">Not provided</span>\n              </mat-list-item>\n\n              <mat-list-item role=\"listitem\">\n                <span class=\"mat-icon\" style=\"margin-right: 12px;text-align: center;\"><i class=\"fab fa-twitter\"></i></span>\n                  <a *ngIf=\"element.twitterUrl\" href=\"{{ element.twitterUrl }}\" target=\"_blank\">Official Twitter</a>\n                  <span class=\"uk-text-muted\" *ngIf=\"!element.twitterUrl\">Not provided</span>\n              </mat-list-item>\n\n              <mat-list-item role=\"listitem\">\n                <span class=\"mat-icon\" style=\"margin-right: 12px;text-align: center;\"><i class=\"fab fa-instagram\"></i></span>\n                  <a *ngIf=\"element.instagramUrl\" href=\"{{ element.instagramUrl }}\" target=\"_blank\">Official Instagram</a>\n                  <span class=\"uk-text-muted\" *ngIf=\"!element.instagramUrl\">Not provided</span>\n              </mat-list-item>\n\n              <mat-list-item role=\"listitem\">\n                <span class=\"mat-icon\" style=\"margin-right: 12px;text-align: center;\"><i class=\"fab fa-youtube\"></i></span>\n                  <a *ngIf=\"element.youtubeUrl\" href=\"{{ element.youtubeUrl ? element.youtubeUrl : 'https://fb.com' }}\" target=\"_blank\">Official Youtube</a>\n                  <span class=\"uk-text-muted\" *ngIf=\"!element.youtubeUrl\">Not provided</span>\n              </mat-list-item>\n            </mat-list>\n          </mat-menu>  \n      </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell style=\"max-width: 50px\" *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"max-width: 50px\" class=\"uk-text-right\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"editClub(element)\">\n            <mat-icon>mode_edit</mat-icon>\n            <span>Edit</span>\n          </button>\n          <button mat-menu-item (click)=\"deleteClub(element)\">\n            <mat-icon>delete</mat-icon>\n            <span>Delete</span>\n          </button>\n        </mat-menu>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<button class=\"floating-add-button\" (click)=\"openAddClub(false)\" mat-fab color=\"primary\"  matTooltip=\"Add new fixture\"[matTooltipPosition]=\"'left'\">\n    <mat-icon aria-label=\"Add new fixture\">add</mat-icon>\n</button>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n\n"

/***/ }),

/***/ "./src/app/pages/clubs/clubs-listing/clubs-listing.component.scss":
/***/ (function(module, exports) {

module.exports = ".comp-list {\n  padding: 5px 0; }\n  .comp-list li {\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/pages/clubs/clubs-listing/clubs-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clubs_add_club_add_club_component__ = __webpack_require__("./src/app/pages/clubs/add-club/add-club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClubsListingComponent = /** @class */ (function () {
    function ClubsListingComponent(dialog, afs, af, competitionServices, clubsService, changeDetectorRef, media) {
        var _this = this;
        this.dialog = dialog;
        this.afs = afs;
        this.af = af;
        this.competitionServices = competitionServices;
        this.clubsService = clubsService;
        this.displayedColumns = ['name', 'homeGround', 'contacts', 'actions'];
        this.type = 'club';
        // @ViewChild(MatSort) sort: MatSort;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTableDataSource */](this.clubsData);
        this.mobileQuery = media.matchMedia('(max-width: 767px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.loading = true;
        clubsService.getClubs().valueChanges().subscribe(function (data) {
            _this.clubsData = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTableDataSource */](_this.clubsData);
            _this.loading = false;
        });
        this.getCompetitions();
        this.getCompetitionsTypes();
    }
    ClubsListingComponent.prototype.ngOnInit = function () {
    };
    ClubsListingComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ClubsListingComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitions().valueChanges().subscribe(function (data) {
            _this.competitionsData = data;
            _this.loading = false;
        });
    };
    ClubsListingComponent.prototype.getCompetitionsTypes = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitionTypes().valueChanges().subscribe(function (data) {
            _this.competitionsTypesData = data;
            _this.loading = false;
        });
    };
    // FILTERS
    ClubsListingComponent.prototype.getCompetition = function (id) {
        if (id && this.competitionsData) {
            var comp = this.competitionsData.find(function (competition) { return competition.id === id; });
            return comp;
        }
    };
    ClubsListingComponent.prototype.getCompetitionTypeName = function (id) {
        if (id && this.competitionsTypesData) {
            var compType = this.competitionsTypesData.find(function (competitionType) { return competitionType.id === id; });
            return compType.name;
        }
    };
    ClubsListingComponent.prototype.onCompetitionChange = function (event) {
        if (event) {
            var result = this.clubsData.filter(function (item) { return item.competitions.indexOf(event) > -1; });
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTableDataSource */](result);
        }
        else {
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTableDataSource */](this.clubsData);
        }
    };
    ClubsListingComponent.prototype.openAddClub = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__clubs_add_club_add_club_component__["a" /* AddClubComponent */], {
            width: '500px',
            data: null
        });
    };
    ClubsListingComponent.prototype.editClub = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__clubs_add_club_add_club_component__["a" /* AddClubComponent */], {
            width: '500px',
            data: item
        });
    };
    ClubsListingComponent.prototype.deleteClub = function (item) {
        console.log(item);
        this.clubsService.deleteClub(this.type, item);
    };
    ClubsListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-clubs-listing',
            template: __webpack_require__("./src/app/pages/clubs/clubs-listing/clubs-listing.component.html"),
            styles: [__webpack_require__("./src/app/pages/clubs/clubs-listing/clubs-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_0__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], ClubsListingComponent);
    return ClubsListingComponent;
}());



/***/ }),

/***/ "./src/app/pages/competitions/add-competition/add-competitions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data.id ? 'Edit Competition' : 'Add Competition' }}</h1>\n<form [formGroup]=\"form\" class=\"add-competition-form\">\n  <div mat-dialog-content>\n      <mat-form-field style=\"width: 100%\">\n        <input matInput formControlName=\"shortName\" placeholder=\"Short name\" required>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n        <input matInput formControlName=\"description\" placeholder=\"Description\" required>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n        <mat-select placeholder=\"Competition type\" formControlName=\"type\" required>\n          <mat-option *ngFor=\"let item of competitionTypes\" [value]=\"item.id\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 100%\">\n        <input matInput formControlName=\"numberOfClubs\" placeholder=\"Number Of Clubs\" required>\n      </mat-form-field>\n  </div>\n\n  <div mat-dialog-actions class=\"uk-align-right\">\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\n    <button mat-button (click)=\"addCompetition()\" [disabled]=\"!form.valid\" mat-raised-button color=\"primary\" cdkFocusInitial>Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/competitions/add-competition/add-competitions.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/competitions/add-competition/add-competitions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompetitionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddCompetitionsComponent = /** @class */ (function () {
    function AddCompetitionsComponent(dialogRef, data, compService, formBuilder) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.compService = compService;
        this.formBuilder = formBuilder;
        compService.getCompetitionTypes().valueChanges().subscribe(function (data) {
            _this.competitionTypes = data;
        });
        this.form = this.formBuilder.group({
            shortName: [this.data ? this.data.shortName : null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            description: [this.data ? this.data.description : null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            type: [this.data ? this.data.type : null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            numberOfClubs: [this.data ? this.data.numberOfClubs : null]
        });
    }
    AddCompetitionsComponent.prototype.ngOnInit = function () { };
    AddCompetitionsComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddCompetitionsComponent.prototype.addCompetition = function () {
        this.competitionData = this.form.value;
        this.competitionData.id = this.data ? this.data.id : null;
        if (this.data.id) {
            this.compService.updateCompetition(this.competitionData);
        }
        else {
            this.compService.addCompetition(this.competitionData);
        }
        this.dialogRef.close();
    };
    AddCompetitionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-competitions',
            template: __webpack_require__("./src/app/pages/competitions/add-competition/add-competitions.component.html"),
            styles: [__webpack_require__("./src/app/pages/competitions/add-competition/add-competitions.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], AddCompetitionsComponent);
    return AddCompetitionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/competitions/competition-listings/competition-listings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section uk-section-muted uk-padding\">\n    <div uk-grid class=\"uk-flex-middle\">\n        <div class=\"uk-width-expand@m uk-width-1-1@s\">\n            <h1 class=\"uk-margin-remove\">Competitions</h1>\n            <p class=\"uk-margin-remove\">Manage your competitions</p>\n        </div>\n    </div>\n</div>\n\n<!-- Search row -->\n<div class=\"uk-section uk-section-default uk-padding-small\">\n  <div uk-grid>\n      <div class=\"uk-width-3-4@m uk-width-1-1@s\">\n        <div class=\"uk-inline\">\n          <span class=\"uk-form-icon uk-form-icon-flip\" uk-icon=\"icon: search\"></span>\n          <input class=\"uk-input\" type=\"text\">\n        </div>\n      </div>\n      <!-- <div class=\"uk-width-expand@m uk-width-1-1@s uk-text-right\">\n        <button mat-raised-button color=\"primary\" (click)=\"openAddCompetition(false)\">Add New</button>\n      </div> -->\n  </div>\n</div>\n\n<hr class=\"uk-margin-remove\">\n\n<mat-table #table [dataSource]=\"dataSource\" class=\"grid-listing-table\" matSort [hidden]=\"loading\" style=\"margin-bottom: 100px;\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"shortName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Short name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <mat-list>\n            <mat-list-item>\n              <i matPrefix mat-list-icon class=\"fas fa-trophy\"></i>\n              <h5 mat-line>{{ element.shortName }} </h5>\n              <span [hidden]=\"!mobileQuery.matches\" class=\"uk-text-break uk-text-muted\" mat-line>{{ element.description }}</span>\n            </mat-list-item>\n          </mat-list>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"description\">\n      <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n      <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\"> {{ element.description }} </mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\n      <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\"> {{ getCompetitionTypeName(element.type) }} </mat-cell>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"numberOfClubs\">\n      <mat-header-cell [hidden]=\"mobileQuery.matches\" *matHeaderCellDef mat-sort-header> Number of Clubs </mat-header-cell>\n      <mat-cell [hidden]=\"mobileQuery.matches\" *matCellDef=\"let element\"> {{ element.numberOfClubs }} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell style=\"max-width: 50px\" *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"max-width: 50px\" class=\"uk-text-right\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"editCompetition(element, true)\">\n            <mat-icon>mode_edit</mat-icon>\n            <span>Edit</span>\n          </button>\n          <button mat-menu-item (click)=\"deleteCompetition(element)\">\n            <mat-icon>delete</mat-icon>\n            <span>Delete</span>\n          </button>\n        </mat-menu>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<button class=\"floating-add-button\" (click)=\"openAddCompetition(false)\" mat-fab color=\"primary\"  matTooltip=\"Add new fixture\"[matTooltipPosition]=\"'left'\">\n    <mat-icon aria-label=\"Add new fixture\">add</mat-icon>\n</button>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n\n"

/***/ }),

/***/ "./src/app/pages/competitions/competition-listings/competition-listings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/competitions/competition-listings/competition-listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_competition_add_competitions_component__ = __webpack_require__("./src/app/pages/competitions/add-competition/add-competitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompetitionListingsComponent = /** @class */ (function () {
    function CompetitionListingsComponent(dialog, afs, af, competitionServices, changeDetectorRef, media) {
        var _this = this;
        this.dialog = dialog;
        this.afs = afs;
        this.af = af;
        this.competitionServices = competitionServices;
        this.loading = false;
        this.displayedColumns = ['shortName', 'description', 'type', 'numberOfClubs', 'actions'];
        this.type = 'competition';
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatTableDataSource */](this.competitionData);
        this.mobileQuery = media.matchMedia('(max-width: 767px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.loading = true;
        this.competitionsRef = afs.collection('competitions');
        competitionServices.getCompetitions().valueChanges().subscribe(function (data) {
            _this.competitionData = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatTableDataSource */](_this.competitionData);
            _this.loading = false;
        });
    }
    CompetitionListingsComponent.prototype.ngOnInit = function () {
        this.getCompetitionsTypes();
    };
    CompetitionListingsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    CompetitionListingsComponent.prototype.getCompetitionsTypes = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitionTypes().valueChanges().subscribe(function (data) {
            _this.competitionsTypesData = data;
            _this.loading = false;
        });
    };
    CompetitionListingsComponent.prototype.getCompetitionTypeName = function (id) {
        if (id && this.competitionsTypesData) {
            var compType = this.competitionsTypesData.find(function (competitionType) { return competitionType.id === id; });
            return compType.name;
        }
    };
    CompetitionListingsComponent.prototype.openAddCompetition = function (mode) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_competition_add_competitions_component__["a" /* AddCompetitionsComponent */], {
            width: '500px',
            data: { id: '', shortName: '', description: '', type: '', numberOfClubs: 0 }
        });
    };
    CompetitionListingsComponent.prototype.editCompetition = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_competition_add_competitions_component__["a" /* AddCompetitionsComponent */], {
            width: '500px',
            data: item
        });
    };
    CompetitionListingsComponent.prototype.deleteCompetition = function (item) {
        this.competitionServices.deleteCompetition(this.type, item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSort */])
    ], CompetitionListingsComponent.prototype, "sort", void 0);
    CompetitionListingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-competition-listings',
            template: __webpack_require__("./src/app/pages/competitions/competition-listings/competition-listings.component.html"),
            styles: [__webpack_require__("./src/app/pages/competitions/competition-listings/competition-listings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], CompetitionListingsComponent);
    return CompetitionListingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__ = __webpack_require__("./src/app/providers/auth-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authData, router) {
        var _this = this;
        this.authData = authData;
        this.router = router;
        authData.currentUser().subscribe(function (data) {
            _this.currentUser = data;
            if (!_this.currentUser) {
                _this.router.navigate(['/login']);
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_providers_service__["a" /* AuthProvidersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ data?.id ? 'Edit Fixture' : 'Add Fixture' }}</h1>\n<form [formGroup]=\"form\" class=\"add-competition-form\">\n  <div mat-dialog-content>\n    \n      <div uk-grid>\n        <div class=\"uk-width-3-5@m\">\n            <mat-form-field style=\"width: 100%\">\n                <mat-select placeholder=\"Competition\" (change)=\"onCompetitionChange($event.value)\" formControlName=\"competition\" required>\n                  <mat-option *ngFor=\"let item of competitionsData\" [value]=\"item.id\">\n                    {{ item.description }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n          </div>\n          \n          <div class=\"uk-width-expand@m\">\n              <mat-form-field style=\"width: 100%\">\n                  <mat-select placeholder=\"Select campaign\"\n                      formControlName=\"campaign\" required>\n                      <mat-option *ngFor=\"let item of campaignsData\" [value]=\"item.id\">\n                          {{ item.campaign }}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n        </div>\n\n\n    <mat-form-field style=\"width: 45%\">\n        <mat-select placeholder=\"Home club\" #homeClub formControlName=\"homeClub\" (change)=\"onHomeClubChange($event.value)\" required>\n          <mat-option *ngFor=\"let item of clubsData\" [value]=\"(awayClub.value == item.id) ? null : item.id\" [disabled]=\"item.id === homeClub.value\">\n            {{ loading ? 'Loading...' : item.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <span class=\"uk-h5\" style=\"padding: 0;margin-left: 7px;\">V</span>\n\n      <mat-form-field style=\"width: 45%; float: right\">\n        <mat-select placeholder=\"Away club\" #awayClub formControlName=\"awayClub\" required>\n          <mat-option *ngFor=\"let item of clubsData\" [value]=\"(homeClub.value == item.id) ? null : item.id\" [disabled]=\"item.id === awayClub.value\">\n            {{ loading ? 'Loading...' : item.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div uk-grid>\n          <div class=\"uk-width-expand@m\">\n              <div>\n                  <mat-form-field style=\"width: 100%\">\n                      <input matInput formControlName=\"vanue\" placeholder=\"Venue\">\n                  </mat-form-field>\n              </div>\n          </div>\n          <div class=\"uk-width-1-3@m\">\n              <div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"date\" [matDatepicker]=\"picker\" placeholder=\"When\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n              </div>\n          </div>\n          <div class=\"uk-width-auto@m\">\n              <div>\n                  <mat-form-field style=\"width: 100%\">\n                      <input type=\"time\" matInput formControlName=\"kickOffTime\" placeholder=\"KickOff time\">\n                  </mat-form-field>\n              </div>\n          </div>\n      </div>\n      <div uk-grid>\n        <div>\n            <mat-checkbox formControlName=\"hasTwoLegs\">Has two legs?</mat-checkbox>\n        </div>\n      </div>\n  </div>\n\n  <div mat-dialog-actions class=\"uk-align-right\">\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\n    <button mat-button (click)=\"addFixture()\" [disabled]=\"!form.valid\" mat-raised-button color=\"primary\" cdkFocusInitial>Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFixtureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fixtures_fixtures_providers_service__ = __webpack_require__("./src/app/providers/fixtures/fixtures-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AddFixtureComponent = /** @class */ (function () {
    function AddFixtureComponent(dialogRef, data, competitionServices, clubsService, campaignsService, formBuilder, fixturesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.competitionServices = competitionServices;
        this.clubsService = clubsService;
        this.campaignsService = campaignsService;
        this.formBuilder = formBuilder;
        this.fixturesService = fixturesService;
        this.form = this.formBuilder.group({
            competition: [this.data ? this.data.competition : null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required],
            campaign: [this.data ? this.data.campaign : this.campaignsData[0].id, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required],
            homeClub: [this.data ? this.data.homeClub : null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required],
            awayClub: [this.data ? this.data.awayClub : null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* Validators */].required],
            date: [this.data ? this.data.date : null],
            vanue: [this.data ? this.data.vanue : null],
            kickOffTime: [this.data ? this.data.kickOffTime : null],
            hasTwoLegs: [this.data ? this.data.hasTwoLegs : null],
        });
    }
    AddFixtureComponent.prototype.ngOnInit = function () {
        this.getClubs();
        this.getCompetitions();
        this.getCampaigns();
    };
    AddFixtureComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddFixtureComponent.prototype.onCompetitionChange = function (event) {
        if (event && this.clubsData) {
            this.clubsData = this.allClubsData.filter(function (item) { return item.competitions.indexOf(event) > -1; });
        }
    };
    AddFixtureComponent.prototype.onHomeClubChange = function (event) {
        this.clubDetails = this.allClubsData.find(function (item) { return item.id === event; });
        this.form.patchValue({
            vanue: this.clubDetails.homeGround ? this.clubDetails.homeGround : '',
        });
    };
    AddFixtureComponent.prototype.getClubs = function () {
        var _this = this;
        this.loading = true;
        this.clubsService.getClubs().valueChanges().subscribe(function (data) {
            _this.allClubsData = data;
            _this.clubsData = _this.allClubsData;
            _this.onCompetitionChange(_this.data.competition);
            _this.loading = false;
        });
    };
    AddFixtureComponent.prototype.getCampaigns = function () {
        var _this = this;
        this.loading = true;
        this.campaignsService.getCampaigns().valueChanges().subscribe(function (data) {
            _this.campaignsData = data;
            _this.form.patchValue({ campaign: _this.campaignsData[0].id });
            _this.loading = false;
        });
    };
    AddFixtureComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitions().valueChanges().subscribe(function (res) {
            _this.loading = false;
            _this.competitionsData = res;
        });
    };
    AddFixtureComponent.prototype.addFixture = function () {
        this.fixtureData = this.form.value;
        this.fixtureData.id = this.data.id ? this.data.id : null;
        this.fixtureData.status = this.data.status ? this.data.status : 'UPCOMING';
        if (this.fixtureData.id) {
            this.fixturesService.updateFixture(this.fixtureData);
        }
        else {
            this.fixturesService.addFixture(this.fixtureData);
        }
        this.dialogRef.close();
    };
    AddFixtureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-fixture',
            template: __webpack_require__("./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.html"),
            styles: [__webpack_require__("./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__["a" /* CampaignsService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fixtures_fixtures_providers_service__["a" /* FixturesProvidersService */]])
    ], AddFixtureComponent);
    return AddFixtureComponent;
}());



/***/ }),

/***/ "./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section uk-section-muted uk-padding\">\n    <div uk-grid class=\"uk-flex-middle\">\n        <div class=\"uk-width-expand@m uk-width-1-1@s\">\n            <h1 class=\"uk-margin-remove\">Fixtures</h1>\n            <p class=\"uk-margin-remove\">Manage your fixtures</p>\n        </div>\n    </div>\n</div>\n\n      \n<mat-card *ngIf=\"!loading\" class=\"listing-container\">\n  <mat-card-content>\n    <div class=\"uk-section uk-section-default uk-padding-small\">\n        <form [formGroup]=\"fixturesFilters\">\n            <div class=\"uk-grid-small\" uk-grid>\n                <div class=\"uk-width-1-4@m uk-width-1-1@s\">\n                    <div class=\"uk-inline uk-width-1-1\">\n                        <mat-form-field class=\"uk-width-1-1\">\n                            <mat-select\n                                placeholder=\"Filter by Competition\"\n                                #competitionFilter\n                                formControlName=\"competitionFilterInput\"\n                                (change)=\"onCompetitionChange($event.value);seasonFilter.value = null;clubFilter.value = null\"\n                                >\n                            <mat-option value=\"\">All competition</mat-option>\n                            <mat-option *ngFor=\"let item of competitionsData\" [value]=\"item.id\">\n                                {{ item.description }}\n                            </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-4@m uk-width-1-1@s\" [hidden]=\"fixturesFilters.value.competitionFilterInput == ''\">\n                    <div class=\"uk-inline uk-width-1-1\">\n                        <mat-form-field class=\"uk-width-1-1\">\n                            <mat-select placeholder=\"Filter by campaign\"\n                                #seasonFilter\n                                formControlName=\"seasonFilterInput\"\n                                (change)=\"onSeasonChange($event.value)\">\n                                <!-- <mat-option value=\"\">All</mat-option> -->\n                                <mat-option *ngFor=\"let item of campaignsData\" [value]=\"item.id\">\n                                    {{ item.campaign }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-4@m uk-width-1-1@s\">\n                    <div class=\"uk-inline uk-width-1-1\">\n                        <mat-form-field class=\"uk-width-1-1\">\n                            <mat-select placeholder=\"Filter by Club\" #clubFilter formControlName=\"clubFilterInput\" (change)=\"onClubChange($event.value)\">\n                                <mat-option value=\"\">All</mat-option>\n                                <mat-option *ngFor=\"let item of filteredClubsData\" [value]=\"item.id\">\n                                    {{ item.name }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-4@m uk-width-1-1@s\">\n                    <button mat-button (click)=\"clearFilters();clubFilter.value='';seasonFilter.value=''\" color=\"warn\">Clear filters</button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"fixtures-tab-content uk-padding-remove-top\">\n        <mat-card *ngIf=\"fixturesData?.length == 0 && !loading\">\n            <p class=\"uk-text-center\">No fixtures found :(</p>\n        </mat-card>\n        <div *ngIf=\"fixturesData?.length > 0 && !loading\">\n            <mat-card class=\"fixture-card\" *ngFor=\"let item of fixturesData\">\n                <table class=\"uk-table uk-table-divider\">\n                    <tbody>\n                        <button *ngIf=\"mobileQuery.matches\" class=\"uk-position-top-right\"  mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\n                        <tr style=\"border: none\" *ngIf=\"mobileQuery.matches\">\n                            <td style=\"padding: 10px 0;\" colspan=\"3\">{{ item.date | date: 'mediumDate' }}, {{ item.kickOffTime ? item.kickOffTime : 'TBA' }}</td>\n                        <tr style=\"border: none\">\n                            <td class=\"uk-padding-remove\" width=\"230\" class=\"uk-text-right@m\">\n                                <i matPrefix mat-list-icon class=\"club-logo-placeholder fas fa-shield-alt\"></i>\n                                <p>{{ getClubDetails(item.homeClub) }}</p>\n                            </td>\n                            <td class=\"fixture-vs\" width=\"80\">\n                                <span class=\"uk-label fixture-vs-score\" *ngIf=\"item.status == 'PLAYED'\">\n                                    <span>FT</span> <br><span>{{ item.homeScore }} - {{ item.awayScore }}</span> <br>\n                                    <span *ngIf=\"item.isDecidedOnPenalties\">Pen {{ item.homePenaltyScore }} - {{ item.awayPenaltyScore }}</span>\n                                </span>\n                                <span class=\"uk-label fixture-vs-score\" *ngIf=\"item.status == 'UPCOMING'\">vs</span>\n                            </td>\n                            <td class=\"uk-padding-remove fixture-away-club\" width=\"230\">\n                                <i matPrefix mat-list-icon class=\"club-logo-placeholder fas fa-shield-alt\"></i>\n                                <p>{{ getClubDetails(item.awayClub) }}</p>\n                            </td>\n                            <td class=\"uk-padding-remove\" [hidden]=\"mobileQuery.matches\" width=\"200\" [ngClass]=\"{'uk-text-muted': !item.vanue}\">{{ item.vanue ? item.vanue : 'TBA' }}</td>\n                            <td class=\"uk-padding-remove\" [hidden]=\"true\" width=\"70\">SS4</td>\n                            <td class=\"uk-padding-remove uk-text-center\" [hidden]=\"mobileQuery.matches\" [ngClass]=\"{'uk-text-muted': !item.kickOffTime}\" width=\"120\">{{ item.kickOffTime ? item.kickOffTime : 'TBA' }}</td>\n                            <td [hidden]=\"mobileQuery.matches\" width=\"80\" class=\"uk-text-right uk-padding-remove\">\n                                <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\n                                <mat-menu #menu=\"matMenu\">\n                                    <button mat-menu-item (click)=\"editFixture(item)\">\n                                        <mat-icon>mode_edit</mat-icon>\n                                        <span>Edit</span>\n                                    </button>\n                                    <button mat-menu-item (click)=\"updateResults(item)\">\n                                        <mat-icon>code</mat-icon>\n                                        <span>Update results</span>\n                                    </button>\n                                    <button mat-menu-item (click)=\"deleteFixture(item)\">\n                                        <mat-icon>delete</mat-icon>\n                                        <span>Delete</span>\n                                    </button>\n                                </mat-menu>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </mat-card>\n        </div>\n    </div>\n    <button *ngIf=\"floatBtnShown\" class=\"floating-add-button\" (click)=\"openAddFixture($event, competitionFilter.value)\" mat-fab color=\"primary\"  matTooltip=\"Add new fixture\"[matTooltipPosition]=\"'left'\">\n        <mat-icon aria-label=\"Add new fixture\">add</mat-icon>\n    </button>\n    </mat-card-content>\n</mat-card>\n\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>"

/***/ }),

/***/ "./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.scss":
/***/ (function(module, exports) {

module.exports = ".fixture-card {\n  margin: 10px 1px; }\n  @media (min-width: 769px) {\n    .fixture-card {\n      padding: 15px 0; } }\n  @media (max-width: 768px) {\n    .fixture-card {\n      padding: 15px 15px; } }\n  .fixture-card .uk-table td {\n    vertical-align: middle;\n    padding: 0; }\n  .fixture-card .uk-table td.fixture-vs {\n      padding: 10px;\n      text-align: center; }\n  .fixture-card .uk-table td.fixture-vs span {\n        text-align: center;\n        margin: auto; }\n  @media (min-width: 769px) {\n          .fixture-card .uk-table td.fixture-vs span {\n            width: 70%; } }\n  @media (max-width: 768px) {\n          .fixture-card .uk-table td.fixture-vs span {\n            width: auto; } }\n  .fixture-card .club-logo-placeholder {\n    font-size: 2rem; }\n  @media (max-width: 768px) {\n    .fixture-card .fixture-away-club {\n      text-align: right; } }\n  .fixtures-tab-content {\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_fixture_add_fixture_component__ = __webpack_require__("./src/app/pages/matches/fixtures/add-fixture/add-fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fixtures_fixtures_providers_service__ = __webpack_require__("./src/app/providers/fixtures/fixtures-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__update_fixture_update_fixture_component__ = __webpack_require__("./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var FixturesComponent = /** @class */ (function () {
    function FixturesComponent(dialog, afs, af, competitionServices, clubsService, formBuilder, fixturesService, campaignsService, changeDetectorRef, media) {
        var _this = this;
        this.dialog = dialog;
        this.afs = afs;
        this.af = af;
        this.competitionServices = competitionServices;
        this.clubsService = clubsService;
        this.formBuilder = formBuilder;
        this.fixturesService = fixturesService;
        this.campaignsService = campaignsService;
        this.floatBtnShown = true;
        this.type = 'fixture';
        this.fixturesFilters = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormGroup */]({
            competitionFilterInput: new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */](),
            seasonFilter: new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */](),
            clubFilter: new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */]()
        });
        this.mobileQuery = media.matchMedia('(max-width: 767px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.loading = true;
        clubsService.getClubs().valueChanges().subscribe(function (data) {
            _this.clubsData = data;
            _this.fixturesFilters = _this.formBuilder.group({
                competitionFilterInput: data[4].id,
                seasonFilterInput: null,
                clubFilterInput: null
            });
            _this.loading = false;
        });
    }
    FixturesComponent.prototype.ngOnInit = function () {
        this.getCompetitions();
        this.getAllFixtures();
        this.getCampaigns();
    };
    FixturesComponent.prototype.getAllFixtures = function () {
        var _this = this;
        this.loading = true;
        this.fixturesService.getAllFixtures().valueChanges().subscribe(function (data) {
            _this.allFixtures = data;
            _this.fixturesData = data;
            _this.loading = false;
        });
    };
    FixturesComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitions().valueChanges().subscribe(function (data) {
            _this.competitionsData = data;
            _this.resetFilterForm();
            _this.onCompetitionChange(_this.fixturesFilters.value.competitionFilterInput);
            _this.filteredClubsData = _this.clubsData.filter(function (item) { return item.competitions.indexOf(_this.fixturesFilters.value.competitionFilterInput) > -1; });
            _this.loading = false;
        });
    };
    FixturesComponent.prototype.getCampaigns = function () {
        var _this = this;
        this.loading = true;
        this.campaignsService.getCampaigns().valueChanges().subscribe(function (data) {
            _this.campaignsData = data;
            _this.loading = false;
        });
    };
    FixturesComponent.prototype.onCompetitionChange = function (id) {
        var _this = this;
        if (id) {
            this.fixturesService.getFixturesByCompetitionID(id).subscribe(function (data) {
                _this.filteredFixturesData = data;
                _this.fixturesData = _this.filteredFixturesData;
                _this.filteredClubsData = _this.clubsData.filter(function (item) { return item.competitions.indexOf(id) > -1; });
            });
        }
        else {
            this.fixturesService.getAllFixtures().valueChanges().subscribe(function (data) {
                _this.fixturesData = data;
                _this.filteredClubsData = _this.clubsData;
            });
        }
    };
    FixturesComponent.prototype.onClubChange = function (id) {
        if (id) {
            this.fixturesData = this.filteredFixturesData.filter(function (item) { return item.homeClub === id || item.awayClub === id; });
        }
        else {
            this.fixturesData = this.filteredFixturesData;
        }
    };
    FixturesComponent.prototype.onSeasonChange = function (id) {
        console.log(id);
    };
    FixturesComponent.prototype.onSelect = function (e) {
        var _this = this;
        this.floatBtnShown = false;
        setTimeout(function () {
            _this.floatBtnShown = true;
        }, 600);
    };
    FixturesComponent.prototype.getClubDetails = function (id) {
        if (this.clubsData) {
            var club = this.clubsData.find(function (item) { return item.id === id; });
            return club.name;
        }
    };
    // ACTIONS
    FixturesComponent.prototype.openAddFixture = function (event, id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__add_fixture_add_fixture_component__["a" /* AddFixtureComponent */], {
            width: '700px',
            data: { competition: id }
        });
    };
    FixturesComponent.prototype.editFixture = function (item) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__add_fixture_add_fixture_component__["a" /* AddFixtureComponent */], {
            width: '700px',
            data: item
        });
    };
    FixturesComponent.prototype.updateResults = function (item) {
        // add results
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__update_fixture_update_fixture_component__["a" /* UpdateFixtureComponent */], {
            width: '700px',
            data: item
        });
    };
    FixturesComponent.prototype.deleteFixture = function (item) {
        this.fixturesService.deleteFixture(this.type, item);
    };
    FixturesComponent.prototype.resetFilterForm = function () {
        this.fixturesFilters = this.formBuilder.group({
            competitionFilterInput: this.competitionsData[4].id,
            seasonFilterInput: null,
            clubFilterInput: null
        });
    };
    FixturesComponent.prototype.clearFilters = function () {
        this.fixturesFilters = this.formBuilder.group({
            competitionFilterInput: this.competitionsData[4].id,
            seasonFilterInput: null,
            clubFilterInput: null
        });
        this.onCompetitionChange(this.fixturesFilters.value.competitionFilterInput);
    };
    FixturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-fixtures',
            template: __webpack_require__("./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.html"),
            styles: [__webpack_require__("./src/app/pages/matches/fixtures/fixtures-listing/fixtures.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fixtures_fixtures_providers_service__["a" /* FixturesProvidersService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_campains_campaigns_service__["a" /* CampaignsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], FixturesComponent);
    return FixturesComponent;
}());



/***/ }),

/***/ "./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Results</h1>\n<form [formGroup]=\"form\" class=\"add-competition-form\">\n  <div mat-dialog-content>\n    \n  <div uk-grid>\n    <div class=\"uk-width-3-5@m\">\n      <mat-form-field style=\"width: 100%\">\n          <mat-select placeholder=\"Competition\" formControlName=\"competition\" required>\n            <mat-option *ngFor=\"let item of competitionsData\" [value]=\"item.id\">\n              {{ item.description }}\n            </mat-option>\n          </mat-select>\n      </mat-form-field>\n    </div>\n\n      <div class=\"uk-width-expand@m\">\n        <mat-form-field style=\"width: 100%\">\n            <mat-select placeholder=\"Select campaign\"\n                formControlName=\"campaign\" required>\n                <mat-option value=\"\">All</mat-option>\n                <mat-option *ngFor=\"let item of campaignsData\" [value]=\"item.id\">\n                    {{ item.campaign }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n\n    <mat-form-field style=\"width: 45%\">\n        <mat-select placeholder=\"Home club\" #homeClub formControlName=\"homeClub\" required>\n          <mat-option *ngFor=\"let item of clubsData\" [value]=\"(awayClub.value == item.id) ? null : item.id\">\n            {{ item.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <span class=\"uk-h6\" style=\"padding: 0 15px;\">VS</span>\n\n      <mat-form-field style=\"width: 45%; float: right\">\n        <mat-select placeholder=\"Away club\" #awayClub formControlName=\"awayClub\" required>\n          <mat-option *ngFor=\"let item of clubsData\" [value]=\"(homeClub.value == item.id) ? null : item.id\">\n            {{ item.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div class=\"uk-text-center\">\n        <span class=\"uk-text-success\">Score</span>\n      </div>\n\n      <span *ngIf=\"data?.hasTwoLegs\">1st leg</span>\n      <div uk-grid>\n          <div class=\"uk-width-1-2@m\">\n              <div>\n                  <mat-form-field style=\"width: 100%\">\n                      <input type=\"number\" matInput formControlName=\"homeScore\" placeholder=\"Home score\" required>\n                  </mat-form-field>\n              </div>\n          </div>\n          \n          <div class=\"uk-width-1-2@m\">\n              <div>\n                  <mat-form-field style=\"width: 100%\">\n                      <input type=\"number\" matInput formControlName=\"awayScore\" placeholder=\"Away score\" required>\n                  </mat-form-field>\n              </div>\n          </div>\n      </div>\n\n      <p *ngIf=\"data?.hasTwoLegs\">2nd leg</p>\n      <div uk-grid *ngIf=\"data?.hasTwoLegs\">\n          <div class=\"uk-width-1-2@m\">\n            <div>\n              <mat-form-field style=\"width: 100%\">\n                <input type=\"number\" matInput formControlName=\"homeScore\" placeholder=\"Home score\" required>\n              </mat-form-field>\n            </div>\n          </div>\n          \n          <div class=\"uk-width-1-2@m\">\n            <div>\n              <mat-form-field style=\"width: 100%\">\n                  <input type=\"number\" matInput formControlName=\"awayScore\" placeholder=\"Away score\" required>\n              </mat-form-field>\n            </div>\n          </div>\n      </div>\n\n      \n      <div uk-grid class=\"uk-margin-remove\">\n        <div class=\"uk-padding-remove\">\n            <mat-checkbox formControlName=\"isDecidedOnPenalties\">Decided on penalties?</mat-checkbox>\n        </div>\n      </div>\n\n      <p class=\"uk-h6 uk-margin-top\" *ngIf=\"form.value.isDecidedOnPenalties\">Penalty Scores</p>\n      \n      <div uk-grid *ngIf=\"form.value.isDecidedOnPenalties\" class=\"uk-child-width-1-2@m\">\n          <div>\n            <div>\n              <mat-form-field style=\"width: 100%\">\n                <input type=\"number\" matInput formControlName=\"homePenaltyScore\" placeholder=\"Home penalty score\">\n              </mat-form-field>\n            </div>\n          </div>\n          \n          <div>\n            <div>\n              <mat-form-field style=\"width: 100%\">\n                  <input type=\"number\" matInput formControlName=\"awayPenaltyScore\" placeholder=\"Away penalty score\">\n              </mat-form-field>\n            </div>\n          </div>\n      </div>\n\n  </div>\n\n  <div mat-dialog-actions class=\"uk-align-right\">\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\n    <button mat-button (click)=\"addFixture()\" [disabled]=\"!form.valid\" mat-raised-button color=\"primary\" cdkFocusInitial>Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFixtureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_competitions_competition_providers_service__ = __webpack_require__("./src/app/providers/competitions/competition-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clubs_clubs_providers_service__ = __webpack_require__("./src/app/providers/clubs/clubs-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fixtures_fixtures_providers_service__ = __webpack_require__("./src/app/providers/fixtures/fixtures-providers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_campains_campaigns_service__ = __webpack_require__("./src/app/providers/campains/campaigns.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UpdateFixtureComponent = /** @class */ (function () {
    function UpdateFixtureComponent(dialogRef, data, competitionServices, clubsService, formBuilder, fixturesService, campaignsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.competitionServices = competitionServices;
        this.clubsService = clubsService;
        this.formBuilder = formBuilder;
        this.fixturesService = fixturesService;
        this.campaignsService = campaignsService;
        this.form = this.formBuilder.group({
            competition: [this.data ? this.data.competition : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            homeClub: [this.data ? this.data.homeClub : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            campaign: [this.data ? this.data.campaign : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            awayClub: [this.data ? this.data.awayClub : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            homeScore: [this.data ? this.data.homeScore : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            awayScore: [this.data ? this.data.awayScore : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required],
            isDecidedOnPenalties: [this.data ? this.data.isDecidedOnPenalties : false],
            homePenaltyScore: [this.data ? this.data.homePenaltyScore : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].nullValidator],
            awayPenaltyScore: [this.data ? this.data.awayPenaltyScore : null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].nullValidator]
        });
        this.form.controls.competition.disable();
        this.form.controls.homeClub.disable();
        this.form.controls.awayClub.disable();
        this.form.controls.campaign.disable();
    }
    UpdateFixtureComponent.prototype.ngOnInit = function () {
        this.getClubs();
        this.getCompetitions();
        this.getCampaigns();
    };
    UpdateFixtureComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    UpdateFixtureComponent.prototype.getClubs = function () {
        var _this = this;
        this.loading = true;
        this.clubsService.getClubs().valueChanges().subscribe(function (data) {
            _this.clubsData = data;
            _this.loading = false;
        });
    };
    UpdateFixtureComponent.prototype.getCampaigns = function () {
        var _this = this;
        this.loading = true;
        this.campaignsService.getCampaigns().valueChanges().subscribe(function (data) {
            _this.campaignsData = data;
            _this.loading = false;
        });
    };
    UpdateFixtureComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.loading = true;
        this.competitionServices.getCompetitions().valueChanges().subscribe(function (res) {
            _this.loading = false;
            _this.competitionsData = res;
        });
    };
    UpdateFixtureComponent.prototype.addFixture = function () {
        this.fixtureData = this.form.value;
        this.fixtureData.id = this.data.id ? this.data.id : null;
        this.fixtureData.status = 'PLAYED';
        if (this.fixtureData.id) {
            this.fixturesService.updateFixture(this.fixtureData);
            this.dialogRef.close();
        }
    };
    UpdateFixtureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-fixture',
            template: __webpack_require__("./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.html"),
            styles: [__webpack_require__("./src/app/pages/matches/fixtures/update-fixture/update-fixture.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__providers_competitions_competition_providers_service__["a" /* CompetitionProvidersService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clubs_clubs_providers_service__["a" /* ClubsProvidersService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fixtures_fixtures_providers_service__["a" /* FixturesProvidersService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_campains_campaigns_service__["a" /* CampaignsService */]])
    ], UpdateFixtureComponent);
    return UpdateFixtureComponent;
}());



/***/ }),

/***/ "./src/app/pages/matches/standings/standings.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n    <p>\n        standings works!\n    </p>\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/matches/standings/standings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/matches/standings/standings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StandingsComponent = /** @class */ (function () {
    function StandingsComponent() {
    }
    StandingsComponent.prototype.ngOnInit = function () {
    };
    StandingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-standings',
            template: __webpack_require__("./src/app/pages/matches/standings/standings.component.html"),
            styles: [__webpack_require__("./src/app/pages/matches/standings/standings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news-listing/news-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  news-listing works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/news/news-listing/news-listing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/news/news-listing/news-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsListingComponent = /** @class */ (function () {
    function NewsListingComponent() {
    }
    NewsListingComponent.prototype.ngOnInit = function () {
    };
    NewsListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-listing',
            template: __webpack_require__("./src/app/pages/news/news-listing/news-listing.component.html"),
            styles: [__webpack_require__("./src/app/pages/news/news-listing/news-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsListingComponent);
    return NewsListingComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/providers/auth-providers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvidersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvidersService = /** @class */ (function () {
    function AuthProvidersService(afAuth, afd, afs) {
        this.afAuth = afAuth;
        this.afd = afd;
        this.afs = afs;
    }
    AuthProvidersService.prototype.loginUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvidersService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvidersService.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvidersService.prototype.signupUser = function (newEmail, newPassword, name) {
        var _this = this;
        return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(newEmail, newPassword).then(function () {
            return _this.afAuth.auth.currentUser.updateProfile({
                displayName: name,
                photoURL: "null"
            });
        });
    };
    AuthProvidersService.prototype.currentUser = function () {
        return this.afAuth.authState;
    };
    AuthProvidersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthProvidersService);
    return AuthProvidersService;
}());



/***/ }),

/***/ "./src/app/providers/campains/campaigns.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__ = __webpack_require__("./src/app/providers/dialogs/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CampaignsService = /** @class */ (function () {
    function CampaignsService(afs, confirmDialog, snackBar) {
        this.afs = afs;
        this.confirmDialog = confirmDialog;
        this.snackBar = snackBar;
        this.campaigndDB = this.afs.collection('campaigns');
    }
    CampaignsService.prototype.getCampaigns = function () {
        return this.campaigndDB;
    };
    CampaignsService.prototype.addCampaign = function (data) {
        var _this = this;
        return this.campaigndDB.add(data).then(function (res) {
            res.update({ id: res.id }).then(function (response) {
                _this.snackBar.open('Campaign added', 'CLOSE', {
                    duration: 2000,
                });
            });
        });
    };
    CampaignsService.prototype.getCampaignByID = function (id) {
        return this.campaigndDB.doc(id).ref.get().then(function (doc) {
            return doc.data();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    CampaignsService.prototype.updateCampaign = function (data) {
        var _this = this;
        return this.campaigndDB.doc(data.id).update(data).then(function (response) {
            _this.snackBar.open('Campaigns updated', 'CLOSE', {
                duration: 2000,
            });
        });
    };
    CampaignsService.prototype.deleteCampaign = function (type, data) {
        var _this = this;
        this.confirmDialog.openConfirmDialog(type, data).subscribe(function (res) {
            if (res) {
                return _this.campaigndDB.doc(data.id).delete().then(function (a) {
                    _this.snackBar.open(type + ' deleted', 'CLOSE', {
                        duration: 2000,
                    });
                });
            }
        });
    };
    CampaignsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__["a" /* ConfirmDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */]])
    ], CampaignsService);
    return CampaignsService;
}());



/***/ }),

/***/ "./src/app/providers/clubs/clubs-providers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubsProvidersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__ = __webpack_require__("./src/app/providers/dialogs/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubsProvidersService = /** @class */ (function () {
    function ClubsProvidersService(afs, confirmDialog, snackBar) {
        this.afs = afs;
        this.confirmDialog = confirmDialog;
        this.snackBar = snackBar;
        this.clubsDB = this.afs.collection('clubs');
    }
    ClubsProvidersService.prototype.getClubTypes = function () {
        return this.afs.collection('compTypes');
    };
    ClubsProvidersService.prototype.getClubs = function () {
        return this.clubsDB;
    };
    ClubsProvidersService.prototype.getClubDetails = function (id) {
        var clubDetails = this.afs.collection('clubs', function (ref) { return ref.where('id', '==', id); });
        return clubDetails;
    };
    ClubsProvidersService.prototype.getClubByCompetition = function (id) {
        var itemsCollection = this.afs.collection('clubs');
        var items = itemsCollection;
        console.log(items);
    };
    ClubsProvidersService.prototype.addClub = function (data) {
        var _this = this;
        return this.clubsDB.add(data).then(function (res) {
            res.update({ id: res.id }).then(function (response) {
                _this.snackBar.open('Club added', 'CLOSE', {
                    duration: 2000,
                });
            });
        });
    };
    ClubsProvidersService.prototype.updateClub = function (data) {
        var _this = this;
        return this.clubsDB.doc(data.id).update(data).then(function (response) {
            _this.snackBar.open('Club updated', 'CLOSE', {
                duration: 2000,
            });
        });
    };
    ClubsProvidersService.prototype.deleteClub = function (type, data) {
        var _this = this;
        this.confirmDialog.openConfirmDialog(type, data).subscribe(function (res) {
            if (res) {
                return _this.clubsDB.doc(data.id).delete().then(function (a) {
                    _this.snackBar.open(type + ' deleted', 'CLOSE', {
                        duration: 2000,
                    });
                });
            }
        });
    };
    ClubsProvidersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__["a" /* ConfirmDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */]])
    ], ClubsProvidersService);
    return ClubsProvidersService;
}());



/***/ }),

/***/ "./src/app/providers/competitions/competition-providers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionProvidersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__ = __webpack_require__("./src/app/providers/dialogs/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionProvidersService = /** @class */ (function () {
    function CompetitionProvidersService(afs, confirmDialog, snackBar) {
        this.afs = afs;
        this.confirmDialog = confirmDialog;
        this.snackBar = snackBar;
        this.competitionsDB = this.afs.collection('competitions');
    }
    CompetitionProvidersService.prototype.getCompetitionTypes = function () {
        return this.afs.collection('compTypes');
    };
    CompetitionProvidersService.prototype.getCompetitions = function () {
        return this.competitionsDB;
    };
    CompetitionProvidersService.prototype.addCompetition = function (data) {
        var _this = this;
        return this.competitionsDB.add(data).then(function (res) {
            res.update({ id: res.id }).then(function (response) {
                _this.snackBar.open('Competition added', 'CLOSE', {
                    duration: 2000,
                });
            });
        });
    };
    CompetitionProvidersService.prototype.getCompetitionByID = function (id) {
        // return this.afs.collection('competitions', ref => ref.where('id', '==', id));
        return this.competitionsDB.doc(id).ref.get().then(function (doc) {
            return doc.data();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    CompetitionProvidersService.prototype.updateCompetition = function (data) {
        var _this = this;
        return this.competitionsDB.doc(data.id).update(data).then(function (response) {
            _this.snackBar.open('Competition updated', 'CLOSE', {
                duration: 2000,
            });
        });
    };
    CompetitionProvidersService.prototype.deleteCompetition = function (type, data) {
        var _this = this;
        this.confirmDialog.openConfirmDialog(type, data).subscribe(function (res) {
            if (res) {
                return _this.competitionsDB.doc(data.id).delete().then(function (a) {
                    _this.snackBar.open(type + ' deleted', 'CLOSE', {
                        duration: 2000,
                    });
                });
            }
        });
    };
    CompetitionProvidersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__["a" /* ConfirmDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */]])
    ], CompetitionProvidersService);
    return CompetitionProvidersService;
}());



/***/ }),

/***/ "./src/app/providers/dialogs/confirm-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.openDialog = function (type, data) {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: '500px',
            data: { name: data.description, type: type }
        });
    };
    ConfirmDialogService.prototype.openConfirmDialog = function (type, data) {
        this.dialogRef = this.openDialog(type, data);
        return this.dialogRef.afterClosed();
    };
    ConfirmDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());



/***/ }),

/***/ "./src/app/providers/fixtures/fixtures-providers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixturesProvidersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__ = __webpack_require__("./src/app/providers/dialogs/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FixturesProvidersService = /** @class */ (function () {
    function FixturesProvidersService(afs, confirmDialog, snackBar) {
        this.afs = afs;
        this.confirmDialog = confirmDialog;
        this.snackBar = snackBar;
        this.fixturesDB = this.afs.collection('fixtures');
    }
    FixturesProvidersService.prototype.getAllFixtures = function () {
        return this.fixturesDB;
    };
    FixturesProvidersService.prototype.getFixturesByCompetitionID = function (id) {
        var filteredByCompetition = this.afs.collection('fixtures', function (ref) { return ref.where('competition', '==', id); }).valueChanges();
        return filteredByCompetition;
    };
    FixturesProvidersService.prototype.getFixturesByClubID = function (id) {
        var homeFixtures = this.afs.collection('fixtures', function (ref) { return ref.where('homeClub', '==', id); }).valueChanges();
        var awayFixtures = this.afs.collection('fixtures', function (ref) { return ref.where('awayClub', '==', id); }).valueChanges();
        return homeFixtures;
    };
    FixturesProvidersService.prototype.addFixture = function (data) {
        var _this = this;
        return this.fixturesDB.add(data).then(function (res) {
            res.update({ id: res.id }).then(function (response) {
                _this.snackBar.open('Fixture added', 'CLOSE', {
                    duration: 2000,
                });
            });
        });
    };
    FixturesProvidersService.prototype.updateFixture = function (data) {
        var _this = this;
        return this.fixturesDB.doc(data.id).update(data).then(function (response) {
            _this.snackBar.open('Fixture updated', 'CLOSE', {
                duration: 2000,
            });
        });
    };
    FixturesProvidersService.prototype.deleteFixture = function (type, data) {
        var _this = this;
        this.confirmDialog.openConfirmDialog(type, data).subscribe(function (res) {
            if (res) {
                return _this.fixturesDB.doc(data.id).delete().then(function (a) {
                    _this.snackBar.open(type + ' deleted', 'CLOSE', {
                        duration: 2000,
                    });
                });
            }
        });
    };
    FixturesProvidersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2__dialogs_confirm_dialog_service__["a" /* ConfirmDialogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */]])
    ], FixturesProvidersService);
    return FixturesProvidersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDHjeDvC7s1x2zarMLGpRkJ602LR2JmrKY",
        authDomain: "sports-hub-ada9f.firebaseapp.com",
        databaseURL: "https://sports-hub-ada9f.firebaseio.com",
        projectId: "sports-hub-ada9f",
        storageBucket: "sports-hub-ada9f.appspot.com",
        messagingSenderId: "64741409829"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map