// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// export default function LoginPage() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const onLogin = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/login", user);
//       console.log("Login success", response.data);
//       toast.success("Login success");
//       router.push("/profile");
//     } catch (error) {
//       console.log("Login failed", error.message);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     React.createElement("div", { className: "flex flex-col items-center justify-center min-h-screen py-2" },
//       React.createElement("h1", null, loading ? "Processing" : "Login"),
//       React.createElement("hr", null),
//       React.createElement("label", { htmlFor: "email" }, "email"),
//       React.createElement("input", {
//         className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black",
//         id: "email",
//         type: "text",
//         value: user.email,
//         onChange: (e) => setUser({ ...user, email: e.target.value }),
//         placeholder: "email",
//       }),
//       React.createElement("label", { htmlFor: "password" }, "password"),
//       React.createElement("input", {
//         className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black",
//         id: "password",
//         type: "password",
//         value: user.password,
//         onChange: (e) => setUser({ ...user, password: e.target.value }),
//         placeholder: "password",
//       }),
//       React.createElement("button", {
//         onClick: onLogin,
//         className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
//       }, "Login here"),
//       React.createElement(Link, { href: "/signup" }, "Visit Signup page")
//     )
//   );
// }
import Link from 'next/link';

const headingStyle = {
  fontSize: "2rem", // You can adjust the font size as needed
  fontWeight: "bold", // This makes the text bold
  textAlign: "center", // Center the text if desired
  margin: "40px 0", 
  color:"blue"
};

const Login = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
    <h1 style={headingStyle}>DIGITIZED WORK TRACKER</h1>
      <p>Please log in using Single Sign-On:</p>
      <Link href="http://localhost:5000/api/v1/login/google"
        className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700">
          Log In with SSO
      </Link>
    </div>
    
  );
};

export default Login;

