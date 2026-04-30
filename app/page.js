"use client";
import { useEffect, useState } from "react";

import { FiArrowLeft, FiCopy } from "react-icons/fi";
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
    <div style={{ backgroundColor: "#efefef", minHeight: "100vh", fontFamily: "Roboto, sans-serif" }}>

      {/* STATUS BAR */}
      <meta name="theme-color" content="#3F8F3A" />

      {/* HEADER */}
      <div style={{ backgroundColor: "#3F8F3A", padding: "14px 16px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FiArrowLeft style={{ fontSize: "22px", marginRight: "12px" }} />
          <div>
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              Transaction Successful
            </div>
            <div style={{ fontSize: "13px", opacity: "0.9" }}>
              {dateTime}
            </div>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div style={{ margin: "12px", backgroundColor: "#fff", borderRadius: "14px", padding: "14px" }}>
        
        <div style={{ fontSize: "15px", fontWeight: "600" }}>Paid to</div>

        {/* USER */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#49A7F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "600",
            marginRight: "12px"
          }}>
            AS
          </div>

          <div style={{ flex: "1" }}>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Ankaraju Sridhar
            </div>
            <div style={{ fontSize: "13px", color: "#666" }}>
              ankarajusridhar12@axl
            </div>
          </div>

          <div style={{ fontSize: "16px", fontWeight: "600" }}>₹15</div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#eee", margin: "14px 0" }} />

        {/* BANKING NAME */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: "14px", color: "#555" }}>
            Banking Name&nbsp;&nbsp;:
          </div>
          <div style={{ marginLeft: "8px", fontSize: "14px" }}>
            Ankaraju Sridhar
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5972/5972778.png"
            style={{ width: "16px", height: "16px", marginLeft: "6px" }}
          />
        </div>

        {/* TRANSFER HEADER WITH ICONS */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "16px", justifyContent: "space-between" }}>
          
          <div style={{ display: "flex", alignItems: "center" }}>
            <FcViewDetails style={{ fontSize: "18px", marginRight: "6px", color: "#000" }} />
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              Transfer Details
            </div>
          </div>

          <MdKeyboardArrowUp style={{ fontSize: "22px", color: "#000" }} />
        </div>

        {/* Transaction ID */}
        <div style={{ marginTop: "10px", fontSize: "13px", color: "#777" }}>
          Transaction ID
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            T2604081031566625975184
          </div>
          <FiCopy style={{ color: "#6a1b9a", fontSize: "16px" }} />
        </div>

        {/* Debited */}
        <div style={{ marginTop: "12px", fontSize: "13px", color: "#777" }}>
          Debited from
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
          <div style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            border: "1px solid #ddd",
            marginRight: "8px"
          }} />
          <div style={{ flex: "1", fontSize: "14px" }}>
            XXXXXXX4987
          </div>
          <div style={{ fontWeight: "500" }}>₹15</div>
        </div>

        {/* UTR */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
          <div style={{ fontSize: "14px", color: "#555" }}>
            UTR: 633185827829
          </div>
          <FiCopy style={{ color: "#6a1b9a", fontSize: "16px" }} />
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#eee", margin: "14px 0" }} />

        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
          {["Send Again", "View History", "Split Expense", "Share Receipt"].map((item, i) => (
            <div key={i}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#EDE7F6",
                margin: "auto"
              }} />
              <div style={{ fontSize: "12px", marginTop: "6px" }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUPPORT */}
      <div style={{
        margin: "12px",
        backgroundColor: "#fff",
        borderRadius: "14px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <LuMessageCircleQuestion style={{ fontSize: "20px", marginRight: "8px" }} />
          <div>Contact PhonePe Support</div>
        </div>

        <MdKeyboardArrowRight style={{ fontSize: "22px" }} />
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", fontSize: "12px", color: "#666", marginTop: "10px" }}>
        Powered by <br />
        <b>UPI ✔ YES BANK</b>
      </div>

    </div>
  );
}