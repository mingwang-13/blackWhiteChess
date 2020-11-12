<template>
  <!-- <div id="div1">
	<a href="" class="yellow a1">今天天气真好</a>
	<a href="" class="red a2">早发白帝城</a>
	<a href="" class="a3">李巴山其气盖世</a>
	<a href="" class="a4">春风吹满地</a>
	<a href="" class="blue a5">任宁风吹雨打平</a>
</div> -->
  <div id="wrap">
	<div><a href="">今天天气真好</a></div>
	<div><a href="">今天天气真好</a></div>
	<div><a href="">明天该早起了</a></div>
	<div><a href="">哈哈哈哈哈</a></div>
	<div><a href="">春风吹呀吹</a></div>
	<div><a href="">满眼都是你呀</a></div>
</div>
</template>
<script>
export default {
    name:'animation',
    data(){
        return{
            arr:[]
        }
    },
      mounted(){ 
    
    },
  
    methods:{
    
    }
}
</script>
<style scoped>

a{
    display: block;
    width: 50px;
    height: 20px;
    text-decoration: center;
    line-height: 20px;
    font-size: 16px;
    text-decoration: none;
}
a:hover{
    border: 1px solid #fff;
}
#wrap{
    transform-style: preserve-3d;
    width: 500px;
    height: 500px;
    margin: 100px auto;
    animation: rotate 6s linear infinite;
}
#wrap>div{
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
}
#wrap>div:hover{
    animation-play-state: paused;
}
#wrap>div:nth-child(1){
    transform: translateX(230px) translateY(220px) translateZ(50px) rotateY(360deg);
    animation: fan1 6s linear infinite;
}
#wrap>div:nth-child(2){
    transform: translateX(260px) translateY(120px) translateZ(150px) rotateY(360deg);
    animation: fan2 6s linear infinite;
}
#wrap>div:nth-child(3){
    transform: translateX(130px) translateY(100px) translateZ(0px) rotateY(360deg);
    animation: fan3 6s linear infinite;
}
#wrap>div:nth-child(4){
    transform: translateX(330px) translateY(250px) translateZ(0px) rotateY(360deg);
    animation: fan4 6s linear infinite;
}
#wrap>div:nth-child(5){
    transform: translateX(130px) translateY(150px) translateZ(120px) rotateY(360deg);
    animation: fan5 6s linear infinite;
}
#wrap>div:nth-child(6){
    transform: translateX(50px) translateY(220px) translateZ(50px) rotateY(360deg);
    animation: fan6 6s linear infinite;
}
@keyframes rotate{
    0%{transform: rotateY(360deg);}
    100%{transform: rotateY(0deg);}
}
@keyframes fan1{
    0%{transform: translateX(230px) translateY(220px) translateZ(50px) rotateY(0deg)}
    100%{transform: translateX(230px) translateY(220px) translateZ(50px) rotateY(360deg)}
}
@keyframes fan2{
    0%{transform: translateX(260px) translateY(120px) translateZ(150px) rotateY(0deg)}
    100%{transform: translateX(260px) translateY(120px) translateZ(150px) rotateY(360deg)}
}
@keyframes fan3{
    0%{transform: translateX(130px) translateY(100px) translateZ(0px) rotateY(0deg)}
    100%{transform: translateX(130px) translateY(100px) translateZ(0px) rotateY(360deg)}
}
@keyframes fan4{
    0%{transform: translateX(330px) translateY(250px) translateZ(0px) rotateY(0deg)}
    100%{transform: translateX(330px) translateY(250px) translateZ(0px) rotateY(360deg)}
}
@keyframes fan5{
    0%{transform: translateX(130px) translateY(150px) translateZ(120px) rotateY(0deg)}
    100%{transform: translateX(130px) translateY(150px) translateZ(120px) rotateY(360deg)}
}

@keyframes fan6{
    0%{transform: translateX(50px) translateY(220px) translateZ(50px) rotateY(0deg)}
    100%{transform: translateX(50px) translateY(220px) translateZ(50px) rotateY(360deg)}
}

</style>