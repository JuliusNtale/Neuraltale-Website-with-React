export default function FaviconLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="#2563eb"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top center dot */}
      <circle cx="50" cy="15" r="6" />
      
      {/* Top right bar */}
      <rect x="65" y="8" width="20" height="8" rx="4" transform="rotate(45 75 12)" />
      
      {/* Right bar */}
      <rect x="78" y="25" width="20" height="8" rx="4" transform="rotate(90 88 29)" />
      
      {/* Bottom right bars */}
      <rect x="65" y="55" width="20" height="8" rx="4" transform="rotate(45 75 59)" />
      <rect x="70" y="70" width="20" height="8" rx="4" transform="rotate(-45 80 74)" />
      
      {/* Bottom center dot */}
      <circle cx="50" cy="85" r="6" />
      
      {/* Bottom left bars */}
      <rect x="15" y="70" width="20" height="8" rx="4" transform="rotate(45 25 74)" />
      <rect x="10" y="55" width="20" height="8" rx="4" transform="rotate(-45 20 59)" />
      
      {/* Left bar */}
      <rect x="2" y="25" width="20" height="8" rx="4" transform="rotate(90 12 29)" />
      
      {/* Top left bar */}
      <rect x="15" y="8" width="20" height="8" rx="4" transform="rotate(-45 25 12)" />
      
      {/* Left center dot */}
      <circle cx="15" cy="50" r="6" />
      
      {/* Right center dot */}
      <circle cx="85" cy="50" r="6" />
      
      {/* Center main bars */}
      <rect x="30" y="35" width="25" height="8" rx="4" transform="rotate(45 42.5 39)" />
      <rect x="45" y="50" width="25" height="8" rx="4" transform="rotate(-45 57.5 54)" />
    </svg>
  )
}
