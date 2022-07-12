import ReactECharts from 'echarts-for-react';
import {graphic} from 'echarts';
import { ChartProps, DailyAPRHistorical } from '../types/types';

export const Chart = (props: ChartProps) => {
  const { 
    data,
    title,
   } = props;
  
  const dataForChart = {
    dates: [] as string[],
    values: [] as number[],
  };

  data.forEach((item: DailyAPRHistorical) => {
    dataForChart.dates.push(item.date);
    dataForChart.values.push(item.value);
  });

  const options = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: dataForChart.dates.sort((a: any, b: any) => a.localeCompare(b)),
      showGrid: true,
      axisLabel: {
        textStyle: {
          color: 'white',
        }
      },
      splitLine: {
        show: true
     },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: 'white',
        }
      },
    },
    series: [
      {
        data: dataForChart.values,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(151, 69, 192, 0.8)'
            },
            {
              offset: 1,
              color: 'rgba(54,88,130, 0.3)'
            }])
        },
        lineStyle: {
          color: 'rgb(151, 69, 192)',
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
    },
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: 'white',
      }
    }
  };

  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      theme={"theme_name"}
    />
  )
}
