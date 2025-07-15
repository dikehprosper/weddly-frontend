module.exports = {

"[project]/app/components/Home.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
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
"use client"; // import {useEffect, useState} from "react";
 // import axios from "axios";
 // const Home = () => {
 //   const [status, setStatus] = useState<string>("Pinging backend...");
 //   const api = axios.create({
 //     baseURL: "http://102.89.23.111:5001", // you can change to process.env.NEXT_PUBLIC_BASE_URL later
 //   });
 //   useEffect(() => {
 //     const pingBackend = async () => {
 //       try {
 //         const {data} = await api.get("/");
 //         console.log("✅ Backend Ping Successful:", data);
 //         setStatus(`✅ Backend Ping Successful: ${data}`);
 //       } catch (error: any) {
 //         console.error(
 //           "❌ Backend Ping Failed:",
 //           error?.response?.data || error.message
 //         );
 //         setStatus(
 //           "❌ Backend Ping Failed: " + (error?.message || "Unknown error")
 //         );
 //       }
 //     };
 //     pingBackend();
 //   }, []);
 //   return (
 //     <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
 //       <h1 className='text-3xl font-bold mb-4'>Backend Health Check</h1>
 //       <p
 //         className={`text-lg ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`}
 //       >
 //         {status}
 //       </p>
 //     </div>
 //   );
 // };
 // export default Home;
}}),

};

//# sourceMappingURL=app_components_Home_tsx_57ad1d1c._.js.map