module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/components/Home.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Navbar from "./Navbar";
// import {useEffect, useState} from "react";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import {useTheme} from "../hooks/useTheme";
// import Footer from "./Footer";
// import CoordinatorCard from "@/components/CoordinatorCard";
// import {Coordinator, getCoordinators} from "@/services/coordinatorService";
// export default function ClientHome() {
//   const {theme, toggleTheme} = useTheme();
//   const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//     // Fetch coordinators on component mount
//     useEffect(() => {
//       const fetchCoordinators = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//           // const data = await getCoordinators();
//           // setCoordinators(data);
//           const res = await fetch(
//             `https://40c1cae648b8.ngrok-free.app/api/coordinators`
//           );
//           if (!res.ok) throw new Error("Failed to fetch coordinators");
//           console.log(res, "res");
//         } catch (err) {
//           console.error("Error fetching coordinators:", err);
//           setError("Failed to load coordinators.");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchCoordinators();
//     }, []);
//   return (
//     <div className='min-h-screen antialiased transition-colors duration-300'>
//       <Navbar theme={theme} toggleTheme={toggleTheme} />
//       {/* Coordinators Section */}
//       <section className='py-12 px-6 max-w-7xl mx-auto'>
//         <h2 className='text-3xl font-bold mb-6 text-center'>
//           Wedding Coordinators
//         </h2>
//         {loading && (
//           <p className='text-center text-gray-600'>Loading coordinators...</p>
//         )}
//         {error && <p className='text-center text-red-500'>{error}</p>}
//         {!loading && !error && (
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//             {coordinators.map((coordinator) => (
//               <CoordinatorCard
//                 key={coordinator._id}
//                 coordinator={coordinator}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//       <Skills />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }
// "use client";
// import Navbar from "./Navbar";
// import {useEffect, useState} from "react";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import {useTheme} from "../hooks/useTheme";
// import Footer from "./Footer";
// import CoordinatorCard from "@/components/CoordinatorCard";
// import {Coordinator} from "@/services/coordinatorService";
// export default function ClientHome() {
//   const {theme, toggleTheme} = useTheme();
//   const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     const fetchCoordinators = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         console.log("sent1")
//         const res = await fetch(`https://40c1cae648b8.ngrok-free.app/`);
//         console.log("sent2");
//         if (!res.ok) throw new Error("Failed to fetch coordinators");
//         const data = await res.json();
//         console.log(data, "✅ Coordinators fetched");
//         setCoordinators(data);
//       } catch (err: any) {
//         console.error("❌ Error fetching coordinators:", err.message);
//         setError("Failed to load coordinators.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCoordinators();
//   }, []);
//   return (
//     <div className='min-h-screen antialiased transition-colors duration-300'>
//       <Navbar theme={theme} toggleTheme={toggleTheme} />
//       <section className='py-12 px-6 max-w-7xl mx-auto'>
//         <h2 className='text-3xl font-bold mb-6 text-center'>
//           Wedding Coordinators
//         </h2>
//         {loading && (
//           <p className='text-center text-gray-600'>Loading coordinators...</p>
//         )}
//         {error && <p className='text-center text-red-500'>{error}</p>}
//         {!loading && !error && coordinators.length > 0 && (
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//             {coordinators.map((coordinator) => (
//               <CoordinatorCard
//                 key={coordinator._id}
//                 coordinator={coordinator}
//               />
//             ))}
//           </div>
//         )}
//         {!loading && !error && coordinators.length === 0 && (
//           <p className='text-center text-gray-600'>No coordinators found.</p>
//         )}
//       </section>
//       <Skills />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Home = ()=>{
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Pinging backend...");
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: "http://102.89.23.111:5001"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pingBackend = async ()=>{
            try {
                const { data } = await api.get("/");
                console.log("✅ Backend Ping Successful:", data);
                setStatus(`✅ Backend Ping Successful: ${data}`);
            } catch (error) {
                console.error("❌ Backend Ping Failed:", error?.response?.data || error.message);
                setStatus("❌ Backend Ping Failed: " + (error?.message || "Unknown error"));
            }
        };
        pingBackend();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Backend Health Check"
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`,
                children: status
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Home.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home;
function Home() {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("http://localhost:5001/api/hello") // ✅ Use localhost or your IP
        .then((res)=>setMessage(res.data.message)).catch((err)=>console.error("❌ Error:", err));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "50px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Frontend Connected to Backend 👌"
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Backend says: ",
                    message
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Home.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = App;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fd4475b6._.js.map