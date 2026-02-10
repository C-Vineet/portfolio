export function DecorativeCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
}

export function DecorativeSquare({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
    </svg>
  );
}

export function DecorativeTriangle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" />
    </svg>
  );
}

export function DecorativeArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50 L80 50 M80 50 L65 35 M80 50 L65 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DecorativeStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 L55 40 L85 45 L60 65 L65 95 L50 80 L35 95 L40 65 L15 45 L45 40 Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DecorativeGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="33" y1="0" x2="33" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="66" y1="0" x2="66" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="0" y1="33" x2="100" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="0" y1="66" x2="100" y2="66" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
