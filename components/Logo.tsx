interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'symbol-only';
  className?: string;
  invertText?: boolean;
}

const sizeMap = {
  sm: { symbol: 32, nameSize: '14px', subSize: '9px', gap: 8 },
  md: { symbol: 44, nameSize: '18px', subSize: '11px', gap: 10 },
  lg: { symbol: 64, nameSize: '26px', subSize: '14px', gap: 14 },
};

export default function Logo({ size = 'md', variant = 'full', className = '', invertText = false }: LogoProps) {
  const { symbol, nameSize, subSize, gap } = sizeMap[size];

  const Diamond = (
    <svg
      width={symbol}
      height={symbol}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polygon points="50,5 10,50 50,95" fill="#4A90C2" />
      <polygon points="50,5 90,50 50,95" fill="#1B2A4A" />
    </svg>
  );

  if (variant === 'symbol-only') {
    return <div className={className} aria-label="Governanca&Mais Consultoria">{Diamond}</div>;
  }

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: `${gap}px` }}
      aria-label="Governanca&Mais Consultoria"
    >
      {Diamond}
      <div className="flex flex-col leading-none">
        <span
          className="font-extrabold tracking-tight"
          style={{
            fontSize: nameSize,
            color: invertText ? '#ffffff' : '#2D2D2D',
            lineHeight: 1.1,
          }}
        >
          {'GOVERNANÇA&MAIS'}
        </span>
        <span
          className="font-medium uppercase"
          style={{
            fontSize: subSize,
            color: '#4A90C2',
            letterSpacing: '0.25em',
            lineHeight: 1.4,
          }}
        >
          CONSULTORIA
        </span>
      </div>
    </div>
  );
}
