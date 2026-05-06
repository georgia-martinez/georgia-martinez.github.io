/** Decorative blueprint diamond behind the hero headshot — centered with the photo in layout */
export function HeroDiamondBackdrop({ className }: { className?: string }) {
    const patternId = "hero-headshot-diamond-grid";

    return (
        <svg
            className={className}
            viewBox="178 -32 644 644"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
        >
            <defs>
                <pattern
                    id={patternId}
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                >
                    <circle
                        cx="1.2"
                        cy="1.2"
                        r="0.45"
                        fill="white"
                        opacity="0.2"
                    />
                </pattern>
            </defs>

            <g stroke="white" strokeWidth="1.15" opacity="0.38">
                <rect
                    x="320"
                    y="110"
                    width="360"
                    height="360"
                    transform="rotate(45 500 290)"
                    strokeDasharray="4 7"
                />
                <rect
                    x="355"
                    y="145"
                    width="290"
                    height="290"
                    transform="rotate(45 500 290)"
                    fill={`url(#${patternId})`}
                    opacity="0.35"
                />
                <rect
                    x="275"
                    y="65"
                    width="450"
                    height="450"
                    transform="rotate(45 500 290)"
                    strokeWidth="0.85"
                    opacity="0.22"
                />
            </g>
        </svg>
    );
}
