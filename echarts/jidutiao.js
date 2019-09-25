
var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}

option = {
    title: {
        text: 'Wheater Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['City Alpha', 'City Beta', 'City Gamma']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        name: 'Days',
        splitLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},//不显示刻度
        axisLine: {show: false},
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['Sunny', 'Cloudy', 'Showers'],
        // yAxisIndex:1,
        splitLine: {show: false},
        axisTick: {show: false},//不显示刻度
        axisLine: {show: false},
        axisLabel: {
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 20,
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
                Sunny: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Sunny
                    }
                },
                Cloudy: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Cloudy
                    }
                },
                Showers: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Showers
                    }
                }
            }
        }
    },
    series: [
        {
            name: '内框',
            
            barGap: '-100%',
            type: 'bar',
            
            barWidth: 15,　
            label: {
                normal: {
                     yAxisIndex:1,
                    show: true,
                    position: 'right'
                }
            },
            
            data: [20.9, 10.9, 49.9],
            // label: seriesLabel,
            itemStyle:{
                normal:{
                    color:'rgb(51,130,255)',
                    barBorderRadius: [5,5,5,5]
                }
            },
            z:1
        },
        {
            name: '外框',
           
             barGap: '-100%',
            type: 'bar',
            // 
            barWidth: 15,　
            label: {
                normal: {
                    yAxisIndex:2,
                    show: true,
                    position: 'right'
                }
            },
            
            data: [100,100,100],
            // label: seriesLabel,
            itemStyle:{
                normal:{
                    color:'rgb(237,237,237)',
                }
            },
            z:0
        },
        // {
        //     name: 'City Beta',
        //     type: 'bar',
        //     barWidth: 15,
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'right'
        //         }
        //     },
        //     data: [150, 105, 110]
        // },
        // {
        //     name: 'City Gamma',
        //     type: 'bar',
        //     barWidth: 15,　
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'right'
        //         }
        //     },
        //     data: [220, 82, 63]
        // }
    ]
};
