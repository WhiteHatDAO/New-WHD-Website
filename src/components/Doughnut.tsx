import DonutChart from "react-donut-chart";
import { useState, useEffect } from "react";

const reactDonutChartInnerRadius = 0.6;
const reactDonutChartSelectedOffset = 0.0;

let reactDonutChartStrokeColor = "#FFFFFF";

interface chart {
  type: boolean;
  data: any[];
}

const Doughnut = ({ type, data }: chart) => {
  const [doughnutData, setDoughnutData] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    let tempList = [];
    let tColors: any = [];
    let col;
    if (type) {
      for (let i = 0; i < data.length; i++) {
        switch(data[i].color) {
          case "Critical": {
            col = '#A12E2E'
            break;
          }
          case "Major": {
            col = '#E28A59'
            break;
          }
          case "Medium": {
            col = '#E1AA4C'
            break;
          }
          case "Minor": {
            col = '#A9B3BD'
            break;
          }
          case "Informational": {
            col = '#4D6381'
            break;
          }
          case "Purple": {
            col = '#9F42CC'
            break;
          }
          case "Green": {
            col = '#0CA85D'
            break;
          }
          case "Orange": {
            col = '#FF7500'
            break;
          }
          case "Skyblue": {
            col = '#2B87E3'
            break;
          }
          case "Pink": {
            col = '#CC2D8F'
            break;
          }
          case "Lightred": {
            col = 'rgba(179, 15, 61, 1)'
            break;
          }
          case "Magenta": {
            col = 'rgba(173, 50, 122, 1)'
            break;
          }
          case "Daisy": {
            col = 'rgba(71, 28, 135, 1)'
            break;
          }
        }

        tColors.push(col)

        let item = {
          label: data[i].tag,
          value: data[i].percent,
          color: col,
        };

        tempList.push(item);
      }
    } else {
      for(let i = 0; i < data.length; i++) {
        if(data[i].number === 0) continue;

        switch(data[i].color) {
          case "Critical": {
            col = '#A12E2E'
            break;
          }
          case "Major": {
            col = '#E28A59'
            break;
          }
          case "Medium": {
            col = '#E1AA4C'
            break;
          }
          case "Minor": {
            col = '#A9B3BD'
            break;
          }
          case "Informational": {
            col = '#4D6381'
            break;
          }
          case "Purple": {
            col = '#9F42CC'
            break;
          }
          case "Green": {
            col = '#0CA85D'
            break;
          }
          case "Orange": {
            col = '#FF7500'
            break;
          }
          case "Skyblue": {
            col = '#2B87E3'
            break;
          }
          case "Pink": {
            col = '#CC2D8F'
            break;
          }
          case "Lightred": {
            col = 'rgba(179, 15, 61, 1)'
            break;
          }
          case "Magenta": {
            col = 'rgba(173, 50, 122, 1)'
            break;
          }
          case "Daisy": {
            col = 'rgba(71, 28, 135, 1)'
            break;
          }
        }

        tColors.push(col as string)

        let item = {
          color: col,
          value: data[i].number,
          label: i,
        };

        tempList.push(item)
      }
    }

    console.log('tColors', tColors)
    console.log('templist', tempList)
    setColors(tColors)
    setDoughnutData(tempList);
  }, [data, type]);

  return (
    <>
      {type ? (
        <DonutChart
          width={200}
          height={200}
          strokeColor={reactDonutChartStrokeColor}
          data={doughnutData}
          colors={colors}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          legend={false}
        />
      ) : (
        <DonutChart
          width={200}
          height={200}
          strokeColor={reactDonutChartStrokeColor}
          data={doughnutData}
          colors={colors}
          innerRadius={reactDonutChartInnerRadius}
          selectedOffset={reactDonutChartSelectedOffset}
          legend={false}
        />
      )}
    </>
  );
};

export default Doughnut;
