'use client';

import type {SVGProps} from 'react';
import {useEffect} from 'react';

export default function DynamicSprinkleBackground({className}: {className?: string}) {
  useEffect(() => {
    const sprinkleGroup = document.getElementById('sprinkle-group-dynamic');
    if (!sprinkleGroup) return;

    // Clear any existing particles if the effect runs again (though with empty deps array, it shouldn't)
    while (sprinkleGroup.firstChild) {
      sprinkleGroup.removeChild(sprinkleGroup.firstChild);
    }

    const numberOfParticles = 80;
    const viewBoxWidth = 100; // From viewBox="0 0 100 120"
    const viewBoxHeight = 120; // From viewBox="0 0 100 120"

    for (let i = 0; i < numberOfParticles; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.classList.add('sprinkle-particle-dynamic');

      const cx = Math.random() * viewBoxWidth;
      const cy = Math.random() * viewBoxHeight;
      circle.setAttribute('cx', cx.toString());
      circle.setAttribute('cy', cy.toString());

      const r = Math.random() * 1.5 + 0.5; // Radius between 0.5 and 2
      circle.setAttribute('r', r.toString());

      const fadeDelay = Math.random() * 4;
      const driftDelay = Math.random() * 6;
      circle.style.animationDelay = `${fadeDelay}s, ${driftDelay}s`;

      sprinkleGroup.appendChild(circle);
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <style jsx global>{`
        .dynamic-sprinkle-group {
          animation: rotate-dynamic 30s linear infinite;
          transform-origin: 50% 50%; /* Rotates around the center of the SVG's viewBox */
        }
        @keyframes rotate-dynamic {
          100% {
            transform: rotate(360deg);
          }
        }
        .sprinkle-particle-dynamic {
          fill: hsl(var(--primary)); /* Use theme primary color */
          transform-origin: center center;
          animation:
            fadeAndGrow-dynamic 4s ease-in-out infinite,
            drift-dynamic 6s ease-in-out infinite alternate;
        }
        @keyframes fadeAndGrow-dynamic {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }
          20% {
            opacity: 0.7;
            transform: scale(0.8);
          }
          80% {
            opacity: 0.7;
            transform: scale(0.8);
          }
          100% {
            opacity: 0;
            transform: scale(0.1);
          }
        }
        @keyframes drift-dynamic {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, 5px); /* Adjusted for a more subtle drift in SVG units */
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
      <svg
        className={className || ''}
        viewBox="0 0 100 120"
        preserveAspectRatio="xMidYMid slice" // Ensures SVG content covers the area, may crop.
        aria-hidden="true"
      >
        <g className="dynamic-sprinkle-group" id="sprinkle-group-dynamic">
          {/* Particles are dynamically added here by the useEffect hook */}
        </g>
      </svg>
    </>
  );
}
