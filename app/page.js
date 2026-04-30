"use client";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { LuMessageCircleQuestion } from "react-icons/lu";

export default function Page() {

  const [dateTime, setDateTime] = useState("");

  const [name, setName] = useState("Ankaraju Sridhar");
  const [upi, setUpi] = useState("ankarajusridhar12@axl");
  const [utr, setUtr] = useState("633185827829");
  const [txnId, setTxnId] = useState("T2604081031566625975184");

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

    // random UTR
    const randomUTR = Math.floor(100000000000 + Math.random() * 900000000000);
    setUtr(randomUTR.toString());

    // random TXN
    let randomTxn = "T";
    for (let i = 0; i < 22; i++) {
      randomTxn += Math.floor(Math.random() * 10);
    }
    setTxnId(randomTxn);

  }, []);

  return (
    <div className="bg-black min-h-screen font-sans text-white">

      <meta name="theme-color" content="#2ad11e" />

      {/* HEADER */}
      <div className="bg-[#3F8F3A] px-4 py-2 pt-10">
        <div className="flex items-center gap-6">
          <FiArrowLeft className="text-[22px]" />
          <div>
            {/* ONLY BOLD */}
            <div className="text-[18px] font-semibold">
              Transaction Successful
            </div>

            {/* NORMAL */}
            <div className="text-[13px] opacity-90 font-normal mt-[-2px]">
              {dateTime}
            </div>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="m-3 bg-[#121212] rounded-[14px] p-3">

        <div className="text-[15px] font-bold">Paid to</div>

        <div className="flex items-center mt-3">
          <div className="w-11 h-11 rounded-full bg-[#49A7F3] flex items-center justify-center font-normal mr-3">
            {name.slice(0,2).toUpperCase()}
          </div>

          <div className="flex-1">
            <div className="text-[16px] font-normal">
              {name}
            </div>
            <div className="text-[13px] text-gray-400 font-normal">
              {upi}
            </div>
          </div>

          <div className="text-[16px] font-bold">₹15</div>
        </div>

        <div className="h-[1px] bg-gray-700 my-3"></div>

        {/* BANK */}
        <div className="flex items-center text-[14px] text-gray-400 font-normal">
          Banking Name :
          <span className="ml-2 text-white font-normal">{name}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5972/5972778.png"
            className="w-[12px] ml-1"
          />
        </div>

        {/* TRANSFER */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">

            <img
              src="https://i.ibb.co/dsmmrk1D/Chat-GPT-Image-Apr-30-2026-07-50-47-AM-removebg-preview.png"
              className="w-[25px] mr-2"
            />

            <div className="text-[16px] font-normal">
              Transfer Details
            </div>
          </div>

          <MdKeyboardArrowUp />
        </div>

        {/* TXN */}
        <div className="mt-3 text-[13px] text-gray-400 font-normal">
          Transaction ID
        </div>

        <div className="flex justify-between">
          <div className="text-[14px] font-normal">
            {txnId}
          </div>

          <img
            src="https://i.ibb.co/ym78vn9x/Chat-GPT-Image-Apr-30-2026-06-07-08-AM-removebg-preview.png"
            className="w-[45px]"
          />
        </div>

        {/* DEBIT */}
        <div className="mt-3 text-[13px] text-gray-400 font-normal">
          Debited from
        </div>

        <div className="flex items-start mt-2">

          <img
            src="https://play-lh.googleusercontent.com/dYccpbwJFL2BXc1YsOSCPjNX9CmGwqvjB-hMtkCltd9ijBQcyEu5c8sJNyTbNBXnOgI"
            className="w-7 h-7 rounded-full mr-2 mt-1"
          />

          <div className="flex-1">

            <div className="flex justify-between">
              <div className="text-[15px] font-normal">
                XXXXXXX4987
              </div>

              <div className="font-normal">₹15</div>
            </div>

            <div className="flex justify-between mt-1">
              <div className="text-[14px] text-gray-400 font-normal">
                UTR: {utr}
              </div>

              <img
                src="https://i.ibb.co/ym78vn9x/Chat-GPT-Image-Apr-30-2026-06-07-08-AM-removebg-preview.png"
                className="w-[45px]"
              />
            </div>

          </div>
        </div>

        <div className="h-[1px] bg-gray-700 my-3"></div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/svQRqggq/photo-2026-04-21-12-37-47-removebg-preview-1.png"
            className="w-full"
          />
        </div>

      </div>

      {/* SUPPORT */}
      <div className="m-3 bg-[#121212] rounded-[14px] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <LuMessageCircleQuestion className="mr-2" />
          Contact PhonePe Support
        </div>
        <MdKeyboardArrowRight />
      </div>

      {/* FOOTER */}
      <div className="text-center text-[12px] text-gray-500 mt-2">
        Powered by <br />
        <b className="text-white">UPI ✔ YES BANK</b>
      </div>

      {/* INPUTS */}
      <div className="p-3 space-y-2 mt-[200px]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-[#1f1f1f]"
        />
        <input
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full p-2 rounded bg-[#1f1f1f]"
        />
      </div>

    </div>
  );
}