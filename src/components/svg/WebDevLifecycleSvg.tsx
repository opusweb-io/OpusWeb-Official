// src/components/svg/WebDevLifecycleSvg.tsx
// eslint-disable-next-line @typescript-eslint/ban-types
export default function WebDevLifecycleSvg(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <style>{`
        @keyframes floatWebDev {
            0% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(3deg); }
            50% { transform: translateY(0px) rotate(0deg); }
            75% { transform: translateY(8px) rotate(-3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .lifecycle-stage-webdev {
            animation: floatWebDev 4s ease-in-out infinite;
            transform-origin: center center;
            filter: url(#glowWebDev);
        }

        /* Adjusted nth-of-type to target <g> elements directly under <svg> that have the class */
        svg > g.lifecycle-stage-webdev:nth-of-type(1) { animation-duration: 4.0s; animation-delay: -0.5s; } /* Central "WEB DEV" */
        svg > g.lifecycle-stage-webdev:nth-of-type(2) { animation-duration: 3.8s; animation-delay: 0s; }    /* Planning */
        svg > g.lifecycle-stage-webdev:nth-of-type(3) { animation-duration: 4.2s; animation-delay: -0.7s; } /* Design */
        svg > g.lifecycle-stage-webdev:nth-of-type(4) { animation-duration: 4.5s; animation-delay: -1.4s; } /* Develop */
        svg > g.lifecycle-stage-webdev:nth-of-type(5) { animation-duration: 3.9s; animation-delay: -2.1s; } /* Testing */
        svg > g.lifecycle-stage-webdev:nth-of-type(6) { animation-duration: 4.1s; animation-delay: -2.8s; } /* Deploy */
        svg > g.lifecycle-stage-webdev:nth-of-type(7) { animation-duration: 4.3s; animation-delay: -3.5s; } /* Maintain */

        .icon-color-1-webdev { fill: url(#grad1WebDev); }
        .icon-color-2-webdev { fill: url(#grad2WebDev); }
        .icon-color-3-webdev { fill: url(#grad3WebDev); }
        .icon-color-4-webdev { fill: url(#grad4WebDev); }
        .icon-color-5-webdev { fill: url(#grad5WebDev); }
        .icon-color-6-webdev { fill: url(#grad6WebDev); }

        .webdev-svg-text {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-weight: 600;
            fill: #374151;
            text-anchor: middle;
            dominant-baseline: central;
            pointer-events: none;
        }
        .webdev-svg-text-center {
            font-family: 'Inter', sans-serif;
            font-size: 24px;
            font-weight: bold;
            fill: white;
            text-anchor: middle;
            dominant-baseline: central;
            pointer-events: none;
        }
      `}</style>
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <filter id="glowWebDev">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

            <linearGradient id="grad1WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#60a5fa",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#3b82f6",stopOpacity:1}} /> </linearGradient>
            <linearGradient id="grad2WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#a78bfa",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#8b5cf6",stopOpacity:1}} /> </linearGradient>
            <linearGradient id="grad3WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#4ade80",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#22c55e",stopOpacity:1}} /> </linearGradient>
            <linearGradient id="grad4WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#fbbf24",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#f59e0b",stopOpacity:1}} /> </linearGradient>
            <linearGradient id="grad5WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#f87171",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#ef4444",stopOpacity:1}} /> </linearGradient>
            <linearGradient id="grad6WebDev" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style={{stopColor:"#fcd34d",stopOpacity:1}} /> <stop offset="100%" style={{stopColor:"#fbbf24",stopOpacity:1}} /> </linearGradient>
            <circle id="dashed-circleWebDev" cx="300" cy="300" r="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" fill="none"/>
        </defs>

        <g className="lifecycle-stage-webdev" transform="translate(250, 250)">
             <rect x="0" y="0" width="100" height="100" rx="15" ry="15" fill="url(#grad2WebDev)" opacity="0.8"/>
             <text x="50" y="35" className="webdev-svg-text-center">WEB</text>
             <text x="50" y="65" className="webdev-svg-text-center">DEV</text>
        </g>

        <use href="#dashed-circleWebDev" />

        <g className="lifecycle-stage-webdev" transform="translate(250, 50)">
            <circle cx="50" cy="50" r="45" className="icon-color-1-webdev" />
            <path d="M50 20 L40 45 H30 L50 90 L70 45 H60 Z M45 80 L55 80 L55 90 L45 90 Z" fill="white" />
            <text x="50" y="120" className="webdev-svg-text">Planning</text>
        </g>

        <g className="lifecycle-stage-webdev" transform="translate(430, 150)">
            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" className="icon-color-2-webdev" />
            <rect x="20" y="20" width="60" height="40" rx="5" ry="5" fill="white" opacity="0.8"/>
            <rect x="20" y="70" width="30" height="10" rx="2" ry="2" fill="white" opacity="0.8"/>
            <rect x="55" y="70" width="25" height="10" rx="2" ry="2" fill="white" opacity="0.8"/>
            <text x="50" y="120" className="webdev-svg-text">Design</text>
        </g>

        <g className="lifecycle-stage-webdev" transform="translate(430, 350)">
            <circle cx="50" cy="50" r="45" className="icon-color-3-webdev" />
            <path d="M30 20 L10 50 L30 80 L40 70 L20 50 L40 30 Z M70 20 L90 50 L70 80 L60 70 L80 50 L60 30 Z" fill="white" />
            <text x="50" y="120" className="webdev-svg-text">Develop</text>
        </g>

        <g className="lifecycle-stage-webdev" transform="translate(250, 450)">
            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" className="icon-color-4-webdev" />
            <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="8" fill="none" />
            <line x1="55" y1="55" x2="85" y2="85" stroke="white" strokeWidth="8" strokeLinecap="round" />
            <text x="50" y="120" className="webdev-svg-text">Testing</text>
        </g>

        <g className="lifecycle-stage-webdev" transform="translate(70, 350)">
            <circle cx="50" cy="50" r="45" className="icon-color-5-webdev" />
            <path d="M40 20 L60 20 L60 40 L70 50 L50 80 L30 50 L40 40 Z" fill="white" />
            <rect x="42" y="70" width="16" height="15" rx="2" ry="2" fill="white" />
            <path d="M35 55 L35 70 L30 70 L30 60 Z M65 55 L65 70 L70 70 L70 60 Z" fill="white" />
            <text x="50" y="120" className="webdev-svg-text">Deploy</text>
        </g>

        <g className="lifecycle-stage-webdev" transform="translate(70, 150)">
            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" className="icon-color-6-webdev" />
            <path d="M50 5 L70 15 L50 35 L30 15 Z" fill="white" />
            <path d="M85 30 L75 50 L95 50 L85 70 Z" fill="white" />
            <path d="M50 95 L30 85 L50 65 L70 85 Z" fill="white" />
            <path d="M15 70 L25 50 L5 50 L15 30 Z" fill="white" />
            <circle cx="50" cy="50" r="20" fill="white" />
            <text x="50" y="120" className="webdev-svg-text">Maintain</text>
        </g>
      </svg>
    </>
  );
}
