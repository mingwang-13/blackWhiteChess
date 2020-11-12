<template>
    <div>
         <div id="mychart" style="width:400px;height:400px"></div>
    </div>
</template>
<script>
export default {
    name:"create",
    data(){
        return{

        }
    },
    mounted(){
         this.getData()
    },
    methods:{
        getData(){
            this.$axios.get("/api/data").then(res=>{
                console.log(res.data.result)
                let arr = res.data.result
                 let chart = this.$echarts.init(document.getElementById('mychart'))
                arr.forEach(item=>{
                     chart.setOption(item)
                })
                 
               
            })
        }
    }
}
</script>