import React from "react";
import { CandleData, GraphData } from "../../types";
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
  VictoryLabel,
} from "victory";

type Props = {
  data: CandleData;
  height: number;
  width: number;
};

const CandleStickGraph: React.FC<Props> = ({ data, height, width }) => {
  return (
    <div className=" border rounded-3xl bg-black  ">
      <VictoryChart
        containerComponent={
          <VictoryContainer responsive={true} width={width} height={height} />
        }
        height={height}
        width={width}
        theme={VictoryTheme.material}
        // domainPadding={{ x: 5 }}
        // scale={{ x: "time" }}
      >
        <VictoryAxis
          //   tickValues={data.map((res) => {
          //     `${res.startedAt}`;
          //   })}
          tickFormat={(data) =>
            new Date(data).getDay() == 0
              ? `${new Date(data).getMonth() + 1} / ${new Date(data).getDate()}`
              : `${new Date(data).getDay()}:00`
          }
          //   (new Date(data).getMonth() + 1).toString() &&
          //           "/" &&
          //           new Date(data).getDate().toString()
          tickCount={6}
        />
        <VictoryAxis
          dependentAxis={true}
          style={{
            grid: { stroke: "transparent" },
            tickLabels: { opacity: 80 },
          }}
          //   axisLabelComponent={<VictoryLabel dx={5} />}
        />

        <VictoryAxis
          dependentAxis={false}
          style={{
            grid: { stroke: "transparent" },
            tickLabels: { opacity: 0 },
          }}
          // tickLabelComponent={null}
        />

        <VictoryCandlestick
          candleRatio={0.5}
          x={(d) => d.startedAt}
          candleColors={{
            positive: "#13CB55",
            negative: "#c43a31",
          }}
          data={data}
        />
        {/* <VictoryAxis gridComponent={null} /> */}
      </VictoryChart>
    </div>
  );
};

export default CandleStickGraph;
