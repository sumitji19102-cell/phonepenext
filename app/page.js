"use client";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { LuMessageCircleQuestion } from "react-icons/lu";

export default function Page() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setDateTime(`${time} on ${date}`);
  }, []);

  return (
    <div className="bg-[#efefef] min-h-screen font-sans">

      {/* STATUS BAR */}
      <meta name="theme-color" content="#3F8F3A" />

      {/* HEADER */}
      <div className="bg-[#3F8F3A] text-white px-4 py-3">
        <div className="flex items-center">
          <FiArrowLeft className="text-[22px] mr-3" />
          <div>
            <div className="text-[18px] font-semibold">
              Transaction Successful
            </div>
            <div className="text-[13px] opacity-90">
              {dateTime}
            </div>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="m-3 bg-white rounded-[14px] p-3">

        <div className="text-[15px] font-semibold">Paid to</div>

        <div className="flex items-center mt-3">
          <div className="w-11 h-11 rounded-full bg-[#49A7F3] flex items-center justify-center text-white font-semibold mr-3">
            AS
          </div>

          <div className="flex-1">
            <div className="text-[16px] font-medium">
              Ankaraju Sridhar
            </div>
            <div className="text-[13px] text-gray-500">
              ankarajusridhar12@axl
            </div>
          </div>

          <div className="text-[16px] font-semibold">₹15</div>
        </div>

        <div className="h-[1px] bg-gray-200 my-3"></div>

        {/* BANK */}
        <div className="flex items-center text-[14px] text-gray-600">
          Banking Name :
          <span className="ml-2 text-black">Ankaraju Sridhar</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5972/5972778.png"
            className="w-4 h-4 ml-1"
          />
        </div>

       <div className="flex justify-between items-center mt-4">
  <div className="flex items-center">

  
    <img
      src="https://i.ibb.co/dsmmrk1D/Chat-GPT-Image-Apr-30-2026-07-50-47-AM-removebg-preview.png"
      className="w-[18px] h-[18px] object-contain mr-2"
    />

    <div className="text-[16px] font-semibold">
      Transfer Details
    </div>
  </div>

  <MdKeyboardArrowUp className="text-[22px]" />
</div>

        {/* Transaction ID */}
        <div className="mt-3 text-[13px] text-gray-500">
          Transaction ID
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[14px] font-medium">
            T2604081031566625975184
          </div>

          {/* 🔥 YOUR CUSTOM COPY ICON */}
          <img
            src="https://i.ibb.co/QjD0bZMZ/Chat-GPT-Image-Apr-30-2026-01-31-27-PM.png"
            className="w-[30px]  object-contain"
          />
        </div>

        {/* Debited */}
        <div className="mt-3 text-[13px] text-gray-500">
          Debited from
        </div>

       <div className="flex items-start mt-2">

  {/* LEFT ICON */}
  <img
    src="https://play-lh.googleusercontent.com/dYccpbwJFL2BXc1YsOSCPjNX9CmGwqvjB-hMtkCltd9ijBQcyEu5c8sJNyTbNBXnOgI"
    className="w-7 h-7 rounded-full object-cover mr-2 mt-1"
  />

  {/* MIDDLE (ACCOUNT + UTR) */}
  <div className="flex-1">

    {/* Account Row */}
    <div className="flex justify-between items-center">
      <div className="text-[15px] font-medium">
        XXXXXXX4987
      </div>
      <div className="font-medium text-[15px]">
        ₹15
      </div>
    </div>

    {/* UTR Row */}
    <div className="flex justify-between items-center mt-1">
      <div className="text-[14px] text-gray-600">
        UTR: 633185827829
      </div>

      {/* COPY ICON */}
      <img
        src="https://i.ibb.co/QjD0bZMZ/Chat-GPT-Image-Apr-30-2026-01-31-27-PM.png"
        className="w-[30px] object-contain"
      />
    </div>

  </div>

</div>

        <div className="h-[1px] bg-gray-200 my-3"></div>

        {/* 🔥 IMAGE INSTEAD OF ACTION BUTTONS */}
        <div className="flex justify-center ">
          <img
            src="https://i.ibb.co/svQRqggq/photo-2026-04-21-12-37-47-removebg-preview-1.png"
            className="w-[400px] object-contain"
          />
        </div>

      </div>

      {/* SUPPORT */}
      <div className="m-3 bg-white rounded-[14px] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <LuMessageCircleQuestion className="text-[20px] mr-2" />
          Contact PhonePe Support
        </div>
        <MdKeyboardArrowRight className="text-[22px]" />
      </div>

      {/* FOOTER */}
      <div className="text-center text-[12px] text-gray-500 mt-2">
        Powered by <br />
        <b>UPI ✔ YES BANK</b>
      </div>

    </div>
  );
}