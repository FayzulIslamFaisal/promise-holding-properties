'use client';

const WaveBackground = () => {
  // Fixed positions to avoid hydration mismatch
  const particlePositions = [
    { left: '15%', top: '20%', delay: '0s', duration: '4s' },
    { left: '75%', top: '35%', delay: '0.5s', duration: '5s' },
    { left: '45%', top: '60%', delay: '1s', duration: '6s' },
    { left: '85%', top: '15%', delay: '1.5s', duration: '4.5s' },
    { left: '25%', top: '80%', delay: '2s', duration: '5.5s' },
    { left: '65%', top: '45%', delay: '2.5s', duration: '4.8s' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-wave"></div>

      {/* Animated wave layers */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F52BA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0958A7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0F52BA" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F52BA" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0F52BA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0958A7" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* First wave */}
          <path
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,400 1200,380 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            className="animate-float"
          />

          {/* Second wave */}
          <path
            d="M0,500 C300,400 600,600 900,500 C1050,450 1150,500 1200,480 L1200,800 L0,800 Z"
            fill="url(#wave2)"
            className="animate-wave"
          />

          {/* Third wave */}
          <path
            d="M0,600 C300,500 600,700 900,600 C1050,550 1150,600 1200,580 L1200,800 L0,800 Z"
            fill="rgba(255, 255, 255, 0.1)"
            style={{ animationDelay: '1s' }}
            className="animate-float"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveBackground;
