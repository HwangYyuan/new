window.onload=function(){
    
    var chart = echarts.init(document.getElementById('leida'));
    chart.setOption(option = {
        
            title: {
                text: '基础雷达图'
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        
                   }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgb(102,102,102)',
                    },
                },
                splitLine:{
                    lineStyle: {
                        color: 'rgb(102,102,102)',
                    },
                },
                splitArea:{
                    show:false
                },
                indicator: [
                   { name: '财务管理', max: 45},
                   { name: '八项规定', max: 45},
                   { name: '招标管理', max: 45},
                   { name: '工程管理', max:45},
                   { name: '资产管理', max: 45},
                   { name: '营销管理', max: 45},
                   { name: '竞争性业务', max: 45},
                   { name: '其他', max: 45}
                ]
            },
            series: [{
                type: 'radar',
                symbol: 'rect',
                symbolSize: 1,
                silent:true,
                areaStyle: {
                    normal: {
                        color:'rgb(211,222,254)'
                }},
                data : [
                     {
                        value :[44, 34, 35, 43, 36, 31,45,34],
                        label: {
                            normal: {
                                show: true,
                                position:'top',
                                color:'#000'
                            },
                        },
                        lineStyle: {
                                    color: 'rgba(73,144,250)',
                                },
                    }
                ]
            }]
        
    
});
}