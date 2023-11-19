"use client";
import React from "react";
import Image from "next/image";

const HorizontalScroll: React.FC = () => {
  return (
    <>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="scrolling-text">
          {/* ここに無限に流れるテキストを追加 */}
          <span>
            <h2>Text that scrolls infinitely.</h2>{" "}
          </span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scrollAnimation {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scrollAnimation 30s linear infinite;
          font-weight: bold;
          font-size: 50px;
          height: 10vh;
        }
      `}</style>
    </>
  );
};

export default HorizontalScroll;
