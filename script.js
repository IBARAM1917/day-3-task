//1. how to compare two json have the same properties without order
var obj1 = {name:"person1",age:5};
var obj2 = {age:5,name:"person1"};
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal" + flag);

//2.display the country flags in the console
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function() {
    var data=request.response;
    var result=JSON.parse(data)
    for (var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
    
};
//3.use the same rest countrys and print all country names,regions ,sub-regionand populations
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all")
request1.send();
request1.onload=function() {
    var data1=request1.response;
    var results=JSON.parse(data1)
    for (var i=0;i<results.length;i++){
        console.log("Countryname:"+" "+results[i].name.common,"Region:"+" "+results[i].region,"Subregion:"+" "+results[i].subregion,"Population:"+" "+results[i].population)
    }
}