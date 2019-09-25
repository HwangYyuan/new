window.onload=function(){
    
var chart = echarts.init(document.getElementById('shanxing'));
chart.setOption(option = {
    
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['无','一年','两年','三年']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['23%', '35%'],
            hoverAnimation:false,
            label: {
                normal: {
                    color:'#fff',
                    position: 'inner'
                }
            },
            itemStyle: { 
                normal: { 
                    borderColor: "#FFFFFF", borderWidth: 2, 
                }
            },
            color:['rgb(89,106,173)'],
            data:[
                {value:30, name:'新兴业务单位'},
                {value:45, name:'其他单位'},
                {value:25, name:'运行单位'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['35%', '65%'],
            hoverAnimation:false,
            itemStyle:{
                normal: { 
                    borderColor: "#FFFFFF", borderWidth: 1, 
                }
            },
            label: {
                normal: {
                    color:'#000',
                    verticalAlign:'top',
                    position: 'inner',
                    width:20,
                },
            },
            color:['rgb(255,75,70)','rgb(255,130,64)','rgb(255,238,119)','rgba(131,219,43)'],
            data:[
                {value:1, name:'输电二所'},
                {value:1, name:'输电一所'},
                {value:1, name:'变电一所'},
                {value:1, name:'变电三所'},
                {value:1, name:'变电二所'},
                {value:1, name:'计量中心'},
                {value:1, name:'路灯所'},
                {value:1, name:'规划中心'},
                {value:1, name:'稽查中心'},
                {value:1, name:'培评中心'},
                {value:1, name:'物流中心'},
                {value:1, name:'电研院'},
                {value:1, name:'新闻中心'},
                {value:1, name:'通信中心'},
                {value:1, name:'客服中心'},
                {value:1, name:'设计院'},
                {value:1, name:'捷电通'},
                {value:1, name:'南投集团'},
                {value:1, name:'穗能通'},
                {value:1, name:'配电公司'},
            ]
        }
    ]
});
}