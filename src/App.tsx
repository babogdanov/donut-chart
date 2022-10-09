/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useState } from "react";
import DonutChart from "./DonutChart";

const MOCK_DATA = [
  [
    {
      id: 1,
      percent: 35,
    },
    {
      id: 2,
      percent: 10,
    },
    {
      id: 3,
      percent: 10,
    },
    {
      id: 4,
      percent: 10,
    },
    {
      id: 5,
      percent: 10,
    },
    {
      id: 6,
      percent: 25,
    },
  ],
  [
    {
      id: 1,
      percent: 10,
    },
    {
      id: 2,
      percent: 20,
    },
    {
      id: 3,
      percent: 15,
    },
    {
      id: 4,
      percent: 30,
    },
    {
      id: 5,
      percent: 10,
    },
    {
      id: 6,
      percent: 15,
    },
  ],
  [
    {
      id: 1,
      percent: 30,
    },
    {
      id: 2,
      percent: 30,
    },
    {
      id: 3,
      percent: 40,
    },
  ],
];

const App = () => {
  const [selectedDataIndex, setSelectedDataIndex] = useState(0);

  const handleSelectChange = (event: { target: { value: any } }) => {
    setSelectedDataIndex(event.target.value);
  };

  return (
    <>
      <select
        value={selectedDataIndex}
        style={{ marginBottom: "50px" }}
        onChange={handleSelectChange}
      >
        {MOCK_DATA.map((data, index) => (
          <option key={index} value={index}>
            {data.map((d) => String(d.percent)).reduce((a, b) => a + " " + b)}
          </option>
        ))}
      </select>
      <div>
        <DonutChart
          viewBox={100}
          radius={40}
          borderSize={17.5}
          data={MOCK_DATA[selectedDataIndex]}
        />
      </div>
    </>
  );
};

export default App;
