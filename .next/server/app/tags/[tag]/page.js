"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 86819:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context");

/***/ }),

/***/ 39569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 65670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'tags',
        {
        children: [
        '[tag]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89695)), "/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/app/tags/[tag]/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61307)), "/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96061)), "/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/app/not-found.tsx"],
        
      }
      ]
      }.children;
const pages = ["/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/app/tags/[tag]/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/tags/[tag]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/tags/[tag]/page",
        pathname: "/tags/[tag]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 85709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ genPageMetadata)
/* harmony export */ });
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95976);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__);

function genPageMetadata({ title, description, image, ...rest }) {
    return {
        title,
        openGraph: {
            title: `${title} | ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title)}`,
            description: description || (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().description),
            url: "./",
            siteName: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title),
            images: image ? [
                image
            ] : [
                (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().socialBanner)
            ],
            locale: "en_US",
            type: "website"
        },
        twitter: {
            title: `${title} | ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title)}`,
            card: "summary_large_image",
            images: image ? [
                image
            ] : [
                (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().socialBanner)
            ]
        },
        ...rest
    };
}


/***/ }),

/***/ 89695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagPage),
/* harmony export */   generateMetadata: () => (/* binding */ generateMetadata),
/* harmony export */   generateStaticParams: () => (/* binding */ generateStaticParams)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39086);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47596);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95976);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_ListLayoutWithTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82874);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33199);
/* harmony import */ var app_tag_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99752);
/* harmony import */ var app_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85709);








async function generateMetadata({ params }) {
    const tag = decodeURI(params.tag);
    return (0,app_seo__WEBPACK_IMPORTED_MODULE_7__/* .genPageMetadata */ .D)({
        title: tag,
        description: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().title)} ${tag} tagged content`,
        alternates: {
            canonical: "./",
            types: {
                "application/rss+xml": `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().siteUrl)}/tags/${tag}/feed.xml`
            }
        }
    });
}
const generateStaticParams = async ()=>{
    const tagCounts = app_tag_data_json__WEBPACK_IMPORTED_MODULE_6__;
    const tagKeys = Object.keys(tagCounts);
    const paths = tagKeys.map((tag)=>({
            tag: tag
        }));
    return paths;
};
function TagPage({ params }) {
    const tag = decodeURI(params.tag);
    // Capitalize first letter and convert space to dash
    const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
    const filteredPosts = (0,pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_2__/* .allCoreContent */ .ND)(contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__/* .allBlogs */ .R6.filter((post)=>post.draft !== true && post.tags && post.tags.map((t)=>(0,github_slugger__WEBPACK_IMPORTED_MODULE_1__.slug)(t)).includes(tag)));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ListLayoutWithTags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        posts: filteredPosts,
        title: title
    });
}


/***/ }),

/***/ 99752:
/***/ ((module) => {

module.exports = JSON.parse('{"n4":1,"japanese":2,"language":3,"n5":1,"python":2,"debug":3,"react":1,"mysql":1,"softskill":1,"redux":1,"certificate":1,"course":1,"system-design":1}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,910,309,317,194,86,327,968,199,394], () => (__webpack_exec__(65670)));
module.exports = __webpack_exports__;

})();