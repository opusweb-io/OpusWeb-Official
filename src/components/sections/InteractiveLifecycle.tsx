
'use client';

import type { SVGProps } from 'react';

// Define props for individual SVG icons if needed, or use SVGProps<SVGSVGElement>
interface IconProps extends SVGProps<SVGSVGElement> {
  // any custom props?
}

const DiscoveryIcon = (props: IconProps) => (
  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4z"></path>
    <path d="M12 14v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V14"></path>
    <path d="M12 14v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14"></path>
    <line x1="8" y1="2" x2="16" y2="2"></line>
  </svg>
);

const DesignIcon = (props: IconProps) => (
  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    <rect x="2" y="2" width="20" height="15" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6" y2="6"></line>
    <line x1="10" y1="6" x2="10" y2="6"></line>
  </svg>
);

const DevelopmentIcon = (props: IconProps) => (
  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const TestingIcon = (props: IconProps) => (
  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1a4 4 0 0 1-4-4V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1a4 4 0 0 1-4 4H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a4 4 0 0 1 4 4v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a4 4 0 0 1 4-4h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path>
    <line x1="9.5" y1="12.5" x2="14.5" y2="12.5"></line>
    <line x1="12" y1="9" x2="12" y2="16"></line>
  </svg>
);

const LaunchIcon = (props: IconProps) => (
  <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2L11 13"></path>
    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
    <rect x="2" y="2" width="20" height="15" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6" y2="6"></line>
    <line x1="10" y1="6" x2="10" y2="6"></line>
  </svg>
);


export default function InteractiveLifecycle() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .interactive-lifecycle-wrapper {
          font-family: 'Inter', sans-serif;
          position: relative;
          width: 600px;
          height: 600px;
          border-radius: 20px;
          overflow: hidden; /* Clip glow effects if they extend too much */
          background: rgba(255, 255, 255, 0.05); /* Slightly transparent background for dark themes */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px; /* Added padding for better visual spacing */
        }
        
        .dark .interactive-lifecycle-wrapper {
           background: rgba(0, 0, 0, 0.1); /* Darker transparent background for dark themes */
        }


        .stage-card {
            position: absolute;
            background: linear-gradient(145deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.8) );
            border-radius: 15px;
            padding: 20px 25px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            backdrop-filter: blur(5px);
            border: 1px solid hsl(var(--border) / 0.3);
            transition: all 0.3s ease-in-out;
            cursor: default;
            animation: float 6s ease-in-out infinite;
        }

        .stage-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .stage-card .icon {
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            color: white;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2); /* Subtle glow, reduced for dark themes */
            position: relative;
            overflow: hidden; /* For gradient and inner glow */
        }
        
        .dark .stage-card .icon {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); 
        }

        .stage-card .icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
            border-radius: inherit;
        }

        .stage-card .title {
            font-weight: 600;
            font-size: 1.1rem;
            color: hsl(var(--foreground));
            margin-bottom: 5px;
        }

        .stage-card .description {
            font-size: 0.85rem;
            color: hsl(var(--muted-foreground));
            line-height: 1.3;
        }

        /* Specific stage colors */
        .discovery .icon { background: linear-gradient(45deg, #4F46E5, #6366F1); } /* Indigo */
        .design .icon { background: linear-gradient(45deg, #0D9488, #14B8A6); } /* Teal */
        .development .icon { background: linear-gradient(45deg, #F97316, #FB923C); } /* Orange accent */
        .testing .icon { background: linear-gradient(45deg, #EAB308, #FACC15); } /* Yellow accent */
        .launch .icon { background: linear-gradient(45deg, #EF4444, #F87171); } /* Red accent */

        /* Positioning for each stage */
        .discovery { top: 10%; left: 10%; animation-delay: 0s; }
        .design { top: 10%; right: 10%; animation-delay: 1s; }
        .development { bottom: 10%; right: 10%; animation-delay: 2s; }
        .testing { bottom: 10%; left: 10%; animation-delay: 3s; }
        .launch { 
            top: calc(50% - 65px); /* Adjust based on card height approx 130px */
            left: calc(50% - 70px); /* Adjust based on card width approx 140px */
            animation-delay: 4s; 
        }


        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        svg.connectors {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* Allows clicks to pass through */
        }
        svg.connectors path {
            fill: none;
            stroke: rgba(79, 70, 229, 0.4); /* Indigo with transparency */
            stroke-width: 2;
            stroke-dasharray: 8 4; /* Dotted line */
            animation: dash 20s linear infinite;
        }
         .dark svg.connectors path {
            stroke: rgba(129, 140, 248, 0.3); /* Lighter Indigo for dark mode */
        }

        @keyframes dash {
            to {
                stroke-dashoffset: -1000;
            }
        }

        .tech-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            opacity: 0.1; /* Very subtle */
            pointer-events: none;
        }
        
        .dark .tech-bg {
             opacity: 0.05;
        }

        .tech-bg span {
            position: absolute;
            background: rgba(79, 70, 229, 0.5); /* Indigo */
            border-radius: 50%;
            animation: pulse 4s ease-out infinite;
            filter: blur(5px);
            opacity: 0; /* Start hidden */
        }
        
        .dark .tech-bg span {
            background: rgba(129, 140, 248, 0.3); /* Lighter Indigo for dark mode */
        }


        .tech-bg span:nth-child(1) { top: 10%; left: 20%; width: 30px; height: 30px; animation-delay: 0s; }
        .tech-bg span:nth-child(2) { top: 80%; left: 70%; width: 40px; height: 40px; animation-delay: 1.5s; }
        .tech-bg span:nth-child(3) { top: 50%; left: 5%; width: 25px; height: 25px; animation-delay: 3s; }
        .tech-bg span:nth-child(4) { top: 30%; left: 90%; width: 35px; height: 35px; animation-delay: 0.5s; }
        .tech-bg span:nth-child(5) { top: 60%; left: 40%; width: 20px; height: 20px; animation-delay: 2.5s; }

        @keyframes pulse {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1); opacity: 0.5; }
            100% { transform: scale(0); opacity: 0; }
        }

        .icon-svg {
            width: 32px;
            height: 32px;
            filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2)); /* Subtle shadow */
        }
        .icon-svg path,
        .icon-svg polyline,
        .icon-svg line,
        .icon-svg circle, 
        .icon-svg rect {
            stroke: white; /* Ensure stroke is white as per original design intention */
            fill: none; /* Most icons are stroke based */
        }
        
        /* Specific fills for icons that need it */
        .icon-svg.discovery-icon path,
        .icon-svg.design-icon rect,
        .icon-svg.launch-icon rect {
           /* If some parts need fill, they can be targeted specifically or adjust SVG */
        }

      `}</style>
      <div className="interactive-lifecycle-wrapper">
        <div className="tech-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <svg className="connectors" viewBox="0 0 600 600">
          {/* Outer ring connecting stages */}
          <path d="M130 125 Q 300 50 470 125" /> {/* Approx Discovery center to Design center */}
          <path d="M470 125 Q 550 300 470 475" /> {/* Approx Design center to Development center */}
          <path d="M470 475 Q 300 550 130 475" /> {/* Approx Development center to Testing center */}
          <path d="M130 475 Q 50 300 130 125" /> {/* Approx Testing center to Discovery center */}
          
          {/* Connect outer stages to the central Launch stage (center at 300,300) */}
          <path d="M130 125 Q 215 212.5 300 300" /> {/* Discovery to Launch center */}
          <path d="M470 125 Q 385 212.5 300 300" /> {/* Design to Launch center */}
          <path d="M470 475 Q 385 387.5 300 300" /> {/* Development to Launch center */}
          <path d="M130 475 Q 215 387.5 300 300" /> {/* Testing to Launch center */}
        </svg>

        <div className="stage-card discovery">
          <div className="icon">
            <DiscoveryIcon />
          </div>
          <div className="title">Discovery</div>
          <div className="description">Understanding needs, wireframing ideas.</div>
        </div>

        <div className="stage-card design">
          <div className="icon">
            <DesignIcon />
          </div>
          <div className="title">Design</div>
          <div className="description">Creating mockups and user interfaces.</div>
        </div>

        <div className="stage-card development">
          <div className="icon">
            <DevelopmentIcon />
          </div>
          <div className="title">Development</div>
          <div className="description">Building the application with code.</div>
        </div>

        <div className="stage-card testing">
          <div className="icon">
            <TestingIcon />
          </div>
          <div className="title">Testing</div>
          <div className="description">Identifying and fixing issues.</div>
        </div>

        <div className="stage-card launch">
          <div className="icon">
            <LaunchIcon />
          </div>
          <div className="title">Launch</div>
          <div className="description">Deploying the application to users.</div>
        </div>
      </div>
    </>
  );
}

