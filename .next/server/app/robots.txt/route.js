"use strict";
(() => {
var exports = {};
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 62489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Frobots.txt%2Froute&isDynamic=1!./app/robots.ts?__next_metadata_route__
var robots_next_metadata_route_namespaceObject = {};
__webpack_require__.r(robots_next_metadata_route_namespaceObject);
__webpack_require__.d(robots_next_metadata_route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(7428);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./app/robots.ts

function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${(siteMetadata_default()).siteUrl}/sitemap.xml`,
        host: (siteMetadata_default()).siteUrl
    };
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(54031);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Frobots.txt%2Froute&isDynamic=1!./app/robots.ts?__next_metadata_route__




const contentType = "text/plain"
const fileType = "robots"

async function GET() {
  const data = await robots()
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Frobots.txt%2Froute&name=app%2Frobots.txt%2Froute&pagePath=private-next-app-dir%2Frobots.ts&appDir=%2Fhome%2Fhongloc%2FDesktop%2Fjobs%2Fportfolio%2Fportfolio-blog%2Fapp&appPaths=%2Frobots&pageExtensions=ts&pageExtensions=tsx&pageExtensions=js&pageExtensions=jsx&pageExtensions=md&pageExtensions=mdx&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/robots.txt/route",
        pathname: "/robots.txt",
        filename: "robots",
        bundlePath: "app/robots.txt/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Frobots.txt%2Froute&isDynamic=1!/home/hongloc/Desktop/jobs/portfolio/portfolio-blog/app/robots.ts?__next_metadata_route__",
    nextConfigOutput,
    userland: robots_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/robots.txt/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,501,976,428], () => (__webpack_exec__(62489)));
module.exports = __webpack_exports__;

})();