<template>
    <div>
        <div id="myChart" style="width:600px;height:500px"></div>
    </div>
</template>
<script>
export default {
    name:'myinfo',
    data(){
        return{

        }
    },
    mounted(){
        this.draw()
    },
    methods:{
        draw(){
            let mychart = this.$echarts.init(document.getElementById('myChart'))
            mychart.setOption({
                legend:{},
                 tooltip: {
                  
                       },
                
                dataset:{
                    source:[
                        // ['product', '2015', '2016', '2017'],
                        // ['Matcha Latte', 43.3],
                        // ['Milk Tea', 83.1],
                        // ['Cheese Cocoa', 86.4],
                        // ['Walnut Brownie', 72.4, 53.9, 39.1]
                        ["今日",20],
                        ["3日",40],
                        ["7日",50],
                        ["30日",80],
                       
                    ]
                },
                 color: ['red','yellow', 'blue','gray'],
                xAxis:{type:'category',
                                
                axisTick: {
                            show: false
                        },
                        axisLine:{
                            symbol:['none','arrow']
                        },
                              splitLine:{
                        show:false
                    },
                        },
                yAxis:{
                    type:"value",
                       axisLine:{
                            symbol:['none','arrow']
                        },
                              splitLine:{
                        show:false
                    },
                    axisLabel:{
                        show:false
                    },
                    
                axisTick: {
                            show: false
                        }
                },
               
                series: [
                    // {type: 'bar'},
                    // {type: 'bar'},
                    {type: 'bar',
                    barCategoryGap:'90%',
                     itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: function(params) {

                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                    return colorList[params.dataIndex]
                }
            }
        },}
               ]
            })
        }
    }
}
</script>
<style scoped>
#myChart{
    margin: 0 auto;
}
</style>