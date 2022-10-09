/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import DonutChart from "./DonutChart";

const FAKE_DATA_ONE = [
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
];

const FAKE_DATA_TWO = [
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
];

const FAKE_DATA_THREE = [
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
];

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 125 }}>
      <DonutChart
        viewBox={100}
        radius={40}
        borderSize={17.5}
        data={FAKE_DATA_ONE}
      />

      <DonutChart
        viewBox={100}
        radius={40}
        borderSize={17.5}
        data={FAKE_DATA_TWO}
      />

      <DonutChart
        viewBox={100}
        radius={40}
        borderSize={17.5}
        data={FAKE_DATA_THREE}
      />
    </div>
  );
}

export default App;
