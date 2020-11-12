var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list', function(req, res, next) {
  res.json({
        result: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
  })
 });

 router.get('/data', function(req, res, next) {
  res.json({
        result: [
          { xAxis:{
            data:[1,2,3,4,5]
            },
        yAxis:{},
        series:[{
            type:'line',
            data:[100,299,300,400,500]
        },
        {
            type:'scatter',
            data:[10,23,45,35,144]
        },
        {
            type:'pie',
            center:['65%',60],
            radius:35,
            data:[
                {name:"A",value:'100'},
                {name:"B",value:'100'},
                {name:"C",value:'100'},
                {name:"D",value:'100'},
                {name:"E",value:'100'},
             ]
        }]
          }
        ]
  })
 });
module.exports = router;
