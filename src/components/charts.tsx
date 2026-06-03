import type { IndicatorSeriesPoint } from "../lib/site-data";

export function LineSparkChart({ values }: { values: readonly number[] }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = 10 + index * 24;
      const y = 52 - ((value - min) / (max - min || 1)) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 150 60" className="chart-svg" aria-hidden="true">
      <polyline points={points} fill="none" stroke="#1F3A5F" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round" />
      {values.map((value, index) => {
        const x = 10 + index * 24;
        const y = 52 - ((value - min) / (max - min || 1)) * 28;
        return <circle key={index} cx={x} cy={y} r="1.8" fill="#1F3A5F" />;
      })}
    </svg>
  );
}

export function HorizontalBars({ data }: { data: readonly IndicatorSeriesPoint[] }) {
  return (
    <div className="mini-bars">
      {data.map((item) => (
        <div key={item.label} className="mini-bars__row">
          <span>{item.label}</span>
          <div className="mini-bars__track">
            <div className="mini-bars__fill" style={{ width: `${item.value}%` }} />
          </div>
          <strong>{item.value}%</strong>
        </div>
      ))}
    </div>
  );
}

export function VerticalBars({ data }: { data: readonly IndicatorSeriesPoint[] }) {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <svg viewBox="0 0 150 70" className="chart-svg" aria-hidden="true">
      {data.map((item, index) => {
        const height = (item.value / max) * 44;
        const x = 10 + index * 20;
        const y = 58 - height;
        return (
          <rect
            key={item.label}
            x={x}
            y={y}
            width="14"
            height={height}
            rx="3"
            fill={index >= 3 ? "#9CB6D6" : "#1F3A5F"}
          />
        );
      })}
    </svg>
  );
}

export function DonutChart({ segments }: { segments: readonly number[] }) {
  const total = segments.reduce((sum, value) => sum + value, 0);
  let accumulated = 0;
  const colors = ["#1F3A5F", "#8CA9C6", "#D9E4EF"];

  return (
    <svg viewBox="0 0 80 80" className="donut-svg" aria-hidden="true">
      {segments.map((segment, index) => {
        const start = (accumulated / total) * Math.PI * 2 - Math.PI / 2;
        accumulated += segment;
        const end = (accumulated / total) * Math.PI * 2 - Math.PI / 2;
        const x1 = 40 + 24 * Math.cos(start);
        const y1 = 40 + 24 * Math.sin(start);
        const x2 = 40 + 24 * Math.cos(end);
        const y2 = 40 + 24 * Math.sin(end);
        const largeArc = segment / total > 0.5 ? 1 : 0;
        return (
          <path
            key={index}
            d={`M ${x1} ${y1} A 24 24 0 ${largeArc} 1 ${x2} ${y2}`}
            fill="none"
            stroke={colors[index]}
            strokeWidth="12"
          />
        );
      })}
      <circle cx="40" cy="40" r="13" fill="#fff" />
    </svg>
  );
}

export function ParticipationChart({ values }: { values: readonly number[] }) {
  const max = Math.max(...values);
  const min = Math.min(...values);

  return (
    <div className="participation-chart">
      <div className="participation-chart__people">
        <span />
        <span />
        <span />
      </div>
      <svg viewBox="0 0 110 36" className="chart-svg" aria-hidden="true">
        <polyline
          points={values
            .map((value, index) => {
              const x = 8 + index * 18;
              const y = 28 - ((value - min) / (max - min || 1)) * 14;
              return `${x},${y}`;
            })
            .join(" ")}
          fill="none"
          stroke="#1F3A5F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
