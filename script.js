//1. how to compare two json have the same properties without order

let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

if(JSON.stringify(obj1,Object.keys(obj1)).length ===  JSON.stringify(obj2,Object.keys(obj2)).length)
{
    console.log("The JSON objects are equal");
}
else
{
    console.log("The JSON objects are not equal");
}
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
    
}
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