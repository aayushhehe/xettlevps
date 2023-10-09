import React from "react";
import "./herobg.css";

const herobg = () => {
  return (
    <main>
      <div className="bgImage"></div>
      <svg className="blobCont">
        <image
          href="https://images.unsplash.com/photo-1628002844260-56abef5d5e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80"
          mask="url(#mask)"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          alt="img"
        />
        <defs>
          <filter id="gooey" height="130%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
        <mask id="mask" x="0" y="0">
          <g className="filter_url">
            <circle
              className="blob"
              cx="10%"
              cy="10%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="50%"
              cy="10%"
              r="40"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="17%"
              cy="15%"
              r="70"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="90%"
              cy="20%"
              r="120"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="30%"
              cy="25%"
              r="30"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="50%"
              cy="60%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="70%"
              cy="90%"
              r="10"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="90%"
              cy="60%"
              r="90"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="30%"
              cy="90%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="10%"
              cy="10%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="50%"
              cy="10%"
              r="20"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="17%"
              cy="15%"
              r="70"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="40%"
              cy="20%"
              r="120"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="30%"
              cy="25%"
              r="30"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="80%"
              cy="60%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="17%"
              cy="10%"
              r="100"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="40%"
              cy="60%"
              r="90"
              fill="white"
              stroke="white"
            />
            <circle
              className="blob"
              cx="10%"
              cy="50%"
              r="80"
              fill="white"
              stroke="white"
            />
          </g>
        </mask>
      </svg>
    </main>
  );
};

export default herobg;