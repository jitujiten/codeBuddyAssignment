var arr=[[1,2,3], [2,3,4], [3,4,5] ];
var map=new Map();


for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      if(map.get(arr[i][j])===undefined){
         map.set(arr[i][j],1) 
      } else{
         map.set(arr[i][j],map.get(arr[i][j])+1) 
    }
}
}

var ans=[];
for(var [key,val] of map){
   if(val===1){
     ans.push(key)  
     
   } 
}
console.log(ans)