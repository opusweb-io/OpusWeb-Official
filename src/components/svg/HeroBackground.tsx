
// eslint-disable-next-line @typescript-eslint/ban-types
export default function HeroBackground(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="1920" height="1080" fill="url(#paint0_linear_1_2_hero_bg)"/>
      <defs>
        <linearGradient id="paint0_linear_1_2_hero_bg" x1="960" y1="0" x2="960" y2="1080" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--background))" stopOpacity="0.5"/>
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="400" y="200" width="1120" height="680" rx="30" fill="hsl(var(--card))" opacity="0.1" stroke="hsl(var(--border))" strokeWidth="2"/>
      <rect x="400" y="200" width="1120" height="40" rx="30" fill="hsl(var(--muted))" fillOpacity="0.2"/>
      <circle cx="425" cy="220" r="8" fill="#FF5F56" fillOpacity="0.6"/>
      <circle cx="445" cy="220" r="8" fill="#FFBD2E" fillOpacity="0.6"/>
      <circle cx="465" cy="220" r="8" fill="#27C93F" fillOpacity="0.6"/>
      <rect x="440" y="280" width="1040" height="15" rx="7.5" fill="hsl(var(--muted-foreground))" fillOpacity="0.2"/>
      <rect x="440" y="320" width="980" height="15" rx="7.5" fill="hsl(var(--muted-foreground))" fillOpacity="0.15"/>
      <rect x="440" y="360" width="1000" height="15" rx="7.5" fill="hsl(var(--muted-foreground))" fillOpacity="0.18"/>
      <rect x="440" y="400" width="960" height="15" rx="7.5" fill="hsl(var(--muted-foreground))" fillOpacity="0.12"/>
      <rect x="250" y="750" width="150" height="90" rx="10" fill="hsl(var(--primary))" opacity="0.1"/>
      <rect x="265" y="765" width="120" height="60" rx="5" fill="hsl(var(--background))" opacity="0.15"/>
      <rect x="1550" y="750" width="100" height="140" rx="10" fill="hsl(var(--accent))" opacity="0.1"/>
      <rect x="1565" y="765" width="70" height="110" rx="5" fill="hsl(var(--background))" opacity="0.15"/>
      <rect x="1700" y="780" width="60" height="100" rx="8" fill="hsl(var(--primary))" opacity="0.1"/>
      <rect x="1710" y="790" width="40" height="80" rx="4" fill="hsl(var(--background))" opacity="0.15"/>
      <path d="M400 540 C200 600, 200 700, 280 750" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="10 5" opacity="0.15"/>
      <path d="M1520 540 C1720 600, 1720 700, 1640 750" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="10 5" opacity="0.15"/>
      <path d="M1520 540 C1720 600, 1780 750, 1730 780" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="10 5" opacity="0.15"/>
      <circle cx="160" cy="180" r="40" fill="hsl(var(--accent))" opacity="0.05"/>
      <rect x="1750" y="100" width="80" height="80" rx="20" fill="hsl(var(--primary))" opacity="0.05" transform="rotate(45 1750 100)"/>
      <polygon points="100 900, 200 950, 150 1000, 50 950" fill="hsl(var(--primary))" opacity="0.05"/>
    </svg>
  );
}
