import React, { useState } from "react";
import Back from "../components/common/Back";
import { TransitionLink, useTransition } from "./Loading";
import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL || "https://anker-9k4b.onrender.com";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const { transitionTo } = useTransition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      login({ token: data.token, username: data.username, plan: data.plan });

      setSuccess("Logged in successfully! Redirecting...");
      setUsername("");
      setPassword("");

      setTimeout(() => {
        transitionTo("/form");
      }, 1000);
    } catch (err) {
      setError(err.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center font-[poppins] p-4 sm:p-6">
      <div className="bg-white w-full max-w-md md:max-w-4xl min-h-[550px] md:h-[600px] rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.4)] p-2 flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:block md:w-[40%] h-full rounded-l-2xl overflow-hidden">
          <img src="/log-img.png" className="object-cover h-full w-full" />
        </div>
        <div className="w-full md:w-[60%] h-full rounded-r-2xl p-6 sm:p-10 md:p-15 flex flex-col justify-between gap-8 md:gap-4">
          <Back />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-[poppins] text-neutral-600">Log-In to</h3>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-[oran] leading-none">ANKER</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium border border-red-100">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-100">
                {success}
              </div>
            )}

            <input
              className="bg-[#F1EEEA] rounded-full text-[1rem] p-3.5 px-5 outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
            <input
              className="bg-[#F1EEEA] rounded-full text-[1rem] p-3.5 px-5 outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <p className="text-[0.9rem] px-2 text-neutral-600">
              Want to create an account?{" "}
              <TransitionLink to="/signup" className="text-blue-700 hover:underline font-medium">
                Sign-Up
              </TransitionLink>
            </p>

            <div className="mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto text-black text-[1rem] font-[poppins] py-3.5 px-8 rounded-full bg-[#F1EEEA] hover:bg-[#E56E3A] hover:text-white hover:scale-105 duration-150 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {loading ? "Logging In..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
