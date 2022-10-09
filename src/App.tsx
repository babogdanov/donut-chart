import { useState } from "react";
import "./App.css";
import DonutChart from "./DonutChart";
import { DonutSlice } from "./DonutChart/DonutChart";

const FAKE_DATA = [
  {
    id: 1,
    percent: 35,
    color: 'DarkSeaGreen',
    label: 'Slice 1',
  },
  {
    id: 2,
    percent: 10,
    color: 'DarkOrchid',
    label: 'Slice 2',
  },
  {
    id: 3,
    percent: 10,
    color: 'DodgerBlue',
    label: 'Slice 3',
  },
  {
    id: 4,
    percent: 10,
    color: 'Black',
    label: 'Slice 1',
  },
  {
    id: 5,
    percent: 10,
    color: 'Red',
    label: 'Slice 1',
  },
  {
    id: 6,
    percent: 25,
    color: 'Yellow',
    label: 'Slice 1',
  },
];

function App() {



  return (
    <div>
    <DonutChart
      viewBox={100}
      radius={40}
      borderSize={20}
      data={FAKE_DATA}
    />
  </div>
  );
}

export default App;
