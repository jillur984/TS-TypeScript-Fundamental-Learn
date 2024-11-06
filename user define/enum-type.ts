// numeric enum

enum RequestData{
  readData=1,
  deleteData,
  updateData
}

console.log(RequestData);

// string Data

enum RequestData2{
    readData="jillur rahman",
    id="5",
    name="Hobiganj Polytechnic Institute"
}

console.log(RequestData2.name);

// when use string and number both that is hetergenous enum

enum RequestData3{
    name="Md. Jillur Rahman",
    post=2210
}

console.log(RequestData3.post);