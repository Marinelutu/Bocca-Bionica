import React, { useEffect, useState } from "react";

const cities = [
    {
        id: "london",
        name: "Londra",
        x: 200,
        y: 300,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-7.webp",
    },
    {
        id: "paris",
        name: "Parigi",
        x: 250,
        y: 400,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-8.webp",
    },
    {
        id: "madrid",
        name: "Madrid",
        x: 150,
        y: 500,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-9.webp",
    },
    {
        id: "berlin",
        name: "Berlino",
        x: 350,
        y: 300,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-10.webp",
    },
    {
        id: "scandinavia",
        name: "Scandinavia",
        x: 400,
        y: 180,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-11.webp",
    },
    {
        id: "moscow",
        name: "Mosca",
        x: 650,
        y: 220,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-12.webp",
    },
    {
        id: "roma",
        name: "Roma",
        x: 380,
        y: 500,
        img: "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-7.webp",
    },
];

const moldova = {
    name: "MOLDAVIA",
    x: 550,
    y: 420,
};

// Simplified stylized Europe SVG map path
const europePath = `
  M 200 320 
  L 180 250 L 250 240 L 260 280 Z
  M 120 520 
  L 100 460 L 180 430 L 220 500 L 180 550 Z
  M 180 430
  L 200 360 L 280 340 L 320 400 L 250 460 Z
  M 250 460
  L 320 400 L 380 400 L 400 520 L 360 560 L 330 500 Z
  M 280 340
  L 260 280 L 320 260 L 400 300 L 380 400 Z
  M 320 260
  L 350 150 L 480 120 L 500 240 L 400 300 Z
  M 400 300
  L 500 240 L 680 180 L 780 250 L 750 400 L 550 480 L 450 460 L 380 400 Z
  M 450 460
  L 550 480 L 600 560 L 520 580 Z
`;

export default function InteractiveEuropeMap() {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Add small delay for stroke animation on mount
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full rounded-2xl bg-[#1a2e2e] p-4 shadow-2xl md:p-8 font-sans overflow-hidden">
            {/* Transform container for Isometric effect */}
            <div className="relative mx-auto w-full max-w-5xl" style={{ perspective: "1000px" }}>

                {/* removed CSS transform for 3D since an isometric flat view is simpler and looks better with responsive boundaries, but we can do a slight tilt for effect effect */}
                <div
                    className="relative h-auto w-full origin-center transition-transform duration-1000 ease-out"
                    style={{
                        transform: "rotateX(20deg)",
                        transformStyle: "preserve-3d"
                    }}>

                    <svg
                        viewBox="0 0 850 650"
                        className="h-full w-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                        style={{ overflow: "visible" }}
                    >
                        {/* Simplified Europe Map base */}
                        <path
                            d={europePath}
                            fill="#e8e8e8"
                            stroke="#cfcfcf"
                            strokeWidth="4"
                            strokeLinejoin="round"
                            className="transition-all duration-300"
                            style={{
                                filter: "drop-shadow(4px 10px 0px #b0b0b0)"
                            }}
                        />

                        {/* Arc Lines from Cities to Moldova */}
                        {cities.map((city, i) => {
                            const cx = (city.x + moldova.x) / 2;
                            const cy = Math.min(city.y, moldova.y) - 100 - (i * 10);
                            const pathData = `M ${city.x} ${city.y} Q ${cx} ${cy} ${moldova.x} ${moldova.y}`;

                            const isHovered = hoveredCity === city.id;

                            return (
                                <g key={`line-${city.id}`}>
                                    <path
                                        d={pathData}
                                        fill="none"
                                        stroke={isHovered ? "#ffffff" : "rgba(255,255,255,0.4)"}
                                        strokeWidth={isHovered ? "4" : "2"}
                                        strokeDasharray="1000"
                                        strokeDashoffset={mounted ? "0" : "1000"}
                                        className="transition-all duration-500 ease-in-out"
                                        style={{
                                            transitionDelay: mounted ? `${i * 0.3}s` : "0s",
                                            filter: isHovered ? "drop-shadow(0 0 6px rgba(255,255,255,0.8))" : "none"
                                        }}
                                    />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Absolute positioned HTML elements over the SVG for tooltips and images to handle better interaction & styling */}
                    <div className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none">
                    </div>

                </div>

                {/* Responsive overlay wrapper for absolute positioning mirroring the SVG coordinate system */}
                <div className="absolute inset-x-0 bottom-0 top-0 left-0" style={{ transform: "rotateX(20deg)" }}>
                    <div className="relative w-full h-full mx-auto" style={{ aspectRatio: "850/650" }}>

                        {/* City Pins */}
                        {cities.map((city, i) => (
                            <div
                                key={city.id}
                                className="absolute z-10 flex flex-col items-center justify-center pointer-events-auto transition-all duration-300 ease-out"
                                style={{
                                    left: `${(city.x / 850) * 100}%`,
                                    top: `${(city.y / 650) * 100}%`,
                                    transform: `translate(-50%, -50%) scale(${hoveredCity === city.id ? 1.15 : 1})`,
                                    zIndex: hoveredCity === city.id ? 50 : 10
                                }}
                                onMouseEnter={() => setHoveredCity(city.id)}
                                onMouseLeave={() => setHoveredCity(null)}
                            >
                                {/* Tooltip */}
                                <div className={`pointer-events-none absolute -top-12 whitespace-nowrap rounded-lg bg-black/80 px-3 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 ${hoveredCity === city.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    {city.name}
                                    {/* Tooltip Arrow */}
                                    <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-black/80" />
                                </div>

                                {/* Photo Bubble */}
                                <div
                                    className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] overflow-hidden rounded-full border-2 sm:border-3 border-[#e040fb] bg-white transition-all shadow-[0_0_8px_#e040fb]"
                                    style={{
                                        boxShadow: hoveredCity === city.id ? "0 0 16px 4px rgba(224, 64, 251, 0.8)" : "0 0 8px 1px rgba(224, 64, 251, 0.5)"
                                    }}
                                >
                                    <img
                                        src={city.img}
                                        alt={city.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Moldova Pin */}
                        <div
                            className="absolute z-20 flex flex-col items-center pointer-events-auto"
                            style={{
                                left: `${(moldova.x / 850) * 100}%`,
                                top: `${(moldova.y / 650) * 100}%`,
                                transform: "translate(-50%, -50%)"
                            }}
                        >
                            {/* Moldavia Label Tag */}
                            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-white px-3 py-1.5 shadow-xl sm:px-4 sm:py-2">
                                <span className="font-display text-sm font-extrabold text-[#e040fb] sm:text-lg">
                                    {moldova.name}
                                </span>
                            </div>

                            {/* Glowing Pin icon */}
                            <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#d500f9] opacity-75"></span>
                                <div className="relative inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#e040fb] text-white shadow-[0_0_15px_#e040fb]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
