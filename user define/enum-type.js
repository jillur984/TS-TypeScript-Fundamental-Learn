// numeric enum
var RequestData;
(function (RequestData) {
    RequestData[RequestData["readData"] = 1] = "readData";
    RequestData[RequestData["deleteData"] = 2] = "deleteData";
    RequestData[RequestData["updateData"] = 3] = "updateData";
})(RequestData || (RequestData = {}));
console.log(RequestData);
// string Data
var RequestData2;
(function (RequestData2) {
    RequestData2["readData"] = "jillur rahman";
    RequestData2["id"] = "5";
    RequestData2["name"] = "Hobiganj Polytechnic Institute";
})(RequestData2 || (RequestData2 = {}));
console.log(RequestData2.name);
// when use string and number both that is hetergenous enum
var RequestData3;
(function (RequestData3) {
    RequestData3["name"] = "Md. Jillur Rahman";
    RequestData3[RequestData3["post"] = 2210] = "post";
})(RequestData3 || (RequestData3 = {}));
console.log(RequestData3.post);
