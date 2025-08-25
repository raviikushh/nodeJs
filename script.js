const fs = require('fs')

// fs.writeFile('./copy/hello.txt', 'Hello world!',(err)=>{
//     if(err) console.log(err, "Error in writing file")
//     else console.log('File written successfully');
// })


// fs.appendFile('hello.txt', 'How are you?',(err)=>{
//     if(err) console.log(err, "Error in writing file")
//     else console.log('File appended successfully');
// })

// fs.rename('hello.txt', 'greetings.txt', (err) => {
//     if (err) console.log(err, "Error in renaming file");
//     else console.log('File renamed successfully');
// });

// fs.copyFile('greetings.txt','./copy/copy.txt', (err)=>{
//     if (err) {
//         console.log(err, "Error in copying file");
//     } else {
//         console.log('File copied successfully');
//     }
// })

// fs.unlink('greetings.txt', (err)=>{
//     if (err) {
//         console.log(err, "Error in deleting file");
//     } else {
//         console.log('File deleted successfully');
//     }
// });

// fs.rmdir("./copy", {recursive:true}, (err)=>{
//     if (err) {
//         console.log(err, "Error in deleting directory");
//     } else {
//         console.log('Directory deleted successfully');
//     }
// });

// fs.rm("./copy", {recursive:true}, (err)=>{
//     if (err) {
//         console.log(err, "Error in deleting directory");
//     } else {
//         console.log('Directory deleted successfully');
//     }
// });

// fs.mkdir("./copy", {recursive:true}, (err)=>{
//     if (err) {
//         console.log(err, "Error in creating directory");
//     } else {
//         console.log('Directory created successfully');
//     }
// });

// fs.readdir('./copy', (err, files)=>{
//     if (err) {
//         console.log(err, "Error in reading directory");
//     } else {
//         console.log('Files in directory:', files);
//     }
// });

