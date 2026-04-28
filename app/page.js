"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { MdOutlineFileCopy, MdKeyboardArrowRight } from "react-icons/md";
import { LuMessageCircleQuestion } from "react-icons/lu";

// Transfer Icon
const TransferIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
  </svg>
);

// Verified Icon
const VerifiedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 100 100">
    <path d="M50 5 Q70 15 85 25 Q90 60 75 80 Q60 95 50 95 Q40 95 25 80 Q10 60 15 25 Q30 15 50 5 Z" fill="#22c55e"/>
    <path d="M30 50 L45 65 L70 35" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Page() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  // Inputs
  const [name, setName] = useState("Ankaraju Sridhar");
  const [upi, setUpi] = useState("ankarajusridhar12@axl");
  const [amount, setAmount] = useState("15");

  // Random IDs
  const [transactionId, setTransactionId] = useState("");
  const [utr, setUtr] = useState("");

  const generateRandomNumber = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  useEffect(() => {
    const now = new Date();

    const t = now.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const d = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setTime(`${t} on ${d}`);
    setTransactionId("T" + generateRandomNumber(22));
    setUtr(generateRandomNumber(12));
  }, []);

  return (
    <div className="bg-[#f5f5f5] text-black">

      {/* HEADER */}
      <div className="bg-[#2e7d32] px-4 pt-10 pb-2 text-white">
        <div className="flex items-center gap-4">
          <FaArrowLeft />
          <div>
            <h1 className="text-sm font-semibold">Transaction Successful</h1>
            <p className="text-[12px] text-white/90">{time}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 mt-4 space-y-3 pb-40">

        <div className="bg-white p-4 rounded-2xl space-y-4 shadow-sm">

          <p className="text-sm">Paid to</p>

          {/* Paid To */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{upi}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">₹{amount}</p>
          </div>

          <div className="border-b border-gray-300"></div>

          {/* Banking Name */}
          <div className="text-sm">
            <span className="text-gray-500">Banking Name :</span>
            <span className="ml-2 inline-flex items-center gap-1">
              {name}
              <VerifiedIcon />
            </span>
          </div>

          <div className="border-b border-gray-300"></div>

          {/* Transfer Details */}
          <div onClick={() => setOpen(!open)} className="flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3">
              <TransferIcon />
              <span>Transfer Details</span>
            </div>
            <FaChevronDown className={`${open ? "rotate-180" : ""}`} />
          </div>

          {/* DETAILS */}
          {open && (
            <div className="text-sm space-y-4">

              {/* Transaction ID */}
              <div>
                <p className="text-xs text-gray-500">Transaction ID</p>
                <div className="flex justify-between items-center">
                  <span>{transactionId}</span>
                  <MdOutlineFileCopy className="text-purple-500 text-lg" />
                </div>
              </div>

              {/* Debited From */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Debited from</p>

                <div className="flex gap-3 items-center">
                  <img
                    src="https://play-lh.googleusercontent.com/dYccpbwJFL2BXc1YsOSCPjNX9CmGwqvjB-hMtkCltd9ijBQcyEu5c8sJNyTbNBXnOgI=w480-h960-rw"
                    className="w-10 h-10 rounded-xl bg-white p-1"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span>XXXXXXX4987</span>
                      <span className="font-semibold">₹{amount}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-500">UTR: {utr}</span>
                      <MdOutlineFileCopy className="text-purple-500 text-lg" />
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-300 mt-3"></div>
              </div>

            </div>
          )}

          {/* ACTION IMAGE */}
          <div className="pt-2">
            <img
              src="https://i.ibb.co/Txb47FCt/photo-2026-04-21-12-37-47-removebg-preview.png"
              className="w-[110%] -ml-[5%]"
            />
          </div>

        </div>

        {/* SUPPORT */}
        <div className="bg-white p-3 rounded-2xl flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <LuMessageCircleQuestion className="text-gray-600" />
            <span className="text-sm">Contact PhonePe Support</span>
          </div>
          <MdKeyboardArrowRight className="text-gray-500" />
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>Powered by</p>
          <img src="https://i.ibb.co/ympvFLYn/Chat-GPT-Image-Apr-28-2026-07-45-55-AM-removebg-preview.png" className="mx-auto w-[300px] mt-[-80px] " />
        </div>

      </div>

      {/* INPUTS (SCROLL AFTER) */}
      <div className="p-4 bg-white border-t border-gray-300 space-y-3">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

      </div>

    </div>
  );
}