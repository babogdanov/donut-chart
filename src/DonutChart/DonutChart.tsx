import CalculusHelper from "../calculation/CalculusHelper";
import "./styles.css";

export interface DonutSlice {
  id: number;
  percent: number;
}

const DonutChart = ({
  data,
  radius,
  viewBox,
  borderSize,
}: {
  data: DonutSlice[];
  radius: number;
  viewBox: number;
  borderSize: number;
}) => {
  const helper = new CalculusHelper(data, radius, viewBox, borderSize);

  const percentages = data.map((x) => x.percent);
  const totalPercentage = percentages.reduce((a, b) => a + b, 0);

  const segmentLabelRotations = percentages.map(
    (x, i) =>
      (percentages.slice(0, i).reduce((a, b) => a + b, 0) +
        percentages[i] / 2) /
        -100 -
      0.125
  );

  if (totalPercentage !== 100) {
    return (
      <p>
        Error rendering chart. Expected sum of percentages to equal 100, got{" "}
        {totalPercentage} instead.
      </p>
    );
  }
  return (
    data && (
      <svg viewBox={"0 0 " + viewBox + " " + viewBox}>
        {helper.getSlicesWithCommandsAndOffsets().map((slice, index) => (
          <g key={data[index].id}>
            <path
              key={index}
              fill="#e83d13"
              d={slice.commands}
              transform={"rotate(" + slice.offset + ")"}
              id={`path-${index}`}
            ></path>
            <g
              style={{
                // Counteract rotation of <text/>
                transformBox: "fill-box",
                transformOrigin: "center",
                rotate: `${-1 * segmentLabelRotations[index]}turn`,
              }}
            >
              <circle
                cx={40}
                cy={40}
                fill="#990000"
                r={5}
                style={{
                  rotate: `${segmentLabelRotations[index]}turn`,
                  translate: "50% 50%",
                }}
              />
              <text
                fontSize={5}
                alignmentBaseline="middle"
                textAnchor="middle"
                fill="white"
                x={40}
                y={40}
                style={{
                  rotate: `${segmentLabelRotations[index]}turn`,
                  translate: "50% 50%",
                }}
              >
                {/** Placeholder value */}
                {String.fromCharCode(index + 65)}
              </text>
            </g>

            <line
              x1={25}
              y1={25}
              x2={37.5}
              y2={37.5}
              style={{
                rotate: `${segmentLabelRotations[index]}turn`,
                translate: "50% 50%",
              }}
              stroke="#990000"
              strokeWidth={0.5}
            />
          </g>
        ))}
      </svg>
    )
  );
};
export default DonutChart;
