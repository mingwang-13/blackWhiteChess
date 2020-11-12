<template>
  <div id="div1">
	<a href="">示例一一一一一一一一一一一</a>
	<a href="" class="red">示例二一一一一一一一一一一</a>
	<a href="">示例三一一一一一一一一一一</a>
	<a href="">示例</a>
	<a href="" class="blue">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="red">示例一一一一一一一一一一</a>
	<a href="" class="yellow">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="red">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="blue">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="red">示例一一一一一一一一一一</a>
	<a href="" class="blue">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="blue">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
	<a href="" class="yellow">示例一一一一一一一一一一</a>
	<a href="">示例一一一一一一一一一一</a>
</div>
</template>
<script>
export default {
    name:'special',
    data(){
        return{
            arr:[]
        }
    },
   mounted(){
           var obj = document.getElementById('div1').getElementsByTagName('a')
           for(var i = 0;i<obj.length;i++){
			   this.arr[i] = [obj[i].offsetLeft,obj[i].offsetTop]
		   }
		  setInterval(this.updatePosition,3000)
  },
    methods:{
        //生成随机数
        rand(){
            return Math.floor(Math.random()*100+10)
		},
		//更新位置
		updatePosition(){
           this.arr.forEach((item)=>{
			   item[0] = this.rand()
			   item[1] = this.rand()*10
		   })
		   var obj = document.getElementById('div1').getElementsByTagName('a')
           for(var i = 0,j = 0;i<obj.length,j<this.arr.length;i++,j++){
			   if(i==j){
				   obj[i].style.left= this.arr[j][0]+'px';
				   obj[i].style.top = this.arr[j][1]+'px';
				   
			   }
			  
		   }
		  
		}
    }
}
</script>
<style scoped>

#div1 {
	position:relative;
	width:600px;
	height:450px;
	margin: 20px auto 0;
}
#div1 a {
	position:absolute;
	top:0px;
	left:0px;
	font-family: Microsoft YaHei;
	font-weight:bold;
	text-decoration:none;
	padding: 3px 6px;
}
#div1 a:hover {
	border: 1px solid #eee;
	background: #000;
}
#div1 .blue {
	color:blue;
}
#div1 .red {
	color:red;
}
#div1 .yellow {
	color:yellow;
}
p {
	font: 16px Microsoft YaHei;
	text-align: center;
	color: #ba0c0c;
}
p a {
	font-size: 14px;
	color: #ba0c0c;
}
p a:hover {
	color: red;
}

</style>