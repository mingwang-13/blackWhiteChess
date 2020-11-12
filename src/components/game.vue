<template>
    <div id="myapp">
             <div v-for="(item,i) in board" :key="i">
                   <div v-for="(myitem,j) in item" :key="j" class="mychess" @click="play(board,myitem,i,j)">
                        <template v-if="myitem==1">
                                <div class="blackChess"></div>
                        </template>
                         <template v-if="myitem==2">
                                <div class="whiteChess"></div>
                        </template>
                   </div>
             </div>
    </div>
</template>
<script>
export default {
    name:'game',
    data(){
        return{
            board:[
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,1,2,0,0,0],
                [0,0,0,2,1,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
            ],
            flag:true,
            blackCount : 0,
            whiteCount : 0,
            count:0
        }
    }, 
    methods:{
        // 落子的方法
        play(board,item,i,j){
            //  默认flag为true时，黑棋先走，blackCount为黑子个数，whiteCount为白棋个数，count用来统计输赢。
            if(item==0){
                if(this.flag){
                    board[i][j] = 1;
                    let value = board[i][j];
                    this.$set(this.board[i], j, value);
                    this.flag=false;
                    this.eat(board,i,j)
                    this.check(board)
                }else{
                    board[i][j] = 2;
                    let value = board[i][j];
                    this.$set(this.board[i], j, value);
                    this.flag=true;
                    this.eat(board,i,j)
                    this.check(board)
                }
            }else{
                this.$message("当前位置不可落子")
            }
        },
        // 吃子的方法
        eat(board,i,j){
            // 分为上，下，左，右，左上，左下，右上，右下，8个方向，吃子根据相邻是否为
            // 不同色判断，注意去除边界情况。
             if(board[i][j]==1){
                  this.eatleft(board,i,j)
                  this.eatright(board,i,j)
                  this.eattop(board,i,j)
                  this.eatbottom(board,i,j)
                  this.eatlefttop(board,i,j)
                  this.eatleftbottom(board,i,j)
                  this.eatrighttop(board,i,j)
                  this.eatrightbottom(board,i,j)
             }   
             if(board[i][j]==2){
                  this.eatleft(board,i,j)
                  this.eatright(board,i,j)
                  this.eattop(board,i,j)
                  this.eatbottom(board,i,j)
                  this.eatlefttop(board,i,j)
                  this.eatleftbottom(board,i,j)
                  this.eatrighttop(board,i,j)
                  this.eatrightbottom(board,i,j)
             } 

        },
        eatleft(board,i,j){
           if(j>=2&&j<=7){
                let oi = i;
                let oj = j;
                if(board[i][j-1]==(3-board[i][j])){
                for(var j=j-1;j >= 0 ; j--){
                        if(board[i][j]==board[oi][oj]){
                        for(let m = j ; m<oj;m++){
                            board[i][m]=board[oi][oj]
                        }
                            break;
                        }
                }
              }
           }
        },
        eatright(board,i,j){
           if(j>=0&&j<=5){
                let oi = i;
                let oj = j;
                    if(board[i][j+1]==(3-board[i][j])){
                    for(var j=j+1;j < 8 ; j++){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = j ; m>oj;m--){
                                board[i][m]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
           }
        
            
        },
        eattop(board,i,j){
            if(i>=2&&i<=7){
                let oi = i;
                let oj = j;
                if(board[i-1][j]==(3-board[i][j])){
                    for(var i=i-1;i >= 0 ; i--){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = i ; m<oi;m++){
                                board[m][j]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
            }
        },
        eatbottom(board,i,j){
           if(i>=0&&i<=5){
                let oi = i;
                let oj = j;
                if(board[i+1][j]==(3-board[i][j])){
                    for(var i=i+1;i < 8; i++){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = i ; m>oi;m--){
                                board[m][j]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
           }
        },
        eatlefttop(board,i,j){
           if(i>=2&&j>=2){
                let oi = i;
                let oj = j;
                if(board[i-1][j-1]==(3-board[i][j])){
                    for(var i=i-1,j=j-1;i >= 0 ,j >=oj-oi; i--,j--){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = i,n = j ; m < oi,n < oj;m++,n++){
                                board[m][n]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
           }
        },
        eatleftbottom(board,i,j){
           if(j>=2&&i<=5){
                let oi = i;
                let oj = j;
                if(board[i+1][j-1]==(3-board[i][j])){
                    for(var i=i+1,j=j-1;i < 8 , j > 0; i++,j--){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = i ,n = j; m > oi,n < oj; m--,n++){
                                board[m][n]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
           }
        },
        eatrighttop(board,i,j){
           if(i>=2&&j<=5){
                let oi = i;
                let oj = j;
                if(board[i-1][j+1]==(3-board[i][j])){
                    for(var j=j+1,i=i-1;j <= oi , i >= oj; j++,i--){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = j , n = i ; m > oj , n < oi ; m--,n++){
                                board[n][m]=board[oi][oj]
                            }
                                break;
                            }
                        
                    }
                }
           }
        },
        eatrightbottom(board,i,j){
            if(j<=5&&i<=5){
                let oi = i;
                let oj = j;
                if(board[i+1][j+1]==(3-board[i][j])){
                    for(var j=j+1,i = i+1;j < 8 , i < 8 ; j++ , i++){
                            if(board[i][j]==board[oi][oj]){
                            for(let m = j , n = i; m>oj,n>oi;m--,n--){
                                board[n][m]=board[oi][oj]
                            }
                                break;
                            }
                    }
                }
            }
           
        },
        // 判断是否取胜的方法
        check(board){
            // 每次点击都要清空数据，重新计算数值
            this.count=0;
            this.blackCount=0;
            this.whiteCount=0;
            // 分别统计黑白棋的个数
            for(var i = 0;i < board.length; i++){
                for(var j = 0;j<board[i].length;j++){
                    if(board[i][j]==1){
                        this.blackCount++
                    }
                    if(board[i][j]==2){
                        this.whiteCount++
                    }
                }
            }
            this.count =  this.blackCount + this.whiteCount;
            // 当黑白棋总数为棋盘大小时，此时个数多的一方获胜，个数相同则为平局。
            if(this.count==64){
                if(this.blackCount > this.whiteCount){
                    this.$message("黑棋获胜")
                }
                if(this.blackCount < this.whiteCount){
                    this.$message("白棋获胜")
                }
                if(this.blackCount == this.whiteCount){
                    this.$message("平局")
                }
            }
        }
    }
}
</script>
<style scoped>
   #myapp{
     width: 420px;
     margin: 0 auto;

   }
   .mychess{
    width:50px;
    height:50px;
    line-height: 50px;
    text-align: center;
    display:inline-block;
    background-color:green;
    vertical-align:top;
    border:1px solid white;
    cursor: pointer;
     
   }
   .blackChess{
    width:40px;
    height:40px;
    display:inline-block;
    background-color:black;
    border-radius: 20px;
    border:1px solid black;
    margin-top: 4px;
    margin-left: 4px;

   }
   .whiteChess{
    width:40px;
    height:40px;
    display:inline-block;
    background-color:white;
    border-radius: 20px;
    border:1px solid white;
    margin:0 auto;
    margin-top: 4px;
    margin-left: 4px;

   }
</style>