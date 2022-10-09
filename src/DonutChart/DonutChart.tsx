import { useEffect, useRef, useState } from "react";
import CalculusHelper from "../calculation/CalculusHelper";
import "./styles.css";
const getOffset = (percent: number, viewBox: number) => {
  return Math.round((viewBox * percent) / 100);
};
export interface DonutSlice {
  id: number;
  percent: number;
  color: string;
  label?: string;
  onClickCb?: () => void;
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
  const [lineOffsets, setLineOffsets] = useState<DOMRect[]>([]);

  const percentages = data.map((x) => x.percent);
  console.log(data, percentages);
  console.log(
    lineOffsets.map((off) => {
      return { x: (off.x + off.width) / 2, y: (off.y + off.height) / 2 };
    }),
    lineOffsets
  );
  useEffect(() => {
    const x = data.map((x, index) => {
      const path = document.getElementById(
        `path-${index}`
      ) as unknown as SVGPathElement;
      console.log(index, path.getBBox());

      return path.getBBox();
    }) as DOMRect[];
    setLineOffsets(x);
  }, [data]);

  return (
    data && (
      <svg viewBox={"0 0 " + viewBox + " " + viewBox}>
        {helper.getSlicesWithCommandsAndOffsets().map((slice, index) => (
          <>
            <path
              key={index}
              fill={slice.color}
              d={slice.commands}
              transform={"rotate(" + slice.offset + ")"}
              id={`path-${index}`}
            >
              <title>{slice.label}</title>
            </path>
            <text
              fontSize={6}
              x={50}
              y={50}
              style={{
                rotate: `${
                  (percentages.slice(0, index).reduce((a, b) => a + b, 0) +
                    percentages[index] / 2) /
                    -100 -
                  0.125
                }turn`,
                translate: "50% 50%",
                
              }}
              transform="rotate(0.5turn)"
            >
              {String.fromCharCode(index + 65)}
            </text>
            {lineOffsets?.length > 0 && percentages?.length > 0 && (
              <line
                x1={25}
                y1={25}
                x2={50}
                y2={50}
                style={{
                  rotate: `${
                    (percentages.slice(0, index).reduce((a, b) => a + b, 0) +
                      percentages[index] / 2) /
                      -100 -
                    0.125
                  }turn`,
                  translate: "50% 50%",
                

                }}
                stroke="rgb(255,0,0)"
                strokeWidth={1.5}
              />
            )}
          </>
        ))}
      </svg>
    )
  );
};
export default DonutChart;
