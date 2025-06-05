
'use client';

import type { SVGProps } from 'react';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <svg className="loader-svg" viewBox="0 0 100 120" style={{ width: '120px', height: '144px' }}>
        <style jsx global>{`
          .loader-svg {
            overflow: visible;
          }

          .sprinkle-group-loader {
            animation: rotateLoader 15s linear infinite;
            transform-origin: 50px 50px;
          }

          @keyframes rotateLoader {
            100% {
              transform: rotate(360deg);
            }
          }

          .sprinkle-particle-loader {
            fill: hsl(var(--primary)); /* Theme primary color */
            transform-origin: center center;
            animation:
              fadeAndGrowLoader 2s ease-in-out infinite,
              driftLoader 4s ease-in-out infinite alternate;
          }

          @keyframes fadeAndGrowLoader {
            0% {
              opacity: 0;
              transform: scale(0.2);
            }
            20% {
              opacity: 1;
              transform: scale(1);
            }
            80% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.2);
            }
          }

          @keyframes driftLoader {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(5px, 5px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          .sprinkle-particle-loader:nth-child(1) { animation-delay: 0s, 0.2s; }
          .sprinkle-particle-loader:nth-child(2) { animation-delay: 0.2s, 0s; }
          .sprinkle-particle-loader:nth-child(3) { animation-delay: 0.4s, 0.4s; }
          .sprinkle-particle-loader:nth-child(4) { animation-delay: 0.6s, 0.1s; }
          .sprinkle-particle-loader:nth-child(5) { animation-delay: 0.8s, 0.3s; }
          .sprinkle-particle-loader:nth-child(6) { animation-delay: 1.0s, 0.5s; }
          .sprinkle-particle-loader:nth-child(7) { animation-delay: 1.2s, 0.7s; }
          .sprinkle-particle-loader:nth-child(8) { animation-delay: 1.4s, 0.9s; }
          .sprinkle-particle-loader:nth-child(9) { animation-delay: 1.6s, 1.1s; }
          .sprinkle-particle-loader:nth-child(10) { animation-delay: 1.8s, 1.3s; }
          .sprinkle-particle-loader:nth-child(11) { animation-delay: 0.1s, 0.6s; }
          .sprinkle-particle-loader:nth-child(12) { animation-delay: 0.3s, 0.8s; }
          .sprinkle-particle-loader:nth-child(13) { animation-delay: 0.5s, 1.0s; }
          .sprinkle-particle-loader:nth-child(14) { animation-delay: 0.7s, 1.2s; }
          .sprinkle-particle-loader:nth-child(15) { animation-delay: 0.9s, 1.4s; }

          .text-opusweb-loader {
            font-family: var(--font-headline), sans-serif; /* Theme headline font */
            font-size: 10px;
            font-weight: bold;
            fill: hsl(var(--foreground)); /* Theme foreground color */
            text-anchor: middle;
          }
        `}</style>
        <g className="sprinkle-group-loader">
          <circle className="sprinkle-particle-loader" cx="50" cy="20" r="2"></circle>
          <circle className="sprinkle-particle-loader" cx="70" cy="30" r="2.5"></circle>
          <circle className="sprinkle-particle-loader" cx="80" cy="50" r="1.5"></circle>
          <circle className="sprinkle-particle-loader" cx="70" cy="70" r="2"></circle>
          <circle className="sprinkle-particle-loader" cx="50" cy="80" r="2.5"></circle>
          <circle className="sprinkle-particle-loader" cx="30" cy="70" r="1.5"></circle>
          <circle className="sprinkle-particle-loader" cx="20" cy="50" r="2"></circle>
          <circle className="sprinkle-particle-loader" cx="30" cy="30" r="2.5"></circle>
          <circle className="sprinkle-particle-loader" cx="40" cy="40" r="1.8"></circle>
          <circle className="sprinkle-particle-loader" cx="60" cy="60" r="2.2"></circle>
          <circle className="sprinkle-particle-loader" cx="55" cy="35" r="1.5"></circle>
          <circle className="sprinkle-particle-loader" cx="35" cy="55" r="2"></circle>
          <circle className="sprinkle-particle-loader" cx="65" cy="45" r="2.3"></circle>
          <circle className="sprinkle-particle-loader" cx="45" cy="65" r="1.7"></circle>
          <circle className="sprinkle-particle-loader" cx="50" cy="50" r="3"></circle>
        </g>
        <text x="50" y="105" className="text-opusweb-loader">OpusWeb</text>
      </svg>
    </div>
  );
}
