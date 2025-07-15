module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const Home = ()=>{
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Pinging backend...");
    const api = axios.create({
        baseURL: "https://0f72b9b2083b.ngrok-free.app",
        timeout: 10000
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
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`,
                children: status
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Home.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__780200be._.js.map