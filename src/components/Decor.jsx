// Shared decorative pieces for the dark "panel" look (see .panel-dark in index.css)

// Contribution-style grid, deterministic so it stays stable between renders
const shades = [
  'bg-[rgba(255,255,255,0.04)]',
  'bg-[rgba(255,255,255,0.1)]',
  'bg-[rgba(255,255,255,0.2)]',
  'bg-[rgba(255,255,255,0.35)]',
  'bg-[rgba(255,255,255,0.55)]',
];

const buildCells = (count, seed) =>
  Array.from({ length: count }, (_, i) => {
    const v = Math.abs(Math.sin((i + seed) * 12.9898) * 43758.5453) % 1;
    return v > 0.82 ? 4 : v > 0.62 ? 3 : v > 0.4 ? 2 : v > 0.22 ? 1 : 0;
  });

export const ContribGrid = ({ weeks = 26, seed = 0, className = '' }) => {
  const cells = buildCells(weeks * 7, seed);

  return (
    <div
      className={`grid grid-flow-col grid-rows-[repeat(7,11px)] gap-[5px] ${className}`}>
      {cells.map((level, i) => (
        <span
          key={i}
          className={`block h-[11px] w-[11px] rounded-[3px] ${shades[level]}`}
        />
      ))}
    </div>
  );
};

// Oversized outline word used as a watermark behind panels
export const OutlineWordmark = ({ children, className = '' }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute select-none whitespace-nowrap
      font-overcameOutline leading-none text-jetGray transition duration-500
      ${className}`}>
    {children}
  </span>
);
