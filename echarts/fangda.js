//放大的地图块
window.onload = function(){

$.get('fangda.json', function (geoJson) {
    var chart = echarts.init(document.getElementById('xiaoMap'));
    echarts.registerMap('fangda', geoJson);
    chart.setOption(option = {                                                         
        visualMap: {
            min: 0,
            max: 130,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true, //虚拟地图的属性
            color: ['rgb(131,219,43)', 'rgb(255,130,64)', 'rgb(255,238,119)','rgb(255,75,70)']
        },
        geo: {
            map: 'fangda',
            // right:200,
            itemStyle: { // 定义样式
                normal: { // 普通状态下的样式
                    // areaColor: '#fff',
                    borderWidth: 0,
                    shadowColor: 'rgb(122,122,122)',
                    shadowBlur: 1,
                    shadowOffsetX:14,
                    shadowOffsetY:14
//							borderColor:'red'
                },
                emphasis: { // 高亮状态下的样式
                    areaColor: '#64D3FF'
                }
            }
        },
        series: [{
            type: 'map',
            map: 'fangda',
            scaleLimit: {
                min: 0.9,
                max: 1.9
            }, //缩放
            mapLocation: {
                y: 60
            },
            silent:true,//是否触发鼠标事件
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            label:{
                normal:{
                    fontSize:14//调整地图文字字体大小
                }
            },
            data:[{
                value:45,
                name:'天河区',
            },{
                value:3,
                name:'越秀区'
            },{
                value:125,
                name:'荔湾区'
            },{
                value:85,
                name:'海珠区'
            }]
        }]
    });
});

}