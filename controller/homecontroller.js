const csv = require('csv-parser');
const fs = require('fs')
const path = require('path');
let finalJson = []
let student = {}

// // using promise all
// module.exports.home =async function(req,res){
//   let studentPath = path.join(path.join(__dirname ,'../'),'assets/Example1/students.csv')    
//   let coursePath = path.join(path.join(__dirname ,'../'),'assets/Example1/courses.csv')    
//   let marksPath = path.join(path.join(__dirname ,'../'),'assets/Example1/marks.csv')    
//   let testPath = path.join(path.join(__dirname ,'../'),'assets/Example1/tests.csv')    
 
//   try {
//     let promisrSet = [];
// arr = [studentPath,coursePath,marksPath,testPath]
//     for(let i =0;i<arr.length;i++){
//     let p = await new Promise((myResolve, myReject)=>{
//       try {
//         const result = []
//          fs.createReadStream(pathvalue).pipe(csv({}))
//         .on('data', (data)=>result.push(data))
//         .on('end', ()=>{
//             console.log(result)
//             return result
//           })
        
           
        
//       } catch (error) {
//          myReject('error',error);
//       }
//     })
    
//     }
  
// return res.send('<h1>Welcome bro</h1>')   
//     }  catch (error) {
//         console.log('dasdas',error)
//     }

// }
// async function getJsonData(pathvalue){
//   return  new Promise(function(myResolve, myReject) {
//    try {
//     const result = []
//      fs.createReadStream(pathvalue).pipe(csv({}))
//     .on('data', (data)=>result.push(data))
//     .on('end', ()=>{
        
//         //  console.log(result)
//         myResolve(result)
//       })
    
       
    
//   } catch (error) {
//      myReject('error',error);
//   }
// });
//   }


/*********************Using Promise************************** */
// using promise
module.exports.home =async function(req,res){
  let studentPath = path.join(path.join(__dirname ,'../'),'assets/Example1/students.csv')    
  let coursePath = path.join(path.join(__dirname ,'../'),'assets/Example1/courses.csv')    
  let marksPath = path.join(path.join(__dirname ,'../'),'assets/Example1/marks.csv')    
  let testPath = path.join(path.join(__dirname ,'../'),'assets/Example1/tests.csv')    
 
  try {
arr = [studentPath,coursePath,marksPath,testPath]
    // let studentJSON = getJsonData(studentPath)
    // let courseJSON = getJsonData(coursePath)
    // let markJSON = getJsonData(marksPath)
    // let testJSON = getJsonData(testPath);
    for(let i =0;i<arr.length;i++){
    getJsonData(arr[i]).then(
      function(value) { 
        JsonValue = value;
        finalJson.push(JsonValue)
       console.log('adtas',JsonValue)
    },
    function(error) { console.log('asdas',error)
  })
  .catch(function(errorMessage) {
     //error handler function is invoked
      console.log(errorMessage);
  });
}
 console.log('dasda',finalJson)
return res.send('<h1>Welcome bro</h1>')   
    }  catch (error) {
        console.log('dasdas',error)
    }

}




async function getJsonData(pathvalue){
  return  new Promise(function(myResolve, myReject) {
   try {
    const result = []
     fs.createReadStream(pathvalue).pipe(csv({}))
    .on('data', (data)=>result.push(data))
    .on('end', ()=>{
        
        //  console.log(result)
        myResolve(result)
      })
    
       
    
  } catch (error) {
     myReject('error',error);
  }
});
  }




/**********************callback*********************** */

// using callback

// const csv = require('csv-parser');
// const fs = require('fs')
// const path = require('path');
// let finalJson = []
// let student = {}
// module.exports.home =async function(req,res){
//     try {

// operaation(()=>{
//   console.log('hiiii')
// })

// return res.send('<h1>Welcome bro</h1>')
      
        
//     } catch (error) {
//         console.log('dasdas',error)
//     }

// }

// async function operaation(callback){
// let studentPath = path.join(path.join(__dirname ,'../'),'assets/Example1/students.csv')    
//  let coursePath = path.join(path.join(__dirname ,'../'),'assets/Example1/courses.csv')    
//  let marksPath = path.join(path.join(__dirname ,'../'),'assets/Example1/marks.csv')    
//  let testPath = path.join(path.join(__dirname ,'../'),'assets/Example1/tests.csv')    
//  let studentJSON = getJsonData(studentPath)
//  let courseJSON = getJsonData(coursePath)
//  let markJSON = getJsonData(marksPath)
//  let testJSON = getJsonData(testPath);
//  setTimeout(() => {
//   callback()
// // console.log(studentJSON,'studentJSON')
// // console.log(courseJSON,'CourseJSON')
// // console.log(markJSON,'MARKSJSON')
// finalJson.push(studentJSON)
// finalJson.push(courseJSON)
// finalJson.push(markJSON)
// finalJson.push(testJSON)
// orderingJSON(finalJson,studentJSON,courseJSON,markJSON,testJSON)
// },1000)
// }
// function orderingJSON(finalJson,studentJSON,courseJSON,markJSON,testJSON){
//   console.log('finalJSON',finalJson);
  
//   return
// }

// function getJsonData(pathvalue){
  
//     const result = []
//     fs.createReadStream(pathvalue).pipe(csv({}))
//     .on('data',(data)=>result.push(data))
//     .on('end',()=>{
        
//       //  console.log(result)
//         // myResolve(result)
//       })
//     return result
//     }


// // function getJsonData(pathvalue){
// //   return  new Promise(function(myResolve, myReject) {
  
// //     const result = []
// //     fs.createReadStream(pathvalue).pipe(csv({}))
// //     .on('data',(data)=>result.push(data))
// //     .on('end',()=>{
        
// //        console.log(result)
// //         myResolve(result)
// //       })
    
// //       myReject('error');  
// //     });

