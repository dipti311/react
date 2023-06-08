import "./chart.scss";
import * as echarts from "echarts";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ReactEcharts from "echarts-for-react";
const Chart = ({ userData }) => {
  const countryData = userData.reduce((acc, obj) => {
    const { country } = obj;
    acc[country] = acc[country] ? acc[country] + 1 : 1;
    return acc;
  }, {});

  const chartData = Object.keys(countryData).map((country) => ({
    name: country,
    value: countryData[country],
  }));

  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Users per country</h1>
        <BarChartOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="ecountrychart">
          <ReactEcharts
            option={{
              tooltip: {
                trigger: "axis",
                axisPointer: { type: "shadow" },
              },
              grid: { containLabel: true },
              xAxis: {
                type: "category",
                data: Object.keys(countryData),
              },
              yAxis: {
                type: "value",
              },
              series: [
                {
                  type: "bar",
                  data: chartData,
                },
              ],
            }}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Chart;
