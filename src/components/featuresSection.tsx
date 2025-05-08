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
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="100"
                  rx="20"
                  fill="#ff7a59"
                  className="transition-all duration-300 group-hover:opacity-90"
                />
                <path
                  d="M80 60L48 80V40L80 60Z"
                  fill="white"
                  className="transition-all duration-300 group-hover:translate-x-1"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="white"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  fill="none"
                  strokeDasharray="3 6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 60 60"
                    to="360 60 60"
                    dur="30s"
                    repeatCount="indefinite"
                  />
                </circle>
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
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="100"
                  rx="15"
                  fill="#FFFFFF"
                  stroke="#FFA500"
                  strokeWidth="6"
                  className="transition-all duration-300 group-hover:stroke-opacity-80"
                />
                <path
                  d="M30 80 L50 60 L70 70 L90 40"
                  stroke="#2aae66"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,150;150,0"
                    dur="2s"
                    begin="0.5s"
                    fill="freeze"
                  />
                </path>
                <circle cx="30" cy="80" r="5" fill="#2aae66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="50" cy="60" r="5" fill="#2aae66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="3s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="70" cy="70" r="5" fill="#2aae66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="90" cy="40" r="5" fill="#2aae66">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="3s"
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
                <circle cx="60" cy="60" r="50" fill="#FFC857" />
                <path
                  d="M60 30 C49.5 30 41 38.5 41 49 C41 59.5 49.5 68 60 68 C60 68 60 68 60 68"
                  fill="#FFC857"
                />
                <rect
                  x="35"
                  y="35"
                  width="50"
                  height="30"
                  rx="15"
                  fill="#38B6FF"
                />
                <path
                  d="M54 90 C54 79.5 65 79.5 65 90"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="50" r="15" fill="#000000" opacity="0.2" />
                <rect
                  x="68"
                  y="38"
                  width="40"
                  height="25"
                  rx="10"
                  fill="#2aae66"
                  className="transition-all duration-300 group-hover:translate-x-1"
                ></rect>
                <circle cx="78" cy="50" r="3" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="88" cy="50" r="3" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="98" cy="50" r="3" fill="white">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    begin="1s"
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
                <path
                  d="M50 30 L50 90 C50 90 50 100 60 100 C70 100 70 90 70 90 L70 30"
                  fill="#A7D1EB"
                  stroke="#7EB5D8"
                  strokeWidth="2"
                />
                <rect
                  x="45"
                  y="20"
                  width="30"
                  height="15"
                  rx="7.5"
                  fill="#A7D1EB"
                  stroke="#7EB5D8"
                  strokeWidth="2"
                />
                <path
                  d="M60 40 L60 70"
                  stroke="#FFA500"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="1 8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;18"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M45 55 L75 55"
                  stroke="#FFA500"
                  strokeWidth="6"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle
                  cx="60"
                  cy="70"
                  r="12"
                  fill="#FFA500"
                  opacity="0.2"
                  className="group-hover:opacity-60 transition-opacity duration-300"
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
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
                <path
                  d="M60 20 C38 20 20 38 20 60 C20 82 38 100 60 100 C82 100 100 82 100 60 C100 38 82 20 60 20 Z"
                  fill="#2aae66"
                  className="transition-all duration-300 group-hover:opacity-90"
                />
                <path
                  d="M60 40 C52 40 45 47 45 55 C45 63 52 70 60 70 C68 70 75 63 75 55 C75 47 68 40 60 40 Z"
                  fill="#FFFFFF"
                />
                <path d="M38 85 C38 70 82 70 82 85" fill="#FFFFFF" />
                <path
                  d="M30 60 C30 40 90 40 90 60"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                  opacity="0.5"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 5; 0 0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
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
