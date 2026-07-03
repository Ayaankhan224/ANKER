import React from "react";
import { TransitionLink, useTransition } from "./Loading";
import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL || "https://anker-9k4b.onrender.com";

const Pricing = () => {
  const { user, updateLocalPlan } = useAuth();
  const { transitionTo } = useTransition();

  const selectPlan = async (planName) => {
    if (!user) {
      alert("Please log in or sign up to select a plan.");
      transitionTo("/login");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/plan`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`,
        },
        body: JSON.stringify({ plan: planName }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to select plan");
      }

      updateLocalPlan(planName);

      alert(`Successfully chosen ${planName.toUpperCase()} plan!`);

      transitionTo("/form");
    } catch (err) {
      console.error("Select plan error:", err);
      alert(err.message || "Something went wrong. Please try again.");
    }
  };

  const handlePayment = async (amount) => {
    console.log("Clicked", amount);
    if (!user) {
      alert("Please log in or sign up to select a plan.");
      transitionTo("/login");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Anker",
        description: "Premium Plan",
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);

          selectPlan("premium");
        },
      };
      
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Order creation failed. Check if backend is running.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-8 py-16 px-6 sm:px-12 lg:px-6 capitalize font-[poppins] overflow-y-auto">
      <div className="bg-white w-full max-w-sm h-[520px] rounded-4xl flex flex-col justify-between items-center shadow-[0_12px_25px_rgba(0,0,0,0.25)] shrink-0">
        <div className="h-[50%] w-full rounded-4xl shadow-[0_12px_25px_rgba(0,0,0,0.25)] z-10 p-3 flex-shrink-0">
          <div className="h-[60%] w-full rounded-4xl bg-[#CEC5C3] p-6 flex flex-col justify-between">
            <h3 className="font-[poppins] bg-white w-fit px-3 py-1 rounded-4xl text-sm font-semibold">
              FREE
            </h3>
            <h1 className="text-xl sm:text-2xl font-[poppins]">
              <span className="text-5xl sm:text-6xl">$0</span>/month
            </h1>
          </div>
          <div className="h-[40%] w-full flex-col flex justify-between pt-2">
            <h6 className="font-[poppins] px-3 font-light text-sm text-neutral-500">
              Perfect For Small teams
            </h6>
            <button 
              onClick={() => selectPlan("free")} 
              className="h-[40%] w-full bg-black rounded-full text-white flex justify-center items-center hover:scale-105 cursor-pointer duration-300 ease-out hover:bg-[#E56E3A] font-semibold text-sm"
            >
              Choose Free Plan
            </button>
          </div>
        </div>
        <div className="h-[50%] w-full rounded-b-4xl py-8 px-8 flex items-center">
          <ul className="flex flex-col w-full font-[poppins] font-medium gap-3 text-neutral-700">
            <li>50 resume limit</li>
            <li>Basic candidate ranking</li>
            <li>Top 5 candidates shown</li>
          </ul>
        </div>
      </div>

      <div className="bg-white w-full max-w-sm h-[520px] rounded-4xl flex flex-col justify-between items-center shadow-[0_12px_25px_rgba(0,0,0,0.25)] shrink-0">
        <div className="h-[50%] w-full rounded-4xl shadow-[0_12px_25px_rgba(0,0,0,0.25)] z-10 p-3 flex-shrink-0">
          <div className="h-[60%] w-full rounded-4xl bg-[#B8C3C1] p-6 flex flex-col justify-between">
            <h3 className="font-[poppins] bg-white w-fit px-3 py-1 rounded-4xl text-sm font-semibold">
              PREMIUM
            </h3>
            <h1 className="text-xl sm:text-2xl font-[poppins]">
              <span className="text-5xl sm:text-6xl">$39</span>/month
            </h1>
          </div>
          <div className="h-[40%] w-full flex-col flex justify-between pt-2">
            <h6 className="font-[poppins] px-3 font-light text-sm text-neutral-500">
              Perfect For Growing teams
            </h6>
            <button 
              onClick={() => handlePayment(39)} 
              className="h-[40%] w-full bg-black rounded-full text-white flex justify-center items-center hover:scale-105 cursor-pointer duration-300 ease-out hover:bg-[#E56E3A] font-semibold text-sm"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
        <div className="h-[50%] w-full rounded-b-4xl py-8 px-8 flex items-center">
          <ul className="flex flex-col w-full font-[poppins] font-medium gap-3 text-neutral-700">
            <li>No resume limit</li>
            <li>Deep candidate ranking</li>
            <li>Export reports</li>
          </ul>
        </div>
      </div>

      <div className="bg-white w-full max-w-sm h-[520px] rounded-4xl flex flex-col justify-between items-center shadow-[0_12px_25px_rgba(0,0,0,0.25)] shrink-0">
        <div className="h-[50%] w-full rounded-4xl shadow-[0_12px_25px_rgba(0,0,0,0.25)] z-10 p-3 flex-shrink-0">
          <div className="h-[60%] w-full rounded-4xl bg-[#BDA79A] p-6 flex flex-col justify-between">
            <h3 className="font-[poppins] bg-white w-fit px-3 py-1 rounded-4xl text-sm font-semibold">
              ENTERPRISE
            </h3>
            <h1 className="text-xl sm:text-2xl font-[poppins]">
              <span className="text-3xl sm:text-4xl">Contact Sales</span>
            </h1>
          </div>
          <div className="h-[40%] w-full flex-col flex justify-between pt-2">
            <h6 className="font-[poppins] px-3 font-light text-sm text-neutral-500">
              For Large organizations
            </h6>
            <TransitionLink 
              to="/contact" 
              className="h-[40%] w-full bg-black rounded-full text-white flex justify-center items-center hover:scale-105 cursor-pointer duration-300 ease-out hover:bg-[#E56E3A] font-semibold text-sm"
            >
              Contact
            </TransitionLink>
          </div>
        </div>
        <div className="h-[50%] w-full rounded-b-4xl py-8 px-8 flex items-center">
          <ul className="flex flex-col w-full font-[poppins] font-medium gap-3 text-neutral-700">
            <li>Everything in premium</li>
            <li>Shared analysis</li>
            <li>API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
