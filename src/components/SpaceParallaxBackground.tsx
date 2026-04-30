import type { CSSProperties } from "react";

type SpaceParallaxBackgroundProps = {
    scrollY: number;
};

/** Deep space base — synced with vignette / fade / index `--background` */
const VOID = "#0b1020";

const NEBULA_LAYERS = `
  radial-gradient(ellipse 85% 55% at 15% 25%, rgba(180, 80, 40, 0.26) 0%, transparent 52%),
  radial-gradient(ellipse 70% 50% at 88% 18%, rgba(34, 211, 238, 0.18) 0%, transparent 48%),
  radial-gradient(ellipse 75% 65% at 55% 75%, rgba(56, 189, 248, 0.16) 0%, transparent 55%),
  radial-gradient(ellipse 100% 80% at 40% 45%, rgba(49, 46, 129, 0.38) 0%, transparent 58%),
  radial-gradient(ellipse 120% 90% at 50% 100%, rgba(11, 16, 32, 0.88) 0%, transparent 55%),
  radial-gradient(ellipse 90% 70% at 50% -10%, rgba(30, 41, 82, 0.72) 0%, transparent 45%)
`;

/** `at x% y%` positions — three layers use different sets so motion reads as depth */
const STAR_SPECKS_FAR: [number, number, number][] = [
    [5, 9, 0.22],
    [14, 38, 0.18],
    [27, 14, 0.26],
    [33, 62, 0.2],
    [41, 41, 0.24],
    [52, 8, 0.19],
    [58, 71, 0.23],
    [67, 33, 0.21],
    [76, 54, 0.25],
    [84, 12, 0.2],
    [92, 48, 0.22],
    [11, 88, 0.17],
    [44, 95, 0.2],
    [73, 91, 0.24],
    [19, 56, 0.19],
    [61, 22, 0.23],
    [88, 72, 0.21],
    [96, 28, 0.18],
];

const STAR_SPECKS_MID: [number, number, number][] = [
    [8, 12, 0.42],
    [22, 44, 0.38],
    [38, 8, 0.45],
    [55, 28, 0.35],
    [72, 18, 0.48],
    [91, 35, 0.4],
    [15, 72, 0.38],
    [48, 88, 0.42],
    [84, 76, 0.36],
    [63, 52, 0.33],
    [29, 31, 0.4],
    [47, 61, 0.37],
    [81, 42, 0.44],
    [6, 66, 0.35],
];

const STAR_SPECKS_NEAR: [number, number, number][] = [
    [18, 22, 0.58],
    [35, 78, 0.52],
    [50, 18, 0.62],
    [68, 64, 0.55],
    [79, 38, 0.6],
    [12, 48, 0.5],
    [56, 46, 0.56],
    [93, 62, 0.54],
];

function speckGradients(
    specks: [number, number, number][],
    sizePx: number,
): string {
    return specks
        .map(
            ([x, y, a]) =>
                `radial-gradient(${sizePx}px ${sizePx}px at ${x}% ${y}%, rgba(255,255,255,${a}), transparent)`,
        )
        .join(", ");
}

/** Fixed cosmic backdrop: nebula parallax + star speckle + blueprint-style white geometry */
export function SpaceParallaxBackground({
    scrollY,
}: SpaceParallaxBackgroundProps) {
    const nebulaY = scrollY * 0.07;
    const geoY = scrollY * 0.14;
    const starsFarY = scrollY * 0.011;
    const starsMidY = scrollY * 0.027;
    const starsNearY = scrollY * 0.05;

    const nebulaStyle: CSSProperties = {
        transform: `translate3d(0, ${nebulaY}px, 0)`,
        willChange: "transform",
        background: NEBULA_LAYERS,
    };

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden
        >
            <div className="absolute inset-0" style={{ background: VOID }} />

            <div
                className="absolute inset-[-15%] opacity-100"
                style={nebulaStyle}
            />

            {/* Soft vignette */}
            <div
                className="absolute inset-0 opacity-[0.62]"
                style={{
                    background: `radial-gradient(ellipse 68% 58% at 50% 44%, transparent 34%, ${VOID} 88%)`,
                }}
            />

            {/* Parallax stars — far / mid / near scroll at different rates */}
            <div
                className="absolute inset-0 opacity-[0.55]"
                style={{
                    transform: `translate3d(0, ${starsFarY}px, 0)`,
                    willChange: "transform",
                    backgroundImage: speckGradients(STAR_SPECKS_FAR, 1),
                    backgroundSize: "100% 100%",
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.48]"
                style={{
                    transform: `translate3d(0, ${starsMidY}px, 0)`,
                    willChange: "transform",
                    backgroundImage: speckGradients(STAR_SPECKS_MID, 1),
                    backgroundSize: "100% 100%",
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.44]"
                style={{
                    transform: `translate3d(0, ${starsNearY}px, 0)`,
                    willChange: "transform",
                    backgroundImage: speckGradients(STAR_SPECKS_NEAR, 1.5),
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Geometric white-line layer (inspired by technical / diamond layouts) */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    transform: `translate3d(0, ${geoY}px, 0)`,
                    willChange: "transform",
                }}
            >
                <svg
                    className="h-[min(140vmin,920px)] w-full max-w-[1100px] opacity-[0.9]"
                    viewBox="0 0 1000 620"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <pattern
                            id="space-grid-fine"
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

                    {/* Large diamond + inner grid */}
                    <g
                        stroke="white"
                        strokeWidth="1.15"
                        opacity="0.38"
                    >
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
                            fill="url(#space-grid-fine)"
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
            </div>

            {/* Scroll fade into solid void for lower sections */}
            <div
                className="pointer-events-none absolute right-0 bottom-0 left-0 h-[min(40vh,320px)]"
                style={{
                    background: `linear-gradient(to top, ${VOID} 0%, rgba(11,16,32,0.55) 48%, transparent 100%)`,
                }}
            />
        </div>
    );
}
