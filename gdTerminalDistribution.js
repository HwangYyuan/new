$(document).ready(function() {
	$('#proe_map').click(function() {
		$('#china_map').css('display', 'block');
		$('#proe_map').css('display', 'none');
	})
	getData();

	function getData() {
		$.ajax({
			url: 'http://192.168.13.220:8080/inteGrationOP/opMonitor/home/getTermimationTotal',
			data: {
				paramType: 1,
				areaCode: '44'
			},
			success: function(res) {
				var data = res;
				createList(data);
				console.log(res.data)
			}
		})
	}
	function createList(data) {
		
	}
	$.get('json/广东/guangdong.json', function(mapJson) {
		echarts.registerMap('guangdong', mapJson);
		var chart = echarts.init(document.getElementById('china_map')); //在id为mainMap的dom元素中显示地图
		chart.setOption({
				tooltip: {
					trigger: 'item',
					formatter: function(result) { //回调函数，参数params具体格式参加官方API
						return result.name + '<br />数据:' + result.value;
					}
				},
				dataRange: {
					min: 0,
					max: 50,
					splitNumber: 0,
					text: ['高', '低'],
					realtime: false,
					calculable: false,
					selectedMode: false,
					realtime: false,
					show: false,
					itemWidth: 10,
					itemHeight: 60,
					color: ['lightskyblue', 'red']
				},
				backgroundColor: 'rgba(0,0,0,0.5)',
				title: {
					text: '广东终端分布',
					top: '85',
					left: 74,
					subtext: '10893台',
					subtextStyle: {
						color: '#00D7FF', // 副标题文字颜色
						fontSize: 72
					},
					textStyle: {
						fontSize: 36,
						color: '#00D7FF'
					}
				},
				geo: {
					map: 'guangdong',
					itemStyle: { // 定义样式
						normal: { // 普通状态下的样式
							areaColor: '#060C3E',
//							borderColor:'red'
						},
						emphasis: { // 高亮状态下的样式
							areaColor: '#64D3FF'
						}
					}
				},
				series: [{
					type: 'map',// series图表类型
//					type:'scatter',
					coordinateSystem: 'geo', // series坐标系类型
					map: 'guangdong', //要和echarts.registerMap（）中第一个参数一致
					scaleLimit: {
						min: 0.9,
						max: 1.9
					}, //缩放
					mapLocation: {
						y: 60
					},
					itemSytle: {
						emphasis: {
							label: {
								show: false
							}
						}
					},
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					} //dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
				}]
			}),
			chart.on('click', function(result) { //回调函数，点击时触发，参数params格式参加官方API
				setTimeout(function() {
					$('#china_map').css('display', 'none');
					$('#city_map').css('display', 'none');
					$('#proe_map').css('display', 'block');
				}, 300);
				//选择省的单击事件
				var selectProe = result.name;
				//    调取后台数据
				$.get('json/' + '广东' + '/' + selectProe + '.json', function(Citymap) {
					echarts.registerMap(selectProe, Citymap);
					var myChartProe = echarts.init(document.getElementById('proe_map'));
					myChartProe.setOption({
						tooltip: {
							trigger: 'item',
							formatter: function loadData(result) { //回调函数，参数params具体格式参加官方API
								return result.name + '<br />数据:' + result.value;
							}
						},
						backgroundColor: 'rgba(0,0,0,0.4)',
						title: {
							text: selectProe + '终端分布',
							left: 74,
							subtext: '10893台',
							subtextStyle: {
								color: '#00D7FF', // 副标题文字颜色
								fontSize: 72
							},
							textStyle: {
								fontSize: 36,
								color: '#00D7FF'
							},
						},
						geo: {
							map: selectProe,
							itemStyle: { // 定义样式
								normal: { // 普通状态下的样式
									areaColor: '#060C3E'
								}
							}
						},
						series: [{
							type: 'map',
							map: selectProe, //要和echarts.registerMap（）中第一个参数一致
							scaleLimit: {
								min: 0.9,
								max: 1.9
							}, //缩放
							mapLocation: {
								y: 60
							},
							itemSytle: {
								emphasis: {
									label: {
										show: false
									}
								}
							},
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							} //dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
						}]
					})
				})
			});
	});

})