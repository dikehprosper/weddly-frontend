(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/Home.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const Home = ()=>{
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pinging backend...");
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
        baseURL: "http://102.89.23.111:5001"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const pingBackend = {
                "Home.useEffect.pingBackend": async ()=>{
                    try {
                        const { data } = await api.get("/");
                        console.log("✅ Backend Ping Successful:", data);
                        setStatus(`✅ Backend Ping Successful: ${data}`);
                    } catch (error) {
                        console.error("❌ Backend Ping Failed:", error?.response?.data || error.message);
                        setStatus("❌ Backend Ping Failed: " + (error?.message || "Unknown error"));
                    }
                }
            }["Home.useEffect.pingBackend"];
            pingBackend();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Backend Health Check"
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(Home, "8w/RQDofjQXRiEZuxEbBbCpf61k=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
function Home() {
    _s1();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:5001/api/hello") // ✅ Use localhost or your IP
            .then({
                "Home.useEffect": (res)=>setMessage(res.data.message)
            }["Home.useEffect"]).catch({
                "Home.useEffect": (err)=>console.error("❌ Error:", err)
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "50px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Frontend Connected to Backend 👌"
            }, void 0, false, {
                fileName: "[project]/app/components/Home.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s1(Home, "ClLa+zvPL6vd0LAuHSvav3BaFBg=");
_c1 = Home;
const __TURBOPACK__default__export__ = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Home_tsx_ef96f2e7._.js.map