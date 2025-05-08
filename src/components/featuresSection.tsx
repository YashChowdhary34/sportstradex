"use client";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Learn */}
          <div className="feature-item flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="w-24 h-24 mb-4 relative group">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="120" height="120" fill="none" />
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="100"
                  rx="16"
                  fill="#FF7A59"
                  className="transition-all duration-300 group-hover:opacity-90"
                />
                <path
                  d="M35 60L85 60M85 60L65 40M85 60L65 80"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 group-hover:translate-x-1"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-1 text-center">
              LEARN
            </h3>
            <p className="text-xl text-gray-500 text-center">Video Module</p>
          </div>

          {/* Analyze */}
          <div className="feature-item flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="w-24 h-24 mb-4 relative group">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="120" height="120" fill="none" />
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="100"
                  rx="16"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:opacity-90"
                />
                <rect
                  x="20"
                  y="20"
                  width="80"
                  height="80"
                  rx="4"
                  fill="white"
                />
                <path
                  d="M30 75 L45 60 L65 70 L90 40"
                  stroke="#2AAE66"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,150;150,0"
                    dur="3s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx="30" cy="75" r="5" fill="#2AAE66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="45" cy="60" r="5" fill="#2AAE66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="65" cy="70" r="5" fill="#2AAE66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="90" cy="40" r="5" fill="#2AAE66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-1 text-center">
              ANALYZE
            </h3>
            <p className="text-xl text-gray-500 text-center">
              Interactive Dashboard
            </p>
          </div>

          {/* Apply */}
          <div className="feature-item flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="w-24 h-24 mb-4 relative group">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="120" height="120" fill="none" />
                <circle cx="60" cy="60" r="50" fill="#FFC857" />
                <circle cx="60" cy="40" r="18" fill="#38B6FF">
                  <animate
                    attributeName="r"
                    values="18;19;18"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="30"
                  y="65"
                  width="60"
                  height="35"
                  rx="17.5"
                  fill="#38B6FF"
                />
                <circle cx="60" cy="50" r="15" fill="#000000" opacity="0.1" />
                <rect
                  x="70"
                  y="35"
                  width="35"
                  height="20"
                  rx="10"
                  fill="#2AAE66"
                  className="transition-all duration-300 group-hover:translate-x-1"
                />
                <circle cx="80" cy="45" r="3" fill="white" />
                <circle cx="90" cy="45" r="3" fill="white" />
                <circle cx="100" cy="45" r="3" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-1 text-center">
              APPLY
            </h3>
            <p className="text-xl text-gray-500 text-center">Mentorship Call</p>
          </div>

          {/* Share */}
          <div className="feature-item flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="w-24 h-24 mb-4 relative group">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="120" height="120" fill="none" />
                <path
                  d="M35 15 L85 15 C95 15 95 25 95 25 L95 95 C95 105 85 105 85 105 L35 105 C25 105 25 95 25 95 L25 25 C25 15 35 15 35 15Z"
                  fill="#A7D1EB"
                />
                <path
                  d="M40 95 L80 95 C85 95 85 90 85 90 L85 30 C85 25 80 25 80 25 L40 25 C35 25 35 30 35 30 L35 90 C35 95 40 95 40 95Z"
                  fill="#E2F1FB"
                />
                <path
                  d="M40 45 L80 45"
                  stroke="#38B6FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M50 60 L70 60"
                  stroke="#FFA500"
                  strokeWidth="8"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M45 75 L75 75"
                  stroke="#38B6FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M60 90 L60 20"
                  stroke="#FFA500"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="1 5"
                  opacity="0.7"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;18"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-1 text-center">
              SHARE
            </h3>
            <p className="text-xl text-gray-500 text-center">Plugin Tool</p>
          </div>

          {/* Grow */}
          <div className="feature-item flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className="w-24 h-24 mb-4 relative group">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="120" height="120" fill="none" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="#2AAE66"
                  className="transition-all duration-300 group-hover:opacity-90"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.9;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="60" cy="43" r="18" fill="white" />
                <rect
                  x="35"
                  y="60"
                  width="50"
                  height="35"
                  rx="17.5"
                  fill="white"
                />
                <path
                  d="M60 43 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0"
                  fill="#2AAE66"
                  opacity="0.3"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  fill="none"
                >
                  <animate
                    attributeName="r"
                    values="43;45;43"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-1 text-center">
              GROW
            </h3>
            <p className="text-xl text-gray-500 text-center">
              Private Community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
