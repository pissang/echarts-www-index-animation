import { EChartsOption } from 'echarts';
import Scene from '../components/Scene';
import { heatmapXData, heatmapYData, heatmapNoiseData } from './heatmap';

const symbolSize = Math.min(window.innerWidth, window.innerHeight) / 20;

const option: EChartsOption[] = [
  {
    // tooltip: {
    //   position: 'top',
    //   borderWidth: 0,
    // },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    xAxis: {
      show: false,
      type: 'category',
      min: 10,
      max: 20,
      data: heatmapXData,
    },
    yAxis: {
      show: false,
      type: 'category',
      min: 10,
      max: 20,
      data: heatmapYData,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1,
      inRange: {
        symbolSize: [symbolSize / 2, symbolSize],
      },
    },
    series: [
      {
        type: 'scatter',
        data: heatmapNoiseData,
        symbol: 'roundRect',
        universalTransition: {
          enabled: true,
          seriesKey: 'second',
        },
        itemStyle: {
          color: 'orange',
          // shadowBlur: 3,
          // shadowOffsetX: 3,
          // shadowOffsetY: 3,
          // shadowColor: 'rgba(0,0,0,0.3)',
          opacity: 0.9,
        },
      },
    ],
  },

  {
    series: [
      {
        type: 'scatter',
        symbol: 'circle',
      },
    ],
  },

  {
    series: [
      {
        type: 'scatter',
        symbol: 'diamond',
      },
    ],
  },

  {
    title: {
      text: 'OR ANY SVG SHAPES',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 50,
        color: '#fff',
        fontFamily: "'Oswald', sans-serif",
      },
    },
    series: [
      {
        symbol:
          'path://M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z',
      },
    ],
  },
  {
    series: {
      symbol:
        'path://M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM10 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM16 28c-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658s7.070-0.963 10-2.654c-0.455 5.576-4.785 9.942-10 9.942z',
    },
  },
  {
    series: {
      symbol:
        'path://M32 2c0-1.422-0.298-2.775-0.833-4-1.049 2.401-3.014 4.31-5.453 5.287-2.694-2.061-6.061-3.287-9.714-3.287s-7.021 1.226-9.714 3.287c-2.439-0.976-4.404-2.886-5.453-5.287-0.535 1.225-0.833 2.578-0.833 4 0 2.299 0.777 4.417 2.081 6.106-1.324 2.329-2.081 5.023-2.081 7.894 0 8.837 7.163 16 16 16s16-7.163 16-16c0-2.871-0.757-5.565-2.081-7.894 1.304-1.689 2.081-3.806 2.081-6.106zM18.003 11.891c0.064-1.483 1.413-2.467 2.55-3.036 1.086-0.543 2.16-0.814 2.205-0.826 0.536-0.134 1.079 0.192 1.213 0.728s-0.192 1.079-0.728 1.213c-0.551 0.139-1.204 0.379-1.779 0.667 0.333 0.357 0.537 0.836 0.537 1.363 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.037 0.001-0.073 0.003-0.109zM8.030 8.758c0.134-0.536 0.677-0.862 1.213-0.728 0.045 0.011 1.119 0.283 2.205 0.826 1.137 0.569 2.486 1.553 2.55 3.036 0.002 0.036 0.003 0.072 0.003 0.109 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.527 0.204-1.005 0.537-1.363-0.575-0.288-1.228-0.528-1.779-0.667-0.536-0.134-0.861-0.677-0.728-1.213zM16 26c-3.641 0-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855z',
    },
  },

  {
    series: {
      symbol:
        'path://M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z',
    },
  },
];

export default new Scene({
  option,
  duration: 800,
  title: 'Scatter Shapes',
  dark: true,
  background: 'purple',
});
