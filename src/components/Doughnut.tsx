import DonutChart from "react-donut-chart";

const data = [
  {
    label: "Public Sale",
    value: 35,
    color: "#EBA10F",
  },
  {
    label: "Community Airdrop",
    value: 30,
    color: "#9F43CC",
  },
  {
    label: "VC Investors",
    value: 25,
    color: "#0CA85D",
  },
  {
    label: "Team Allocation",
    value: 20,
    color: "#2B87E3",
  },
];

const second = [
  {
    label: "Major",
    value: 180,
    color: "#EBA10F",
  },
  {
    label: "asdf",
    value: 25,
    color: "#4D6380",
  },
];

const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
];

const secondColor = ["#4D6380", "#EBA10F"];

const reactDonutChartInnerRadius = 0.6;
const reactDonutChartSelectedOffset = 0.0;

let reactDonutChartStrokeColor = "#FFFFFF";

interface chart {
  type: boolean;
}

const Doughnut = ({ type }: chart) => {
  return (
    <>
      {type ? (
        <DonutChart
          width={300}
          height={300}
          strokeColor={reactDonutChartStrokeColor}
          data={data}
          colors={reactDonutChartBackgroundColor}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          legend={false}
        />
      ) : (
        <DonutChart
          width={200}
          height={200}
          strokeColor={reactDonutChartStrokeColor}
          data={second}
          colors={secondColor}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          legend={false}
        />
      )}
    </>
  );
};

export default Doughnut;
