import type { CSSProperties } from 'react'

/** Decorative geometric background — circuit / diamond vibe, portfolio palette */
const navy = '#1d3557'
const navyDeep = '#0c1623'
const punch = '#e63946'
const frost = '#a8dadc'
const cerulean = '#457b9d'
const mint = '#70c3c6'
const honeydew = '#f1faee'

type PortfolioBackgroundProps = {
  /** Vertical parallax offset in px (e.g. scrollY * factor) */
  parallaxY?: number
}

/** Vertical loop period for wing rail (px). Must fit stacked far + mid + near artwork. */
const WING_SEGMENT_H = 480

/** Segment index whose vertical center lines up with `--diamond-center-y` at scroll 0 */
const SEGMENTS_BEFORE_DIAMOND = 6

/** Enough stacked tiles for tall viewports + long scroll without gaps */
const WING_SEGMENT_TOTAL = 22

/** Scroll coupling for the looping rail (how fast shapes drift vs scroll) */
const WING_RAIL_SCROLL = 0.11

function loopMod(n: number, m: number) {
  return ((n % m) + m) % m
}

/** Wings centered inside each repeating segment (not viewport / diamond anchor) */
function segmentWingStyle(parallaxPx: number, height: string): CSSProperties {
  return {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height,
    top: '50%',
    transform: `translateY(calc(-50% + ${parallaxPx}px))`,
    willChange: 'transform',
  }
}

type WingSegmentSvgsProps = {
  wingFar: number
  wingMid: number
  wingNear: number
}

/** One tile of far + mid + near wings (same artwork as before, scoped per segment) */
function WingSegmentSvgs({ wingFar, wingMid, wingNear }: WingSegmentSvgsProps) {
  return (
    <>
      <svg
        className="absolute"
        style={segmentWingStyle(wingFar, 'min(42vmin, 360px)')}
        viewBox="0 0 2000 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2" stroke={navy} strokeWidth="0.9" strokeLinecap="square">
          <path
            strokeDasharray="6 10"
            d="M0 72h420l44 44h492M0 200h520l38-38h444M0 328h360l52-52h588M2000 72h-420l-44 44h-492M2000 200h-520l-38-38h-444M2000 328h-360l-52-52h-588"
          />
        </g>
        <g opacity="0.35" stroke={cerulean} strokeWidth="1.1" strokeLinecap="square">
          <path d="M0 48v24M0 352v-24M2000 48v24M2000 352v-24" />
          <path
            opacity="0.5"
            d="M12 32l16 16M12 368l16-16M1988 32l-16 16M1988 368l-16-16"
          />
        </g>
        <g opacity="0.14" stroke={mint} strokeWidth="0.75" strokeLinecap="square">
          <path strokeDasharray="2 14" d="M0 120h2000M0 280h2000" />
        </g>
      </svg>
      <svg
        className="absolute"
        style={segmentWingStyle(wingMid, 'min(46vmin, 400px)')}
        viewBox="0 0 2000 440"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeLinecap="square">
          <g stroke={cerulean} strokeWidth="1.35" opacity="0.32">
            <path d="M0 98h312l48 48h180l36-36h424M0 342h288l56-56h196l40 40h420" />
            <path d="M2000 98h-312l-48 48h-180l-36-36h-424M2000 342h-288l-56-56h-196l-40 40h-420" />
          </g>
          <g stroke={mint} strokeWidth="1.15" opacity="0.38">
            <path d="M0 220h268l64 64h156l-44 44h556M2000 220h-268l-64 64h-156l44 44h-556" />
            <path
              strokeDasharray="4 7"
              d="M0 156h380l28 28h592M2000 156h-380l-28 28h-592M0 284h340l-32 32h692M2000 284h-340l32 32h-692"
            />
          </g>
          <g stroke={frost} strokeWidth="0.9" opacity="0.28">
            <path d="M0 52h180l24 24M2000 52h-180l-24 24M0 388h180l-24-24M2000 388h-180l24-24" />
          </g>
        </g>
        <g fill={punch} opacity="0.22">
          <rect x="8" y="214" width="5" height="5" transform="rotate(45 10.5 216.5)" />
          <rect
            x="1987"
            y="214"
            width="5"
            height="5"
            transform="rotate(45 1989.5 216.5)"
          />
        </g>
      </svg>
      <svg
        className="absolute"
        style={segmentWingStyle(wingNear, 'min(50vmin, 440px)')}
        viewBox="0 0 2000 480"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeLinecap="square">
          <g stroke={navyDeep} strokeWidth="1.6" opacity="0.2">
            <path d="M0 240h340l52 52h108l-40 40h540M2000 240h-340l-52 52h-108l40 40h-540" />
          </g>
          <g stroke={mint} strokeWidth="1.5" opacity="0.42">
            <path d="M0 120h404l60-60h136l44 44h356M2000 120h-404l-60-60h-136l-44 44h-356" />
            <path d="M0 360h404l60 60h136l-44-44h356M2000 360h-404l60 60h136l44-44h-356" />
          </g>
          <g stroke={cerulean} strokeWidth="1.2" opacity="0.35">
            <path d="M0 180h260l72 72M2000 180h-260l-72 72M0 300h260l-72 72M2000 300h-260l72 72" />
          </g>
        </g>
        <g
          stroke={frost}
          strokeWidth="1.1"
          opacity="0.4"
          transform="rotate(45 1000 240)"
        >
          <rect x="24" y="228" width="14" height="14" />
          <rect x="1962" y="228" width="14" height="14" />
        </g>
        <g fill={cerulean} opacity="0.3">
          <circle cx="8" cy="240" r="3" />
          <circle cx="1992" cy="240" r="3" />
        </g>
      </svg>
    </>
  )
}

export function PortfolioBackground({ parallaxY = 0 }: PortfolioBackgroundProps) {
  const lift = parallaxY * 0.18
  const wingFar = parallaxY * 0.052
  const wingMid = parallaxY * 0.088
  const wingNear = parallaxY * 0.125
  const wingRailY = loopMod(parallaxY * WING_RAIL_SCROLL, WING_SEGMENT_H)

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 78% 74% at 50% var(--diamond-center-y), transparent 0%, transparent 30%, var(--background) 80%, var(--background) 100%)`,
          transform: `translateY(${parallaxY * 0.06}px)`,
          willChange: 'transform',
        }}
      />

      {/* Wing geometry: stacked identical segments + looping vertical drift (not the diamond) */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-0"
        style={{
          top: `calc(var(--diamond-center-y) - ${SEGMENTS_BEFORE_DIAMOND * WING_SEGMENT_H + WING_SEGMENT_H / 2}px)`,
          height: WING_SEGMENT_TOTAL * WING_SEGMENT_H,
          transform: `translateY(${wingRailY}px)`,
          willChange: 'transform',
        }}
      >
        {Array.from({ length: WING_SEGMENT_TOTAL }).map((_, i) => (
          <div
            key={i}
            className="relative w-full shrink-0 overflow-visible"
            style={{ height: WING_SEGMENT_H }}
          >
            <WingSegmentSvgs
              wingFar={wingFar}
              wingMid={wingMid}
              wingNear={wingNear}
            />
          </div>
        ))}
      </div>

      <svg
        className="absolute left-1/2 w-[min(84vmin,620px)] sm:w-[min(80vmin,720px)]"
        style={{
          top: 'var(--diamond-center-y)',
          height: 'auto',
          aspectRatio: '1',
          transform: `translate(-50%, calc(-50% + ${lift}px))`,
          willChange: 'transform',
        }}
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill={cerulean} opacity="0.35" />
          </pattern>
          <pattern
            id="grid-fine"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.55" fill={mint} opacity="0.4" />
          </pattern>
        </defs>

        <g opacity="0.92">
          <rect
            x="100"
            y="100"
            width="800"
            height="800"
            fill="url(#grid-dots)"
            opacity="0.12"
            transform="rotate(45 500 500)"
          />
          <rect
            x="175"
            y="175"
            width="650"
            height="650"
            fill="url(#grid-fine)"
            opacity="0.08"
            transform="rotate(45 500 500)"
          />

          <g stroke={navy} strokeWidth="1.45" opacity="0.14" strokeLinecap="square">
            <path d="M500 88v824M88 500h824" />
          </g>

          <g strokeLinecap="square">
            <g strokeWidth="2.55" opacity="0.52">
              <path
                stroke={mint}
                d="M500 40v120l80 80M500 40v90M500 960v-120l-80-80M500 960v-90M40 500h120l80 80M40 500h90M960 500h-120l-80-80M960 500h-90"
              />
              <path
                stroke={cerulean}
                d="M500 180v60M500 820v-60M180 500h60M820 500h-60M320 200l60 60M680 800l-60-60M680 200l-60 60M320 800l60-60"
              />
              <path
                stroke={punch}
                opacity="0.62"
                d="M500 260v40M500 740v-40M260 500h40M740 500h-40"
              />
            </g>
            <g strokeWidth="1.8" opacity="0.38">
              <path
                stroke={cerulean}
                d="M500 310v25l35 35v45M500 690v-25l-35-35v-45M310 500h25l35 35h45M690 500h-25l-35-35h-45M500 140v55l-40 40v35M500 860v-55l40-40v-35M140 500h55l40 40h35M860 500h-55l-40-40h-35"
              />
              <path
                stroke={mint}
                d="M415 500h35v-25h30v25h35M585 500h-35v25h-30v-25h-35M500 415v35h25v30h-25v35M500 585v-35h-25v-30h25v-35"
              />
              <path
                stroke={frost}
                opacity="0.55"
                d="M500 220v20M500 780v-20M220 500h20M780 500h-20M360 360l25 25M640 640l-25-25M640 360l-25 25M360 640l25-25"
              />
            </g>
          </g>

          <g
            stroke={navy}
            strokeWidth="1.6"
            opacity="0.22"
            strokeLinecap="square"
          >
            <path d="M500 418v-28M500 582v28M418 500h-28M582 500h28M472 472l-20-20M528 528l20 20M528 472l20-20M472 528l-20 20" />
          </g>

          <g transform="rotate(45 500 500)">
            <rect
              x="455"
              y="455"
              width="90"
              height="90"
              fill={punch}
              opacity="0.22"
            />
            <rect
              x="442"
              y="442"
              width="116"
              height="116"
              stroke={punch}
              strokeWidth="1.2"
              opacity="0.28"
              strokeDasharray="3 5"
              fill="none"
            />
            <rect
              x="430"
              y="430"
              width="140"
              height="140"
              stroke={navyDeep}
              strokeWidth="2.9"
              opacity="0.35"
              fill={`${navy}18`}
            />
            <rect
              x="405"
              y="405"
              width="190"
              height="190"
              stroke={mint}
              strokeWidth="1.4"
              opacity="0.25"
              strokeDasharray="6 8"
              fill="none"
            />
            <rect
              x="380"
              y="380"
              width="240"
              height="240"
              stroke={cerulean}
              strokeWidth="2.55"
              opacity="0.4"
            />
            <rect
              x="350"
              y="350"
              width="300"
              height="300"
              stroke={navy}
              strokeWidth="1.2"
              opacity="0.2"
              strokeDasharray="2 6"
              fill="none"
            />
            <rect
              x="320"
              y="320"
              width="360"
              height="360"
              stroke={mint}
              strokeWidth="2.1"
              opacity="0.45"
            />
            <rect
              x="285"
              y="285"
              width="430"
              height="430"
              stroke={cerulean}
              strokeWidth="1.15"
              opacity="0.22"
              fill="none"
            />
            <rect
              x="250"
              y="250"
              width="500"
              height="500"
              stroke={navy}
              strokeWidth="1.8"
              opacity="0.28"
            />
            <rect
              x="210"
              y="210"
              width="580"
              height="580"
              stroke={frost}
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="4 10"
              fill="none"
            />
            <rect
              x="175"
              y="175"
              width="650"
              height="650"
              stroke={punch}
              strokeWidth="1.6"
              opacity="0.2"
            />
          </g>

          <g
            stroke={frost}
            strokeWidth="2.1"
            opacity="0.48"
            transform="rotate(45 500 500)"
          >
            <rect x="270" y="270" width="14" height="14" />
            <rect x="716" y="270" width="14" height="14" />
            <rect x="270" y="716" width="14" height="14" />
            <rect x="716" y="716" width="14" height="14" />
            <rect x="352" y="352" width="9" height="9" />
            <rect x="639" y="352" width="9" height="9" />
            <rect x="352" y="639" width="9" height="9" />
            <rect x="639" y="639" width="9" height="9" />
          </g>

          <g
            transform="rotate(45 500 500)"
            stroke={cerulean}
            strokeWidth="1.45"
            opacity="0.32"
            fill="none"
          >
            <rect x="498" y="198" width="4" height="10" />
            <rect x="498" y="792" width="4" height="10" />
            <rect x="198" y="498" width="10" height="4" />
            <rect x="792" y="498" width="10" height="4" />
          </g>

          <g transform="rotate(45 500 500)" opacity="0.38">
            <rect x="395" y="388" width="10" height="10" fill={honeydew} />
            <rect x="412" y="405" width="6" height="6" fill={frost} />
            <rect x="588" y="598" width="8" height="8" fill={honeydew} />
            <rect x="605" y="575" width="12" height="4" fill={cerulean} opacity="0.6" />
            <rect x="378" y="602" width="4" height="12" fill={mint} opacity="0.7" />
            <rect x="598" y="388" width="10" height="6" fill={honeydew} />
            <rect x="428" y="548" width="5" height="5" fill={honeydew} opacity="0.85" />
            <rect x="552" y="432" width="7" height="3" fill={mint} />
            <rect x="468" y="472" width="3" height="9" fill={cerulean} opacity="0.55" />
            <rect x="520" y="520" width="8" height="8" fill={`${navy}25`} stroke={mint} strokeWidth="0.95" />
            <rect x="335" y="485" width="4" height="4" fill={punch} opacity="0.35" />
            <rect x="661" y="511" width="4" height="4" fill={punch} opacity="0.35" />
          </g>

          <g fill={punch} opacity="0.55">
            <circle cx="500" cy="120" r="3" />
            <circle cx="496" cy="128" r="2.2" />
            <circle cx="504" cy="128" r="2.2" />
            <circle cx="500" cy="880" r="3" />
            <circle cx="496" cy="872" r="2.2" />
            <circle cx="504" cy="872" r="2.2" />
            <circle cx="120" cy="500" r="3" />
            <circle cx="128" cy="496" r="2.2" />
            <circle cx="128" cy="504" r="2.2" />
            <circle cx="880" cy="500" r="3" />
            <circle cx="872" cy="496" r="2.2" />
            <circle cx="872" cy="504" r="2.2" />
          </g>
          <g fill={cerulean} opacity="0.35">
            <circle cx="500" cy="210" r="2" />
            <circle cx="500" cy="790" r="2" />
            <circle cx="210" cy="500" r="2" />
            <circle cx="790" cy="500" r="2" />
          </g>
        </g>
      </svg>
    </div>
  )
}
